<script setup lang="ts">
const techs = [
  'Vue.js', 'Nuxt', 'Next.js', 'React', '.NET', 'Node.js', 
  'WordPress', 'Wix', 'Tailwind CSS', 'PrimeVue', 'Three.js', 
  'TypeScript', 'PostgreSQL', 'Supabase', 'Docker', 'Firebase'
]
</script>

<template>
  <div class="py-10 bg-white dark:bg-[#020617] border-y border-slate-100 dark:border-slate-800/50 overflow-hidden relative group">
    <!-- Gradient Overlays for smooth edges -->
    <div class="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white dark:from-[#020617] to-transparent z-10 pointer-events-none"></div>
    <div class="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white dark:from-[#020617] to-transparent z-10 pointer-events-none"></div>

    <div class="flex whitespace-nowrap">
      <!-- Two sets for seamless loop -->
      <div class="flex items-center gap-16 animate-marquee shrink-0 px-8">
        <div 
          v-for="(tech, index) in techs" 
          :key="`tech-1-${index}`"
          class="flex items-center gap-4 group/item"
        >
          <div class="w-2.5 h-2.5 rounded-full bg-primary-500/30 group-hover/item:bg-primary-500 transition-colors"></div>
          <span class="text-2xl md:text-4xl font-black text-slate-200 dark:text-slate-800/50 hover:text-primary-500 dark:hover:text-primary-500 transition-all cursor-default uppercase tracking-tighter">
            {{ tech }}
          </span>
        </div>
      </div>
      
      <div class="flex items-center gap-16 animate-marquee shrink-0 px-8">
        <div 
          v-for="(tech, index) in techs" 
          :key="`tech-2-${index}`"
          class="flex items-center gap-4 group/item"
        >
          <div class="w-2.5 h-2.5 rounded-full bg-primary-500/30 group-hover/item:bg-primary-500 transition-colors"></div>
          <span class="text-2xl md:text-4xl font-black text-slate-200 dark:text-slate-800/50 hover:text-primary-500 dark:hover:text-primary-500 transition-all cursor-default uppercase tracking-tighter">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-marquee {
  animation: marquee 30s linear infinite;
}

/* Pause on hover of the whole section */
.group:hover .animate-marquee {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Adjust direction based on RTL */
[dir="rtl"] .animate-marquee {
  animation: marquee-rtl 30s linear infinite;
}

@keyframes marquee-rtl {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>

