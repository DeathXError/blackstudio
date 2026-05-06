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

export const metadata = {
  title: "Blackstudio | Digital Creative Agency",
  description: "We craft exceptional digital experiences.",
};

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
