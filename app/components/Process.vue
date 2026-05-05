<script setup lang="ts">
const { t } = useI18n()

const steps = computed(() => [
  { title: t('process.step1'), desc: 'Discovery & Goals', icon: '01' },
  { title: t('process.step2'), desc: 'Creative Vision', icon: '02' },
  { title: t('process.step3'), desc: 'Clean Coding', icon: '03' },
  { title: t('process.step4'), desc: 'Going Live', icon: '04' }
])
</script>

<template>
  <section class="py-24 overflow-hidden fade-in-on-scroll">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title inline-block">{{ t('process.title') }}</h2>
      </div>

      <div class="relative">
        <!-- Connecting Line (Desktop) -->
        <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2"></div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="relative flex flex-col items-center text-center group fade-in-on-scroll"
            :style="{ transitionDelay: `${index * 150}ms` }"
          >
            <div class="w-16 h-16 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-600 flex items-center justify-center text-2xl font-bold text-primary-600 z-10 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-500 shadow-xl shadow-primary-500/20">
              {{ step.icon }}
            </div>
            <h3 class="text-xl font-bold mb-2">{{ step.title }}</h3>
            <p class="text-slate-500 dark:text-slate-400 text-sm">
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
