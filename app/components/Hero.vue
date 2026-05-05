<script setup lang="ts">
import { ArrowRight, Zap, Shield, Search } from 'lucide-vue-next'
const { t, locale } = useI18n()
</script>

<template>
  <section class="relative pt-32 pb-20 overflow-hidden">
    <!-- Advanced Animated Background System -->
    <div class="absolute inset-0 -z-10 pointer-events-none overflow-hidden bg-slate-50 dark:bg-[#020617]">
      <!-- Liquid Mesh Animation -->
      <svg class="absolute inset-0 w-full h-full opacity-40 dark:opacity-60 mix-blend-multiply dark:mix-blend-screen" xmlns="http://www.w3.org/2000/svg">
        <filter id="liquid">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" seed="1">
            <animate attributeName="baseFrequency" dur="30s" values="0.01;0.015;0.01" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="50" />
        </filter>
        <g filter="url(#liquid)">
          <circle cx="20%" cy="20%" r="35%" fill="rgba(14, 165, 233, 0.4)">
            <animate attributeName="cx" dur="20s" values="20%;30%;20%" repeatCount="indefinite" />
            <animate attributeName="cy" dur="25s" values="20%;40%;20%" repeatCount="indefinite" />
          </circle>
          <circle cx="80%" cy="30%" r="40%" fill="rgba(212, 175, 55, 0.3)">
            <animate attributeName="cx" dur="22s" values="80%;70%;80%" repeatCount="indefinite" />
            <animate attributeName="cy" dur="28s" values="30%;50%;30%" repeatCount="indefinite" />
          </circle>
          <circle cx="50%" cy="80%" r="35%" fill="rgba(16, 185, 129, 0.2)">
            <animate attributeName="cx" dur="25s" values="50%;40%;50%" repeatCount="indefinite" />
            <animate attributeName="cy" dur="20s" values="80%;70%;80%" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
      
      <!-- Tech Grid Overlay -->
      <div class="absolute inset-0 bg-grid-slate text-slate-300/[0.1] dark:text-slate-800/[0.2] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
      
      <!-- Floating Particles -->
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 pt-10 text-center">
      <div class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/50 dark:bg-primary-950/30 backdrop-blur-md border border-slate-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-10 shadow-sm animate-fade-in mx-auto">
        <Zap class="w-4 h-4 fill-current" />
        <span class="tracking-wide uppercase text-xs">{{ t('hero.badge') }}</span>
      </div>

      <h1 class="text-5xl md:text-8xl font-black tracking-tighter mb-8 animate-fade-in-up leading-[1.1]">
        <span class="block text-slate-900 dark:text-white drop-shadow-sm">{{ t('hero.title') }}</span>
        <span class="block bg-gradient-to-r from-primary-600 via-primary-500 to-gold bg-clip-text text-transparent pb-2">
          {{ t('hero.subtitle') }}
        </span>
      </h1>

      <p class="max-w-3xl mx-auto text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 animate-fade-in-up [animation-delay:200ms] leading-relaxed">
        {{ t('hero.description') }}
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up [animation-delay:400ms]">
        <a
          href="https://wa.me/201117108646"
          target="_blank"
          class="btn-primary w-full sm:w-auto gap-3 text-xl px-10 py-5 shadow-2xl shadow-primary-500/30 group"
        >
          {{ t('hero.cta') }}
          <ArrowRight class="w-6 h-6 group-hover:translate-x-1 transition-transform" :class="[locale === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : '']" />
        </a>
        <a
          href="#services"
          class="btn-outline w-full sm:w-auto text-xl px-10 py-5 bg-white/20 dark:bg-transparent backdrop-blur-sm"
        >
          {{ t('services.title') }}
        </a>
      </div>

      <!-- Hero Features (Enhanced) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 max-w-6xl mx-auto animate-fade-in-up [animation-delay:600ms]">
        <div class="flex flex-col items-center text-center gap-4 p-10 glass-card group hover:bg-white dark:hover:bg-slate-900/80 transition-all duration-500 hover:-translate-y-2 border-slate-200/50">
          <div class="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/10">
            <Zap class="w-8 h-8" />
          </div>
          <div>
            <h3 class="font-bold text-xl mb-2">{{ t('features.speed.title') }}</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">{{ t('features.speed.desc') }}</p>
          </div>
        </div>
        <div class="flex flex-col items-center text-center gap-4 p-10 glass-card group hover:bg-white dark:hover:bg-slate-900/80 transition-all duration-500 hover:-translate-y-2 border-slate-200/50">
          <div class="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform shadow-lg shadow-gold/10">
            <Shield class="w-8 h-8" />
          </div>
          <div>
            <h3 class="font-bold text-xl mb-2">{{ t('features.security.title') }}</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">{{ t('features.security.desc') }}</p>
          </div>
        </div>
        <div class="flex flex-col items-center text-center gap-4 p-10 glass-card group hover:bg-white dark:hover:bg-slate-900/80 transition-all duration-500 hover:-translate-y-2 border-slate-200/50">
          <div class="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/10">
            <Search class="w-8 h-8" />
          </div>
          <div>
            <h3 class="font-bold text-xl mb-2">{{ t('features.seo.title') }}</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">{{ t('features.seo.desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
