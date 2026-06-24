<script setup lang="ts">
import { Phone, MessageSquare, ArrowRight } from 'lucide-vue-next'
const { t, locale } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <div>
    <Hero />
    <Solutions />

    <!-- Solutions CTA -->
    <div class="flex justify-center pb-16 md:pb-24 bg-white dark:bg-[#020617] fade-in-on-scroll">
      <a
        href="https://wa.me/201099658770" target="_blank"
        @click="$trackClick('cta_solutions_bottom')"
        class="inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm sm:text-xl transition-all duration-300 bg-primary-600 text-white hover:bg-primary-700 hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-1 active:translate-y-0 active:shadow-md group whitespace-nowrap"
      >
        <span>{{ t('cta_btn_start') }}</span>
        <ArrowRight class="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" :class="[locale === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : '']" />
      </a>
    </div>

    <Services />
    
    <!-- CRO Trust Statistics Row -->
    <section class="py-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border-y border-slate-200 dark:border-white/5 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div class="space-y-2">
            <p class="text-3xl sm:text-4xl md:text-5xl font-black text-primary-600 dark:text-primary-400">99.9%</p>
            <p class="text-sm md:text-base font-bold text-slate-600 dark:text-slate-300">
              {{ locale === 'ar' ? 'معدل استقرار التشغيل' : 'Uptime Guarantee' }}
            </p>
          </div>
          <div class="space-y-2">
            <p class="text-3xl sm:text-4xl md:text-5xl font-black text-primary-600 dark:text-primary-400">&lt;1.2s</p>
            <p class="text-sm md:text-base font-bold text-slate-600 dark:text-slate-300">
              {{ locale === 'ar' ? 'متوسط سرعة تحميل الصفحة' : 'Avg Page Load Time' }}
            </p>
          </div>
          <div class="space-y-2">
            <p class="text-3xl sm:text-4xl md:text-5xl font-black text-primary-600 dark:text-primary-400">50M+</p>
            <p class="text-sm md:text-base font-bold text-slate-600 dark:text-slate-300">
              {{ locale === 'ar' ? 'تفاعل للمستخدمين قمنا بتشغيله' : 'End-User Interactions' }}
            </p>
          </div>
          <div class="space-y-2">
            <p class="text-3xl sm:text-4xl md:text-5xl font-black text-primary-600 dark:text-primary-400">100%</p>
            <p class="text-sm md:text-base font-bold text-slate-600 dark:text-slate-300">
              {{ locale === 'ar' ? 'أكواد برمجية مخصصة' : 'Custom Built Code' }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services & Stats CTA -->
    <div class="flex justify-center py-16 md:py-20 bg-white dark:bg-[#020617] fade-in-on-scroll">
      <a
        href="https://wa.me/201099658770" target="_blank"
        @click="$trackClick('cta_services_bottom')"
        class="inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm sm:text-xl transition-all duration-300 bg-primary-600 text-white hover:bg-primary-700 hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-1 active:translate-y-0 active:shadow-md group whitespace-nowrap"
      >
        <span>{{ t('cta_btn_consult') }}</span>
        <ArrowRight class="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" :class="[locale === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : '']" />
      </a>
    </div>

    <Process />

    <!-- Process CTA -->
    <div class="flex justify-center pb-16 md:pb-24 bg-white dark:bg-[#020617] fade-in-on-scroll">
      <a
        href="https://wa.me/201099658770" target="_blank"
        @click="$trackClick('cta_process_bottom')"
        class="inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm sm:text-xl transition-all duration-300 bg-primary-600 text-white hover:bg-primary-700 hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-1 active:translate-y-0 active:shadow-md group whitespace-nowrap"
      >
        <span>{{ t('cta_btn_try') }}</span>
        <ArrowRight class="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" :class="[locale === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : '']" />
      </a>
    </div>

    <Testimonials />

    <!-- Testimonials CTA -->
    <div class="flex justify-center pb-16 md:pb-24 bg-slate-50 dark:bg-[#020617] fade-in-on-scroll">
      <a
        href="https://wa.me/201099658770" target="_blank"
        @click="$trackClick('cta_testimonials_bottom')"
        class="inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm sm:text-xl transition-all duration-300 bg-primary-600 text-white hover:bg-primary-700 hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-1 active:translate-y-0 active:shadow-md group whitespace-nowrap"
      >
        <span>{{ t('cta_btn_contact') }}</span>
        <ArrowRight class="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" :class="[locale === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : '']" />
      </a>
    </div>

    <Work />
    
    <Pricing />
    
    <FAQ />
    
    <!-- Final CTA Section -->
    <section id="contact" class="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800/50 relative overflow-hidden fade-in-on-scroll">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute -top-24 -left-24 w-96 h-96 bg-primary-200 dark:bg-white rounded-full blur-[100px]"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white">{{ t('nav.contact') }}</h2>
          <p class="text-sm sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {{ t('contact_form.subtitle') }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <!-- Left: Contact Info & WhatsApp -->
          <div class="space-y-12 order-2 lg:order-1">
            <div class="flex flex-col items-center lg:items-start gap-8">
              <div class="flex items-center gap-6 group">
                <div class="w-20 h-20 rounded-3xl bg-primary-100 dark:bg-white/10 flex items-center justify-center text-primary-600 dark:text-white group-hover:bg-primary-200 dark:group-hover:bg-white/20 transition-colors shrink-0">
                  <Phone class="w-10 h-10" />
                </div>
                <div :class="[locale === 'ar' ? 'text-right' : 'text-left']">
                  <p class="text-xs sm:text-sm text-slate-500 dark:text-primary-300 uppercase tracking-widest font-bold mb-1">{{ t('nav.contact') }}</p>
                  <p class="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter text-slate-900 dark:text-white" dir="ltr">+20 109 965 8770</p>
                </div>
              </div>

              <a
                href="https://wa.me/201099658770"
                target="_blank"
                @click="$trackClick('index_final_whatsapp')"
                class="inline-flex items-center justify-center gap-3 px-6 sm:px-12 py-4 sm:py-6 rounded-2xl sm:rounded-3xl bg-primary-600 text-white dark:bg-white dark:text-primary-900 font-bold text-base sm:text-2xl hover:bg-primary-700 dark:hover:bg-gold dark:hover:text-white transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 group w-full lg:w-auto"
              >
                <MessageSquare class="w-6 h-6 sm:w-8 sm:h-8 shrink-0 group-hover:rotate-12 transition-transform" />
                <span>{{ locale === 'ar' ? 'تواصل سريع عبر واتساب' : 'Fast WhatsApp Chat' }}</span>
              </a>
            </div>

            <!-- Locations -->
            <div class="pt-12 border-t border-slate-200 dark:border-white/10">
              <h4 class="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                <span class="w-2 h-8 bg-gold rounded-full"></span>
                {{ t('locations.title') }}
              </h4>
              <p class="text-sm sm:text-base text-slate-600 dark:text-primary-200 mb-8 leading-relaxed">
                {{ t('locations.description') }}
              </p>
              <div class="flex flex-wrap gap-4">
                <div v-for="loc in ['egypt', 'ksa', 'gcc']" :key="loc" class="px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-primary-100 font-bold text-xs sm:text-base shadow-sm">
                  {{ t(`locations.${loc}`) }}
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Contact Form -->
          <div class="order-1 lg:order-2">
            <ContactForm />
          </div>
        </div>

        <!-- Footer Links & Copyright -->
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
