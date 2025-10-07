"use client";
import { markdownify } from "../../lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Marquee from "./Marquee";

const HomeBanner = ({ banner }) => {
  const images = banner?.images || [];
  console.log("Banner data:", banner);
  console.log("Banner images:", images);
  
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="pt-0 pb-[50px]" data-aos="fade-up" data-aos-duration="1200">
      {/* Banner slider full width ở trên */}
      <div className="w-full px-0 overflow-hidden">
        {images && images.length > 0 ? (
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg mx-auto">
            {/* Hiển thị ảnh đầu tiên cố định */}
            <div className="absolute inset-0">
              <Image
                src={images[0]}
                alt="Banner 1"
                fill
                className="w-full h-full object-cover object-center"
                sizes="100vw"
                priority
                onError={(e) => {
                  console.error("Image load error:", images[0], e);
                }}
              />
            </div>
            {/* Placeholder image */}
            <div className="absolute inset-0 opacity-50">
              <Image
                src="https://via.placeholder.com/800x450/0066cc/ffffff?text=Banner+Test"
                alt="Placeholder"
                fill
                className="w-full h-full object-cover object-center"
                sizes="100vw"
                loading="lazy"
              />
            </div>
            {/* Slider với fade effect */}
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ${idx === currentImage ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image
                  src={img}
                  alt={`Banner ${idx + 1}`}
                  fill
                  className="w-full h-full object-cover object-center"
                  sizes="100vw"
                  loading="lazy"
                  onError={(e) => {
                    console.error("Image load error:", img, e);
                  }}
                />
              </div>
            ))}
            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`home-banner-dot ${idx === currentImage ? 'bg-white' : 'bg-white/50'}`}
                  onClick={() => setCurrentImage(idx)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full aspect-[16/9] bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
            <div className="text-center">
              <p>Không có ảnh banner</p>
              <p className="text-sm mt-2">Banner object: {JSON.stringify(banner)}</p>
              <p className="text-sm">Images length: {images?.length || 0}</p>
          </div>
        </div>
        )}
      </div>
      <Marquee text="D9 AGENCY DẪN DẮT CHIẾN LƯỢC -THỰC THI CHUYÊN NGHIỆP - PHÁT TRIỂN HIỆU QUẢ" speed={0.5} />
    </section>
  );
};

export default HomeBanner;
