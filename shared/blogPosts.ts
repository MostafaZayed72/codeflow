export interface BlogPostLocale {
  title: string
  excerpt: string
  category: string
  readTime: string
  author: string
  content: string[]
}

export interface BlogPost {
  slug: string
  date: string
  image: string
  ar: BlogPostLocale
  en: BlogPostLocale
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'website-speed-impact-on-ecommerce-sales',
    date: '2026-11-15',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    ar: {
      title: 'كيف تضاعف سرعة الموقع مبيعات متجرك الإلكتروني؟',
      excerpt: 'تأخير ثانية واحدة في تحميل صفحة متجرك قد يكلفك خسارة 7% من التحويلات. تعرف على الأسباب التقنية وكيفية معالجتها.',
      category: 'الأداء والتحويلات',
      readTime: '5 دقائق قراءة',
      author: 'فريق كود فلو',
      content: [
        'يتصفح أكثر من 85% من العملاء المتاجر الإلكترونية اليوم عبر الهواتف الذكية. ومع ارتفاع توقعات المستخدمين، لم يعد مقبولاً أن ينتظر العميل أكثر من ثانيتين لفتح الصفحة.',
        'أظهرت دراسات الأداء الرقمي أن كل ثانية إضافية في وقت التحميل ترفع معدل الارتداد بشكل حاد وتخفض معدل إتمام الشراء. العميل الذي يضغط على إعلانك سيغادر فوراً إذا واجه شاشة بيضاء بطيئة.',
        'لتحقيق سرعة تحميل أقل من ثانية، نعتمد في كود فلو على تقنيات حديثة مثل التصيير من جهة الخادم (SSR)، وضغط الصور تلقائياً بصيغ الجيل الجديد، وتقليل ملفات جافاسكريبت غير الضرورية، واستخدام شبكات توزيع المحتوى (CDN) العالمية.',
        'الاستثمار في سرعة موقعك لا يحسن تجربة العميل فحسب، بل يرفع تقييم جودة إعلاناتك ويخفض تكلفة النقرة، مما ينعكس مباشرة على صافي الأرباح.'
      ]
    },
    en: {
      title: 'How Sub-Second Website Speed Multiplies E-Commerce Sales',
      excerpt: 'A single second of delay in page load time can cost up to 7% of conversions. Learn the technical bottlenecks and how to fix them.',
      category: 'Performance & CRO',
      readTime: '5 min read',
      author: 'CodeFlow Team',
      content: [
        'Over 85% of shoppers today browse online stores on mobile devices. With rising user expectations, waiting more than two seconds for a page to load is no longer acceptable.',
        'Digital performance benchmarks show that every extra second of load time sharply increases bounce rates and lowers checkout completion. A visitor clicking your ad will leave immediately if greeted by a slow loading screen.',
        'To achieve sub-second load times, we rely on server-side rendering, next-gen image optimization, eliminating render-blocking scripts, and global edge caching.',
        'Investing in speed does not only improve user experience—it also boosts ad quality scores and lowers customer acquisition costs, directly increasing net profit.'
      ]
    }
  },
  {
    slug: 'technical-seo-checklist-for-b2b-websites',
    date: '2026-11-10',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    ar: {
      title: 'دليل السيو التقني: كيف تجعل جوجل يأرشف موقعك ويتصدر النتائج الأولى؟',
      excerpt: 'الخطوات الأساسية لضبط البنية التقنية لموقعك من خريطة الموقع والروابط القانونية إلى مؤشرات الويب الأساسية.',
      category: 'تحسين محركات البحث',
      readTime: '6 دقائق قراءة',
      author: 'فريق كود فلو',
      content: [
        'المحتوى القوي وحده لا يكفي لتصدر نتائج البحث إذا كانت البنية التقنية للموقع تمنع عناكب جوجل من فهم الصفحات وأرشفتها بشكل صحيح.',
        'أولى الخطوات العملية هي توفير ملف خريطة موقع ديناميكي (Sitemap) محدث تلقائياً مع كل مقال أو صفحة جديدة، وربطه بملف الروبوتات وإدخاله في أدوات مشرفي المواقع.',
        'ثانياً، يجب ضبط العناوين الوصفية والبيانات المهيكلة (Schema Markup) وتفادي أخطاء النصوص البرمجية الظاهرة أو الصور بدون نص بديل، لأنها تؤثر على تقييم الجودة والثقة.',
        'أخيراً، احرص على دعم اللغات المتعددة عبر وسوم hreflang الصحيحة لضمان ظهور النسخة العربية للباحثين بالعربية والنسخة الإنجليزية للباحثين بالإنجليزية.'
      ]
    },
    en: {
      title: 'Technical SEO Checklist: How to Help Google Index and Rank Your Website',
      excerpt: 'Essential steps to configure your technical SEO foundation—from dynamic sitemaps and canonical tags to Core Web Vitals.',
      category: 'Technical SEO',
      readTime: '6 min read',
      author: 'CodeFlow Team',
      content: [
        'Great content alone is not enough to rank on page one if technical barriers prevent search engine crawlers from discovering and indexing your pages.',
        'The first practical step is maintaining a dynamic XML sitemap that updates automatically whenever new articles are published, referenced cleanly in robots.txt.',
        'Second, ensure every page has unique meta titles, descriptions, clean alt attributes on images, and zero raw code keys leaking into the rendered DOM.',
        'Finally, configure proper multilingual hreflang tags so search engines serve the right language version to each audience.'
      ]
    }
  },
  {
    slug: 'whatsapp-automation-for-service-businesses',
    date: '2026-11-02',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1000',
    ar: {
      title: 'أتمتة المبيعات والحجوزات عبر ربط موقعك بواتساب: توفير 20 ساعة أسبوعياً',
      excerpt: 'كيف تحول استفسارات الزوار إلى مواعيد مؤكدة تلقائياً دون تدخل يدوي متكرر من فريق خدمة العملاء.',
      category: 'الأتمتة والأنظمة',
      readTime: '4 دقائق قراءة',
      author: 'فريق كود فلو',
      content: [
        'تضيع الكثير من الشركات ساعات يومية في الرد على نفس الأسئلة وتأكيد المواعيد يدوياً عبر رسائل واتساب، مما يؤدي أحياناً لتأخر الرد وخسارة العميل.',
        'من خلال بناء نماذج ذكية في موقعك مرتبطة بواجهات البرمجة (API)، يتم تسجيل بيانات العميل وإرسال تفاصيل الطلب مباشرة إلى فريق المبيعات وتأكيد الموعد للعميل في ثوانٍ.',
        'هذه الأتمتة تقلل الأخطاء البشرية بنسبة تتجاوز 90% وتضمن استجابة فورية للعميل في أي وقت على مدار الساعة.'
      ]
    },
    en: {
      title: 'Automating Leads & Bookings via Website-to-WhatsApp Workflows',
      excerpt: 'Turn website inquiries into confirmed appointments automatically while saving your team over 20 hours every week.',
      category: 'Automation',
      readTime: '4 min read',
      author: 'CodeFlow Team',
      content: [
        'Many service businesses spend hours every day answering repetitive questions and manually confirming bookings, which often leads to slow response times and lost leads.',
        'By connecting smart website forms to automated messaging and CRM workflows, customer inquiries are captured, routed, and confirmed within seconds.',
        'Automation reduces manual errors by over 90% and ensures every prospect receives an instant, professional response 24/7.'
      ]
    }
  }
]
