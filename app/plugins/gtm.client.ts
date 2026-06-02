export default defineNuxtPlugin(() => {
  const gtmId = 'GTM-54CFF36T'
  const adsId = 'AW-18205001366'
  const win = window as any

  // Initialize dataLayer
  win.dataLayer = win.dataLayer || []

  // Define gtag function
  win.gtag = function () {
    win.dataLayer.push(arguments)
  }

  // 1. Google Tag Manager initialization
  win.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  })

  const gtmScript = document.createElement('script')
  gtmScript.async = true
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
  document.head.appendChild(gtmScript)

  // 2. Google Ads Google Tag (gtag.js) initialization
  const adsScript = document.createElement('script')
  adsScript.async = true
  adsScript.src = `https://www.googletagmanager.com/gtag/js?id=${adsId}`
  document.head.appendChild(adsScript)

  win.gtag('js', new Date())
  win.gtag('config', adsId)
})
