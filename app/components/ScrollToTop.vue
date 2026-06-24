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
      class="fixed bottom-28 z-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-primary-600 hover:bg-primary-700 text-white shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-1 group"
      :class="[locale === 'ar' ? 'right-8' : 'left-8']"
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
