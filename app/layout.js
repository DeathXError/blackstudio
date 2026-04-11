import { Figtree, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata = {
  title: "BLACKSTUDIO | Digital Creative Agency",
  description: "We craft exceptional digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body
        className={`${figtree.className} min-h-full flex flex-col bg-[#020403] text-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
