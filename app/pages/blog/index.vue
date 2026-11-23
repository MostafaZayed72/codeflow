<script setup lang="ts">
import { ArrowLeft, ArrowRight, Calendar, Clock, BookOpen } from 'lucide-vue-next'
import { blogPosts } from '~~/shared/blogPosts'

const { locale } = useI18n()
const localePath = useLocalePath()

const isAr = computed(() => locale.value === 'ar')

useSeoMeta({
  title: () => (isAr.value ? 'المدونة والمقالات التقنية' : 'Blog & Technical Insights'),
  ogTitle: () => (isAr.value ? 'مدونة كود فلو | مقالات تطوير الويب والسيو وزيادة المبيعات' : 'CodeFlow Blog | Web Development, SEO & CRO Insights'),
  description: () =>
    isAr.value
      ? 'مقالات عملية حول تسريع المواقع، تحسين محركات البحث، وأتمتة الأعمال لزيادة مبيعاتك عبر الإنترنت.'
      : 'Actionable articles on web performance, technical SEO, and business automation to grow your online revenue.',
})

const localizedPosts = computed(() =>
  blogPosts.map((post) => ({
    slug: post.slug,
    date: post.date,
    image: post.image,
    ...(isAr.value ? post.ar : post.en),
  }))
)

const siteUrl = 'https://codeflowweb.com'

const blogSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: isAr.value ? 'مدونة كود فلو' : 'CodeFlow Blog',
  description: isAr.value
    ? 'مقالات عملية حول تسريع المواقع، تحسين محركات البحث، وأتمتة الأعمال لزيادة مبيعاتك عبر الإنترنت.'
    : 'Actionable articles on web performance, technical SEO, and business automation to grow your online revenue.',
  url: `${siteUrl}${localePath('/blog')}`,
  inLanguage: isAr.value ? 'ar' : 'en',
  blogPost: localizedPosts.value.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    url: `${siteUrl}${localePath(`/blog/${post.slug}`)}`,
    author: {
      '@type': 'Organization',
      name: post.author
    }
  }))
}))

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify(blogSchema.value)
    }
  ]
})
</script>

<template>
  <div :dir="isAr ? 'rtl' : 'ltr'" class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-32 pb-24">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Header -->
      <div class="max-w-3xl mx-auto text-center mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-bold">
          <BookOpen class="w-4 h-4" />
          <span>{{ isAr ? 'مدونة كود فلو' : 'CodeFlow Blog' }}</span>
        </div>
        <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          {{ isAr ? 'مقالات وأدلة عملية لنمو مشروعك الرقمي' : 'Practical Guides to Grow Your Digital Business' }}
        </h1>
        <p class="text-base sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          {{
            isAr
              ? 'نشاركك خلاصة خبرتنا في تسريع المواقع، تصدر نتائج البحث، وتحويل الزوار إلى عملاء دائمين.'
              : 'Insights from our engineering team on sub-second performance, technical SEO, and conversion optimization.'
          }}
        </p>
      </div>

      <!-- Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="post in localizedPosts"
          :key="post.slug"
          class="group bg-white dark:bg-slate-900/60 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-2xl flex flex-col"
        >
          <NuxtLink :to="localePath(`/blog/${post.slug}`)" class="block h-52 overflow-hidden relative">
            <img
              :src="post.image"
              :alt="post.title"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span class="absolute top-4 start-4 px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-slate-900/90 text-primary-600 dark:text-primary-400 backdrop-blur-sm shadow-sm">
              {{ post.category }}
            </span>
          </NuxtLink>

          <div class="p-7 flex flex-col flex-1">
            <div class="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
              <span class="inline-flex items-center gap-1.5">
                <Calendar class="w-3.5 h-3.5" />
                {{ post.date }}
              </span>
              <span class="inline-flex items-center gap-1.5">
                <Clock class="w-3.5 h-3.5" />
                {{ post.readTime }}
              </span>
            </div>

            <h2 class="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-snug">
              <NuxtLink :to="localePath(`/blog/${post.slug}`)">
                {{ post.title }}
              </NuxtLink>
            </h2>

            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
              {{ post.excerpt }}
            </p>

            <NuxtLink
              :to="localePath(`/blog/${post.slug}`)"
              class="inline-flex items-center gap-2 text-sm font-bold text-primary-600 dark:text-primary-400 hover:gap-3 transition-all"
            >
              <span>{{ isAr ? 'اقرأ المقال كاملاً' : 'Read Full Article' }}</span>
              <ArrowLeft v-if="isAr" class="w-4 h-4" />
              <ArrowRight v-else class="w-4 h-4" />
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
