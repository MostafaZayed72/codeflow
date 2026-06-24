<script setup lang="ts">
import { Paintbrush, Code2, RefreshCw, Layout, Zap, Terminal } from 'lucide-vue-next'
const { t } = useI18n()

const services = computed(() => [
  {
    title: t('services.design.title'),
    desc: t('services.design.desc'),
    icon: Paintbrush,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600',
    color: 'text-pink-600',
    bg: 'bg-pink-50 dark:bg-pink-950/30'
  },
  {
    title: t('services.development.title'),
    desc: t('services.development.desc'),
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600',
    color: 'text-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-950/30'
  },
  {
    title: t('services.redesign.title'),
    desc: t('services.redesign.desc'),
    icon: RefreshCw,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    color: 'text-amber-600',
    bg: 'bg-amber-50 dark:bg-amber-950/30'
  },
  {
    title: t('services.wordpress.title'),
    desc: t('services.wordpress.desc'),
    icon: Layout,
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30'
  },
  {
    title: t('services.framer.title'),
    desc: t('services.framer.desc'),
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
    color: 'text-purple-600',
    bg: 'bg-purple-50 dark:bg-purple-950/30'
  },
  {
    title: t('services.custom.title'),
    desc: t('services.custom.desc'),
    icon: Terminal,
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=600',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30'
  }
])
</script>

<template>
  <section id="services" class="py-16 md:py-24 bg-slate-50 dark:bg-[#020617] fade-in-on-scroll">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title inline-block">{{ t('services.title') }}</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="group relative bg-white dark:bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl fade-in-on-scroll"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <!-- Service Image -->
          <div class="h-48 overflow-hidden relative">
            <img 
              :src="service.image" 
              :alt="t(`services.${service.key}.title`)" 
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent opacity-20"></div>
          </div>

          <div class="p-8 pt-4">
            <div :class="[service.bg, service.color]" class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 -mt-12 relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-500">
              <component :is="service.icon" class="w-7 h-7" />
            </div>
            <h3 class="text-base xs:text-lg sm:text-xl md:text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">{{ service.title }}</h3>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              {{ service.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
