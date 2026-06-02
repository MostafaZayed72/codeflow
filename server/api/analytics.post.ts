import fs from 'fs'
import path from 'path'

const isVercelKV = !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN)

async function getAnalyticsData() {
  if (isVercelKV) {
    try {
      const res = await $fetch<any>(`${process.env.KV_REST_API_URL}/get/analytics_stats`, {
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`
        }
      })
      if (res && res.result) {
        return JSON.parse(res.result)
      }
    } catch (e) {
      console.error('Failed to get from Vercel KV, falling back to local file', e)
    }
  }

  try {
    const dataFilePath = path.resolve(process.cwd(), 'analytics.json')
    if (fs.existsSync(dataFilePath)) {
      const content = fs.readFileSync(dataFilePath, 'utf-8')
      return JSON.parse(content)
    }
  } catch (e) {
    console.error('Failed to read local file', e)
  }

  return {
    pageViews: 0,
    whatsappClicks: 0,
    formSubmissions: 0,
    pages: {} as Record<string, number>,
    clicks: {} as Record<string, number>
  }
}

async function saveAnalyticsData(data: any) {
  if (isVercelKV) {
    try {
      await $fetch(`${process.env.KV_REST_API_URL}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(['SET', 'analytics_stats', JSON.stringify(data)])
      })
      return
    } catch (e) {
      console.error('Failed to save to Vercel KV, saving locally', e)
    }
  }

  try {
    const dataFilePath = path.resolve(process.cwd(), 'analytics.json')
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8')
  } catch (e) {
    console.error('Failed to save local file', e)
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if (!body) return { success: false, error: 'No body provided' }

  const { type, path: pagePath, label } = body
  const data = await getAnalyticsData()

  if (type === 'pageview') {
    data.pageViews = (data.pageViews || 0) + 1
    if (pagePath) {
      data.pages = data.pages || {}
      data.pages[pagePath] = (data.pages[pagePath] || 0) + 1
    }
  } else if (type === 'click') {
    if (label) {
      data.clicks = data.clicks || {}
      data.clicks[label] = (data.clicks[label] || 0) + 1
      if (label.includes('whatsapp')) {
        data.whatsappClicks = (data.whatsappClicks || 0) + 1
      }
    }
  } else if (type === 'form_submit') {
    data.formSubmissions = (data.formSubmissions || 0) + 1
  }

  await saveAnalyticsData(data)
  return { success: true }
})
