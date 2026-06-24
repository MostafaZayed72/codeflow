<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
const { t } = useI18n()

const faqs = computed(() => [
  { q: t('faq.q1'), a: t('faq.a1'), open: true },
  { q: t('faq.q2'), a: t('faq.a2'), open: false },
  { q: t('faq.q3'), a: t('faq.a3'), open: false }
])

const toggle = (index: number) => {
  faqs.value[index].open = !faqs.value[index].open
}
</script>

<template>
  <section class="py-16 md:py-24 bg-white dark:bg-[#020617] fade-in-on-scroll">
    <div class="max-w-4xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="section-title inline-block">{{ t('faq.title') }}</h2>
      </div>

      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
        >
          <button 
            @click="toggle(index)"
            class="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
          >
            <span class="font-bold text-lg text-slate-900 dark:text-white pr-4">{{ faq.q }}</span>
            <ChevronDown 
              class="w-5 h-5 text-primary-500 transition-transform duration-300 shrink-0"
              :class="faq.open ? 'rotate-180' : ''"
            />
          </button>
          
          <div 
            class="transition-all duration-300 ease-in-out overflow-hidden"
            :class="faq.open ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'"
          >
            <div class="px-6 pb-5 text-slate-600 dark:text-slate-400 leading-relaxed">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
