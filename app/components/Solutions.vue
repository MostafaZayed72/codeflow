<script setup lang="ts">
import { AlertCircle, Lightbulb, TrendingUp } from 'lucide-vue-next'
const { t, locale } = useI18n()

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
          class="group relative rounded-[2.5rem] p-6 md:p-12 border transition-all duration-500 fade-in-on-scroll overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2"
          :class="[
            item.id === 'case1' ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-blue-100 dark:border-blue-800/30' : '',
            item.id === 'case2' ? 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 border-amber-100 dark:border-amber-800/30' : '',
            item.id === 'case3' ? 'bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 border-emerald-100 dark:border-emerald-800/30' : ''
          ]"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <!-- Decorative Background Elements -->
          <div class="absolute -top-24 -right-24 w-64 h-64 opacity-10 blur-3xl rounded-full"
            :class="[
              item.id === 'case1' ? 'bg-blue-600' : '',
              item.id === 'case2' ? 'bg-amber-600' : '',
              item.id === 'case3' ? 'bg-emerald-600' : ''
            ]"
          ></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
            <!-- Title and Main Theme -->
            <div class="lg:col-span-4 text-center lg:text-right" :class="[locale === 'ar' ? 'lg:text-right' : 'lg:text-left']">
              <h3 class="text-2xl md:text-3xl font-black mb-4 text-slate-900 dark:text-white leading-tight">
                {{ t(`solutions.${item.id}.title`) }}
              </h3>
              <div class="w-16 h-2 md:w-20 md:h-2.5 rounded-full mb-6 mx-auto lg:mx-0 group-hover:w-32 transition-all duration-500"
                :class="[
                  item.id === 'case1' ? 'bg-blue-600' : '',
                  item.id === 'case2' ? 'bg-amber-600' : '',
                  item.id === 'case3' ? 'bg-emerald-600' : '',
                  locale === 'ar' ? 'lg:mr-0' : 'lg:ml-0'
                ]"
              ></div>
            </div>

            <!-- Problem -> Solution -> Impact Journey -->
            <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <!-- Problem -->
              <div class="space-y-3 relative">
                <div class="flex items-center gap-3 text-rose-500 font-bold uppercase tracking-tighter text-xs md:text-sm">
                  <AlertCircle class="w-5 h-5" />
                  {{ t('solutions.problem_label') }}
                </div>
                <p class="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                  {{ t(`solutions.${item.id}.problem`) }}
                </p>
              </div>

              <!-- Solution -->
              <div class="space-y-3 relative">
                <div class="flex items-center gap-3 text-primary-500 font-bold uppercase tracking-tighter text-xs md:text-sm">
                  <Lightbulb class="w-5 h-5" />
                  {{ t('solutions.solution_label') }}
                </div>
                <p class="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                  {{ t(`solutions.${item.id}.solution`) }}
                </p>
              </div>

              <!-- Impact -->
              <div class="space-y-3 p-5 md:p-6 rounded-3xl shadow-sm border group-hover:scale-105 transition-transform duration-500"
                :class="[
                  item.id === 'case1' ? 'bg-blue-100/50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700/50' : '',
                  item.id === 'case2' ? 'bg-amber-100/50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-700/50' : '',
                  item.id === 'case3' ? 'bg-emerald-100/50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-700/50' : ''
                ]"
              >
                <div class="flex items-center gap-3 font-bold uppercase tracking-tighter text-xs md:text-sm"
                  :class="[
                    item.id === 'case1' ? 'text-blue-600 dark:text-blue-400' : '',
                    item.id === 'case2' ? 'text-amber-600 dark:text-amber-400' : '',
                    item.id === 'case3' ? 'text-emerald-600 dark:text-emerald-400' : ''
                  ]"
                >
                  <TrendingUp class="w-5 h-5" />
                  {{ t('solutions.impact_label') }}
                </div>
                <p class="text-slate-900 dark:text-white font-black leading-relaxed text-base md:text-lg">
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
