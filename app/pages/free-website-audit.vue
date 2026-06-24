<template>
  <div dir="rtl" class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/30">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <!-- Decorative background -->
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
        <div class="absolute top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-40 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 drop-shadow-sm pb-4 leading-normal">
            اكتشف مشاكل موقعك خلال 30 ثانية
          </h1>
          <p class="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            احصل على تقرير مجاني يوضح مشاكل السرعة وتجربة المستخدم وتحسين محركات البحث التي قد تؤثر على نتائج موقعك ومبيعاتك.
          </p>

          <!-- Form inside Hero -->
          <div class="mt-10 max-w-2xl mx-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-800/50 relative">
            <form @submit.prevent="submitForm" class="flex flex-col gap-5">
              <div class="space-y-1 text-right">
                <label for="websiteUrl" class="text-sm font-semibold text-slate-700 dark:text-slate-300">رابط الموقع</label>
                <input type="url" id="websiteUrl" v-model="form.url" required placeholder="https://example.com" dir="ltr" class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-left placeholder:text-slate-400" :disabled="isLoading" aria-label="رابط الموقع" />
              </div>
              <button type="submit" :disabled="isLoading" class="mt-4 w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold text-lg rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed" aria-label="احصل على التقرير">
                <span v-if="isLoading" class="flex items-center gap-2">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  جاري فحص الموقع...
                </span>
                <span v-else class="flex items-center gap-2">
                  احصل على التقرير المجاني
                  <ArrowLeft class="w-5 h-5 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </button>
              
              <div v-if="errorMessage" class="mt-4 p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl text-red-600 dark:text-red-400 text-sm font-semibold flex items-start gap-3 animate-pulse">
                <svg class="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>{{ errorMessage }}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Common Problems Section -->
    <section class="py-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">لماذا يخسر موقعك العملاء؟</h2>
          <p class="text-lg text-slate-500 dark:text-slate-400">أكثر المشاكل شيوعاً التي نكتشفها وتؤثر على معدل التحويل</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="(problem, index) in problems" :key="index" class="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-colors duration-500"></div>
            <div class="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-500/10 text-red-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10 shadow-sm">
              <component :is="problem.icon" class="w-8 h-8" aria-hidden="true" />
            </div>
            <h3 class="text-2xl font-bold mb-3 relative z-10">{{ problem.title }}</h3>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">{{ problem.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Value & How it Works Grid -->
    <section class="py-24 relative overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0iIzAwMCI+PC9jaXJjbGU+Cjwvc3ZnPg==')] pointer-events-none"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          <!-- Value -->
          <div class="space-y-10">
            <h2 class="text-3xl md:text-4xl font-bold leading-tight">لماذا يطلب أصحاب المتاجر والشركات تقريرنا؟</h2>
            <div class="space-y-8">
              <div v-for="(value, index) in values" :key="index" class="flex gap-5 items-start group">
                <div class="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Check class="w-7 h-7" aria-hidden="true" />
                </div>
                <div>
                  <h4 class="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{{ value.title }}</h4>
                  <p class="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">{{ value.desc }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- How it works -->
          <div class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-2xl p-10 md:p-12 rounded-[2rem] border border-slate-200 dark:border-slate-700 shadow-2xl relative overflow-hidden group">
            <div class="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
            
            <h3 class="text-2xl font-bold mb-10 relative z-10">كيف يعمل التقرير؟</h3>
            
            <div class="space-y-8 relative z-10 before:absolute before:inset-0 before:mr-6 before:translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500/50 before:to-transparent">
              <div v-for="(step, index) in steps" :key="index" class="relative flex items-center gap-6">
                <div class="flex items-center justify-center w-12 h-12 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-blue-600 font-bold text-xl shrink-0 shadow-sm z-10 relative overflow-hidden">
                  <div class="absolute inset-0 bg-blue-50 dark:bg-blue-500/10 scale-0 group-hover:scale-100 transition-transform duration-500 origin-bottom"></div>
                  <span class="relative z-10">{{ index + 1 }}</span>
                </div>
                <div class="flex-1 py-3 px-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-500/30 transition-colors">
                  <h4 class="font-bold text-lg text-slate-800 dark:text-slate-100">{{ step }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust / Portfolio Section -->
    <section class="py-24 bg-slate-50 dark:bg-slate-950">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div class="max-w-2xl">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">أعمال سابقة تتحدث عن نفسها</h2>
            <p class="text-lg text-slate-500 dark:text-slate-400">مواقع ومتاجر ساعدناها في مضاعفة المبيعات عبر تحسين الأداء وتجربة المستخدم.</p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.title" class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div class="aspect-[4/3] bg-slate-100 dark:bg-slate-800 relative overflow-hidden flex items-center justify-center">
               <div class="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-cyan-500/10 group-hover:scale-110 transition-transform duration-700"></div>
               <img :src="project.image" :alt="project.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
               <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                 <a :href="project.link" target="_blank" aria-label="زيارة الموقع" class="btn-primary !rounded-full !p-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <ArrowLeft class="w-6 h-6 rotate-180" aria-hidden="true" />
                 </a>
               </div>
            </div>
            <div class="p-8 relative z-10 bg-white dark:bg-slate-900">
              <span class="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400 block mb-2">{{ project.category }}</span>
              <h3 class="font-bold text-2xl mb-3 group-hover:text-blue-600 transition-colors">{{ project.title }}</h3>
              <p class="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">{{ project.desc }}</p>
              <a :href="project.link" target="_blank" class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold group-hover:gap-4 transition-all">
                زيارة الموقع
                <ArrowLeft class="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden relative">
      <div class="container mx-auto px-4 max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">ماذا يقول عملاؤنا؟</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(quote, index) in realTestimonials" :key="index" class="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all duration-300 group flex flex-col">
            <Quote class="w-12 h-12 text-blue-500/20 mb-6 group-hover:text-blue-500/40 transition-colors transform rotate-180" aria-hidden="true" />
            <p class="text-lg font-medium leading-relaxed mb-8 text-slate-700 dark:text-slate-300 flex-1">"{{ quote.text }}"</p>
            <div class="flex items-center gap-4 mt-auto pt-6 border-t border-slate-200 dark:border-slate-700">
              <div class="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-blue-500/20">
                <img :src="quote.avatar" :alt="quote.name" class="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <h5 class="font-bold text-lg text-slate-900 dark:text-white">{{ quote.name }}</h5>
                <p class="text-sm text-slate-500 dark:text-slate-400 font-medium">{{ quote.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"></div>
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-50"></div>
      
      <!-- Decorative rings -->
      <div class="absolute top-1/2 left-0 w-64 h-64 border-[30px] border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute top-1/2 right-0 w-96 h-96 border-[40px] border-white/5 rounded-full translate-x-1/3 -translate-y-1/2"></div>
      
      <div class="container mx-auto px-4 relative z-10 text-center text-white max-w-3xl">
        <h2 class="text-4xl md:text-5xl font-bold mb-8 leading-tight">هل تريد موقعًا أسرع وأكثر احترافية؟</h2>
        <p class="text-xl text-blue-100 mb-12 leading-relaxed">
          بعد مراجعة التقرير، يمكننا مساعدتك في تحسين الأداء والتصميم وتجربة المستخدم بشكل جذري للوصول لأفضل نتائج ممكنة.
        </p>
        <a href="https://wa.me/201099658770" target="_blank" class="w-max mx-auto py-5 px-12 bg-white text-blue-700 hover:bg-slate-50 font-bold text-xl rounded-full shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] flex items-center justify-center gap-3">
          احجز استشارة مجانية
          <ArrowLeft class="w-6 h-6" aria-hidden="true" />
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowLeft, Clock, Smartphone, Search, Paintbrush, TrendingDown, Check, Quote } from 'lucide-vue-next'

// SEO Meta
useSeoMeta({
  title: 'تقرير مجاني لتحليل موقعك | CodeFlow Web',
  description: 'اكتشف مشاكل موقعك خلال 30 ثانية. احصل على تقرير مجاني يوضح مشاكل السرعة وتجربة المستخدم وتحسين محركات البحث التي قد تؤثر على نتائج موقعك ومبيعاتك.',
  ogTitle: 'تقرير مجاني لتحليل موقعك | CodeFlow Web',
  ogDescription: 'اكتشف مشاكل موقعك خلال 30 ثانية. احصل على تقرير مجاني يوضح مشاكل السرعة وتجربة المستخدم وتحسين محركات البحث.',
  ogImage: '/og-audit.png',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://codeflowweb.com/free-website-audit' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Website Audit",
        "provider": {
          "@type": "Organization",
          "name": "CodeFlow Web"
        },
        "description": "Free website performance, SEO, and UX audit report."
      })
    }
  ]
})

