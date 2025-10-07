import config from "../../../../config/config.json";
import SeoMeta from "../../../../layouts/SeoMeta";
import { getListPage, getSinglePage } from "../../../../lib/contentParser";
import { getAllCategories } from "../../../../lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import Pagination from "../../../../layouts/components/Pagination";
import { redirect, notFound } from "next/navigation";
import removeAccents from "remove-accents";
import dynamic from "next/dynamic";

const { blog_folder, pagination } = config.settings;

const normalize = (str) => str ? removeAccents(str).toLowerCase().replace(/\s+/g, "-") : "";

const CategoryPage = async ({ params }) => {
  const categoryParam = decodeURIComponent(params.category);
  const posts = (await getSinglePage(`content/${blog_folder}`))
    .filter((post) => normalize(post.frontmatter.category) === normalize(categoryParam))
    .sort((post1, post2) =>
      new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date)
    );
  if (posts.length === 0) {
    notFound();
  }
  const initialPosts = posts.slice(0, 6);
  const morePosts = posts.slice(6);
  const postIndex = await getListPage(`content/${blog_folder}/_index.md`);
  const { frontmatter } = postIndex;
  const { title, description } = frontmatter;
  const totalPages = Math.ceil(posts.length / pagination);
  if (totalPages > 1) {
    redirect(`/blogs/category/${encodeURIComponent(categoryParam)}/page/1`);
  }
  const paginatedPosts = posts.slice(0, pagination);

  return (
    <>
      <SeoMeta title={`${categoryParam} | ${title}`} description={description} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {categoryParam}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>
      {/* Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <CategoryListClient initialPosts={initialPosts} morePosts={morePosts} />
        </div>
      </section>
    </>
  );
};

const CategoryListClient = dynamic(() => import("./CategoryListClient"), { ssr: false });

export default CategoryPage;

// Thêm generateStaticParams function
export async function generateStaticParams() {
  try {
    const posts = await getSinglePage(`content/${blog_folder}`);
    const categories = getAllCategories(posts);
    return categories.map((category) => ({
      category: category,
    }));
  } catch (error) {
    console.error('Error generating static params for categories:', error);
    return [];
  }
} 