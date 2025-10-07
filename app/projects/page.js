"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Dữ liệu dự án mẫu (có thể tách ra file riêng nếu muốn)
const PROJECTS = [
  { name: "TÂM MINH FOODS", slug: "tam-minh-foods", image: "/images/projects/tam-minh-foods.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
  { name: "SAO THÁI DƯƠNG", slug: "sao-thai-duong", image: "/images/projects/sao-thai-duong.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
  { name: "NHÀ SÁCH TIẾN THỌ", slug: "nha-sach-tien-tho", image: "/images/projects/nha-sach-tien-tho.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
  { name: "YÊU BƠI LỘI", slug: "yeu-boi-loi", image: "/images/projects/yeu-boi-loi.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
  { name: "LIPO HEALTHY FOOD", slug: "lipo-healthy-food", image: "/images/projects/lipo-healthy-food.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
  { name: "JEWIS", slug: "jewis", image: "/images/projects/jewis.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
  { name: "FACOLOS", slug: "facolos", image: "/images/projects/facolos.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
  { name: "GLUCANKID", slug: "glucankid", image: "/images/projects/glucankid.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
  { name: "FIMCITI", slug: "fimciti", image: "/images/projects/fimciti.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
  { name: "SAO MỸ RESTAURANT", slug: "sao-my-restaurant", image: "/images/projects/sao-my-restaurant.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
  { name: "XÔ SEAFOOD", slug: "xo-seafood", image: "/images/projects/xo-seafood.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
  { name: "30 PHÚT TIẾNG NHẬT", slug: "30-phut-tieng-nhat", image: "/images/projects/30-phut-tieng-nhat.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
  { name: "QUÁN NHỎ", slug: "quan-nho", image: "/images/projects/quan-nho.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
  { name: "LANDFOOD", slug: "landfood", image: "/images/projects/landfood.jpg", type: "SÀN THƯƠNG MẠI ĐIỆN TỬ" },
  // SEO
  { name: "NINE WEST", slug: "nine-west", image: "/images/projects/nine-west.jpg", type: "SEO" },
  { name: "NỀN MÓNG ĐĂNG QUANG", slug: "nen-mong-dang-quang", image: "/images/projects/nen-mong-dang-quang.jpg", type: "SEO" },
  { name: "LEXUS THĂNG LONG", slug: "lexus-thang-long", image: "/images/projects/lexus-thang-long.jpg", type: "SEO" },
  { name: "DIỆN CHẨN", slug: "dien-chan", image: "/images/projects/dien-chan.jpg", type: "SEO" },
  { name: "TECHNO", slug: "techno", image: "/images/projects/techno.jpg", type: "SEO" },
  { name: "GPA CAMPS", slug: "gpa-camps", image: "/images/projects/gpa-camps.jpg", type: "SEO" },
  { name: "ADAMO SOFTWARE", slug: "adamo-software", image: "/images/projects/adamo-software.jpg", type: "SEO" },
  // QUẢNG CÁO
  { name: "SAO THÁI DƯƠNG (QC)", slug: "sao-thai-duong-qc", image: "/images/projects/sao-thai-duong-qc.jpg", type: "QUẢNG CÁO" },
  { name: "YÊU BƠI LỘI (QC)", slug: "yeu-boi-loi-qc", image: "/images/projects/yeu-boi-loi-qc.jpg", type: "QUẢNG CÁO" },
  { name: "JEWIS (QC)", slug: "jewis-qc", image: "/images/projects/jewis-qc.jpg", type: "QUẢNG CÁO" },
  { name: "FIMCITI (QC)", slug: "fimciti-qc", image: "/images/projects/fimciti-qc.jpg", type: "QUẢNG CÁO" },
  { name: "SAO MỸ RESTAURANT (QC)", slug: "sao-my-restaurant-qc", image: "/images/projects/sao-my-restaurant-qc.jpg", type: "QUẢNG CÁO" },
  { name: "XÔ SEAFOOD (QC)", slug: "xo-seafood-qc", image: "/images/projects/xo-seafood-qc.jpg", type: "QUẢNG CÁO" },
  { name: "30 PHÚT TIẾNG NHẬT (QC)", slug: "30-phut-tieng-nhat-qc", image: "/images/projects/30-phut-tieng-nhat-qc.jpg", type: "QUẢNG CÁO" },
  { name: "QUÁN NHỎ (QC)", slug: "quan-nho-qc", image: "/images/projects/quan-nho-qc.jpg", type: "QUẢNG CÁO" },
  // TƯ VẤN
  { name: "LIPO HEALTHY FOOD (TV)", slug: "lipo-healthy-food-tv", image: "/images/projects/lipo-healthy-food-tv.jpg", type: "TƯ VẤN" },
  { name: "GLUCANKID (TV)", slug: "glucankid-tv", image: "/images/projects/glucankid-tv.jpg", type: "TƯ VẤN" },
  { name: "NỀN MÓNG ĐĂNG QUANG (TV)", slug: "nen-mong-dang-quang-tv", image: "/images/projects/nen-mong-dang-quang-tv.jpg", type: "TƯ VẤN" },
  { name: "SAO THÁI DƯƠNG (TV)", slug: "sao-thai-duong-tv", image: "/images/projects/sao-thai-duong-tv.jpg", type: "TƯ VẤN" },
];

const CATEGORIES = ["TẤT CẢ", "SÀN THƯƠNG MẠI ĐIỆN TỬ", "SEO", "QUẢNG CÁO", "TƯ VẤN"];

export default function ProjectsPage() {
  const [category, setCategory] = useState("TẤT CẢ");
  const filtered = category === "TẤT CẢ" ? PROJECTS : PROJECTS.filter(p => p.type === category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-10 text-blue-800 drop-shadow-sm tracking-tight uppercase">Tất cả dự án</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold text-base transition-all duration-300 border-2 ${category === cat ? "bg-blue-600 text-white border-blue-600" : "bg-white text-blue-700 border-blue-200 hover:bg-blue-50"}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.map(project => (
            <div key={project.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group border border-blue-100 hover:shadow-2xl transition-all">
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={project.image} alt={project.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition">{project.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{project.type}</p>
                </div>
                <Link href={`/projects/${project.slug}`} className="inline-block mt-auto px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold text-sm shadow hover:from-blue-700 hover:to-indigo-700 transition-all">Xem chi tiết</Link>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center text-gray-500 mt-16 text-xl">Không có dự án nào trong danh mục này.</div>
        )}
      </div>
    </div>
  );
} 