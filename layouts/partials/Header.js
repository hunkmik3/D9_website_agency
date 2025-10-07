"use client";

import Logo from "../components/Logo";
import menu from "../../config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import config from "../../config/config.json";
import services from "../../config/services.json";
import { getAllCategories } from "../../lib/utils/textConverter";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const { main } = menu;
  const { logo } = config.site;

  const [navOpen, setNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [blogCategories, setBlogCategories] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  // Ref cho vùng header/menu để detect click ngoài
  const navRef = useRef(null);

  // Đóng services dropdown khi menu mobile đóng
  useEffect(() => {
    if (!navOpen) setServicesOpen(false);
  }, [navOpen]);

  // Bắt sự kiện click ngoài vùng navRef để tự đóng menu mobile
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setNavOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navOpen]);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("/api/blog-categories");
      if (res.ok) {
        const data = await res.json();
        setBlogCategories(data);
      }
    }
    fetchCategories();
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setNavOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [navOpen]);

  // Thêm hàm chuyển tên dịch vụ sang slug url-friendly
  function toSlug(str) {
    return str
      .normalize('NFD').replace(/\p{Diacritic}/gu, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  return (
    <header className="header flex justify-center items-center transition-all duration-300" ref={navRef}>
      <div className="flex items-center justify-center gap-6 w-full" style={{minWidth:0, padding:0, margin:0}}>
        <Logo />
        <nav className="flex items-center gap-6 py-0" style={{background:'none',padding:0,margin:0}}>
          {/* Menu cũ giữ nguyên */}
          <div className="hidden md:flex md:items-center md:space-x-6 md:overflow-visible">
            {main.map((item, idx) =>
              item.name === "Dịch Vụ" ? (
                <div
                  key={idx}
                  className="relative group services-dropdown-trigger"
                >
                  <Link
                    href="/services"
                    className="nav-link inline-flex items-center"
                  >
                    Dịch Vụ
                    <svg
                      className="ml-1 h-4 w-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </Link>
                  <div className="services-dropdown">
                    <ul className="services-grid">
                      {services.map((g) => (
                        <li key={g.name} className="services-group">
                          <h3 className="services-group-title">{g.name}</h3>
                          <ul className="services-list">
                            {Array.isArray(g.services) ? (
                              g.services.map((sv) => {
                                const mapping = [
                                  { name: "SEO TỔNG THỂ", slug: "/services/seo-tong-the" },
                                  { name: "FACEBOOK ADS", slug: "/services/quang-cao-facebook" },
                                  { name: "GOOGLE ADS", slug: "/services/quang-cao-google" },
                                  { name: "THIẾT KẾ LOGO & BỘ NHẬN DIỆN", slug: "/services/thiet-ke-logo-bo-nhan-dien" },
                                  { name: "THIẾT KẾ ẤN PHẨM QUẢNG CÁO", slug: "/services/thiet-ke-an-pham-quang-cao" },
                                  { name: "SẢN XUẤT VIDEO/ẢNH", slug: "/services/san-xuat-video-anh" },
                                  { name: "TƯ VẤN CHIẾN LƯỢC MARKETING", slug: "/services/tu-van-chien-luoc-marketing" },
                                  { name: "ĐÀO TẠO DIGITAL MARKETING", slug: "/services/dao-tao-digital-marketing" },
                                  { name: "XÂY KÊNH TIKTOK", slug: "/services/xay-kenh-tiktok" },
                                  { name: "CONTENT MARKETING", slug: "/services/content-marketing" },
                                  { name: "VIDEO MARKETING", slug: "/services/video-marketing" },
                                  { name: "MARKETING INFLUENCER", slug: "/services/marketing-influencer" },
                                  { name: "EMAIL/ SMS MARKETING", slug: "/services/email-sms-marketing" },
                                  { name: "BÁN HÀNG SHOPEE", slug: "/services/ban-hang-shopee" },
                                  { name: "BÁN HÀNG TIKTOK", slug: "/services/ban-hang-tiktok" },
                                  { name: "DỊCH VỤ LIVESTREAM", slug: "/services/dich-vu-livestream" },
                                  { name: "QUAY CHỤP SẢN PHẨM SÀN", slug: "/services/quay-chup-san-pham-san" },
                                  { name: "APP INSTALL", slug: "/services/app-install" },
                                  { name: "ZALO OA", slug: "/services/zalo-oa" },
                                ];
                                const serviceDetail = mapping.find(item => item.name.toUpperCase() === sv.toUpperCase());
                                if (serviceDetail) {
                                  return (
                                    <li key={sv} className="service-item">
                                      <Link href={serviceDetail.slug} className="service-link">
                                        {sv}
                                      </Link>
                                    </li>
                                  );
                                } else {
                                  return (
                                    <li key={sv} className="service-item">
                                      <span className="service-link cursor-default opacity-60">{sv}</span>
                                    </li>
                                  );
                                }
                              })
                            ) : (
                              g.slug && (
                                <li className="service-item">
                                  <Link href={g.slug} className="service-link">
                                    {g.name}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : item.name === "Blog" ? (
                <div key={idx} className="relative group">
                  <Link href="/blogs" className="nav-link inline-flex items-center">
                    Blog
                    <svg className="ml-1 h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </Link>
                  <ul className="nav-dropdown-list">
                    {blogCategories.map((cat) => {
                      // Tạo slug chuẩn cho category
                      const slug = cat
                        ? cat.normalize('NFD').replace(/\p{Diacritic}/gu, '') // bỏ dấu tiếng Việt
                          .toLowerCase()
                          .replace(/\s+/g, '-')
                        : '';
                      return (
                        <li key={cat}>
                          <Link href={`/blogs/category/${encodeURIComponent(slug)}/page/1`} className="nav-dropdown-link">
                            {cat}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : item.hasChildren ? (
                <div key={idx} className="relative group">
                  <span className="nav-link inline-flex items-center cursor-pointer">
                    {item.name}
                    <svg
                      className="ml-1 h-4 w-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                  <ul className="nav-dropdown-list">
                    {item.children.map((c, i) => (
                      <li key={i}>
                        <Link href={c.url} className="nav-dropdown-link">
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  key={idx}
                  href={item.url}
                  className={`nav-link ${
                    pathname === item.url ? "nav-link-active" : ""
                  } ${item.name === "Liên Hệ" ? "bg-primary text-white rounded-lg px-4 py-1 font-semibold border-2 border-primary transition-colors duration-200 hover:bg-white hover:text-primary" : ""}`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 relative z-50"
            onClick={() => setNavOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${navOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-800 my-1 transition-all duration-300 ${navOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${navOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>

          {/* Mobile menu overlay */}
          {navOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setNavOpen(false)}></div>
          )}

          {/* Mobile menu */}
          <div
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
              navOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="p-6 h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-8">
                <div onClick={() => setNavOpen(false)} style={{cursor:'pointer'}}>
                  <Logo />
                </div>
                <button
                  onClick={() => setNavOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="space-y-4">
                {main.map((item, idx) => (
                  <div key={idx}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="flex items-center justify-between w-full text-left py-3 px-4 text-lg font-medium text-gray-900 hover:text-primary transition-colors"
                        >
                          {item.name}
                          <svg
                            className={`w-5 h-5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0'}`}>
                          <div className="pl-4 space-y-2">
                            {services.map((service, i) => (
                              <div key={i} className="py-2">
                                <h4 className="font-semibold text-primary text-sm uppercase mb-2">
                                  {service.name}
                                </h4>
                                <ul className="space-y-1">
                                  {service.services.map((sv, j) => (
                                    <li key={j}>
                                      <Link
                                        href={`/services/${toSlug(sv)}`}
                                        className="block py-1 text-gray-600 hover:text-primary transition-colors text-sm"
                                        onClick={() => setNavOpen(false)}
                                      >
                                        {sv}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.url}
                        className={`block py-3 px-4 text-lg font-medium transition-colors ${
                          pathname === item.url
                            ? "text-primary"
                            : "text-gray-900 hover:text-primary"
                        } ${item.name === "Liên Hệ" ? "bg-primary text-white rounded-lg" : ""}`}
                        onClick={() => setNavOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile contact info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Liên hệ</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>📞 096 588 87 13</p>
                  <p>📧 info@d9agency.com</p>
                  <p>📍 144 Khuất Duy Tiến, Thanh Xuân, Hà Nội</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
