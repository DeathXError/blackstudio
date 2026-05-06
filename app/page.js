import Navbar from "@/components/layout/navbar";
import Hero from "@/components/home/hero";
import Footer from "@/components/layout/footer";
import CTA from "@/components/home/cta";
import Faq from "@/components/home/faq";
import Testimonials from "@/components/home/testimonials";
import Process from "@/components/home/process";
import Benefits from "@/components/home/benefits";

const services = [
  {
    title: "Video Editing",
    description:
      "Short-form cuts, launch films, reels, and story-led edits built to keep people watching.",
  },
  {
    title: "Web Development",
    description:
      "Fast landing pages, product sites, and conversion flows with a clean visual system.",
  },
  {
    title: "Graphic Design",
    description:
      "Campaign visuals, social systems, decks, and brand assets that feel consistent everywhere.",
  },
  {
    title: "Content Creation",
    description:
      "Ideas, scripts, hooks, and production plans shaped around your launch calendar.",
  },
];

export const metadata = {
  title: "XTRACT | Digital Creative Agency",
  description:
    "Video editing, web development, graphic design, and content creation for sharper brand launches.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020403] text-white">
      <Navbar />
      <Hero />

      <section
        id="about"
        className="relative border-y border-white/8 bg-[#020403] px-5 py-20 sm:px-7 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase text-brand-accent">
              Built for momentum
            </p>
            <h2 className="mt-4 max-w-[620px] text-3xl font-bold leading-tight tracking-normal text-white sm:text-5xl">
              One creative partner for the work that moves your brand forward.
            </h2>
          </div>
          <p className="max-w-[620px] text-base leading-8 text-white/58 sm:text-lg">
            Blackstudio blends editing, design, development, and content
            strategy so every touchpoint feels intentional, sharp, and ready for
            launch.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1180px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="min-h-[230px] rounded-lg border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/35 hover:bg-white/5.5"
            >
              <div className="mb-9 flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 bg-black text-sm font-bold text-brand-accent">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold tracking-normal text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/54">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Process />
      <Benefits />
      <Testimonials />
      <Faq />
      <CTA />
      <Footer />
    </main>
  );
}
