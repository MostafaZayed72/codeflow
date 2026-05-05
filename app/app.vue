<script setup lang="ts">
const { locale } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useHead({
  titleTemplate: (title) => title ? `${title} | CodeFlow Agency` : 'CodeFlow | Digital Transformation Agency',
  meta: [
    { name: 'description', content: 'High-performance web development agency specializing in Nuxt, Vue, and professional UI/UX design for the GCC market.' }
  ]
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
