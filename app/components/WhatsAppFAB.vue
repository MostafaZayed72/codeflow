<script setup lang="ts">
import { MessageCircle } from 'lucide-vue-next'
const { t, locale } = useI18n()

const whatsappNumber = '201099658770'
const message = encodeURIComponent('مرحباً كود فلو! أنا مهتم بخدماتكم الرقمية.')
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
</script>

<template>
  <a
    :href="whatsappUrl"
    target="_blank"
    @click="$trackClick('whatsapp_fab')"
    class="fixed bottom-8 z-50 p-4 rounded-2xl bg-[#25D366] text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-transform duration-300 flex items-center gap-2"
    :class="[locale === 'ar' ? 'right-8' : 'left-8']"
    aria-label="Contact on WhatsApp"
  >
    <MessageCircle class="w-6 h-6 fill-current" />
    <span class="font-bold hidden md:block">{{ t('hero.cta') }}</span>
  </a>
</template>
