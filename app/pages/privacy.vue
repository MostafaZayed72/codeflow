<script setup lang="ts">
import { ArrowLeft, ShieldCheck, Lock, Eye, Database, PhoneCall } from 'lucide-vue-next'
const { t, locale } = useI18n()
const localePath = useLocalePath()

useHead({
  title: t('privacy.title')
})

useSeoMeta({
  title: () => `${t('privacy.title')} | CodeFlow`,
  description: () => t('privacy.intro')
})

const currentYear = new Date().getFullYear()

const sections = [
  { key: 'collection', icon: Eye },
  { key: 'usage', icon: Database },
  { key: 'cookies', icon: Lock },
  { key: 'contact', icon: PhoneCall }
]
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-20">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Back Button -->
      <NuxtLink 
        :to="localePath('/')" 
        class="inline-flex items-center gap-2 text-primary-600 font-bold mb-12 hover:gap-4 transition-all group"
      >
        <ArrowLeft class="w-5 h-5" :class="[locale === 'ar' ? 'rotate-180' : '']" />
        {{ t('privacy.back_home') }}
      </NuxtLink>

      <!-- Header -->
      <div class="flex items-center gap-6 mb-12">
        <div class="w-20 h-20 rounded-3xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 shadow-xl shadow-primary-500/10">
          <ShieldCheck class="w-10 h-10" />
        </div>
        <div>
          <h1 class="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-2">
            {{ t('privacy.title') }}
          </h1>
          <p class="text-slate-500 dark:text-slate-400">
            {{ t('privacy.intro') }}
          </p>
        </div>
      </div>

      <!-- Content -->
      <div class="space-y-8">
        <div 
          v-for="section in sections" 
          :key="section.key"
          class="glass-card p-8 md:p-10 border-slate-200/50 dark:border-slate-800/50"
        >
          <div class="flex items-start gap-6">
            <div class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 shrink-0">
              <component :is="section.icon" class="w-6 h-6" />
            </div>
            <div>
              <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {{ t(`privacy.${section.key}.title`) }}
              </h2>
              <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                {{ t(`privacy.${section.key}.text`) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 text-center">
        <p class="text-slate-400 text-sm">
          {{ t('privacy.copyright', { year: currentYear }) }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass-card {
  @apply bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl rounded-[2rem] border transition-all duration-300;
}
</style>
