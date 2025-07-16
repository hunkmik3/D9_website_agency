import config from "../../config/config.json";
import SeoMeta from "../../layouts/SeoMeta";
import { getListPage } from "../../lib/contentParser";
import Image from "next/image";
import Link from "next/link";

const TOTAL_PAGES = 25;

const PortfolioPage = () => (
  <>
    <SeoMeta title="Portfolio" image="/images/logo.png" />
    <section className="bg-white min-h-[80vh] flex flex-col items-center justify-center p-0 m-0" style={{paddingTop:0, marginTop:0}}>
      <div style={{ width: "100%", maxWidth: 900 }}>
        {[...Array(TOTAL_PAGES)].map((_, idx) => (
          <Image
            key={idx}
            src={`/portfolio-${idx + 1}.jpg`}
            alt={`Portfolio trang ${idx + 1}`}
            width={900}
            height={1200}
            style={{ width: "100%", marginBottom: 24, borderRadius: 12, boxShadow: "0 2px 16px #0001" }}
            sizes="(max-width: 900px) 100vw, 900px"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  </>
);

export default PortfolioPage;