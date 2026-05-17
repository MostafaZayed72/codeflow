<script setup lang="ts">
import { ArrowRight, Zap, Shield, Search } from 'lucide-vue-next'
const { t, locale } = useI18n()
</script>

<template>
  <section class="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
    <!-- Advanced Clean Background System with Video -->
    <div class="absolute inset-0 -z-10 pointer-events-none overflow-hidden bg-slate-950">
      <!-- Background Video -->
      <video
        autoplay
        loop
        muted
        playsinline
        class="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-1000"
      >
        <source :src="'/hero.webm'" type="video/webm" />
        <source :src="'/hero.mp4'" type="video/mp4" />
      </video>
      
      <!-- Unified Professional Cinematic Dark Filter for ultimate text contrast -->
      <div class="absolute inset-0 bg-slate-950/45 dark:bg-slate-950/60"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 w-full text-center relative z-10 flex flex-col items-center">
      <!-- Badge -->
      <div class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 dark:bg-primary-950/40 backdrop-blur-md border border-white/10 dark:border-primary-800/40 text-primary-200 dark:text-primary-300 text-sm font-semibold mb-8 shadow-lg shadow-black/10 animate-fade-in">
        <Zap class="w-4 h-4 fill-current text-primary-400" />
        <span class="tracking-wide uppercase text-xs">{{ t('hero.badge') }}</span>
      </div>

      <!-- Hero Heading -->
      <h1 class="max-w-5xl text-4xl md:text-7xl font-black tracking-tighter mb-8 animate-fade-in-up leading-[1.15]">
        <span class="block text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">{{ t('hero.title') }}</span>
        <span class="block bg-gradient-to-r from-primary-400 via-primary-300 to-gold bg-clip-text text-transparent pb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
          {{ t('hero.subtitle') }}
        </span>
      </h1>

      <!-- Hero Description -->
      <p class="max-w-3xl text-lg md:text-xl text-slate-200 mb-12 animate-fade-in-up [animation-delay:200ms] leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] font-medium">
        {{ t('hero.description') }}
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto animate-fade-in-up [animation-delay:400ms] mb-24">
        <a
          href="https://wa.me/201117108646"
          target="_blank"
          class="btn-primary w-full sm:w-auto gap-3 text-xl px-10 py-5 shadow-2xl shadow-primary-500/30 group"
        >
          {{ t('hero.cta') }}
          <ArrowRight class="w-6 h-6 group-hover:translate-x-1 transition-transform" :class="[locale === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : '']" />
        </a>
        <div class="relative w-full sm:w-auto group">
          <div class="absolute -inset-1 bg-gradient-to-r from-primary-600 to-gold rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <a
            href="https://wa.me/201117108646"
            target="_blank"
            class="relative btn-outline w-full sm:w-auto text-xl px-10 py-5 bg-white/10 dark:bg-slate-900/40 backdrop-blur-sm border-2 border-white/20 dark:border-slate-800 hover:border-primary-500 text-white hover:text-white flex items-center justify-center gap-2 transition-all shadow-xl"
          >
            {{ t('hero.consultation') }}
            <span class="absolute -top-3 -right-3 px-2 py-1 bg-emerald-500 text-white text-[10px] font-black rounded-lg animate-bounce uppercase tracking-tighter">
              Free
            </span>
          </a>
        </div>
      </div>

      <!-- Hero Features (Enhanced) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto animate-fade-in-up [animation-delay:600ms]">
        <div class="flex flex-col items-center text-center gap-4 p-8 glass-card bg-slate-950/20 hover:bg-slate-950/40 border-white/10 backdrop-blur-sm group hover:-translate-y-2 transition-all duration-500">
          <div class="w-16 h-16 rounded-2xl bg-primary-950/60 border border-primary-800/50 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/10">
            <Zap class="w-8 h-8" />
          </div>
          <div>
            <h3 class="font-bold text-xl mb-2 text-white">{{ t('features.speed.title') }}</h3>
            <p class="text-sm text-slate-300">{{ t('features.speed.desc') }}</p>
          </div>
        </div>
        <div class="flex flex-col items-center text-center gap-4 p-8 glass-card bg-slate-950/20 hover:bg-slate-950/40 border-white/10 backdrop-blur-sm group hover:-translate-y-2 transition-all duration-500">
          <div class="w-16 h-16 rounded-2xl bg-slate-950/60 border border-gold/40 flex items-center justify-center text-gold group-hover:scale-110 transition-transform shadow-lg shadow-gold/10">
            <Shield class="w-8 h-8" />
          </div>
          <div>
            <h3 class="font-bold text-xl mb-2 text-white">{{ t('features.security.title') }}</h3>
            <p class="text-sm text-slate-300">{{ t('features.security.desc') }}</p>
          </div>
        </div>
        <div class="flex flex-col items-center text-center gap-4 p-8 glass-card bg-slate-950/20 hover:bg-slate-950/40 border-white/10 backdrop-blur-sm group hover:-translate-y-2 transition-all duration-500">
          <div class="w-16 h-16 rounded-2xl bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/10">
            <Search class="w-8 h-8" />
          </div>
          <div>
            <h3 class="font-bold text-xl mb-2 text-white">{{ t('features.seo.title') }}</h3>
            <p class="text-sm text-slate-300">{{ t('features.seo.desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
