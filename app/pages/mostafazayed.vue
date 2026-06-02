<script setup lang="ts">
import { ref } from 'vue'
import { Eye, MessageSquare, Send, Lock, User, RefreshCw, LogOut, BarChart3, ShieldCheck } from 'lucide-vue-next'

definePageMeta({
  layout: false
})

const username = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const isAuthenticated = ref(false)

const stats = ref<any>({
  pageViews: 0,
  whatsappClicks: 0,
  formSubmissions: 0,
  pages: {},
  clicks: {}
})

// Auto-restore session from localStorage if present
if (import.meta.client) {
  const savedUser = localStorage.getItem('admin_user')
  const savedPass = localStorage.getItem('admin_pass')
  if (savedUser === 'mostafa' && savedPass === 'mostafa') {
    username.value = savedUser
    password.value = savedPass
    isAuthenticated.value = true
    fetchStats()
  }
}

async function handleLogin() {
  if (username.value !== 'mostafa' || password.value !== 'mostafa') {
    error.value = 'اسم المستخدم أو كلمة المرور غير صحيحة'
    return
  }
  
  loading.value = true
  error.value = ''
  
  try {
    await fetchStats()
    isAuthenticated.value = true
    if (import.meta.client) {
      localStorage.setItem('admin_user', username.value)
      localStorage.setItem('admin_pass', password.value)
    }
  } catch (err) {
    error.value = 'فشل الاتصال بالخادم لجلب البيانات'
  } finally {
    loading.value = false
  }
}

async function fetchStats() {
  const data = await $fetch('/api/analytics', {
    params: {
      username: username.value,
      password: password.value
    }
  })
  stats.value = data
}

