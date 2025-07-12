import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

// mdx content parser - convert to HTML
export const parseMDX = async (content) => {
  try {
    const result = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeStringify)
      .process(content);
    
    return result.toString();
  } catch (error) {
    console.error('MDX parsing error:', error);
    return content; // Return original content if parsing fails
  }
};
