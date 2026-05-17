<script setup lang="ts">
import { ArrowRight, Zap, Shield, Search } from 'lucide-vue-next'
const { t, locale } = useI18n()
</script>

<template>
  <section class="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center pt-32 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950 md:bg-slate-950 transition-colors duration-500">
    <!-- Advanced Clean Background System with Video -->
    <div class="absolute inset-x-0 top-0 h-[60vh] md:h-full md:inset-0 z-0 pointer-events-none overflow-hidden bg-slate-950">
      <!-- Responsive Background Video -->
      <video
        autoplay
        loop
        muted
        playsinline
        class="absolute inset-0 w-full h-full object-cover object-[center_top] md:object-center opacity-100 transition-opacity duration-1000"
      >
        <source :src="'/hero.webm'" type="video/webm" />
        <source :src="'/hero.mp4'" type="video/mp4" />
      </video>
      
      <!-- Unified Professional Cinematic Dark Filter for ultimate text contrast -->
      <div class="absolute inset-0 bg-slate-950/45 dark:bg-slate-950/65"></div>

      <!-- Theme-Aware Seamless Fade Gradient for Mobile -->
      <!-- Blends the dark video gracefully into the white/dark background below -->
      <div class="block md:hidden absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent transition-colors duration-500"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 w-full text-center relative z-10 flex flex-col items-center">
      <!-- Badge (Untouched, always white text over video) -->
      <div class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-primary-200 text-sm font-semibold mb-8 shadow-lg shadow-black/10 animate-fade-in transition-colors duration-500">
        <Zap class="w-4 h-4 fill-current text-primary-400" />
        <span class="tracking-wide uppercase text-xs">{{ t('hero.badge') }}</span>
      </div>

      <h1 class="max-w-5xl text-4xl md:text-7xl font-black tracking-tighter mb-8 animate-fade-in-up leading-[1.5]">
        <span class="block text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-colors duration-500">{{ t('hero.title') }}</span>
        <span class="inline-block bg-gradient-to-r from-primary-400 via-primary-300 to-gold bg-clip-text text-transparent pb-6 -mb-6 pt-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-colors duration-500">
          {{ t('hero.subtitle') }}
        </span>
      </h1>

      <!-- Hero Description (Untouched, always white over video) -->
      <p class="max-w-3xl text-lg md:text-xl text-slate-200 mb-12 animate-fade-in-up [animation-delay:200ms] leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] font-medium transition-colors duration-500">
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
          <div class="absolute -inset-1 bg-gradient-to-r from-primary-600 to-gold rounded-2xl blur opacity-15 dark:opacity-25 md:opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <a
            href="https://wa.me/201117108646"
            target="_blank"
            class="relative btn-outline w-full sm:w-auto text-xl px-10 py-5 bg-white dark:bg-white/10 md:bg-white/10 backdrop-blur-sm border-2 border-slate-200 dark:border-white/20 md:border-white/20 hover:border-primary-500 text-slate-900 dark:text-white md:text-white hover:text-primary-600 dark:hover:text-white md:hover:text-white flex items-center justify-center gap-2 transition-all shadow-xl shadow-black/5 dark:shadow-black/20 md:shadow-black/20 duration-500"
          >
            {{ t('hero.consultation') }}
            <span class="absolute -top-3 -right-3 px-2 py-1 bg-emerald-500 text-white text-[10px] font-black rounded-lg animate-bounce uppercase tracking-tighter">
              Free
            </span>
          </a>
        </div>
      </div>

      <!-- Hero Features (Theme-aware ONLY on mobile, strictly dark on desktop) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto animate-fade-in-up [animation-delay:600ms] mt-8 md:mt-0">
        <div class="flex flex-col items-center text-center gap-4 p-8 bg-white dark:bg-slate-900/60 md:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 md:border-slate-800/80 backdrop-blur-md shadow-xl shadow-slate-200/50 dark:shadow-black/20 md:shadow-black/20 group hover:-translate-y-2 transition-all duration-500 rounded-3xl">
          <div class="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-950/60 md:bg-primary-950/60 border border-primary-100 dark:border-primary-800/50 md:border-primary-800/50 flex items-center justify-center text-primary-500 dark:text-primary-400 md:text-primary-400 group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/10 duration-500">
            <Zap class="w-8 h-8" />
          </div>
          <div>
            <h3 class="font-bold text-xl mb-2 text-slate-900 dark:text-white md:text-white transition-colors duration-500">{{ t('features.speed.title') }}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300 md:text-slate-300 leading-relaxed transition-colors duration-500">{{ t('features.speed.desc') }}</p>
          </div>
        </div>
        <div class="flex flex-col items-center text-center gap-4 p-8 bg-white dark:bg-slate-900/60 md:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 md:border-slate-800/80 backdrop-blur-md shadow-xl shadow-slate-200/50 dark:shadow-black/20 md:shadow-black/20 group hover:-translate-y-2 transition-all duration-500 rounded-3xl">
          <div class="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-slate-950/60 md:bg-slate-950/60 border border-amber-100 dark:border-gold/40 md:border-gold/40 flex items-center justify-center text-amber-500 dark:text-gold md:text-gold group-hover:scale-110 transition-transform shadow-lg shadow-gold/10 duration-500">
            <Shield class="w-8 h-8" />
          </div>
          <div>
            <h3 class="font-bold text-xl mb-2 text-slate-900 dark:text-white md:text-white transition-colors duration-500">{{ t('features.security.title') }}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300 md:text-slate-300 leading-relaxed transition-colors duration-500">{{ t('features.security.desc') }}</p>
          </div>
        </div>
        <div class="flex flex-col items-center text-center gap-4 p-8 bg-white dark:bg-slate-900/60 md:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 md:border-slate-800/80 backdrop-blur-md shadow-xl shadow-slate-200/50 dark:shadow-black/20 md:shadow-black/20 group hover:-translate-y-2 transition-all duration-500 rounded-3xl">
          <div class="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 md:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/50 md:border-emerald-800/50 flex items-center justify-center text-emerald-500 dark:text-emerald-400 md:text-emerald-400 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/10 duration-500">
            <Search class="w-8 h-8" />
          </div>
          <div>
            <h3 class="font-bold text-xl mb-2 text-slate-900 dark:text-white md:text-white transition-colors duration-500">{{ t('features.seo.title') }}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300 md:text-slate-300 leading-relaxed transition-colors duration-500">{{ t('features.seo.desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
