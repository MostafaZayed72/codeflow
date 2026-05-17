<script setup lang="ts">
const { t, locale } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useHead({
  titleTemplate: (title) => title ? `${title} | CodeFlow` : t('seo.title'),
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})

useSeoMeta({
  title: () => t('seo.title'),
  ogTitle: () => t('seo.ogTitle'),
  description: () => t('seo.description'),
  ogDescription: () => t('seo.ogDescription'),
  ogImage: 'https://codeflowweb.vercel.app/logo_v3.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogType: 'website',
  ogUrl: 'https://codeflowweb.vercel.app/',
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('seo.ogTitle'),
  twitterDescription: () => t('seo.ogDescription'),
  twitterImage: 'https://codeflowweb.vercel.app/logo_v3.png',
})

const route = useRoute()
let observer: IntersectionObserver | null = null
let mutationObserver: MutationObserver | null = null

// Function to immediately reveal elements inside a section if it is targeted or navigated to
const revealSection = (elementId: string) => {
  if (!elementId) return
  const cleanId = elementId.startsWith('#') ? elementId : `#${elementId}`
  try {
    const el = document.querySelector(cleanId)
    if (el) {
      el.classList.add('animate')
      el.querySelectorAll('.fade-in-on-scroll').forEach(child => {
        child.classList.add('animate')
      })
    }
  } catch (e) {
    // Ignore invalid selectors
  }
}

// Function to check URL hash and immediately reveal targeted section
const checkHashAndReveal = () => {
  const hash = window.location.hash || route.hash
  if (hash) {
    revealSection(hash)
    // Multi-stage trigger for dynamic/lazy content
    setTimeout(() => revealSection(hash), 100)
    setTimeout(() => revealSection(hash), 400)
    setTimeout(() => revealSection(hash), 800)
  }
}

const initObserver = () => {
  if (observer) {
    observer.disconnect()
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
      }
    })
  }, { 
    threshold: 0.01, // Set to extremely low threshold so elements reveal as soon as they start appearing
    rootMargin: '0px 0px -20px 0px'
  })

  document.querySelectorAll('.fade-in-on-scroll').forEach(el => observer!.observe(el))
}

onMounted(() => {
  initObserver()
  checkHashAndReveal()

  // 1. MutationObserver to automatically register newly added elements (locale shifts, navigation, rendering)
  if (typeof MutationObserver !== 'undefined') {
    mutationObserver = new MutationObserver((mutations) => {
      let shouldRecheckHash = false
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node instanceof HTMLElement) {
            if (node.classList.contains('fade-in-on-scroll')) {
              observer?.observe(node)
            }
            node.querySelectorAll('.fade-in-on-scroll').forEach(el => {
              observer?.observe(el)
            })
            if (node.id || node.querySelector('[id]')) {
              shouldRecheckHash = true
            }
          }
        })
      })
      if (shouldRecheckHash) {
        checkHashAndReveal()
      }
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })
  }

  // 2. Add listener for hashchanges
  window.addEventListener('hashchange', checkHashAndReveal)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  if (mutationObserver) mutationObserver.disconnect()
  window.removeEventListener('hashchange', checkHashAndReveal)
})

// Watch route hash & path changes to immediately trigger animations on target sections
watch(() => [route.path, route.hash], () => {
  nextTick(() => {
    checkHashAndReveal()
    setTimeout(() => {
      initObserver()
      checkHashAndReveal()
    }, 200)
  })
}, { deep: true })

// Re-initialize observer when locale changes to handle re-rendered elements
watch(locale, () => {
  nextTick(() => {
    setTimeout(() => {
      initObserver()
      checkHashAndReveal()
    }, 400)
  })
})
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Body>
      <Navbar />
      <main class="p-0 m-0">
        <NuxtPage />
      </main>
      <WhatsAppFAB />
      <ScrollToTop />
      
    </Body>
  </Html>
</template>
