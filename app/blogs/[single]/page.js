import config from "../../../config/config.json";
import PostSingle from "../../../layouts/PostSingle";
import { getSinglePage } from "../../../lib/contentParser";
import { notFound } from "next/navigation";
import { parseMDX } from "../../../lib/utils/mdxParser";

const { blog_folder } = config.settings;

// post single layout
const Article = async ({ params }) => {
  const { single } = params;
  
  try {
    const posts = getSinglePage(`content/${blog_folder}`);
    const post = posts.find((p) => p.slug === single);
    
    if (!post) {
      console.log(`Post not found: ${single}`);
      notFound();
    }
    
    const { frontmatter, content } = post;
    // Parse markdown sang HTML
    const mdxContent = await parseMDX(content);

    // Lấy related posts ở đây
    const relatedPosts = posts
      .filter((p) => p.slug !== single)
      .filter((p) =>
        p.frontmatter.category === frontmatter.category ||
        (frontmatter.tags && p.frontmatter.tags && frontmatter.tags.some(tag => p.frontmatter.tags.includes(tag)))
      )
      .slice(0, 3);

    // Truyền mdxContent vào prop 'content' để PostSingle dùng đúng HTML đã parse
    return <PostSingle frontmatter={frontmatter} content={mdxContent} slug={single} relatedPosts={relatedPosts} />;
  } catch (error) {
    console.error('Error loading post:', error);
    notFound();
  }
};

// get post single slug
export const generateStaticParams = () => {
  try {
    const allSlug = getSinglePage(`content/${blog_folder}`);
    const paths = allSlug.map((item) => ({
      single: item.slug,
    }));
    return paths;
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
};

export default Article;
