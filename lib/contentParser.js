import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { parseMDX } from "./utils/mdxParser";

// Kiểm tra xem có đang chạy ở server-side không
const isServer = typeof window === 'undefined';

// get index page data, ex: _index.md
export const getListPage = async (filePath) => {
  if (!isServer) {
    console.warn('getListPage called on client-side');
    return {
      frontmatter: { title: 'Error', description: 'Server-side only' },
      content: 'This function is only available on server-side',
      mdxContent: 'This function is only available on server-side',
    };
  }

  try {
    const pageData = fs.readFileSync(path.join(filePath), "utf-8");
    const pageDataParsed = matter(pageData);
    const notFoundPage = fs.readFileSync(path.join("content/404.md"), "utf-8");
    const notFoundDataParsed = matter(notFoundPage);
    let frontmatter, content;

    if (pageDataParsed) {
      content = pageDataParsed.content;
      frontmatter = pageDataParsed.data;
    } else {
      content = notFoundDataParsed.content;
      frontmatter = notFoundDataParsed.data;
    }
    const mdxContent = await parseMDX(content);

    return {
      frontmatter,
      content,
      mdxContent,
    };
  } catch (error) {
    console.error('Error reading list page:', error);
    return {
      frontmatter: { title: 'Error', description: 'Page not found' },
      content: 'Page not found',
      mdxContent: 'Page not found',
    };
  }
};

// get all single pages, ex: blog/post.md
export const getSinglePage = (folder) => {
  if (!isServer) {
    console.warn('getSinglePage called on client-side');
    return [];
  }

  try {
    const filesPath = fs.readdirSync(path.join(folder));
    const sanitizeFiles = filesPath.filter((file) => file.includes(".md"));
    const filterSingleFiles = sanitizeFiles.filter((file) =>
      file.match(/^(?!_)/)
    );
    const singlePages = filterSingleFiles.map((filename) => {
      try {
        const slug = filename.replace(".md", "");
        const pageData = fs.readFileSync(path.join(folder, filename), "utf-8");
        const pageDataParsed = matter(pageData);
        const frontmatterString = JSON.stringify(pageDataParsed.data);
        const frontmatter = JSON.parse(frontmatterString);
        const content = pageDataParsed.content;
        const url = frontmatter.url ? frontmatter.url.replace("/", "") : slug;
        return { frontmatter: frontmatter, slug: url, content: content };
      } catch (error) {
        console.error(`Error processing file ${filename}:`, error);
        return null;
      }
    }).filter(Boolean); // Remove null entries

    const publishedPages = singlePages.filter(
      (page) =>
        !page.frontmatter.draft && page.frontmatter.layout !== "404" && page
    );
    const filterByDate = publishedPages.filter(
      (page) => new Date(page.frontmatter.date || new Date()) <= new Date()
    );

    return filterByDate;
  } catch (error) {
    console.error('Error reading single pages:', error);
    return [];
  }
};

// get regular page data, ex: about.md
export const getRegularPage = async (slug) => {
  if (!isServer) {
    console.warn('getRegularPage called on client-side');
    return {
      frontmatter: { title: 'Error', description: 'Server-side only' },
      content: 'This function is only available on server-side',
      mdxContent: 'This function is only available on server-side',
    };
  }

  try {
    const publishedPages = getSinglePage("content");
    const pageData = publishedPages.filter((data) => data.slug === slug);
    const notFoundPage = fs.readFileSync(path.join("content/404.md"), "utf-8");
    const notFoundDataParsed = matter(notFoundPage);

    let frontmatter, content;
    if (pageData[0]) {
      content = pageData[0].content;
      frontmatter = pageData[0].frontmatter;
    } else {
      content = notFoundDataParsed.content;
      frontmatter = notFoundDataParsed.data;
    }
    const mdxContent = await parseMDX(content);

    return {
      frontmatter,
      content,
      mdxContent,
    };
  } catch (error) {
    console.error('Error reading regular page:', error);
    return {
      frontmatter: { title: 'Error', description: 'Page not found' },
      content: 'Page not found',
      mdxContent: 'Page not found',
    };
  }
};