const form = ref({
  url: ''
})

const isLoading = ref(false)
const errorMessage = ref('')

const submitForm = async () => {
  if (!form.value.url) return
  
  errorMessage.value = ''
  let targetUrl = form.value.url
  if (!targetUrl.startsWith('http')) {
    targetUrl = 'https://' + targetUrl
  }

  isLoading.value = true

  try {
    await navigateTo({
      path: '/audit-report',
      query: { url: targetUrl }
    })
  } catch (error) {
    errorMessage.value = 'حدث خطأ أثناء الانتقال للتقرير.'
  } finally {
    isLoading.value = false
  }
}

const problems = [
  { title: 'بطء تحميل الصفحات', desc: 'كل ثانية تأخير تفقدك 7% من المبيعات. الزوار يكرهون الانتظار ويغادرون فوراً.', icon: Clock },
  { title: 'مشاكل الجوال', desc: 'أكثر من 70% من الزيارات تتم عبر الهاتف المحمول. هل موقعك جاهز؟', icon: Smartphone },
  { title: 'ضعف SEO', desc: 'عدم ظهورك في نتائج البحث الأولى يعني خسارة آلاف العملاء يومياً.', icon: Search },
  { title: 'تصميم قديم', desc: 'التصميم غير الاحترافي يقلل من ثقة العميل في علامتك التجارية.', icon: Paintbrush },
  { title: 'انخفاض التحويل', desc: 'زوار كثيرون لكن لا يوجد مبيعات؟ المشكلة تكمن في تجربة المستخدم.', icon: TrendingDown },
]

