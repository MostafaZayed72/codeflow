<template>
  <div dir="rtl" class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/30 pt-32 pb-20">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 pb-2">
        تقرير أداء موقعك
      </h1>
      <p class="text-center text-slate-500 dark:text-slate-400 mb-12 text-lg" dir="ltr">{{ targetUrl }}</p>

      <div v-if="isLoading" class="max-w-xl mx-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-800/50 text-center flex flex-col items-center">
        <div class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-6"></div>
        <h2 class="text-2xl font-bold mb-3 animate-pulse">جاري فحص الموقع...</h2>
        <p class="text-slate-500">نقوم الآن بالتواصل مع خوادم جوجل لتحليل موقعك بدقة، يرجى الانتظار لبضع ثوانٍ...</p>
      </div>

      <div v-else-if="errorMessage" class="max-w-xl mx-auto bg-red-50 dark:bg-red-500/10 p-8 rounded-3xl border border-red-200 dark:border-red-500/20 text-center">
        <div class="w-16 h-16 mx-auto bg-red-100 dark:bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mb-4">
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 class="text-xl font-bold text-red-700 dark:text-red-400 mb-4">{{ errorMessage }}</h2>
        <NuxtLink to="/free-website-audit" class="inline-block mt-4 text-blue-600 font-bold hover:underline">العودة والمحاولة مرة أخرى</NuxtLink>
      </div>

      <div v-else class="space-y-16">
        <!-- Results Dashboard -->
        <div class="max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden group text-white">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div v-for="(metric, index) in metrics" :key="metric.name" class="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
              <div class="relative w-40 h-40 mb-6 flex items-center justify-center shrink-0 aspect-square mx-auto">
                <div class="absolute inset-0 blur-xl rounded-full scale-110" :style="{ backgroundColor: metric.glowColor, opacity: metric.score > 0 ? 1 : 0, transition: 'opacity 1.5s ease' }"></div>
                
                <svg class="absolute inset-0 w-full h-full transform -rotate-90 z-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="42" fill="transparent" stroke="#1e293b" stroke-width="8" />
                  <circle 
                    cx="50" cy="50" r="42" 
                    fill="transparent" 
                    stroke-width="8" 
                    stroke-linecap="round" 
                    :stroke-dasharray="263.89" 
                    :stroke-dashoffset="263.89 - (263.89 * metric.score) / 100" 
                    class="transition-all duration-1500 ease-out drop-shadow-md" 
                    :style="{ stroke: metric.color, transitionDelay: `${index * 200}ms` }"
                  />
                </svg>
                <div class="absolute inset-0 z-20 flex flex-col items-center justify-center">
                  <span class="text-5xl font-black">{{ metric.score }}</span>
                </div>
              </div>
              <h4 class="text-lg font-bold text-slate-300 tracking-wide text-center">{{ metric.name }}</h4>
            </div>
          </div>
        </div>

        <!-- Conditional Message & CTA -->
        <div class="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
          <div class="p-6 md:p-10 text-center border-b border-white/10" :class="messageBoxClass">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">{{ performanceTitle }}</h3>
            <p class="text-base md:text-xl leading-relaxed opacity-90">{{ performanceMessage }}</p>
          </div>

          <div class="p-6 md:p-12 bg-slate-50 dark:bg-slate-800/30">
            <h4 class="text-xl md:text-2xl font-bold mb-10 text-center text-slate-800 dark:text-slate-100">خطوات الحل والحصول على استشارة مجانية</h4>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-12 relative">
              <!-- الخطوة 1 -->
              <div class="flex flex-col items-center text-center">
                <div class="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 flex items-center justify-center font-black text-2xl mb-4 shadow-sm border-4 border-white dark:border-slate-800 z-10 relative">1</div>
                <h5 class="font-bold text-lg mb-2 text-slate-800 dark:text-slate-200">التقط صورة للنتيجة</h5>
                <p class="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed px-2">قم بعمل سكرين شوت (Screenshot) للنتيجة الخاصة بموقعك أعلاه.</p>
              </div>

              <!-- الخطوة 2 -->
              <div class="flex flex-col items-center text-center relative">
                <div class="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 flex items-center justify-center font-black text-2xl mb-4 shadow-sm border-4 border-white dark:border-slate-800 z-10 relative">2</div>
                <h5 class="font-bold text-lg mb-2 text-slate-800 dark:text-slate-200">تواصل معنا</h5>
                <p class="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed px-2">أرسل الصورة مع رابط موقعك عبر الواتساب لفريقنا التقني.</p>
              </div>

              <!-- الخطوة 3 -->
              <div class="flex flex-col items-center text-center relative">
                <div class="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 flex items-center justify-center font-black text-2xl mb-4 shadow-sm border-4 border-white dark:border-slate-800 z-10 relative">3</div>
                <h5 class="font-bold text-lg mb-2 text-slate-800 dark:text-slate-200">استلم الخطة</h5>
                <p class="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed px-2">سنرد عليك مباشرة بخطة عمل مجانية لتحسين موقعك ومضاعفة مبيعاتك.</p>
              </div>
            </div>

            <div class="flex justify-center mt-4">
              <a href="https://wa.me/201099658770" target="_blank" @click="$trackClick('report_whatsapp_cta')" class="w-full sm:w-auto flex flex-row items-center justify-center gap-2 md:gap-3 py-3 px-4 md:py-5 md:px-10 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-base md:text-xl rounded-xl md:rounded-2xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-1 transition-all">
                <MessageSquare class="w-5 h-5 md:w-6 md:h-6 shrink-0" />
                <span class="whitespace-nowrap">تواصل معنا عبر واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { MessageSquare } from 'lucide-vue-next'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { locale } = useI18n()
