<script setup lang="ts">
import { ArrowLeft, ArrowRight, Calendar, Clock, User, MessageSquare } from 'lucide-vue-next'
import { blogPosts } from '~~/shared/blogPosts'

const route = useRoute()
const { locale } = useI18n()
const localePath = useLocalePath()

const isAr = computed(() => locale.value === 'ar')
const slug = computed(() => String(route.params.slug || ''))

const post = computed(() => blogPosts.find((p) => p.slug === slug.value))

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Article not found',
  })
}

const localized = computed(() => (isAr.value ? post.value!.ar : post.value!.en))

useSeoMeta({
  title: () => localized.value.title,
  ogTitle: () => localized.value.title,
  description: () => localized.value.excerpt,
  ogDescription: () => localized.value.excerpt,
  ogImage: () => post.value!.image,
  ogType: 'article',
})

const siteUrl = 'https://codeflowweb.com'

const articleSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: localized.value.title,
  description: localized.value.excerpt,
  image: [post.value!.image],
  datePublished: post.value!.date,
  dateModified: post.value!.date,
  inLanguage: isAr.value ? 'ar' : 'en',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${siteUrl}${localePath(`/blog/${post.value!.slug}`)}`
  },
  author: {
    '@type': 'Organization',
    name: localized.value.author,
    url: siteUrl
  },
  publisher: {
    '@type': 'Organization',
    name: 'CodeFlow',
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo_v3.png`
    }
  }
}))

const breadcrumbSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: isAr.value ? 'الرئيسية' : 'Home',
      item: `${siteUrl}${localePath('/')}`
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: isAr.value ? 'المدونة' : 'Blog',
      item: `${siteUrl}${localePath('/blog')}`
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: localized.value.title,
      item: `${siteUrl}${localePath(`/blog/${post.value!.slug}`)}`
    }
  ]
}))

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify(articleSchema.value)
    },
    {
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify(breadcrumbSchema.value)
    }
  ]
})
</script>

<template>
  <div v-if="post" :dir="isAr ? 'rtl' : 'ltr'" class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-32 pb-24">
    <article class="max-w-4xl mx-auto px-4">
      <!-- Back link -->
      <NuxtLink
        :to="localePath('/blog')"
        class="inline-flex items-center gap-2 text-sm font-bold text-primary-600 dark:text-primary-400 hover:underline mb-8"
      >
        <ArrowRight v-if="isAr" class="w-4 h-4" />
        <ArrowLeft v-else class="w-4 h-4" />
        <span>{{ isAr ? 'العودة إلى المدونة' : 'Back to Blog' }}</span>
      </NuxtLink>

      <!-- Header -->
      <header class="space-y-6 mb-10">
        <span class="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
          {{ localized.category }}
        </span>

        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
          {{ localized.title }}
        </h1>

        <div class="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
          <span class="inline-flex items-center gap-2">
            <User class="w-4 h-4" />
            {{ localized.author }}
          </span>
          <span class="inline-flex items-center gap-2">
            <Calendar class="w-4 h-4" />
            {{ post.date }}
          </span>
          <span class="inline-flex items-center gap-2">
            <Clock class="w-4 h-4" />
            {{ localized.readTime }}
          </span>
        </div>
      </header>

      <!-- Cover Image -->
      <div class="rounded-3xl overflow-hidden mb-12 shadow-xl border border-slate-200 dark:border-slate-800 aspect-[16/9]">
        <img :src="post.image" :alt="localized.title" class="w-full h-full object-cover" />
      </div>

      <!-- Content -->
      <div class="bg-white dark:bg-slate-900/50 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 space-y-6 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        <p class="font-semibold text-slate-900 dark:text-white text-lg sm:text-xl">
          {{ localized.excerpt }}
        </p>
        <div class="h-px bg-slate-200 dark:bg-slate-800"></div>
        <p v-for="(paragraph, idx) in localized.content" :key="idx">
          {{ paragraph }}
        </p>
      </div>

      <!-- CTA Box -->
      <div class="mt-12 p-8 sm:p-10 rounded-3xl bg-primary-600 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div class="space-y-2 text-center sm:text-start">
          <h2 class="text-2xl font-bold">
            {{ isAr ? 'هل تريد تطبيق هذه التحسينات على موقعك؟' : 'Want to apply these improvements to your site?' }}
          </h2>
          <p class="text-primary-100 text-sm sm:text-base">
            {{ isAr ? 'احجز استشارة مجانية أو اطلب فحصاً فورياً لموقعك الآن.' : 'Book a free strategy call or request an instant website audit.' }}
          </p>
        </div>
        <a
          href="https://wa.me/201099658770"
          target="_blank"
          class="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-primary-700 font-bold hover:bg-primary-50 transition-colors shrink-0"
        >
          <MessageSquare class="w-5 h-5" />
          <span>{{ isAr ? 'تواصل عبر واتساب' : 'Chat on WhatsApp' }}</span>
        </a>
      </div>
    </article>
  </div>
</template>
