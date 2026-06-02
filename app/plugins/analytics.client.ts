export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()

  // Track page views on client-side route changes
  router.afterEach((to) => {
    // Avoid tracking the dashboard itself
    if (to.path.includes('/mostafazayed')) return

    $fetch('/api/analytics', {
      method: 'POST',
      body: {
        type: 'pageview',
        path: to.path
      }
    }).catch(err => console.error('Analytics pageview track failed', err))
  })

  return {
    provide: {
      trackClick: (label: string) => {
        $fetch('/api/analytics', {
          method: 'POST',
          body: {
            type: 'click',
            label
          }
        }).catch(err => console.error('Analytics click track failed', err))
      },
      trackFormSubmit: () => {
        $fetch('/api/analytics', {
          method: 'POST',
          body: {
            type: 'form_submit'
          }
        }).catch(err => console.error('Analytics form submit track failed', err))
      }
    }
  }
})
