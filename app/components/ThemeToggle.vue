<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <ClientOnly>
    <button
      @click="toggleTheme"
      class="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all active:scale-95"
      aria-label="Toggle Theme"
    >
      <Sun v-if="colorMode.value === 'dark'" class="w-6 h-6 text-gold animate-in fade-in zoom-in duration-300" />
      <Moon v-else class="w-6 h-6 text-primary-600 animate-in fade-in zoom-in duration-300" />
    </button>
  </ClientOnly>
</template>
