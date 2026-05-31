<script setup lang="ts">
import { ArrowRight, CheckCircle2, Shield, Zap, Search, Globe, Phone, MessageSquare, AlertCircle } from 'lucide-vue-next'

const { locale } = useI18n()
const localePath = useLocalePath()

const form = reactive({
  name: '',
  website: '',
  phone: '',
  goals: 'increase_leads'
})

const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')

const handleSubmit = async () => {
  status.value = 'loading'
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        whatsapp: form.phone,
        message: `GCC Landing Page Lead - Website: ${form.website} | Goal: ${form.goals}`
      })
    })

    if (response.ok) {
      status.value = 'success'
      form.name = ''
      form.website = ''
      form.phone = ''
      setTimeout(() => {
        status.value = 'idle'
      }, 5000)
    } else {
      status.value = 'error'
    }
  } catch (error) {
    console.error('Submission error:', error)
    status.value = 'error'
  }
}

// Local translation object for GCC specific trust points
const tLocal = computed(() => {
  if (locale.value === 'ar') {
    return {
      title: 'وكالة تطوير ويب متميزة لشركات الخليج والسعودية',
      heroTag: 'وكالة ويب شريكة لرؤية السعودية 2030',
      heroTitle: 'نبني مواقع ويب فائقة السرعة تحول زوارك إلى عملاء يدفعون',
      heroDesc: 'تصميم واجهات وتطوير حلول ويب مخصصة لأسواق المملكة العربية السعودية ودول الخليج. مهيأة للسيو، متوافقة مع مخرجات الهيئة السعودية للمواصفات والمقاييس، ومصممة خصيصاً لزيادة أرباحك.',
      primaryCta: 'احصل على تحليل مجاني لموقعك',
      secondaryCta: 'احجز مكالمة استشارية',
      trustTitle: 'مطابقة لمعايير الخليج الرقمية',
      trust1: 'متوافقة مع سحابة البيانات السعودية',
      trust2: 'دعم بوابات دفع مدي و STC Pay',
      trust3: 'تحسين سيو مخصص لمحركات البحث المحلية',
      featuresTitle: 'لماذا تختار كود فلو لمشروعك في الخليج؟',
      formTitle: 'طلب تحليل مجاني لموقعك الحالي',
      formSubtitle: 'أرسل لنا رابط موقعك وسيقوم خبير تجربة مستخدم (UX) بمراجعته وإرسال فيديو تحليل مدته 5 دقائق مجاناً عبر واتساب.',
      fieldName: 'الاسم بالكامل',
      fieldWeb: 'رابط موقعك الحالي (إن وجد)',
      fieldPhone: 'رقم الواتساب (مع رمز الدولة)',
      fieldGoal: 'ما هو هدفك الأساسي؟',
      goalOption1: 'زيادة عدد العملاء والمبيعات (CRO)',
      goalOption2: 'إعادة تصميم الموقع ليكون أسرع وأحدث',
      goalOption3: 'بناء متجر إلكتروني متكامل',
      btnSubmit: 'أرسل طلبي الآن',
      successMsg: 'تم استلام طلبك! سنرسل لك فيديو التحليل المجاني عبر واتساب خلال 24 ساعة.',
      caseTitle: 'مشاريع خليجية ناجحة قمنا بتطويرها',
      case1Title: 'منصة دام (Dam) - الرياض',
      case1Desc: 'خريطة تفاعلية للفعاليات والأنشطة المجتمعية في المملكة، مصممة لتحمل حركة زيارات ضخمة تزيد عن 20 ألف مستخدم نشط.',
      case2Title: 'شركة سكوير ون (Square One) - دبي',
      case2Desc: 'هوية رقمية متكاملة ومحرك بحث متطور للعقارات الفاخرة مصمم لتوليد عملاء محتملين بجودة عالية.',
      case3Title: 'نظام تقدر (Tqdr) - الخليج',
      case3Desc: 'منصة دفع بالتقسيط سهلت عمليات الشراء للمستخدمين من خلال واجهات مبسطة وخالية من الاحتكاك.'
    }
  } else {
    return {
      title: 'Premium Web Design & Dev Agency for KSA & GCC Businesses',
      heroTag: 'Aligned with KSA Vision 2030 Digital Standards',
      heroTitle: 'We Build Ultra-Fast Websites That Turn Visitors Into Paying Clients',
      heroDesc: 'Custom UI/UX design and high-performance web development built for the Saudi and Gulf markets. Optimized for SEO, local payment systems, and speed to boost your revenue.',
      primaryCta: 'Request a Free Website Audit',
      secondaryCta: 'Book a Strategy Call',
      trustTitle: 'Compliant with Gulf Digital Standards',
      trust1: 'Saudi Cloud Hosting Ready',
      trust2: 'Mada & STC Pay Gateways Support',
      trust3: 'Local Search Engine SEO Optimization',
      featuresTitle: 'Why Choose CodeFlow in the GCC?',
      formTitle: 'Get a Free conversion Audit',
      formSubtitle: 'Submit your website URL and one of our UX experts will record a free 5-minute video teardown of your page speed, SEO, and conversion rate issues.',
      fieldName: 'Full Name',
      fieldWeb: 'Your Current Website URL (if any)',
      fieldPhone: 'WhatsApp Number (with Country Code)',
      fieldGoal: 'What is your primary business goal?',
      goalOption1: 'Increase Leads and Sales (CRO)',
      goalOption2: 'Redesign site for speed & modern UI',
      goalOption3: 'Build a new E-Commerce platform',
      btnSubmit: 'Send My Free Audit Request',
      successMsg: 'Request received! We will send your free video teardown via WhatsApp within 24 hours.',
      caseTitle: 'Successful GCC Projects We Engineered',
      case1Title: 'Dam Platform - Riyadh',
      case1Desc: 'An interactive geolocated map for Saudi events built to handle high-traffic spikes of 20,000+ active users.',
      case2Title: 'Square One Real Estate - Dubai',
      case2Desc: 'High-performance digital identity and interactive search engine generating qualified property inquiries.',
      case3Title: 'Tqdr System - Saudi Arabia',
      case3Desc: 'Fintech installment checkout solution engineered to reduce user drop-offs and simplify payments.'
    }
  }
})
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 font-['Tajawal'] text-slate-900 dark:text-slate-100">
    <!-- Minimal Ads Header (Prevents exit leaks) -->
    <header class="py-6 border-b border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80">
      <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <NuxtLink :to="localePath('/')" class="text-3xl font-black tracking-tighter text-primary-600 dark:text-primary-400">
          Code<span class="text-gold">Flow</span>
        </NuxtLink>
        <div class="flex items-center gap-6">
          <LangSwitcher />
          <a href="#audit-form" class="btn-primary py-3 px-6 text-sm font-bold">
            {{ tLocal.secondaryCta }}
          </a>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative pt-20 pb-16 overflow-hidden bg-slate-900 text-white">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-12 left-12 w-80 h-80 bg-primary-500 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-12 right-12 w-80 h-80 bg-gold rounded-full blur-[120px]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <!-- Tag -->
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-gold text-sm font-bold mb-6">
          <Shield class="w-4 h-4" />
          {{ tLocal.heroTag }}
        </span>

        <!-- Title -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight max-w-5xl mx-auto">
          {{ tLocal.heroTitle }}
        </h1>

        <!-- Desc -->
        <p class="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {{ tLocal.heroDesc }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <a href="#audit-form" class="btn-primary px-10 py-5 text-xl font-bold">
            {{ tLocal.primaryCta }}
          </a>
          <a href="#projects" class="btn-outline border-white/20 text-white hover:bg-white/10 px-10 py-5 text-xl font-bold flex items-center justify-center gap-2">
            {{ locale === 'ar' ? 'عرض أعمالنا في الخليج' : 'Browse Gulf Projects' }}
            <ArrowRight class="w-5 h-5" :class="[locale === 'ar' ? 'rotate-180' : '']" />
          </a>
        </div>

        <!-- GCC Local Badges -->
        <div class="pt-8 border-t border-white/10">
          <p class="text-xs uppercase tracking-widest text-slate-400 mb-6 font-bold">{{ tLocal.trustTitle }}</p>
          <div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
            <div class="flex items-center gap-2 text-slate-300">
              <CheckCircle2 class="w-5 h-5 text-emerald-500 shrink-0" />
              <span class="text-sm font-bold">{{ tLocal.trust1 }}</span>
            </div>
            <div class="flex items-center gap-2 text-slate-300">
              <CheckCircle2 class="w-5 h-5 text-emerald-500 shrink-0" />
              <span class="text-sm font-bold">{{ tLocal.trust2 }}</span>
            </div>
            <div class="flex items-center gap-2 text-slate-300">
              <CheckCircle2 class="w-5 h-5 text-emerald-500 shrink-0" />
              <span class="text-sm font-bold">{{ tLocal.trust3 }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- GCC Featured Projects -->
    <section id="projects" class="py-24 bg-white dark:bg-[#020617] transition-colors duration-500">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl md:text-5xl font-black text-center mb-16">{{ tLocal.caseTitle }}</h2>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Dam -->
          <div class="bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500">
            <span class="text-xs font-black uppercase tracking-widest text-primary-500 mb-4 block">Saudi Arabia (Riyadh)</span>
            <h3 class="text-2xl font-bold mb-4">{{ tLocal.case1Title }}</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{{ tLocal.case1Desc }}</p>
            <div class="p-4 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl font-black text-center text-lg">
              {{ locale === 'ar' ? 'تحميل الموقع في أقل من ثانية واحدة' : 'Under 1.0s Load Time' }}
            </div>
          </div>

          <!-- Square One -->
          <div class="bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500">
            <span class="text-xs font-black uppercase tracking-widest text-primary-500 mb-4 block">UAE (Dubai)</span>
            <h3 class="text-2xl font-bold mb-4">{{ tLocal.case2Title }}</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{{ tLocal.case2Desc }}</p>
            <div class="p-4 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl font-black text-center text-lg">
              {{ locale === 'ar' ? '+50% زيادة في طلبات العملاء' : '+50% Buyer Lead Inquiries' }}
            </div>
          </div>

          <!-- Tqdr -->
          <div class="bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500">
            <span class="text-xs font-black uppercase tracking-widest text-primary-500 mb-4 block">Fintech (GCC)</span>
            <h3 class="text-2xl font-bold mb-4">{{ tLocal.case3Title }}</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{{ tLocal.case3Desc }}</p>
            <div class="p-4 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl font-black text-center text-lg">
              {{ locale === 'ar' ? '-28% نسبة تسرب العملاء' : '-28% Checkout Dropouts' }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 bg-slate-100 dark:bg-slate-950 transition-colors duration-500">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-5xl font-black mb-16">{{ tLocal.featuresTitle }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center">
            <div class="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-950/60 flex items-center justify-center text-primary-500 mb-6">
              <Zap class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold mb-3">{{ locale === 'ar' ? 'مواقع فائقة السرعة' : 'Blazing Speed' }}</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {{ locale === 'ar' ? 'السرعة هي عماد المبيعات. نصمم صفحات هبوط تشحن بأجزاء من الثانية لتقليل تشتت الزوار.' : 'Speed matters. We build lightning fast landing pages to lower bounce rates and boost sales.' }}
            </p>
          </div>

          <div class="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center">
            <div class="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/60 flex items-center justify-center text-amber-500 mb-6">
              <Shield class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold mb-3">{{ locale === 'ar' ? 'حماية وأمان موثوق' : 'Secure & Compliant' }}</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {{ locale === 'ar' ? 'كود مخصص بالكامل ومحمي ضد الهجمات الإلكترونية ومتطابق مع تشريعات أمن البيانات المحلية.' : '100% secure custom hand-written code matching all GCC digital security specifications.' }}
            </p>
          </div>

          <div class="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center">
            <div class="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-500 mb-6">
              <Globe class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold mb-3">{{ locale === 'ar' ? 'مهيأ للسوق المحلي' : 'Locally Tailored' }}</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {{ locale === 'ar' ? 'ندعم بوابات الدفع الخليجية والتكامل مع أنظمة أتمتة الرسائل وخدمات الواتساب المحلية.' : 'We integrate local payment systems (Mada) and connect native WhatsApp API automation.' }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Lead Capture Form Section -->
    <section id="audit-form" class="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[100px]"></div>
      </div>

      <div class="max-w-4xl mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-black mb-4">{{ tLocal.formTitle }}</h2>
          <p class="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            {{ tLocal.formSubtitle }}
          </p>
        </div>

        <div class="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
          <Transition name="fade">
            <div v-if="status === 'success'" class="absolute inset-0 bg-slate-900/95 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-6">
              <CheckCircle2 class="w-20 h-20 text-emerald-400 mb-4 animate-bounce" />
              <h3 class="text-2xl font-black mb-2 text-white">{{ locale === 'ar' ? 'تم تقديم طلبك بنجاح!' : 'Audit Request Submitted!' }}</h3>
              <p class="text-slate-300 max-w-md mx-auto">{{ tLocal.successMsg }}</p>
            </div>
          </Transition>

          <form @submit.prevent="handleSubmit" class="space-y-6 text-left" :class="[locale === 'ar' ? 'text-right' : '']">
            <!-- Name -->
            <div class="space-y-2">
              <label class="text-sm font-bold text-slate-200">{{ tLocal.fieldName }}</label>
              <input 
                v-model="form.name"
                type="text" 
                required
                class="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary-500 focus:bg-white/10 transition-all outline-none text-white placeholder:text-white/30"
                :placeholder="tLocal.fieldName"
              >
            </div>

            <!-- Website -->
            <div class="space-y-2">
              <label class="text-sm font-bold text-slate-200">{{ tLocal.fieldWeb }}</label>
              <input 
                v-model="form.website"
                type="text"
                class="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary-500 focus:bg-white/10 transition-all outline-none text-white placeholder:text-white/30"
                placeholder="https://example.com"
                dir="ltr"
              >
            </div>

            <!-- Phone/WhatsApp -->
            <div class="space-y-2">
              <label class="text-sm font-bold text-slate-200">{{ tLocal.fieldPhone }}</label>
              <input 
                v-model="form.phone"
                type="text"
                required
                class="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary-500 focus:bg-white/10 transition-all outline-none text-white placeholder:text-white/30"
                placeholder="+966 50 000 0000"
                dir="ltr"
              >
            </div>

            <!-- Goal -->
            <div class="space-y-2">
              <label class="text-sm font-bold text-slate-200">{{ tLocal.fieldGoal }}</label>
              <select 
                v-model="form.goals"
                class="w-full px-5 py-4 rounded-2xl bg-slate-800 border border-white/10 focus:border-primary-500 transition-all outline-none text-white appearance-none"
              >
                <option value="increase_leads">{{ tLocal.goalOption1 }}</option>
                <option value="redesign">{{ tLocal.goalOption2 }}</option>
                <option value="ecommerce">{{ tLocal.goalOption3 }}</option>
              </select>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit" 
              :disabled="status === 'loading'"
              class="btn-primary w-full py-5 text-xl font-bold rounded-2xl shadow-xl shadow-primary-500/20 flex items-center justify-center gap-3 group mt-8"
            >
              <span v-if="status === 'loading'" class="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></span>
              <template v-else>
                {{ tLocal.btnSubmit }}
                <ArrowRight class="w-6 h-6 group-hover:translate-x-1 transition-transform" :class="[locale === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : '']" />
              </template>
            </button>

            <!-- Error message -->
            <div v-if="status === 'error'" class="p-4 rounded-xl bg-rose-500/20 text-rose-300 flex items-center gap-3 mt-4">
              <AlertCircle class="w-5 h-5 shrink-0" />
              <span>{{ locale === 'ar' ? 'حدث خطأ ما، يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب.' : 'Something went wrong, please try again or contact us via WhatsApp.' }}</span>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 bg-slate-950 border-t border-white/5 text-slate-400 text-center text-sm">
      <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p>All Rights Reserved © {{ new Date().getFullYear() }} CodeFlow</p>
        <NuxtLink :to="localePath('/privacy')" class="hover:text-white transition-colors underline underline-offset-4">
          {{ locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy' }}
        </NuxtLink>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.btn-primary {
  @apply inline-flex items-center justify-center rounded-2xl bg-primary-600 hover:bg-gold text-white transition-all duration-300 px-6 py-3 font-bold cursor-pointer text-center;
}
.btn-outline {
  @apply inline-flex items-center justify-center rounded-2xl border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:border-primary-500 hover:text-primary-600 transition-all duration-300 px-6 py-3 font-bold cursor-pointer text-center;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
