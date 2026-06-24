<script setup lang="ts">
import { CheckCircle2, ArrowRight } from 'lucide-vue-next'
const { t, locale } = useI18n()

const plans = computed(() => [
  {
    key: 'landing',
    name: t('pricing.landing.name'),
    price: t('pricing.landing.price'),
    desc: t('pricing.landing.desc'),
    features: [
      locale.value === 'ar' ? 'تصميم حصري عالي التحويل' : 'High-converting custom design',
      locale.value === 'ar' ? 'نموذج تواصل سريع' : 'Quick contact form',
      locale.value === 'ar' ? 'ربط مع واتساب' : 'WhatsApp integration',
      locale.value === 'ar' ? 'تهيئة أساسية لمحركات البحث' : 'Basic SEO optimization'
    ],
    popular: false
  },
  {
    key: 'corporate',
    name: t('pricing.corporate.name'),
    price: t('pricing.corporate.price'),
    desc: t('pricing.corporate.desc'),
    features: [
      locale.value === 'ar' ? 'تعدد الصفحات والأقسام' : 'Multi-page architecture',
      locale.value === 'ar' ? 'لوحة تحكم للمحتوى' : 'CMS/Dashboard included',
      locale.value === 'ar' ? 'سرعة تحميل فائقة < 1s' : 'Ultra-fast loading < 1s',
      locale.value === 'ar' ? 'تهيئة متقدمة للظهور بجوجل' : 'Advanced Google ranking prep'
    ],
    popular: true
  },
  {
    key: 'ecommerce',
    name: t('pricing.ecommerce.name'),
    price: t('pricing.ecommerce.price'),
    desc: t('pricing.ecommerce.desc'),
    features: [
      locale.value === 'ar' ? 'عربة تسوق متطورة' : 'Advanced shopping cart',
      locale.value === 'ar' ? 'ربط مع بوابات الدفع (مدى، تابي..)' : 'Payment gateways (Mada, Tabby..)',
      locale.value === 'ar' ? 'إدارة المخزون والطلبات' : 'Inventory & Order management',
      locale.value === 'ar' ? 'أنظمة حماية متقدمة' : 'Advanced security systems'
    ],
    popular: false
  }
])
</script>

<template>
  <section id="pricing" class="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 fade-in-on-scroll">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title inline-block mb-4">{{ t('pricing.title') }}</h2>
        <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">{{ t('pricing.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="plan in plans" 
          :key="plan.key"
          class="relative bg-white dark:bg-slate-900 rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
          :class="plan.popular ? 'border-primary-500 shadow-xl shadow-primary-500/10' : 'border-slate-200 dark:border-slate-800'"
        >
          <div v-if="plan.popular" class="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-gold text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
            {{ locale === 'ar' ? 'الأكثر طلباً' : 'Most Popular' }}
          </div>

          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{{ plan.name }}</h3>
          <p class="text-slate-500 dark:text-slate-400 text-sm mb-6 min-h-[40px]">{{ plan.desc }}</p>
          
          <div class="mb-8">
            <span class="text-3xl font-black text-primary-600 dark:text-primary-400">{{ plan.price }}</span>
          </div>

          <ul class="space-y-4 mb-8 flex-1">
            <li v-for="(feat, idx) in plan.features" :key="idx" class="flex items-start gap-3">
              <CheckCircle2 class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span class="text-slate-700 dark:text-slate-300 text-sm font-medium">{{ feat }}</span>
            </li>
          </ul>

          <a 
            href="#contact"
            @click="$trackClick(`pricing_${plan.key}`)"
            class="w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all"
            :class="plan.popular ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'"
          >
            {{ locale === 'ar' ? 'اطلب الآن' : 'Get Started' }}
            <ArrowRight class="w-4 h-4" :class="[locale === 'ar' ? 'rotate-180' : '']" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
