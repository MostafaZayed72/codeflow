<script setup lang="ts">
import { ExternalLink, ArrowUpRight } from 'lucide-vue-next'
const { t } = useI18n()

const projects = computed(() => [
  {
    id: 1,
    title: t('work.project1.title'),
    category: t('work.project1.category'),
    desc: t('work.project1.desc'),
    image: '/projects/secure.png',
    link: 'https://secure-seven-omega.vercel.app/'
  },
  {
    id: 2,
    title: t('work.project2.title'),
    category: t('work.project2.category'),
    desc: t('work.project2.desc'),
    image: '/projects/squareone.png',
    link: 'https://square-one-seven.vercel.app/'
  },
  {
    id: 3,
    title: t('work.project3.title'),
    category: t('work.project3.category'),
    desc: t('work.project3.desc'),
    image: '/projects/damsa.png',
    link: 'https://damsa.cloud/'
  },
  {
    id: 4,
    title: t('work.project4.title'),
    category: t('work.project4.category'),
    desc: t('work.project4.desc'),
    image: '/projects/zabots.png',
    link: 'https://zabots.vercel.app/'
  },
  {
    id: 5,
    title: t('work.project5.title'),
    category: t('work.project5.category'),
    desc: t('work.project5.desc'),
    image: '/projects/salhia.png',
    link: 'https://salhiakids.vercel.app/'
  },
  {
    id: 6,
    title: t('work.project6.title'),
    category: t('work.project6.category'),
    desc: t('work.project6.desc'),
    image: '/projects/khatwat.png',
    link: 'http://khataw.at/'
  },
  {
    id: 7,
    title: t('work.project7.title'),
    category: t('work.project7.category'),
    desc: t('work.project7.desc'),
    image: '/projects/tqdr.png',
    link: 'https://tqdr.vercel.app/'
  },
  {
    id: 8,
    title: t('work.project8.title'),
    category: t('work.project8.category'),
    desc: t('work.project8.desc'),
    image: '/projects/mostafa_portfolio.png',
    link: 'https://mostafa-zayed.vercel.app/'
  },
  {
    id: 9,
    title: t('work.project9.title'),
    category: t('work.project9.category'),
    desc: t('work.project9.desc'),
    image: '/projects/happy_paws.png',
    link: 'https://happy-paws-sepia.vercel.app/'
  }
])
</script>

<template>
  <section id="work" class="py-24 bg-white dark:bg-[#020617] fade-in-on-scroll">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="section-title inline-block mb-4">{{ t('work.title') }}</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="group relative bg-slate-50 dark:bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        >
          <!-- Project Image -->
          <div class="aspect-video overflow-hidden relative">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <a 
                :href="project.link" 
                target="_blank"
                class="btn-primary !rounded-full !p-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
              >
                <ArrowUpRight class="w-6 h-6" />
              </a>
            </div>
          </div>

          <!-- Project Info -->
          <div class="p-8">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
                {{ project.category }}
              </span>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary-600 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              {{ project.desc }}
            </p>
            <a 
              :href="project.link" 
              target="_blank"
              class="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-primary-600 transition-colors"
            >
              {{ t('work.view_project') }}
              <ExternalLink class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
