import Social from "../components/Social";
import config from "../../config/config.json";
import menu from "../../config/menu.json";
import social from "../../config/social.json";
import { markdownify } from "../../lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { footer } = menu;
  return (
    <footer className="w-full mt-12">
      {/* Top contact info */}
      <div className="w-full" style={{ background: '#eff6ff', color: '#1f2937' }}>
        <div className="py-4 px-2 flex flex-col md:flex-row justify-center items-center text-sm">
          <div className="flex flex-wrap gap-x-8 gap-y-2 items-center justify-center">
            <span className="inline-flex items-center"><svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>Số Điện Thoại: <b className="ml-1">0354717576</b></span>
            <span className="inline-flex items-center"><svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 12H8m8 0a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>Email: <b className="ml-1">info@d9agency.com</b></span>
            <span className="inline-flex items-center"><svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1116 8a8 8 0 01-1.343 8.657z" /></svg>Địa chỉ: <b className="ml-1">Quận Bình Thạnh, Thành Phố Hồ Chí Minh</b></span>
          </div>
        </div>
      </div>
      {/* Main footer */}
      <div className="w-full" style={{ background: '#ffffff', color: '#1f2937' }}>
        <div className="py-8 px-2 container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo + mô tả */}
          <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0">
            <Image src={config.site.logo} width={80} height={40} alt="logo" className="mb-2" style={{objectFit:'contain',height:'40px',width:'auto',maxWidth:'80px'}} />
            <span className="text-2xl font-bold tracking-wide mb-2 text-center md:text-left">D9 MEDIA AGENCY</span>
            <p className="max-w-xs text-center md:text-left text-sm opacity-90 mb-4">{footer_content}</p>
          </div>
          {/* Liên kết nhanh */}
          <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0">
            <span className="font-bold text-lg mb-3 text-center md:text-left" style={{ color: '#1f2937' }}>LIÊN KẾT NHANH</span>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link href="/" className="text-[#1f2937] hover:text-[#1d4ed8]">Trang chủ</Link></li>
              <li><Link href="/services" className="text-[#1f2937] hover:text-[#1d4ed8]">Dịch vụ</Link></li>
              <li><Link href="/portfolio" className="text-[#1f2937] hover:text-[#1d4ed8]">Portfolio</Link></li>
              <li><Link href="/blogs" className="text-[#1f2937] hover:text-[#1d4ed8]">Blog</Link></li>
              <li><Link href="/contact" className="text-[#1f2937] hover:text-[#1d4ed8]">Liên hệ</Link></li>
            </ul>
          </div>
          {/* Kết nối mạng xã hội */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <span className="font-bold text-lg mb-3 text-center md:text-left" style={{ color: '#1f2937' }}>KẾT NỐI VỚI D9 AGENCY</span>
            <div className="flex gap-6 mb-4 justify-center md:justify-start">
              {/* Facebook */}
              <a href="https://www.facebook.com/D9.mediaagency" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Image src="/images/icon/facebook.png" alt="Facebook" width={28} height={28} />
              </a>
              {/* Zalo */}
              <a href="https://zalo.me/0354717576" target="_blank" rel="noopener noreferrer" aria-label="Zalo">
                <Image src="/images/icon/zalo.png" alt="Zalo" width={28} height={28} />
              </a>
              {/* Phone */}
              <a href="tel:0354717576" aria-label="Điện thoại">
                <Image src="/images/icon/phone.png" alt="Điện thoại" width={28} height={28} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: '#1d4ed8' }}>
          <div className="mt-8 pt-4 text-center text-sm opacity-80" style={{ color: '#1f2937' }}>
            {copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
