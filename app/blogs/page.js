import config from "../../config/config.json";
import SeoMeta from "../../layouts/SeoMeta";
import { getListPage, getSinglePage } from "../../lib/contentParser";
import BlogContent from "./BlogContent";

const { blog_folder } = config.settings;

// BlogPage là Server Component
export default async function BlogPage() {
  let posts = [];
  let title = "Tin Tức & Bài Viết";
  let description = "Khám phá những bài viết mới nhất về Digital Marketing, SEO, và các chiến lược phát triển doanh nghiệp";
  try {
    // Lấy tất cả posts từ thư mục blogs
    const allPosts = getSinglePage(`content/${blog_folder}`);
    posts = Array.isArray(allPosts) ? allPosts : [];
    // Sắp xếp posts theo ngày (mới nhất trước)
    posts.sort((a, b) => {
      const dateA = new Date(a?.frontmatter?.date || 0);
      const dateB = new Date(b?.frontmatter?.date || 0);
      return dateB - dateA;
    });
    // Lấy thông tin index page nếu có
    try {
      const postIndex = await getListPage(`content/${blog_folder}/_index.md`);
      title = postIndex?.frontmatter?.title || title;
      description = postIndex?.frontmatter?.description || description;
    } catch {}
  } catch (error) {
    // Nếu lỗi, fallback 1 bài mẫu
    posts = [
      {
        slug: "error-fallback",
        frontmatter: {
          title: "Error Loading Posts",
          description: "Could not load blog posts from markdown files",
          date: "2024-01-15T05:00:00Z",
          category: "Error"
        }
      }
    ];
  }

  return (
    <>
      <SeoMeta title={title} description={description} />
      <BlogContent posts={posts} />
    </>
  );
}
