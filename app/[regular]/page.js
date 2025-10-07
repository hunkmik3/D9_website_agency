import NotFound from "../../layouts/404";
import Contact from "../../layouts/Contact";
import Default from "../../layouts/Default";
import Faq from "../../layouts/Faq";
import Consulting from "../../layouts/Pricing";
import SeoMeta from "../../layouts/SeoMeta";
import { getRegularPage, getSinglePage } from "../../lib/contentParser";

// for all regular pages
const RegularPages = async ({ params }) => {
  const { regular } = params;
  
  try {
    const regularPageData = await getRegularPage(regular);
    const { title, meta_title, description, image, noindex, canonical, layout } =
      regularPageData.frontmatter;
    const { content } = regularPageData;

    return (
      <>
        <SeoMeta
          title={title}
          description={description ? description : content.slice(0, 120)}
          meta_title={meta_title}
          image={image}
          noindex={noindex}
          canonical={canonical}
          structuredData={layout === "faq" ? [{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [] // TODO: Có thể lấy danh sách câu hỏi từ content nếu muốn nâng cao
          }] : undefined}
        />
        {layout === "404" ? (
          <NotFound data={regularPageData} />
        ) : layout === "contact" ? (
          <Contact data={regularPageData} />
        ) : layout === "consulting" ? (
          <Consulting data={regularPageData} />
        ) : layout === "faq" ? (
          <Faq data={regularPageData} />
        ) : (
          <Default data={regularPageData} />
        )}
      </>
    );
  } catch (error) {
    console.error('Error loading regular page:', error);
    return <NotFound data={{ frontmatter: { title: "Không tìm thấy trang" }, content: "Trang bạn đang tìm kiếm không tồn tại." }} />;
  }
};

export default RegularPages;

// for regular page routes
export const generateStaticParams = async () => {
  try {
    const allslugs = await getSinglePage("content");
    const slugs = allslugs.map((item) => item.slug);
    const paths = slugs.map((slug) => ({
      regular: slug,
    }));

    return paths;
  } catch (error) {
    console.error('Error generating static params for regular pages:', error);
    return [];
  }
};
