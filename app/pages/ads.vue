<script setup lang="ts">
import { Phone, MessageSquare, ArrowRight } from 'lucide-vue-next'
const { t, locale } = useI18n()
const localePath = useLocalePath()

// Hide standard Navbar/Footer for Landing Page if supported by layout, otherwise just a clean page.
definePageMeta({
  layout: 'default'
})
</script>

<template>
  <div class="landing-page">
    <Hero />
    
    <!-- Immediate Contact Section for Ads -->
    <section class="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div class="max-w-4xl mx-auto px-4">
        <ContactForm />
      </div>
    </section>

    <!-- Social Proof row -->
    <section class="py-12 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border-y border-slate-200 dark:border-white/5 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div class="space-y-2">
            <p class="text-3xl sm:text-4xl md:text-5xl font-black text-primary-600 dark:text-primary-400">40%</p>
            <p class="text-sm md:text-base font-bold text-slate-600 dark:text-slate-300">
              {{ locale === 'ar' ? 'متوسط زيادة المبيعات' : 'Avg Sales Increase' }}
            </p>
          </div>
          <div class="space-y-2">
            <p class="text-3xl sm:text-4xl md:text-5xl font-black text-primary-600 dark:text-primary-400">&lt;1s</p>
            <p class="text-sm md:text-base font-bold text-slate-600 dark:text-slate-300">
              {{ locale === 'ar' ? 'سرعة تحميل مضمونة' : 'Guaranteed Load Time' }}
            </p>
          </div>
          <div class="space-y-2">
            <p class="text-3xl sm:text-4xl md:text-5xl font-black text-primary-600 dark:text-primary-400">100%</p>
            <p class="text-sm md:text-base font-bold text-slate-600 dark:text-slate-300">
              {{ locale === 'ar' ? 'توافق مع السوق الخليجي' : 'GCC Market Fit' }}
            </p>
          </div>
          <div class="space-y-2">
            <p class="text-3xl sm:text-4xl md:text-5xl font-black text-primary-600 dark:text-primary-400">20+</p>
            <p class="text-sm md:text-base font-bold text-slate-600 dark:text-slate-300">
              {{ locale === 'ar' ? 'شريك نجاح' : 'Success Partners' }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <Solutions />

    <Testimonials />

    <FAQ />
    
    <!-- Final CTA Section -->
    <section id="contact" class="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800/50 relative overflow-hidden fade-in-on-scroll">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute -top-24 -left-24 w-96 h-96 bg-primary-200 dark:bg-white rounded-full blur-[100px]"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <h2 class="text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white">{{ t('nav.contact') }}</h2>
        <p class="text-sm sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">
          {{ t('contact_form.subtitle') }}
        </p>
        
        <div class="flex flex-col items-center gap-8 max-w-lg mx-auto">
          <a
            href="https://wa.me/201099658770"
            target="_blank"
            @click="$trackClick('ads_final_whatsapp')"
            class="inline-flex items-center justify-center gap-3 px-6 sm:px-12 py-4 sm:py-6 rounded-2xl sm:rounded-3xl bg-primary-600 text-white dark:bg-white dark:text-primary-900 font-bold text-base sm:text-2xl hover:bg-primary-700 dark:hover:bg-gold dark:hover:text-white transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 group w-full"
          >
            <MessageSquare class="w-6 h-6 sm:w-8 sm:h-8 shrink-0 group-hover:rotate-12 transition-transform" />
            <span>{{ locale === 'ar' ? 'تواصل سريع عبر واتساب' : 'Fast WhatsApp Chat' }}</span>
          </a>
        </div>

        <div class="mt-24 pt-10 border-t border-slate-200 dark:border-white/10 w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <p class="text-slate-500 dark:text-primary-200 text-sm">
            {{ t('privacy.copyright', { year: new Date().getFullYear() }) }}
          </p>
          <NuxtLink 
            :to="localePath('/privacy')" 
            class="text-slate-600 dark:text-primary-200 hover:text-primary-600 dark:hover:text-white text-sm font-bold transition-colors underline underline-offset-4"
          >
            {{ t('privacy.title') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
