import { Figtree, Geist_Mono, Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blackstudioo.com";
const defaultTitle = "Blackstudio | Digital Creative Agency";
const defaultDescription =
  "Blackstudio is a digital creative agency offering video editing, web development, graphic design, and content creation for brands that want sharper launch-ready work.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Blackstudio",
  },
  description: defaultDescription,
  applicationName: "Blackstudio",
  keywords: [
    "Blackstudio",
    "digital creative agency",
    "video editing",
    "web development",
    "graphic design",
    "content creation",
    "branding agency",
    "landing page design",
    "creative studio",
  ],
  authors: [{ name: "Blackstudio" }],
  creator: "Blackstudio",
  publisher: "Blackstudio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Blackstudio",
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
};

// to change font style change the classname in the LINE-37, E.g- ${fredoka.classname}
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${figtree.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body suppressHydrationWarning
        className={`${figtree.variable} min-h-full flex flex-col bg-[#020403] text-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
