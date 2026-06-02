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
        // Fire Google Ads click event
        const win = window as any
        if (typeof win.gtag === 'function') {
          win.gtag('event', 'click', {
            event_category: 'engagement',
            event_label: label
          })
        }

        $fetch('/api/analytics', {
          method: 'POST',
          body: {
            type: 'click',
            label
          }
        }).catch(err => console.error('Analytics click track failed', err))
      },
      trackFormSubmit: () => {
        // Fire Google Ads lead conversion event
        const win = window as any
        if (typeof win.gtag === 'function') {
          win.gtag('event', 'lead', {
            event_category: 'form',
            event_label: 'contact_form'
          })
        }

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
