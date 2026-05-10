import Navbar from "@/components/layout/navbar";
import Hero from "@/components/home/hero";
import Footer from "@/components/layout/footer";
import CTA from "@/components/home/cta";
import Faq from "@/components/home/faq";
import Testimonials from "@/components/home/testimonials";
import Process from "@/components/home/process";
import Benefits from "@/components/home/benefits";
import Services from "@/components/home/services";

export const metadata = {
  title: "Blackstudio | Digital Creative Agency",
  description:
    "Blackstudio creates video edits, websites, design systems, and content that help brands launch with more clarity and momentum.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020403] text-white">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Benefits />
      <Testimonials />
      <Faq />
      <CTA />
      <Footer />
    </main>
  );
}
