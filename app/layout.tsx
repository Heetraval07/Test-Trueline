import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingSocial from "@/components/layout/FloatingSocial";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget";
import { SITE } from "@/data/site";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Managed IT & Cybersecurity Partner in UAE`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Trueline Technologies helps businesses across the UAE secure, optimize and manage their IT infrastructure — IT infra, IT AMC, managed IT services, ERP, digital marketing and cloud solutions.",
  icons: { icon: "/images/fav.png" },
  openGraph: { siteName: SITE.name, type: "website", locale: "en_AE" },
  // Local demo build — keep it out of search indexes.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#05508b" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sora.variable}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only z-[2000] bg-navy px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <TopBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingSocial />
        <ChatbotWidget />
      </body>
    </html>
  );
}
