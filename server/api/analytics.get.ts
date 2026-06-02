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

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  
  if (query.username !== 'mostafa' || query.password !== 'mostafa') {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }

  const data = await getAnalyticsData()
  return data
})
