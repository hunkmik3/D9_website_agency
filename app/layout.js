import config from "../config/config.json";
import theme from "../config/theme.json";
import TwSizeIndicator from "../layouts/components/TwSizeIndicator";
import Footer from "../layouts/partials/Footer";
import Header from "../layouts/partials/Header";
import Providers from "../layouts/partials/Providers";
import BackToTop from "../layouts/components/BackToTop";
import { Analytics } from '@vercel/analytics/react';
import servicesData from "../config/services.json";
import CustomMDXProvider from "./helper/MDXProvider";
import FloatingContactButtons from "../layouts/components/FloatingContactButtons";
import "../styles/style.scss";
import AOSInit from "../layouts/components/AOSInit";

export const metadata = {
  title: "D9 Media Agency - Digital Marketing & Web Development",
  description: "D9 Media Agency - Công ty digital marketing hàng đầu Việt Nam. Chuyên cung cấp dịch vụ SEO, Google Ads, Facebook Ads, thiết kế website và marketing tổng thể.",
  keywords: "digital marketing, SEO, Google Ads, Facebook Ads, thiết kế website, marketing online, D9 Media Agency",
  authors: [{ name: "D9 Media Agency" }],
  creator: "D9 Media Agency",
  publisher: "D9 Media Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://d9media.vn'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "D9 Media Agency - Digital Marketing & Web Development",
    description: "Công ty digital marketing hàng đầu Việt Nam. Chuyên cung cấp dịch vụ SEO, Google Ads, Facebook Ads, thiết kế website và marketing tổng thể.",
    url: 'https://d9media.vn',
    siteName: 'D9 Media Agency',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'D9 Media Agency',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "D9 Media Agency - Digital Marketing & Web Development",
    description: "Công ty digital marketing hàng đầu Việt Nam. Chuyên cung cấp dịch vụ SEO, Google Ads, Facebook Ads, thiết kế website và marketing tổng thể.",
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  return (
    <html suppressHydrationWarning={true} lang="vi">
      <head>
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* favicon */}
        <link rel="shortcut icon" href="/images/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* theme meta */}
        <meta name="theme-name" content="d9-media-agency" />

        {/* google font css */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${pf}${
            sf ? "&family=" + sf : ""
          }&display=swap`}
          rel="stylesheet"
        />

        {/* theme meta */}
        <meta name="theme-name" content="d9-media-agency" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#2563eb"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#1d4ed8"
        />

        {/* Analytics scripts sẽ được load bởi Analytics component */}
      </head>
      <body suppressHydrationWarning={true}>
        <AOSInit />
        <TwSizeIndicator />
        <Header services={servicesData} />
        <CustomMDXProvider>
          <Providers>{children}</Providers>
        </CustomMDXProvider>
        <Footer />
        <FloatingContactButtons />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}

