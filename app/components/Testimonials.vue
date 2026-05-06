<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
const { t, locale } = useI18n()

const testimonialList = computed(() => {
  const items = []
  for (let i = 1; i <= 12; i++) {
    const key = `testimonials.client${i}`
    items.push({
      name: t(`${key}.name`),
      role: t(`${key}.role`),
      text: t(`${key}.text`),
      image: t(`${key}.image`)
    })
  }
  return items
})

const currentIndex = ref(0)
const itemsToShow = ref(2)

const updateItemsToShow = () => {
  if (typeof window !== 'undefined') {
    itemsToShow.value = window.innerWidth < 768 ? 1 : 2
  }
}

const next = () => {
  if (currentIndex.value >= testimonialList.value.length - itemsToShow.value) {
    currentIndex.value = 0
  } else {
    currentIndex.value++
  }
}

onMounted(() => {
  updateItemsToShow()
  window.addEventListener('resize', updateItemsToShow)
  
  const timer = setInterval(() => {
    next()
  }, 5000)

  onUnmounted(() => {
    clearInterval(timer)
    window.removeEventListener('resize', updateItemsToShow)
  })
})
</script>

<template>
  <section id="testimonials" class="py-24 bg-slate-50 dark:bg-[#020617] overflow-hidden fade-in-on-scroll">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title inline-block mb-4">{{ t('testimonials.title') }}</h2>
      </div>

      <div class="relative max-w-6xl mx-auto px-4 md:px-10">
        <!-- Carousel Outer -->
        <div class="overflow-hidden">
          <!-- Sliding Track -->
          <div 
            class="flex transition-transform duration-700 ease-in-out"
            :dir="locale === 'ar' ? 'rtl' : 'ltr'"
            :style="{ 
              transform: `translateX(${locale === 'ar' ? (currentIndex * (100 / itemsToShow)) : -(currentIndex * (100 / itemsToShow))}%)`
            }"
          >
            <div 
              v-for="(item, index) in testimonialList" 
              :key="index"
              class="flex-none px-2 md:px-4"
              :style="{ width: `${100 / itemsToShow}%` }"
            >
              <div class="glass-card p-6 md:p-10 relative group border-slate-200/50 dark:border-slate-800/50 h-full flex flex-col justify-between hover:border-primary-500/50 transition-all duration-500 hover:-translate-y-2">
                <Quote 
                  class="absolute top-6 md:top-8 w-10 h-10 md:w-12 md:h-12 text-primary-500/10"
                  :class="[locale === 'ar' ? 'left-6 md:left-8' : 'right-6 md:right-8']"
                />
                
                <p class="text-base md:text-xl text-slate-600 dark:text-slate-300 italic mb-6 md:mb-8 leading-relaxed relative z-10">
                  "{{ item.text }}"
                </p>
                
                <div class="flex items-center gap-3 md:gap-4 border-t border-slate-100 dark:border-slate-800 pt-5 md:pt-6">
                  <div class="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-primary-500/20 shrink-0">
                    <img :src="item.image" :alt="item.name" class="w-full h-full object-cover">
                  </div>
                  <div>
                    <h4 class="font-bold text-lg md:text-xl text-slate-900 dark:text-white leading-tight">{{ item.name }}</h4>
                    <p class="text-primary-600 dark:text-primary-400 font-medium text-xs md:text-sm leading-tight mt-1">{{ item.role }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Dots Navigation -->
        <div class="flex justify-center flex-wrap gap-2 mt-8 md:mt-12">
          <button 
            v-for="i in (testimonialList.length - itemsToShow + 1)" 
            :key="i"
            @click="currentIndex = i - 1"
            class="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300"
            :class="[currentIndex === i - 1 ? 'bg-primary-600 w-6 md:w-8' : 'bg-slate-300 dark:bg-slate-700 hover:bg-primary-400']"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Ensuring smooth transitions without layout shifts */
.glass-card {
  height: 100%;
  min-height: 280px;
}
</style>

