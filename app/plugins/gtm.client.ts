export default defineNuxtPlugin(() => {
  const gtmId = 'GTM-54CFF36T'

  // Initialize dataLayer
  const win = window as any
  win.dataLayer = win.dataLayer || []
  win.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  })

  // Create script tag and append it to head
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
  
  // Inject script to the document
  const firstScript = document.getElementsByTagName('script')[0]
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript)
  } else {
    document.head.appendChild(script)
  }
})
