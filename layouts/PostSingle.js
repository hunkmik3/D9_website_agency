"use client";

import { markdownify } from "../lib/utils/textConverter";
import MDXContent from "../app/helper/MDXContent";
import Image from "next/image";
import SeoMeta from "./SeoMeta";
import { FaCalendarAlt, FaClock, FaUser, FaShare, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaCopy, FaCheck } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const PostSingle = ({ frontmatter, content, slug, relatedPosts }) => {
  // Kiểm tra và đảm bảo props tồn tại
  if (!frontmatter || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy bài viết</h1>
          <p className="text-gray-600 mb-6">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link href="/blogs" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Quay lại trang blog
          </Link>
        </div>
      </div>
    );
  }

  let { description, title, image, date, category, tags } = frontmatter;
  description = description ? description : content.slice(0, 120);

  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Social sharing functions
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `${title} - ${description}`;

  // Schema Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": date,
    "author": {
      "@type": "Organization",
      "name": "D9 Media Agency"
    },
    "publisher": {
      "@type": "Organization",
      "name": "D9 Media Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": typeof window !== 'undefined' ? window.location.href : ''
    }
  };

  // Schema BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Trang chủ",
        "item": "/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "/blogs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": typeof window !== 'undefined' ? window.location.href : ''
      }
    ]
  };

  // Gộp schema
  const structuredData = [articleSchema, breadcrumbSchema];

  const shareToFacebook = () => {
    if (typeof window !== 'undefined') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
    }
  };

  const shareToTwitter = () => {
    if (typeof window !== 'undefined') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
    }
  };

  const shareToLinkedIn = () => {
    if (typeof window !== 'undefined') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
    }
  };

  const shareToWhatsApp = () => {
    if (typeof window !== 'undefined') {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
    }
  };

  const copyToClipboard = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <>
      <SeoMeta title={title} description={description} structuredData={structuredData} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li>
                  <Link href="/" className="hover:text-blue-600 transition-colors">
                    Trang chủ
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/blogs" className="hover:text-blue-600 transition-colors">
                    Blog
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium line-clamp-1">{title}</li>
              </ol>
            </nav>

            {/* Article Header */}
            <div className="text-center">
              {/* Category Badge */}
              {category && (
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                    {category}
                  </span>
                </div>
              )}

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
              
              {/* Meta Info */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span>
                    {date ? new Date(date).toLocaleDateString('vi-VN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }) : 'Không có ngày'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="w-4 h-4" />
                  <span>5 phút đọc</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUser className="w-4 h-4" />
                  <span>Admin</span>
                </div>
              </div>

              {/* Tags */}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                  {tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="w-full flex justify-center px-4">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <article className="lg:col-span-3">
                {/* Featured Image */}
                {image && (
                  <div className="mb-8">
                    <Image
                      src={image}
                      alt={title}
                      width={800}
                      height={500}
                      className="w-full h-auto rounded-2xl shadow-lg"
                      priority={true}
                    />
                  </div>
                )}

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <MDXContent source={content} />
                </div>

                {/* Enhanced Share Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-gray-900">Chia sẻ bài viết:</h3>
                    
                    {/* Desktop Share Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                      <button 
                        onClick={shareToFacebook}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FaFacebook className="w-4 h-4" />
                        Facebook
                      </button>
                      <button 
                        onClick={shareToTwitter}
                        className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                      >
                        <FaTwitter className="w-4 h-4" />
                        Twitter
                      </button>
                      <button 
                        onClick={shareToLinkedIn}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                      >
                        <FaLinkedin className="w-4 h-4" />
                        LinkedIn
                      </button>
                      <button 
                        onClick={shareToWhatsApp}
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        WhatsApp
                      </button>
                      <button 
                        onClick={copyToClipboard}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        {copied ? <FaCheck className="w-4 h-4" /> : <FaCopy className="w-4 h-4" />}
                        {copied ? 'Đã copy!' : 'Copy link'}
                      </button>
                    </div>

                    {/* Mobile Share Menu */}
                    <div className="md:hidden relative">
                      <button
                        onClick={() => setShowShareMenu(!showShareMenu)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FaShare className="w-4 h-4" />
                        Chia sẻ
                      </button>

                      {showShareMenu && (
                        <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-50 min-w-[200px]">
                          <button 
                            onClick={shareToFacebook}
                            className="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-50 rounded"
                          >
                            <FaFacebook className="w-4 h-4 text-blue-600" />
                            Facebook
                          </button>
                          <button 
                            onClick={shareToTwitter}
                            className="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-50 rounded"
                          >
                            <FaTwitter className="w-4 h-4 text-sky-500" />
                            Twitter
                          </button>
                          <button 
                            onClick={shareToLinkedIn}
                            className="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-50 rounded"
                          >
                            <FaLinkedin className="w-4 h-4 text-blue-700" />
                            LinkedIn
                          </button>
                          <button 
                            onClick={shareToWhatsApp}
                            className="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-50 rounded"
                          >
                            <FaWhatsapp className="w-4 h-4 text-green-500" />
                            WhatsApp
                          </button>
                          <button 
                            onClick={copyToClipboard}
                            className="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-50 rounded"
                          >
                            {copied ? <FaCheck className="w-4 h-4 text-green-500" /> : <FaCopy className="w-4 h-4 text-gray-600" />}
                            {copied ? 'Đã copy!' : 'Copy link'}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Author Info */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Tác giả</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <FaUser className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Admin</h4>
                        <p className="text-sm text-gray-600">Chuyên gia nội dung</p>
                      </div>
                    </div>
                  </div>

                  {/* Related Articles */}
                  {relatedPosts && relatedPosts.length > 0 && (
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Bài viết liên quan</h3>
                      <div className="space-y-4">
                        {relatedPosts.map((post, index) => (
                          <div key={index} className="flex items-start gap-3">
                            {post.frontmatter.image && (
                              <div className="flex-shrink-0">
                                <Image
                                  src={post.frontmatter.image}
                                  alt={post.frontmatter.title}
                                  width={64}
                                  height={48}
                                  className="w-16 h-12 object-cover rounded-lg"
                                />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                                <Link 
                                  href={`/blogs/${post.slug}`} 
                                  className="hover:text-blue-600 transition-colors"
                                >
                                  {post.frontmatter.title}
                                </Link>
                              </h4>
                              <p className="text-xs text-gray-500">
                                {post.frontmatter.date ? new Date(post.frontmatter.date).toLocaleDateString('vi-VN', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric'
                                }) : 'Không có ngày'}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Newsletter */}
                  <div className="bg-gradient-to-br from-[#e0e7ff] via-[#a5b4fc] to-[#6366f1] rounded-2xl p-6 text-gray-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/60 pointer-events-none rounded-2xl" />
                    <div className="relative z-10">
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">Đăng ký nhận tin</h3>
                      <p className="text-gray-700 text-sm mb-4">Nhận những bài viết mới nhất qua email</p>
                      <input
                        type="email"
                        placeholder="Email của bạn"
                        className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      />
                      <button className="w-full mt-3 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-sm">
                        Đăng ký
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostSingle;
