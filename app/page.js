import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/home/hero";
import Footer from "@/components/layout/footer";
import CTA from "@/components/home/cta";
import Faq from "@/components/home/faq";
import Testimonials from "@/components/home/testimonials";

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

const workItems = [
  {
    title: "Launch Film",
    label: "Video",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Agency Website",
    label: "Web",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Brand Campaign",
    label: "Design",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
  },
];

const steps = [
  "Audit the brand, offer, and audience.",
  "Shape the creative direction and production map.",
  "Build, refine, and launch the final assets.",
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
            <h2 className="mt-4 max-w-[620px] text-3xl font-extrabold leading-tight tracking-normal text-white sm:text-5xl">
              One creative partner for the work that moves your brand forward.
            </h2>
          </div>
          <p className="max-w-[620px] text-base leading-8 text-white/58 sm:text-lg">
            XTRACT blends editing, design, development, and content strategy so
            every touchpoint feels intentional, sharp, and ready for launch.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1180px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="min-h-[230px] rounded-lg border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/35 hover:bg-white/[0.055]"
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

      <section id="work" className="px-5 py-20 sm:px-7 lg:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-brand-accent">
                Selected work
              </p>
              <h2 className="mt-4 max-w-[680px] text-3xl font-extrabold leading-tight tracking-normal sm:text-5xl">
                Strong visuals, clean builds, and launch assets that feel alive.
              </h2>
            </div>
            <Link
              href="#contact"
              className="w-fit rounded-lg border border-white/14 px-5 py-3 text-sm font-bold text-white/78 no-underline transition-all duration-300 hover:border-brand-accent/45 hover:text-white"
            >
              Book a project
            </Link>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {workItems.map((item) => (
              <article
                key={item.title}
                className="group relative flex min-h-[420px] overflow-hidden rounded-lg border border-white/10 bg-cover bg-center p-6"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(2,4,3,0.08), rgba(2,4,3,0.88)), url("${item.image}")`,
                }}
              >
                <div className="relative z-10 mt-auto">
                  <p className="mb-3 text-sm font-bold uppercase text-brand-accent">
                    {item.label}
                  </p>
                  <h3 className="text-3xl font-extrabold tracking-normal">
                    {item.title}
                  </h3>
                </div>
                <div
                  className="absolute inset-0 bg-[#020403]/0 transition-colors duration-300 group-hover:bg-[#020403]/20"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/2.5 px-5 py-20 sm:px-7 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-brand-accent">
              Clear process
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-normal sm:text-5xl">
              From raw idea to polished launch, without the drag.
            </h2>
          </div>
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-lg border border-white/10 bg-[#020403] p-6"
              >
                <div className="text-sm font-bold text-brand-accent">
                  Step 0{index + 1}
                </div>
                <p className="mt-3 text-lg font-semibold text-white/84">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Faq />
      <CTA />
      <Footer />
    </main>
  );
}
