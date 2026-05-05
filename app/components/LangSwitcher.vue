<script setup lang="ts">
import { Languages } from 'lucide-vue-next'
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const toggleLocale = () => {
  const nextLocale = availableLocales.value[0].code
  setLocale(nextLocale)
}
</script>

<template>
  <button
    @click="toggleLocale"
    class="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors font-medium text-sm"
  >
    <Languages class="w-4 h-4" />
    <span>{{ availableLocales[0].name }}</span>
  </button>
</template>
