<script setup lang="ts">
import { MessageSquare, Menu, X, Phone } from 'lucide-vue-next'
const { t, locale } = useI18n()
const isScrolled = ref(false)
const isMenuOpen = ref(false)

if (import.meta.client) {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
}

const navLinks = [
  { href: '#services', label: 'nav.services' },
  { href: '#solutions', label: 'nav.solutions' },
  { href: '#work', label: 'nav.work' },
  { href: '#testimonials', label: 'nav.testimonials' },
  { href: '#contact', label: 'nav.contact' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<template>
  <nav
    class="fixed top-0 inset-x-0 z-50 transition-all duration-300 px-4 h-20 flex items-center border-b backdrop-blur-md"
    :class="[isScrolled || isMenuOpen ? 'bg-white/80 dark:bg-slate-900/80 shadow-lg border-slate-200/50 dark:border-slate-800/80' : 'bg-white/40 dark:bg-slate-950/30 border-white/10 dark:border-slate-800/30']"
  >
    <div class="max-w-7xl mx-auto w-full flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="relative h-20 w-40 overflow-hidden flex items-center z-[70]" @click="closeMenu">
        <img 
          src="/logo_v3.png" 
          alt="CodeFlow Logo" 
          class="absolute h-32 w-auto max-w-none" 
          :class="[locale === 'ar' ? 'right-0' : 'left-0']"
        />
      </NuxtLink>

      <!-- Desktop Links -->
      <div class="hidden lg:flex items-center gap-8">
        <a 
          v-for="link in navLinks" 
          :key="link.href"
          :href="link.href" 
          class="text-base font-bold hover:text-primary-600 transition-colors"
        >
          {{ t(link.label) }}
        </a>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-3">
        <div class="hidden sm:flex items-center gap-3">
          <LangSwitcher />
          <ThemeToggle />
        </div>
        
        <a
          href="https://wa.me/201099658770"
          target="_blank"
          @click="$trackClick('navbar_whatsapp_desktop')"
          class="hidden md:flex btn-primary !py-2 !px-5 gap-2 text-sm"
        >
          <MessageSquare class="w-4 h-4" />
          {{ t('nav.contact') }}
        </a>

        <!-- Burger Toggle -->
        <button 
          @click="toggleMenu"
          class="lg:hidden p-2.5 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all z-[70]"
        >
          <Menu class="w-7 h-7" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu - Teleported to body -->
    <Teleport to="body">
      <!-- Mobile Menu Overlay -->
      <Transition name="fade">
        <div 
          v-if="isMenuOpen" 
          class="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] lg:hidden"
          @click="closeMenu"
        ></div>
      </Transition>

      <!-- Mobile Menu Drawer -->
      <Transition :name="locale === 'ar' ? 'slide-rtl' : 'slide-ltr'">
        <div 
          v-if="isMenuOpen" 
          class="fixed top-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-slate-950 z-[110] lg:hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] flex flex-col overflow-y-auto"
          :class="[locale === 'ar' ? 'right-0 text-right' : 'left-0 text-left']"
        >
          <!-- Drawer Header with Close Button -->
          <div class="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800 shrink-0">
            <span class="text-xl font-black text-primary-600">CodeFlow</span>
            <button 
              @click="closeMenu"
              class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              <X class="w-6 h-6" />
            </button>
          </div>

          <div class="p-8 flex flex-col gap-6">
            <a 
              v-for="link in navLinks" 
              :key="link.href"
              :href="link.href" 
              class="text-3xl font-black text-slate-900 dark:text-white hover:text-primary-600 transition-all active:scale-95"
              @click="closeMenu"
            >
              {{ t(link.label) }}
            </a>
            
            <div class="h-px bg-slate-100 dark:bg-slate-800 my-4"></div>
            
            <div class="grid grid-cols-2 gap-4 shrink-0">
              <div class="flex flex-col gap-2">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-400 px-1 text-center">{{ t('nav.language') }}</span>
                <LangSwitcher />
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-400 px-1 text-center">{{ t('nav.theme') }}</span>
                <ThemeToggle show-text />
              </div>
            </div>
          </div>

          <!-- Contact Info in Menu -->
          <div class="mt-auto p-8 border-t border-slate-100 dark:border-slate-800 space-y-6 bg-slate-50 dark:bg-slate-900/50">
            <div class="flex items-center gap-4" :class="[locale === 'ar' ? 'flex-row-reverse text-right' : 'flex-row text-left']">
              <div class="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600">
                <Phone class="w-6 h-6" />
              </div>
              <div>
                <p class="text-sm text-slate-500">{{ t('nav.contact') }}</p>
                <p class="font-bold text-lg dark:text-white" dir="ltr">+20 109 965 8770</p>
              </div>
            </div>

            <a
              href="https://wa.me/201099658770"
              target="_blank"
              @click="closeMenu(); $trackClick('navbar_whatsapp_mobile')"
              class="btn-primary w-full justify-center gap-3 py-5 text-xl rounded-2xl shadow-xl shadow-primary-500/20"
            >
              <MessageSquare class="w-6 h-6" />
              {{ t('hero.cta') }}
            </a>
          </div>
        </div>
      </Transition>
    </Teleport>
  </nav>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* LTR Slide */
.slide-ltr-enter-active, .slide-ltr-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-ltr-enter-from, .slide-ltr-leave-to {
  transform: translateX(-100%);
}

/* RTL Slide */
.slide-rtl-enter-active, .slide-rtl-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-rtl-enter-from, .slide-rtl-leave-to {
  transform: translateX(100%);
}
</style>
