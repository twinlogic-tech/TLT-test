import type { Metadata, Viewport } from "next";
import { Audiowide } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/i18n/LanguageProvider";

/*
 * Global stylesheet, split by section. ORDER MATTERS: the files are plain
 * (non-module) CSS and later rules override earlier ones, exactly like the
 * original scss/main.css. responsive.css and overrides.css must stay last.
 */
import "@/styles/base.css";
import "@/styles/header.css";
import "@/styles/hero.css";
import "@/styles/services-highlights.css";
import "@/styles/sections.css";
import "@/styles/team.css";
import "@/styles/products.css";
import "@/styles/projects.css";
import "@/styles/consulting.css";
import "@/styles/contact.css";
import "@/styles/footer.css";
import "@/styles/floating-button.css";
import "@/styles/service-cards.css";
import "@/styles/request-modal.css";
import "@/styles/responsive.css";
import "@/styles/overrides.css";

// Heading font. Exposed as --font-audiowide and mapped to --font-heading in base.css.
const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-audiowide",
});

// Body font: "Sansation" 300 + 400 -> --font-body in base.css.
const sansation = localFont({
  src: [
    { path: "../fonts/sansation/Sansation_Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/sansation/Sansation_Regular.ttf", weight: "400", style: "normal" },
  ],
  display: "swap",
  variable: "--font-sansation",
});

// The original also had a separate "Sansation Light" family (Light file at normal weight)
// -> --font-body-light in base.css.
const sansationLight = localFont({
  src: [{ path: "../fonts/sansation/Sansation_Light.ttf", weight: "400", style: "normal" }],
  display: "swap",
  variable: "--font-sansation-light",
});

export const metadata: Metadata = {
  icons: { icon: "/img/Group-11.svg" },
  openGraph: { type: "website", locale: "sv_SE" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Runs before first paint. If Swedish is stored, mark <html> so the English static text
// stays invisible (visibility, see base.css) until LanguageProvider has applied Swedish.
// English visitors and crawlers are unaffected. Constant string, no user data.
const earlyLangScript = `try{if(localStorage.getItem("tlt-lang")==="sv"){var d=document.documentElement;d.lang="sv";d.classList.add("i18n-pending")}}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // The static HTML is English; LanguageProvider updates <html lang> on the client.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${audiowide.variable} ${sansation.variable} ${sansationLight.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: earlyLangScript }} />
      </head>
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
