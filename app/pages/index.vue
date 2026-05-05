<script setup lang="ts">
import { Phone, MessageSquare } from 'lucide-vue-next'
const { locale } = useI18n()
</script>

<template>
  <div>
    <Hero />
    <TechStack />
    <Services />
    <Solutions />
    <Work />
    <Testimonials />
    
    <!-- Final CTA Section -->
    <section id="contact" class="py-24 bg-primary-900 text-white relative overflow-hidden fade-in-on-scroll">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[100px]"></div>
      </div>
      
      <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 class="text-4xl md:text-6xl font-black mb-8">{{ $t('nav.contact') }}</h2>
        <p class="text-xl md:text-2xl text-primary-100 mb-12 max-w-2xl mx-auto">
          {{ $t('hero.description') }}
        </p>
        
        <div class="flex flex-col items-center gap-8">
          <div class="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div class="flex items-center gap-4 group">
              <div class="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Phone class="w-7 h-7" />
              </div>
              <div :class="[locale === 'ar' ? 'text-right' : 'text-left']">
                <p class="text-sm text-primary-300 uppercase tracking-widest font-bold">{{ $t('nav.contact') }}</p>
                <p class="text-2xl md:text-3xl font-black tracking-tighter" dir="ltr">+20 111 710 8646</p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/201117108646"
            target="_blank"
            class="inline-flex items-center justify-center px-12 py-6 rounded-3xl bg-white text-primary-900 font-bold text-2xl hover:bg-gold hover:text-white transition-all duration-300 shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:-translate-y-2 group"
          >
            <MessageSquare class="w-8 h-8 mr-4 group-hover:rotate-12 transition-transform" />
            {{ $t('hero.cta') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
