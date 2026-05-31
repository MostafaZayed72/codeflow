<script setup lang="ts">
import { Phone, MessageSquare } from 'lucide-vue-next'
const { t, locale } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <div>
    <Hero />
    <Solutions />
    <Services />
    
    <!-- CRO Trust Statistics Row -->
    <section class="py-16 bg-slate-900 dark:bg-slate-950 text-white border-y border-white/5 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div class="space-y-2">
            <p class="text-4xl md:text-5xl font-black text-primary-400">99.9%</p>
            <p class="text-sm md:text-base font-bold text-slate-300">
              {{ locale === 'ar' ? 'معدل استقرار التشغيل' : 'Uptime Guarantee' }}
            </p>
          </div>
          <div class="space-y-2">
            <p class="text-4xl md:text-5xl font-black text-primary-400">&lt;1.2s</p>
            <p class="text-sm md:text-base font-bold text-slate-300">
              {{ locale === 'ar' ? 'متوسط سرعة تحميل الصفحة' : 'Avg Page Load Time' }}
            </p>
          </div>
          <div class="space-y-2">
            <p class="text-4xl md:text-5xl font-black text-primary-400">50M+</p>
            <p class="text-sm md:text-base font-bold text-slate-300">
              {{ locale === 'ar' ? 'تفاعل للمستخدمين قمنا بتشغيله' : 'End-User Interactions' }}
            </p>
          </div>
          <div class="space-y-2">
            <p class="text-4xl md:text-5xl font-black text-primary-400">100%</p>
            <p class="text-sm md:text-base font-bold text-slate-300">
              {{ locale === 'ar' ? 'أكواد برمجية مخصصة' : 'Custom Built Code' }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <Process />
    <Testimonials />
    <Work />
    
    <!-- Final CTA Section -->
    <section id="contact" class="py-24 bg-primary-900 text-white relative overflow-hidden fade-in-on-scroll">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[100px]"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-6xl font-black mb-6">{{ t('nav.contact') }}</h2>
          <p class="text-xl text-primary-100 max-w-2xl mx-auto">
            {{ t('contact_form.subtitle') }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <!-- Left: Contact Info & WhatsApp -->
          <div class="space-y-12 order-2 lg:order-1">
            <div class="flex flex-col items-center lg:items-start gap-8">
              <div class="flex items-center gap-6 group">
                <div class="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                  <Phone class="w-10 h-10" />
                </div>
                <div :class="[locale === 'ar' ? 'text-right' : 'text-left']">
                  <p class="text-sm text-primary-300 uppercase tracking-widest font-bold mb-1">{{ t('nav.contact') }}</p>
                  <p class="text-3xl md:text-4xl font-black tracking-tighter" dir="ltr">+20 111 710 8646</p>
                </div>
              </div>

              <a
                href="https://wa.me/201117108646"
                target="_blank"
                class="inline-flex items-center justify-center px-12 py-6 rounded-3xl bg-white text-primary-900 font-bold text-2xl hover:bg-gold hover:text-white transition-all duration-300 shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:-translate-y-2 group w-full lg:w-auto"
              >
                <MessageSquare class="w-8 h-8 mr-4 group-hover:rotate-12 transition-transform" />
                {{ locale === 'ar' ? 'تواصل سريع عبر واتساب' : 'Fast WhatsApp Chat' }}
              </a>
            </div>

            <!-- Locations -->
            <div class="pt-12 border-t border-white/10">
              <h4 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span class="w-2 h-8 bg-gold rounded-full"></span>
                {{ t('locations.title') }}
              </h4>
              <p class="text-primary-200 mb-8 leading-relaxed">
                {{ t('locations.description') }}
              </p>
              <div class="flex flex-wrap gap-4">
                <div v-for="loc in ['egypt', 'ksa', 'gcc']" :key="loc" class="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-primary-100 font-bold">
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
        <div class="mt-24 pt-10 border-t border-white/10 w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <p class="text-primary-200 text-sm">
            {{ t('privacy.copyright', { year: new Date().getFullYear() }) }}
          </p>
          <NuxtLink 
            :to="localePath('/privacy')" 
            class="text-primary-200 hover:text-white text-sm font-bold transition-colors underline underline-offset-4"
          >
            {{ t('privacy.title') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
