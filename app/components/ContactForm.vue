<script setup lang="ts">
import { Send, User, Phone as PhoneIcon, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-vue-next'
const { t, locale } = useI18n()

const form = reactive({
  name: '',
  phone: '',
  message: ''
})

const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')

const handleSubmit = async () => {
  status.value = 'loading'
  try {
    // We use our local SMTP server route to send emails.
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        whatsapp: form.phone,
        message: form.message
      })
    })

    if (response.ok) {
      status.value = 'success'
      try {
        const nuxtApp = useNuxtApp()
        nuxtApp.$trackFormSubmit()
      } catch (e) {
        console.error('Analytics tracking failed', e)
      }
      form.name = ''
      form.phone = ''
      form.message = ''
      setTimeout(() => {
        status.value = 'idle'
      }, 5000)
    } else {
      status.value = 'error'
    }
  } catch (error) {
    console.error('Submission error:', error)
    status.value = 'error'
  }
}
</script>

<template>
  <div class="glass-card p-8 md:p-10 border-slate-200/50 dark:border-slate-800/50 shadow-2xl relative overflow-hidden">
    <!-- Success Overlay -->
    <Transition name="fade">
      <div v-if="status === 'success'" class="absolute inset-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-6">
        <CheckCircle2 class="w-20 h-20 text-emerald-500 mb-4 animate-bounce" />
        <h3 class="text-2xl font-black mb-2 text-slate-900 dark:text-white">{{ t('contact_form.success') }}</h3>
      </div>
    </Transition>

    <h3 class="text-3xl font-black mb-2 text-slate-900 dark:text-white">{{ t('contact_form.title') }}</h3>
    <p class="text-slate-500 dark:text-slate-400 mb-8">{{ t('contact_form.subtitle') }}</p>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Name -->
      <div class="space-y-2">
        <label class="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <User class="w-4 h-4 text-primary-500" />
          {{ t('contact_form.name') }}
        </label>
        <input 
          v-model="form.name"
          type="text" 
          required
          class="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-slate-800 transition-all outline-none text-slate-900 dark:text-white placeholder:text-slate-400 font-sans"
          :placeholder="t('contact_form.name')"
        >
      </div>

      <!-- Phone/WhatsApp -->
      <div class="space-y-2">
        <label class="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <PhoneIcon class="w-4 h-4 text-primary-500" />
          {{ t('contact_form.whatsapp') }}
        </label>
        <input 
          v-model="form.phone"
          type="text" 
          required
          :dir="locale === 'ar' ? 'rtl' : 'ltr'"
          class="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-slate-800 transition-all outline-none text-slate-900 dark:text-white placeholder:text-slate-400 font-sans"
          :placeholder="t('contact_form.whatsapp')"
        >
      </div>

      <!-- Message -->
      <div class="space-y-2">
        <label class="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <MessageSquare class="w-4 h-4 text-primary-500" />
          {{ t('contact_form.message') }}
        </label>
        <textarea 
          v-model="form.message"
          required
          rows="4"
          class="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-slate-800 transition-all outline-none resize-none text-slate-900 dark:text-white placeholder:text-slate-400 font-sans"
          :placeholder="t('contact_form.message')"
        ></textarea>
      </div>

      <button 
        type="submit"
        :disabled="status === 'loading'"
        class="btn-primary w-full py-5 text-xl font-black rounded-2xl shadow-xl shadow-primary-500/20 flex items-center justify-center gap-3 group"
      >
        <span v-if="status === 'loading'" class="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></span>
        <template v-else>
          {{ t('contact_form.submit') }}
          <Send class="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </template>
      </button>

      <div v-if="status === 'error'" class="p-4 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-600 flex items-center gap-3">
        <AlertCircle class="w-5 h-5" />
        {{ t('contact_form.error') }}
      </div>
    </form>
  </div>
</template>

<style scoped>
.glass-card {
  @apply bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] border transition-all duration-300;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