function handleLogout() {
  isAuthenticated.value = false
  username.value = ''
  password.value = ''
  if (import.meta.client) {
    localStorage.removeItem('admin_user')
    localStorage.removeItem('admin_pass')
  }
}
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between selection:bg-primary-500 selection:text-white" dir="rtl">
    
    <!-- Login Screen -->
    <div v-if="!isAuthenticated" class="flex-1 flex items-center justify-center p-4 bg-radial-gradient">
      <div class="w-full max-w-md p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-2xl relative overflow-hidden animate-fade-in">
        <div class="absolute -top-10 -left-10 w-40 h-40 bg-primary-600/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>

        <div class="text-center mb-8 relative z-10">
          <div class="w-16 h-16 bg-gradient-to-tr from-primary-600 to-gold rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-500/20">
            <Lock class="w-8 h-8 text-white animate-pulse" />
          </div>
          <h2 class="text-2xl font-black text-white">لوحة تحكم الإحصائيات</h2>
          <p class="text-slate-400 text-sm mt-1">يرجى تسجيل الدخول لعرض زيارات الموقع</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-5 relative z-10">
          <div class="space-y-2">
            <label class="text-xs font-bold text-slate-400 flex items-center gap-1.5">
              <User class="w-3.5 h-3.5 text-primary-500" />
              اسم المستخدم
            </label>
            <input 
              v-model="username"
              type="text" 
              required
              class="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-primary-500 focus:bg-slate-800 transition-all outline-none text-white font-sans text-sm"
              placeholder="mostafa"
            >
          </div>

          <div class="space-y-2">
            <label class="text-xs font-bold text-slate-400 flex items-center gap-1.5">
              <Lock class="w-3.5 h-3.5 text-primary-500" />
              كلمة المرور
            </label>
            <input 
              v-model="password"
              type="password" 
              required
              class="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 focus:border-primary-500 focus:bg-slate-800 transition-all outline-none text-white font-sans text-sm"
              placeholder="••••••••"
            >
          </div>

          <div v-if="error" class="p-3 text-xs font-bold rounded-lg bg-rose-950/50 border border-rose-800/50 text-rose-400 text-center">
            {{ error }}
          </div>

          <button 
            type="submit"
            :disabled="loading"
            class="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-500/20 active:scale-95 flex items-center justify-center gap-2"
          >
            <span v-if="loading" class="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></span>
            <span v-else>تسجيل الدخول</span>
          </button>
        </form>
      </div>
    </div>

    <!-- Dashboard Screen -->
    <div v-else class="flex-1 flex flex-col">
      <!-- Navbar -->
      <header class="border-b border-slate-800 bg-slate-900/40 backdrop-blur-md px-6 py-4 flex items-center justify-between sticky top-0 z-30">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-gradient-to-tr from-primary-600 to-gold rounded-xl flex items-center justify-center shadow-md">
            <BarChart3 class="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 class="text-lg font-black text-white">إحصائيات كود فلو</h1>
            <p class="text-xs text-slate-400">لوحة المراقبة الفورية للزيارات والنقرات</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <button 
            @click="fetchStats"
            class="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-all flex items-center justify-center"
            title="تحديث البيانات"
          >
            <RefreshCw class="w-4.5 h-4.5" />
          </button>
          
          <button 
            @click="handleLogout"
            class="px-4 py-2 rounded-xl bg-rose-950/30 hover:bg-rose-900/40 border border-rose-800/30 text-rose-400 text-sm font-bold transition-all flex items-center gap-2"
          >
            <LogOut class="w-4 h-4" />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </header>

      <!-- Main Dashboard Grid -->
      <main class="flex-1 p-6 max-w-7xl mx-auto w-full space-y-8">
        
        <!-- Welcome Alert (Privacy notice) -->
        <div class="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-800/30 text-emerald-400 text-sm flex items-center gap-3">
          <ShieldCheck class="w-5 h-5 shrink-0" />
          <span>تم تفعيل نظام التتبع الخاص بـ <strong>Vercel</strong> محلياً لحماية خصوصية زوارك وتتبع عدد الضغطات بشكل آمن.</span>
        </div>

        <!-- Big Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Card 1: Page Views -->
          <div class="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 shadow-xl flex items-center gap-5 hover:border-primary-500/50 transition-all duration-300">
            <div class="w-14 h-14 rounded-2xl bg-primary-950/80 border border-primary-800/50 flex items-center justify-center text-primary-400 shrink-0">
              <Eye class="w-7 h-7" />
            </div>
            <div>
              <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">إجمالي مشاهدات الصفحات</p>
              <h3 class="text-3xl font-black text-white mt-1">{{ stats.pageViews || 0 }}</h3>
            </div>
          </div>

          <!-- Card 2: WhatsApp Clicks -->
          <div class="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 shadow-xl flex items-center gap-5 hover:border-emerald-500/50 transition-all duration-300">
            <div class="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400 shrink-0">
              <MessageSquare class="w-7 h-7" />
            </div>
            <div>
              <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">ضغطات زر واتساب</p>
              <h3 class="text-3xl font-black text-white mt-1">{{ stats.whatsappClicks || 0 }}</h3>
            </div>
          </div>

          <!-- Card 3: Form Submissions -->
          <div class="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 shadow-xl flex items-center gap-5 hover:border-gold/50 transition-all duration-300">
            <div class="w-14 h-14 rounded-2xl bg-amber-950/80 border border-amber-800/50 flex items-center justify-center text-gold shrink-0">
              <Send class="w-7 h-7" />
            </div>
            <div>
              <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">طلبات الاتصال المستلمة</p>
              <h3 class="text-3xl font-black text-white mt-1">{{ stats.formSubmissions || 0 }}</h3>
            </div>
          </div>

        </div>

        <!-- Lists Sections -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <!-- Column 1: Visited Pages -->
          <div class="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 flex flex-col">
            <h3 class="text-lg font-black text-white mb-4 flex items-center gap-2">
              <Eye class="w-5 h-5 text-primary-500" />
              الصفحات الأكثر زيارة
            </h3>
            
            <div v-if="Object.keys(stats.pages || {}).length === 0" class="flex-1 flex items-center justify-center py-10 text-slate-500 text-sm">
              لا توجد بيانات مسجلة بعد
            </div>
            
            <div v-else class="space-y-3">
              <div 
                v-for="(count, pagePath) in stats.pages" 
                :key="pagePath" 
                class="flex items-center justify-between p-3 rounded-xl bg-slate-800/30 border border-slate-700/20 hover:bg-slate-800/50 transition-all"
              >
                <span class="text-sm font-medium text-slate-300 font-mono" dir="ltr">{{ pagePath }}</span>
                <span class="px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold">
                  {{ count }} زيارة
                </span>
              </div>
            </div>
          </div>

          <!-- Column 2: Button Clicks -->
          <div class="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 flex flex-col">
            <h3 class="text-lg font-black text-white mb-4 flex items-center gap-2">
              <MessageSquare class="w-5 h-5 text-emerald-500" />
              أماكن الضغطات المفصلة
            </h3>
            
            <div v-if="Object.keys(stats.clicks || {}).length === 0" class="flex-1 flex items-center justify-center py-10 text-slate-500 text-sm">
              لا توجد ضغطات مسجلة بعد
            </div>
            
            <div v-else class="space-y-3">
              <div 
                v-for="(count, clickLabel) in stats.clicks" 
                :key="clickLabel" 
                class="flex items-center justify-between p-3 rounded-xl bg-slate-800/30 border border-slate-700/20 hover:bg-slate-800/50 transition-all"
              >
                <span class="text-sm font-medium text-slate-300 font-mono" dir="ltr">{{ clickLabel }}</span>
                <span class="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                  {{ count }} ضغطة
                </span>
              </div>
            </div>
          </div>

        </div>

      </main>

      <!-- Footer -->
      <footer class="border-t border-slate-900 py-4 text-center text-xs text-slate-500">
        لوحة تحكم إحصائيات كود فلو &copy; {{ new Date().getFullYear() }} - حماية تامة للخصوصية والأداء
      </footer>
    </div>

  </div>
</template>

<style scoped>
.bg-radial-gradient {
  background: radial-gradient(circle at center, #0f172a 0%, #020617 100%);
}
.animate-fade-in {
  animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.96) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
