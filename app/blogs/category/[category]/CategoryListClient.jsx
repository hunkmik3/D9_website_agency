"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import config from "../../../../config/config.json";

const { blog_folder } = config.settings;

export default function CategoryListClient({ initialPosts, morePosts }) {
  const [showAll, setShowAll] = useState(false);
  const postsToShow = showAll ? [...initialPosts, ...morePosts] : initialPosts;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {postsToShow.map((post, index) => (
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
      {morePosts.length > 0 && !showAll && (
        <div className="flex justify-center mt-8">
          <button
            className="px-6 py-3 bg-blue-700 text-white rounded-full font-semibold shadow hover:bg-blue-800 transition-all"
            onClick={() => setShowAll(true)}
          >
            Xem thêm
          </button>
        </div>
      )}
    </>
  );
} 