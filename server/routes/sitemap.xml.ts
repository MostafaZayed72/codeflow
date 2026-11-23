import { blogPosts } from '../../shared/blogPosts'

interface SitemapEntry {
  loc: string
  lastmod?: string
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly'
  priority: string
}

export default defineEventHandler((event) => {
  const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || 'https://codeflowweb.com').replace(/\/$/, '')

  const staticPages: Array<{ path: string; changefreq: SitemapEntry['changefreq']; priority: string }> = [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/blog', changefreq: 'daily', priority: '0.9' },
    { path: '/free-website-audit', changefreq: 'monthly', priority: '0.8' },
    { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  ]

  const entries: SitemapEntry[] = []

  // Add default (ar) and English (/en) routes for static pages
  for (const page of staticPages) {
    const arPath = page.path === '/' ? '/' : page.path
    const enPath = page.path === '/' ? '/en' : `/en${page.path}`

    entries.push({
      loc: `${siteUrl}${arPath}`,
      changefreq: page.changefreq,
      priority: page.priority,
    })
    entries.push({
      loc: `${siteUrl}${enPath}`,
      changefreq: page.changefreq,
      priority: page.priority,
    })
  }

  // Add blog posts in both locales
  for (const post of blogPosts) {
    entries.push({
      loc: `${siteUrl}/blog/${post.slug}`,
      lastmod: post.date,
      changefreq: 'monthly',
      priority: '0.8',
    })
    entries.push({
      loc: `${siteUrl}/en/blog/${post.slug}`,
      lastmod: post.date,
      changefreq: 'monthly',
      priority: '0.8',
    })
  }

  const urlsXml = entries
    .map((entry) => {
      const lastmodTag = entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ''
      return `  <url>\n    <loc>${entry.loc}</loc>${lastmodTag}\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlsXml}\n</urlset>\n`

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return xml
})