const isAr = computed(() => locale.value === 'ar')

const targetUrl = ref(route.query.url as string || '')

const isLoading = ref(true)
const errorMessage = ref('')

const metrics = ref([
  { name: isAr.value ? 'الأداء' : 'Performance', score: 0, color: '#334155' },
  { name: isAr.value ? 'إمكانية الوصول' : 'Accessibility', score: 0, color: '#334155' },
  { name: isAr.value ? 'أفضل الممارسات' : 'Best Practices', score: 0, color: '#334155' },
  { name: isAr.value ? 'تحسين محركات البحث' : 'SEO', score: 0, color: '#334155' }
])

const performanceScore = computed(() => metrics.value[0].score)

const performanceTitle = computed(() => {
  if (performanceScore.value >= 90) return 'أداء موقعك ممتاز! 🎉'
  if (performanceScore.value >= 50) return 'أداء موقعك متوسط ويحتاج إلى تحسين ⚠️'
  return 'أداء موقعك ضعيف جداً وتفقد الكثير من العملاء! 🚨'
})

const performanceMessage = computed(() => {
  if (performanceScore.value >= 90) return 'موقعك سريع وممتاز، ولكننا دائماً نجد فرصاً إضافية لتحسين تجربة المستخدم ومضاعفة أرباحك أكثر.'
  if (performanceScore.value >= 50) return 'موقعك يفقدك جزءاً كبيراً من عملائك المحتملين بسبب بعض البطء والمشاكل التقنية التي يمكننا حلها بسهولة.'
  return 'هذه النتيجة تعني أن معظم زوار موقعك يغادرون قبل اكتمال تحميل الصفحة. تحتاج إلى تدخل برمجي عاجل لإنقاذ مبيعاتك!'
})

const messageBoxClass = computed(() => {
  if (performanceScore.value >= 90) return 'bg-green-50 dark:bg-green-500/10 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-500/30'
  if (performanceScore.value >= 50) return 'bg-yellow-50 dark:bg-yellow-500/10 text-yellow-800 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-500/30'
  return 'bg-red-50 dark:bg-red-500/10 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-500/30'
})

const getColor = (score: number) => {
  if (score === 0) return '#334155'
  if (score >= 90) return '#22c55e'
  if (score >= 50) return '#eab308'
  return '#ef4444'
}

const fetchData = async () => {
  if (!targetUrl.value) {
    errorMessage.value = 'الرابط غير متاح. الرجاء العودة والبدء من جديد.'
    isLoading.value = false
    return
  }

  try {
    const apiKey = 'AIzaSyAyuvFD4nBjfV824YjYEiLtuC-KIHVqfuE'
    const apiEndpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(targetUrl.value)}&category=performance&category=accessibility&category=best-practices&category=seo&strategy=mobile&key=${apiKey}`
    
    const response = await fetch(apiEndpoint)
    const data = await response.json()
    
    if (data && data.lighthouseResult && data.lighthouseResult.categories) {
      const cats = data.lighthouseResult.categories
      
      const perfScore = Math.round((cats.performance?.score || 0) * 100)
      const accScore = Math.round((cats.accessibility?.score || 0) * 100)
      const bpScore = Math.round((cats['best-practices']?.score || 0) * 100)
      const seoScore = Math.round((cats.seo?.score || 0) * 100)
      
      setTimeout(() => {
        metrics.value = [
          { name: isAr.value ? 'الأداء' : 'Performance', score: perfScore, color: getColor(perfScore) },
          { name: isAr.value ? 'إمكانية الوصول' : 'Accessibility', score: accScore, color: getColor(accScore) },
          { name: isAr.value ? 'أفضل الممارسات' : 'Best Practices', score: bpScore, color: getColor(bpScore) },
          { name: isAr.value ? 'تحسين محركات البحث' : 'SEO', score: seoScore, color: getColor(seoScore) }
        ]
      }, 50)
    } else if (data.error) {
      if (data.error.code === 429) {
        errorMessage.value = 'يوجد ضغط كبير على خوادم الفحص حالياً (تجاوز الحد المسموح من جوجل). يرجى المحاولة بعد قليل.'
      } else if (data.error.message && data.error.message.includes('FAILED_DOCUMENT_REQUEST')) {
        errorMessage.value = 'لم يتمكن جوجل من الوصول إلى هذا الموقع. يرجى التأكد من كتابة الرابط بشكل صحيح وأن الموقع يعمل حالياً وليس قيد التطوير المحلي.'
      } else {
        errorMessage.value = data.error.message || 'حدث خطأ أثناء تحليل الموقع. يرجى التأكد من الرابط والمحاولة مرة أخرى.'
      }
    } else {
      errorMessage.value = 'حدث خطأ أثناء تحليل الموقع. يرجى التأكد من الرابط والمحاولة مرة أخرى.'
    }
  } catch (error) {
    console.error('Error fetching pagespeed:', error)
    errorMessage.value = 'حدث خطأ في الاتصال بخوادم جوجل، يرجى المحاولة مرة أخرى.'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
})

useSeoMeta({
  title: 'تقرير الفحص | CodeFlow Web',
})
</script>
