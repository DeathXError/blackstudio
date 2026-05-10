"use client";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { services } from "@/constants/services";
import Image from "next/image";
import {
  ArrowRight,
  Clapperboard,
  FilePenLine,
  MonitorSmartphone,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const serviceIcons = {
  "Video Editing": Clapperboard,
  "Web Development": MonitorSmartphone,
  "Graphic Design": Palette,
  "Content Creation": FilePenLine,
};

const serviceLinks = {
  "Video Editing": "/work#reels-showcase",
  "Web Development": "/work#web-projects-showcase",
  "Graphic Design": "/work#reels-showcase",
  "Content Creation": "/work#youtube-showcase",
};

const serviceMedia = {
  "Video Editing": {
    src: "/services/video-editing.png",
    alt: "Video editing service preview",
    eyebrow: "Reels and edits",
    line: "Hooks, cuts, rhythm",
  },
  "Web Development": {
    src: "/services/web-dev.png",
    alt: "Web development service preview",
    eyebrow: "Sites and landing pages",
    line: "Fast, clear, conversion-ready",
  },
  "Graphic Design": {
    src: "/services/graphic-designing.png",
    alt: "Graphic design service preview",
    eyebrow: "Campaign and brand visuals",
    line: "Systems that stay consistent",
  },
  "Content Creation": {
    src: "/services/content-writing.png",
    alt: "Content creation service preview",
    eyebrow: "Ideas and scripting",
    line: "Planning that moves with launch",
  },
};

const serviceTags = {
  "Video Editing": ["Short-form", "Launch films"],
  "Web Development": ["Landing pages", "Product sites"],
  "Graphic Design": ["Brand assets", "Social systems"],
  "Content Creation": ["Hooks", "Production plans"],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#020403] text-white">
      <Navbar />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="px-5 pb-24 pt-36 sm:px-7 sm:pt-40 lg:pb-28"
      >
        <section className="mx-auto max-w-[1180px]">
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-[860px] text-center"
          >
            <p className="inline-flex rounded-lg border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-bold uppercase text-brand-accent">
              Services
            </p>
            <h1 className="mt-8 text-4xl font-bold leading-[1.04] tracking-normal text-white sm:text-5xl lg:text-6xl">
              Services That Move Brands From Idea to Launch.
            </h1>
            <p className="mx-auto mt-6 max-w-[660px] text-base leading-8 text-white/56 sm:text-lg sm:leading-9">
              We bring editing, websites, design, and content into one sharper
              workflow so the output feels consistent, fast, and ready to ship.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          >
            {services.map((service, index) => {
              const Icon = serviceIcons[service.title] || MonitorSmartphone;
              const href = serviceLinks[service.title] || "/work";
              const media = serviceMedia[service.title];
              const tags = serviceTags[service.title] || [];

              return (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] transition-all duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/5"
                >
                  <Link href={href} className="block no-underline">
                    <div className="relative aspect-4/5 overflow-hidden bg-black">
                      <Image
                        src={media.src}
                        alt={media.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.68))]" />

                      <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/12 bg-black/35 text-brand-accent backdrop-blur-sm">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs font-semibold text-white/72 backdrop-blur-sm">
                          0{index + 1}
                        </span>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/58">
                          {media.eyebrow}
                        </p>
                        <h3 className="mt-2 text-2xl font-bold tracking-normal text-white">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-white/74">
                          {media.line}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-4">
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-white/58"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="mt-4 text-sm leading-7 text-white/54">
                        {service.description}
                      </p>

                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition-colors duration-300 group-hover:text-white">
                        See related work
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <section className="mx-auto mt-24 max-w-[1180px]">
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.035] p-7 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-accent">
                How it fits
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                The work stays more consistent when the creative decisions live
                under one roof.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Clearer direction from first draft to final delivery.",
                "Less back-and-forth between separate freelancers or teams.",
                "A stronger visual line across website, edits, and campaigns.",
                "A smoother handoff from strategy to actual launch assets.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/8 bg-black/25 px-4 py-4 text-sm leading-7 text-white/62 sm:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mx-auto mt-24 max-w-[1180px]">
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-lg border border-white/10 bg-white/[0.035] px-6 py-10 text-center sm:px-10 sm:py-12"
          >
            <h2 className="text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
              Need one service or the whole system around it?
            </h2>
            <p className="mx-auto mt-5 max-w-[700px] text-base leading-8 text-white/58 sm:text-lg">
              Start with the work that matters most right now. We can shape the
              rest around it as the launch gets clearer.
            </p>
            <Link
              href="/contact"
              className="group mx-auto mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-accent px-6 py-3 text-sm font-bold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-accent/90"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </section>
      </motion.div>

      <Footer />
    </main>
  );
}
