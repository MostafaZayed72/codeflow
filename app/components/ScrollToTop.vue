<script setup lang="ts">
import { ChevronUp } from 'lucide-vue-next'

const { locale } = useI18n()
const isVisible = ref(false)

if (import.meta.client) {
  window.addEventListener('scroll', () => {
    isVisible.value = window.scrollY > 500
  })
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <Transition name="fade-scale">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-28 z-50 p-4 rounded-2xl bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 shadow-2xl border border-slate-200 dark:border-slate-700 hover:scale-110 active:scale-95 transition-all duration-300 group"
      :class="[locale === 'ar' ? 'left-8' : 'right-8']"
      aria-label="Scroll to top"
    >
      <ChevronUp class="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
    </button>
  </Transition>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.5) translateY(20px);
}
</style>