const values = [
  { title: 'معرفة أسباب ضعف النتائج', desc: 'تقرير مفصل يضع يدك على الجرح ويوضح أسباب تسرب العملاء بدقة.' },
  { title: 'زيادة المبيعات', desc: 'تحسين تجربة المستخدم يؤدي مباشرة لرفع معدل التحويل والمبيعات.' },
  { title: 'تحسين تجربة المستخدم', desc: 'تصفح أسرع وأسهل يضمن بقاء الزائر وقتاً أطول في متجرك.' },
  { title: 'رفع ترتيب الموقع في جوجل', desc: 'موقع سريع ومتوافق يعني ترتيباً أفضل واكتساب عملاء مجاناً.' }
]

const steps = [
  'أدخل رابط موقعك',
  'يتم تحليل الموقع',
  'تحصل على تقرير مبدئي',
  'نتواصل معك عند الحاجة'
]

const projects = [
  { title: "SN&P", category: "الأمن السيبراني", desc: "منصة احترافية للأمن السيبراني مصممة لزيادة الثقة وجذب صفقات الشركات الكبرى.", link: "https://secure-seven-omega.vercel.app/", image: "/projects/secure.png" },
  { title: "Square One", category: "التطوير العقاري", desc: "هوية رقمية متكاملة ومحرك بحث عقاري متطور لشركة تطوير عقاري رائدة.", link: "https://square-one-seven.vercel.app/", image: "/projects/squareone.png" },
  { title: "دام (Dam)", category: "منصة مجتمعية", desc: "خارطة تفاعلية سريعة لاستكشاف الفعاليات والأنشطة في السعودية، مهيأة للزيارات الضخمة.", link: "https://damsa.cloud/", image: "/projects/damsa.png" }
]

const realTestimonials = [
  { name: "م. ياسر القحطاني", role: "مؤسس شركة وصل", text: "أفضل تجربة تطوير ويب مررت بها. سرعة الموقع زادت من ثقة عملائنا ورفعت مبيعاتنا بنسبة 40% خلال الربع الأول.", avatar: "/avatars/client5.png" },
  { name: "أ. مريم الراشد", role: "مديرة التسويق في منصة نون", text: "بفضل خبرتهم في السيو، تصدرنا نتائج البحث للكلمات المستهدفة في وقت قياسي، ما ضاعف من عدد العملاء المحتملين.", avatar: "/avatars/client2.png" },
  { name: "د. عبد العزيز الفوزان", role: "رئيس مجلس إدارة الفوزان للتجارة", text: "ساعدونا في أتمتة عمليات الحجوزات المعقدة وتوفير أكثر من 20 ساعة عمل أسبوعياً، مع تقليل أخطاء الموظفين بشكل شبه كامل.", avatar: "/avatars/client10.png" }
]
</script>

<style>
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
