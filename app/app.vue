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


const initObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.fade-in-on-scroll').forEach(el => observer.observe(el))
}

onMounted(() => {
  initObserver()
})

// Re-initialize observer when locale changes to handle re-rendered elements
watch(locale, () => {
  setTimeout(() => {
    initObserver()
  }, 500)
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
