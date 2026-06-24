<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'
const colorMode = useColorMode()
const { t } = useI18n()

defineProps<{
  showText?: boolean
}>()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <ClientOnly>
    <button
      @click="toggleTheme"
      class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all active:scale-95 font-medium text-sm"
      aria-label="Toggle theme"
    >
      <template v-if="colorMode.value === 'dark'">
        <Sun class="w-4 h-4 text-amber-500 animate-in fade-in zoom-in duration-300" />
        <span v-if="showText">{{ t('nav.light_mode') }}</span>
      </template>
      <template v-else>
        <Moon class="w-4 h-4 text-primary-600 animate-in fade-in zoom-in duration-300" />
        <span v-if="showText">{{ t('nav.dark_mode') }}</span>
      </template>
    </button>
  </ClientOnly>
</template>
