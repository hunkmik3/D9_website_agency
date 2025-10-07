"use client";

import config from "../config/config.json";
import { plainify } from "../lib/utils/textConverter";
import { usePathname } from "next/navigation";

const SeoMeta = ({
  title,
  meta_title,
  image,
  description,
  canonical,
  noindex,
  structuredData,
}) => {
  const { meta_image, meta_author, meta_description } = config.metadata;
  const { base_url } = config.site;
  const pathname = usePathname();
  const currentUrl = `${base_url}${pathname}`;

  return (
    <>
      {/* title */}
      <title>
        {plainify(meta_title ? meta_title : title ? title : config.site.title)}
      </title>

      {/* canonical url */}
      {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

      {/* noindex robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* meta-description */}
      <meta
        name="description"
        content={plainify(description ? description : meta_description)}
      />

      {/* author from config.json */}
      <meta name="author" content={meta_author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta
        property="og:title"
        content={plainify(
          meta_title ? meta_title : title ? title : config.site.title
        )}
      />
      <meta
        property="og:description"
        content={plainify(description ? description : meta_description)}
      />
      <meta
        property="og:image"
        content={`${base_url}${image ? image : meta_image}`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={config.site.title} />
      <meta property="og:locale" content="vi_VN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@d9media" />
      <meta name="twitter:creator" content="@d9media" />
      <meta
        name="twitter:title"
        content={plainify(
          meta_title ? meta_title : title ? title : config.site.title
        )}
      />
      <meta
        name="twitter:description"
        content={plainify(description ? description : meta_description)}
      />
      <meta
        name="twitter:image"
        content={`${base_url}${image ? image : meta_image}`}
      />

      {/* Additional SEO meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={config.site.title} />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}

      {/* Default Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "D9 Media Agency",
            "url": "https://d9media.vn",
            "logo": "https://d9media.vn/images/logo.png",
            "description": "Professional digital agency specializing in web development, design, and digital marketing solutions",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Quận Bình Thạnh",
              "addressLocality": "Thành Phố Hồ Chí Minh",
              "addressRegion": "TP.HCM",
              "addressCountry": "VN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+84-354-717-576",
              "contactType": "customer service",
              "email": "info@d9agency.com"
            },
            "sameAs": [
              "https://facebook.com/d9media",
              "https://linkedin.com/company/d9media"
            ]
          }),
        }}
      />
    </>
  );
};

export default SeoMeta;
