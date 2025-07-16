import fs from 'fs';
import path from 'path';

export default function sitemap() {
  const baseUrl = 'https://www.d9agency.com';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Service pages (giữ nguyên)
  const servicePages = [
    '/services/performance-branding',
    '/services/e-commerce',
    '/services/performance-marketing',
    '/services/content-marketing',
    '/services/video-marketing',
    '/services/xay-kenh-tiktok',
  ].map(service => ({
    url: `${baseUrl}${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Blog posts
  let blogPages = [];
  try {
    const blogDir = path.join(process.cwd(), 'D9-media-agency-main', 'content', 'blogs');
    const files = fs.readdirSync(blogDir);
    blogPages = files.filter(f => f.endsWith('.md')).map(filename => {
      const slug = filename.replace(/\.md$/, '');
      return {
        url: `${baseUrl}/blogs/${slug}`,
        lastModified: new Date(), // Có thể parse ngày từ file nếu muốn chính xác hơn
        changeFrequency: 'weekly',
        priority: 0.7,
      };
    });
  } catch (e) {
    // Nếu lỗi, bỏ qua
  }

  return [...staticPages, ...servicePages, ...blogPages];
} 