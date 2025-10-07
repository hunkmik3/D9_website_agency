"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaSearch, FaFilter, FaTimes } from "react-icons/fa";
import { markdownify } from "../../lib/utils/textConverter";

const BlogContent = ({ posts }) => {
  // Lấy danh sách category từ posts (an toàn)
  const categories = useMemo(() => {
    if (!Array.isArray(posts)) return [];
    return Array.from(new Set(posts.map(post => post?.frontmatter?.category || "Khác")));
  }, [posts]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const postsPerPage = 9;

  // Filter and search posts (an toàn)
  const filteredPosts = useMemo(() => {
    if (!Array.isArray(posts)) return [];
    const safeSearchTerm = String(searchTerm || '').toLowerCase();
    return posts.filter(post => {
      if (!post || !post.frontmatter) return false;
      const title = String(post.frontmatter.title || '').toLowerCase();
      const description = String(post.frontmatter.description || '').toLowerCase();
      const category = String(post.frontmatter.category || 'Khác').toLowerCase();
      const matchesSearch = title.includes(safeSearchTerm) ||
        description.includes(safeSearchTerm) ||
        category.includes(safeSearchTerm);
      const matchesCategory = selectedCategory === "Tất cả" || category === String(selectedCategory || '').toLowerCase();
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Filter and Search Section */}
        <div className="mb-8">
          {/* Desktop Filters */}
          <div className="hidden md:flex items-center justify-between gap-6 mb-6">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <FaFilter className="text-gray-500 w-4 h-4" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Tất cả">Tất cả danh mục</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Mobile Filters */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
            >
              <span className="font-medium">Bộ lọc và tìm kiếm</span>
              <FaFilter className="w-4 h-4" />
            </button>
            {showMobileFilters && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-4">
                {/* Mobile Search */}
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm bài viết..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* Mobile Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Danh mục</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Tất cả">Tất cả danh mục</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("Tất cả");
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <FaTimes className="w-4 h-4" />
                  Xóa bộ lọc
                </button>
              </div>
            )}
          </div>
          {/* Results Count */}
          <div className="text-sm text-gray-600 mb-6">
            Tìm thấy {filteredPosts.length} bài viết
            {searchTerm && ` cho "${searchTerm}"`}
            {selectedCategory !== "Tất cả" && ` trong danh mục "${selectedCategory}"`}
          </div>
        </div>
        {/* Blog Posts Grid */}
        {currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts.map((post, index) => (
              <article key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Featured Image */}
                {post?.frontmatter?.image && (
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.frontmatter.image}
                      alt={post.frontmatter.title || 'Blog post'}
                      width={400}
                      height={250}
                      className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
                {/* Content */}
                <div className="p-4 md:p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                      {post?.frontmatter?.category || "Khác"}
                    </span>
                  </div>
                  {/* Meta Info */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="w-3 h-3" />
                      <span>
                        {post?.frontmatter?.date ? new Date(post.frontmatter.date).toLocaleDateString('vi-VN', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        }) : 'Chưa có ngày'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock className="w-3 h-3" />
                      <span>5 phút đọc</span>
                    </div>
                  </div>
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    <Link href={`/blogs/${post?.slug || '#'}`}>
                      {post?.frontmatter?.title || 'Tiêu đề bài viết'}
                    </Link>
                  </h3>
                  {/* Description */}
                  {markdownify(post?.frontmatter?.description || 'Mô tả bài viết', 'p', 'text-gray-600 mb-4 line-clamp-3 text-sm md:text-base')}
                  {/* Read More Button */}
                  <Link
                    href={`/blogs/${post?.slug || '#'}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group/btn text-sm"
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
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Không tìm thấy bài viết</h3>
            <p className="text-gray-600">Thử thay đổi từ khóa tìm kiếm hoặc danh mục</p>
          </div>
        )}
        {/* Improved Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Trước
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sau
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogContent; 