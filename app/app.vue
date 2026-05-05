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

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.fade-in-on-scroll').forEach(el => observer.observe(el))
})
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Body>
      <Navbar />
      <main>
        <NuxtPage />
      </main>
      <WhatsAppFAB />
      
      <!-- Simple Footer -->
      <footer class="py-12 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
        <p>© {{ new Date().getFullYear() }} CodeFlow Agency. All rights reserved.</p>
      </footer>
    </Body>
  </Html>
</template>
