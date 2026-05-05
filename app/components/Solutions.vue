<script setup lang="ts">
import { AlertCircle, Lightbulb, TrendingUp } from 'lucide-vue-next'
const { t } = useI18n()

const cases = computed(() => [
  {
    id: 'case1',
    color: 'text-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    id: 'case2',
    color: 'text-amber-600',
    bg: 'bg-amber-50 dark:bg-amber-900/20'
  },
  {
    id: 'case3',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20'
  }
])
</script>

<template>
  <section id="solutions" class="py-24 bg-white dark:bg-[#020617] fade-in-on-scroll">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title inline-block mb-4">{{ t('solutions.title') }}</h2>
        <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          {{ t('solutions.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 gap-12">
        <div 
          v-for="(item, index) in cases" 
          :key="item.id"
          class="group relative bg-slate-50 dark:bg-slate-900/30 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 dark:border-slate-800/50 hover:shadow-2xl transition-all duration-500 fade-in-on-scroll"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <!-- Title and Main Theme -->
            <div class="lg:col-span-4">
              <h3 class="text-3xl font-black mb-4 text-slate-900 dark:text-white leading-tight">
                {{ t(`solutions.${item.id}.title`) }}
              </h3>
              <div class="w-20 h-1.5 bg-primary-600 rounded-full mb-6 group-hover:w-32 transition-all duration-500"></div>
            </div>

            <!-- Problem -> Solution -> Impact Journey -->
            <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              <!-- Problem -->
              <div class="space-y-4">
                <div class="flex items-center gap-3 text-rose-500 font-bold uppercase tracking-tighter text-sm">
                  <AlertCircle class="w-5 h-5" />
                  {{ t('solutions.problem_label') }}
                </div>
                <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {{ t(`solutions.${item.id}.problem`) }}
                </p>
              </div>

              <!-- Solution -->
              <div class="space-y-4">
                <div class="flex items-center gap-3 text-primary-500 font-bold uppercase tracking-tighter text-sm">
                  <Lightbulb class="w-5 h-5" />
                  {{ t('solutions.solution_label') }}
                </div>
                <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {{ t(`solutions.${item.id}.solution`) }}
                </p>
              </div>

              <!-- Impact -->
              <div class="space-y-4 bg-white dark:bg-slate-800/50 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700/50 group-hover:scale-105 transition-transform duration-500">
                <div class="flex items-center gap-3 text-emerald-500 font-bold uppercase tracking-tighter text-sm">
                  <TrendingUp class="w-5 h-5" />
                  {{ t('solutions.impact_label') }}
                </div>
                <p class="text-slate-900 dark:text-white font-bold leading-relaxed">
                  {{ t(`solutions.${item.id}.impact`) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
