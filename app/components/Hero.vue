<script setup lang="ts">
import { ArrowRight, Zap, Shield, Search } from 'lucide-vue-next'
const { t, locale } = useI18n()
</script>

<template>
  <section class="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
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
    </div>

    <div class="max-w-7xl mx-auto px-4 w-full text-center relative z-10 flex flex-col items-center">
      <!-- Badge -->
      <div class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-primary-200 text-sm font-semibold mb-8 shadow-lg shadow-black/10 animate-fade-in transition-colors duration-500">
        <Zap class="w-4 h-4 fill-current text-primary-400" />
        <span class="tracking-wide uppercase text-xs">{{ t('hero.badge') }}</span>
      </div>

      <h1 class="max-w-5xl text-2xl xs:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8 animate-fade-in-up leading-[1.3] md:leading-[1.3] text-center">
        <span class="block text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] mb-3 transition-colors duration-500">
          {{ t('hero.title') }}
        </span>
        <span class="block bg-gradient-to-r from-primary-400 via-primary-300 to-gold bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-colors duration-500 pb-4">
          {{ t('hero.subtitle') }}
        </span>
      </h1>

      <!-- Hero Description -->
      <p class="max-w-3xl text-sm md:text-xl text-slate-200 mb-12 animate-fade-in-up [animation-delay:200ms] leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] font-medium transition-colors duration-500">
        {{ t('hero.description') }}
      </p>

      <!-- CTAs Directly on Section Background -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto animate-fade-in-up [animation-delay:400ms] mb-10 md:mb-20 mt-20 md:mt-12">
        <a
          :href="locale === 'ar' ? 'https://wa.me/201099658770?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20CodeFlow%D8%8C%20%D8%A3%D9%8ود%20%D8%AD%D8%AC%D8%B2%20%D9%85%D9%83%D8%A7%D9%84%D9%85%D8%A9%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D9%8A%D8%A9%20%D9%84%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84%D9%8I' : 'https://wa.me/201099658770?text=Hello%20CodeFlow,%20I%20would%20like%20to%20book%20a%20strategy%20call%20for%20my%20project.'"
          target="_blank"
          @click="$trackClick('hero_strategy_call')"
          class="btn-primary w-full sm:w-auto gap-2 text-sm sm:text-xl px-6 sm:px-10 py-4 sm:py-5 shadow-2xl shadow-primary-500/30 group whitespace-nowrap"
        >
          {{ t('hero.cta') }}
          <ArrowRight class="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" :class="[locale === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : '']" />
        </a>
        <div class="relative w-full sm:w-auto group">
          <div class="absolute -inset-1 bg-gradient-to-r from-primary-600 to-gold rounded-2xl blur opacity-15 dark:opacity-25 md:opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <a
            :href="locale === 'ar' ? 'https://wa.me/201099658770?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20CodeFlow%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%AA%D8%AD%D9%84%D9%8A%D9%84%20%D9%85%D8%AC%D8%A7%D9%86%D9%8ي%20%D9%84%D9%85%D9%88%D9%82%D8%B9%D9%8I' : 'https://wa.me/201099658770?text=Hello%20CodeFlow,%20I%20would%20like%20to%20get%20a%20free%20website%20audit.'"
            target="_blank"
            @click="$trackClick('hero_free_audit')"
            class="relative w-full sm:w-auto text-sm sm:text-xl px-4 sm:px-10 py-4 sm:py-5 flex items-center justify-center gap-2 transition-all shadow-md dark:shadow-xl shadow-slate-200/50 dark:shadow-black/20 duration-500 rounded-full font-bold whitespace-nowrap bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/5 border-2 border-slate-200 dark:border-white/20 hover:border-primary-500 dark:hover:border-gold text-slate-800 dark:text-white md:bg-white/10 md:border-white/20 md:text-white md:hover:bg-white/5 md:hover:border-gold md:hover:text-gold"
          >
            {{ t('hero.consultation') }}
            <span class="absolute -top-3 -right-3 px-2 py-1 bg-emerald-500 text-white text-[10px] font-black rounded-lg animate-bounce uppercase tracking-tighter">
              Free
            </span>
          </a>
        </div>
      </div>

      <!-- Hero Features -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto animate-fade-in-up [animation-delay:600ms] mt-8 md:mt-0">
        <div class="flex flex-col items-center text-center gap-4 p-8 bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-lg dark:shadow-xl shadow-slate-200/10 dark:shadow-black/20 group hover:-translate-y-2 transition-all duration-500 rounded-3xl">
          <div class="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-950/60 border border-primary-200 dark:border-primary-800/50 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/10 duration-500">
            <Zap class="w-8 h-8" />
          </div>
          <div>
            <h3 class="font-bold text-xl mb-2 text-slate-900 dark:text-white">{{ t('features.speed.title') }}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{{ t('features.speed.desc') }}</p>
          </div>
        </div>
        <div class="flex flex-col items-center text-center gap-4 p-8 bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-lg dark:shadow-xl shadow-slate-200/10 dark:shadow-black/20 group hover:-translate-y-2 transition-all duration-500 rounded-3xl">
          <div class="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-slate-950/60 border border-amber-200 dark:border-gold/45 flex items-center justify-center text-amber-600 dark:text-gold group-hover:scale-110 transition-transform shadow-lg shadow-gold/10 duration-500">
            <Shield class="w-8 h-8" />
          </div>
          <div>
            <h3 class="font-bold text-xl mb-2 text-slate-900 dark:text-white">{{ t('features.security.title') }}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{{ t('features.security.desc') }}</p>
          </div>
        </div>
        <div class="flex flex-col items-center text-center gap-4 p-8 bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-lg dark:shadow-xl shadow-slate-200/10 dark:shadow-black/20 group hover:-translate-y-2 transition-all duration-500 rounded-3xl">
          <div class="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/10 duration-500">
            <Search class="w-8 h-8" />
          </div>
          <div>
            <h3 class="font-bold text-xl mb-2 text-slate-900 dark:text-white">{{ t('features.seo.title') }}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{{ t('features.seo.desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
