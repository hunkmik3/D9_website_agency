import config from "../../../../../config/config.json";
import SeoMeta from "../../../../../layouts/SeoMeta";
import { getListPage, getSinglePage } from "../../../../../lib/contentParser";
import { getAllCategories } from "../../../../../lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import Pagination from "../../../../../layouts/components/Pagination";
import removeAccents from "remove-accents";

const { blog_folder, pagination } = config.settings;

const normalize = (str) => str ? removeAccents(str).toLowerCase().replace(/\s+/g, "-") : "";

const CategoryPage = async ({ params }) => {
  const categoryParam = decodeURIComponent(params.category);
  const currentPage = parseInt(params.page, 10) || 1;
  const posts = (await getSinglePage(`content/${blog_folder}`))
    .filter((post) => normalize(post.frontmatter.category) === normalize(categoryParam))
    .sort((post1, post2) =>
      new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date)
    );
  const postIndex = await getListPage(`content/${blog_folder}/_index.md`);
  const { frontmatter } = postIndex;
  const { title, description } = frontmatter;
  const totalPages = Math.ceil(posts.length / pagination);
  const startIdx = (currentPage - 1) * pagination;
  const paginatedPosts = posts.slice(startIdx, startIdx + pagination);

  return (
    <>
      <SeoMeta title={`${categoryParam} | ${title}`} description={description} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 uppercase tracking-wide">
              {categoryParam}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>
      {/* Blog Posts Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post, index) => (
              <article key={index} className="group bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
                {/* Featured Image */}
                {post.frontmatter.image && (
                  <div className="relative overflow-hidden h-56 md:h-48">
                    <Image
                      src={post.frontmatter.image}
                      alt={post.frontmatter.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>
                        {new Date(post.frontmatter.date).toLocaleDateString('vi-VN', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        })}
                      </span>
                    </div>
                  </div>
                  {/* Title */}
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
                    <Link href={`/${blog_folder}/${post.slug}`}>
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm md:text-base flex-1">
                    {post.frontmatter.description}
                  </p>
                  {/* Read More Button */}
                  <Link
                    href={`/${blog_folder}/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 mt-auto"
                  >
                    Đọc thêm
                    <svg 
                      className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <Pagination section={`blogs/category/${encodeURIComponent(categoryParam)}`} currentPage={currentPage} totalPages={totalPages} />
        </div>
      </section>
    </>
  );
};

export default CategoryPage;

// Thêm generateStaticParams function
export async function generateStaticParams() {
  try {
    const posts = await getSinglePage(`content/${blog_folder}`);
    const categories = getAllCategories(posts);
    const paths = [];
    
    for (const category of categories) {
      const categoryPosts = posts.filter((post) => 
        normalize(post.frontmatter.category) === normalize(category)
      );
      const totalPages = Math.ceil(categoryPosts.length / pagination);
      
      for (let page = 1; page <= totalPages; page++) {
        paths.push({
          category: category,
          page: page.toString(),
        });
      }
    }
    
    return paths;
  } catch (error) {
    console.error('Error generating static params for category pages:', error);
    return [];
  }
} 