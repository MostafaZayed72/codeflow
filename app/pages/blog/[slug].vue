<script setup lang="ts">
import { ArrowLeft, ArrowRight, Calendar, Clock, User, MessageSquare, Share2, Check, Copy, Linkedin } from 'lucide-vue-next'
import { blogPosts } from '~~/shared/blogPosts'

const route = useRoute()
const { locale } = useI18n()
const localePath = useLocalePath()

const isAr = computed(() => locale.value === 'ar')
const slug = computed(() => String(route.params.slug || ''))
const siteUrl = 'https://codeflowweb.com'

const post = computed(() => blogPosts.find((p) => p.slug === slug.value))

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Article not found',
  })
}

const localized = computed(() => (isAr.value ? post.value!.ar : post.value!.en))
const articleUrl = computed(() => `${siteUrl}${localePath(`/blog/${post.value!.slug}`)}`)

const copied = ref(false)
const copyLink = async () => {
  if (!import.meta.client) return
  try {
    await navigator.clipboard.writeText(articleUrl.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch {
    // Clipboard fallback ignored
  }
}

const shareLinks = computed(() => {
  const url = encodeURIComponent(articleUrl.value)
  const title = encodeURIComponent(localized.value.title)
  return {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    x: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    whatsapp: `https://wa.me/?text=${title}%20${url}`,
  }
})

const relatedPosts = computed(() =>
  blogPosts
    .filter((p) => p.slug !== slug.value)
    .slice(0, 2)
    .map((p) => ({
      slug: p.slug,
      date: p.date,
      image: p.image,
      ...(isAr.value ? p.ar : p.en),
    }))
)

useSeoMeta({
  title: () => localized.value.title,
  ogTitle: () => localized.value.title,
  description: () => localized.value.excerpt,
  ogDescription: () => localized.value.excerpt,
  ogImage: () => post.value!.image,
  ogType: 'article',
  ogUrl: () => articleUrl.value,
  articlePublishedTime: () => post.value!.date,
  articleSection: () => localized.value.category,
  keywords: () => localized.value.keywords.join(', '),
  twitterCard: 'summary_large_image',
  twitterTitle: () => localized.value.title,
  twitterDescription: () => localized.value.excerpt,
  twitterImage: () => post.value!.image,
})

const articleSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: localized.value.title,
  description: localized.value.excerpt,
  image: [post.value!.image],
  datePublished: post.value!.date,
  dateModified: post.value!.date,
  articleSection: localized.value.category,
  keywords: localized.value.keywords.join(', '),
  inLanguage: isAr.value ? 'ar' : 'en',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': articleUrl.value
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
      item: articleUrl.value
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
  <div v-if="post" :dir="isAr ? 'rtl' : 'ltr'" class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans pt-32 pb-24">
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

        <div class="flex flex-wrap items-center justify-between gap-4">
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

          <!-- Top Quick Share -->
          <div class="flex items-center gap-2">
            <a
              :href="shareLinks.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#0A66C2]/10 text-[#0A66C2] dark:bg-[#0A66C2]/20 dark:text-sky-300 hover:bg-[#0A66C2] hover:text-white transition-colors"
            >
              <Linkedin class="w-3.5 h-3.5" />
              <span>{{ isAr ? 'لينكدإن' : 'LinkedIn' }}</span>
            </a>
            <button
              type="button"
              @click="copyLink"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-primary-600 hover:text-white transition-colors"
            >
              <Check v-if="copied" class="w-3.5 h-3.5" />
              <Copy v-else class="w-3.5 h-3.5" />
              <span>{{ copied ? (isAr ? 'تم النسخ' : 'Copied!') : (isAr ? 'نسخ الرابط' : 'Copy Link') }}</span>
            </button>
          </div>
        </div>
      </header>

      <!-- Full Cover Image (No Cropping) -->
      <div class="rounded-3xl overflow-hidden mb-12 shadow-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/90 flex items-center justify-center p-3">
        <img :src="post.image" :alt="localized.title" class="w-full max-h-[520px] object-contain rounded-2xl" />
      </div>

      <!-- Structured Article Content -->
      <div class="bg-white dark:bg-slate-900/50 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 space-y-8 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        <p class="font-semibold text-slate-900 dark:text-white text-lg sm:text-xl">
          {{ localized.excerpt }}
        </p>
        <div class="h-px bg-slate-200 dark:bg-slate-800"></div>

        <section v-for="(section, sIdx) in localized.sections" :key="sIdx" class="space-y-4">
          <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {{ section.heading }}
          </h2>
          <p v-for="(paragraph, pIdx) in section.paragraphs" :key="pIdx">
            {{ paragraph }}
          </p>
          <ul v-if="section.bullets?.length" class="space-y-2.5 pt-2 list-disc list-inside text-slate-700 dark:text-slate-300">
            <li v-for="(bullet, bIdx) in section.bullets" :key="bIdx" class="leading-relaxed">
              {{ bullet }}
            </li>
          </ul>
        </section>

        <!-- Tags -->
        <div class="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
          <span
            v-for="tag in localized.keywords"
            :key="tag"
            class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            # {{ tag }}
          </span>
        </div>

        <!-- Bottom Social Share Bar -->
        <div class="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base">
            <Share2 class="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span>{{ isAr ? 'شارك المقال مع شبكتك:' : 'Share this article:' }}</span>
          </div>

          <div class="flex flex-wrap items-center gap-2.5">
            <a
              :href="shareLinks.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-[#0A66C2] text-white hover:opacity-90 transition-opacity"
            >
              <Linkedin class="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              :href="shareLinks.x"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 transition-opacity"
            >
              <span>X</span>
            </a>

            <a
              :href="shareLinks.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-[#1877F2] text-white hover:opacity-90 transition-opacity"
            >
              <span>{{ isAr ? 'فيسبوك' : 'Facebook' }}</span>
            </a>

            <a
              :href="shareLinks.whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-[#25D366] text-white hover:opacity-90 transition-opacity"
            >
              <MessageSquare class="w-4 h-4" />
              <span>{{ isAr ? 'واتساب' : 'WhatsApp' }}</span>
            </a>

            <button
              type="button"
              @click="copyLink"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-primary-600 hover:text-white transition-colors"
            >
              <Check v-if="copied" class="w-4 h-4" />
              <Copy v-else class="w-4 h-4" />
              <span>{{ copied ? (isAr ? 'تم النسخ' : 'Copied!') : (isAr ? 'نسخ الرابط' : 'Copy Link') }}</span>
            </button>
          </div>
        </div>
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

      <!-- Related Articles (Internal Linking for SEO) -->
      <div v-if="relatedPosts.length" class="mt-16 space-y-6">
        <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white">
          {{ isAr ? 'مقالات ذات صلة' : 'Related Articles' }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NuxtLink
            v-for="rel in relatedPosts"
            :key="rel.slug"
            :to="localePath(`/blog/${rel.slug}`)"
            class="group bg-white dark:bg-slate-900/60 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-primary-500/50 transition-all flex gap-4 items-center"
          >
            <img :src="rel.image" :alt="rel.title" loading="lazy" class="w-24 h-20 object-contain rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0" />
            <div class="space-y-1">
              <span class="text-xs font-bold text-primary-600 dark:text-primary-400">{{ rel.category }}</span>
              <h3 class="font-bold text-slate-900 dark:text-white group-hover:text-primary-600 transition-colors line-clamp-2">
                {{ rel.title }}
              </h3>
            </div>
          </NuxtLink>
        </div>
      </div>
    </article>
  </div>
</template>
