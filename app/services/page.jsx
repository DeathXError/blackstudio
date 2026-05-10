"use client";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { services } from "@/constants/services";
import { ArrowRight, Clapperboard, FilePenLine, MonitorSmartphone, Palette } from "lucide-react";
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

const serviceHighlights = [
  "Sharper hooks and cleaner pacing for launch-driven content.",
  "Faster websites and landing pages that feel polished on every screen.",
  "Visual systems that hold together across campaigns and social.",
  "Content ideas and scripting built around what needs to ship next.",
];

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
            <p className="mx-auto mt-6 max-w-[720px] text-lg leading-9 text-white/58 sm:text-xl">
              We bring editing, websites, design, and content into one sharper
              workflow so the output feels consistent, fast, and ready to ship.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="mt-16 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between rounded-lg border border-white/10 bg-white/[0.035] p-7 sm:p-8"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-accent">
                  What we do
                </p>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  One team for the work your launch usually splits across too many people.
                </h2>
              </div>

              <div className="mt-10 space-y-4">
                {serviceHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/8 bg-black/30 px-4 py-4 text-sm leading-7 text-white/62 sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid gap-5 sm:grid-cols-2"
            >
              {services.map((service, index) => {
                const Icon = serviceIcons[service.title] || MonitorSmartphone;
                const href = serviceLinks[service.title] || "/work";

                return (
                  <motion.article
                    key={service.title}
                    variants={fadeUp}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="group rounded-lg border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/5 sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-black/35 text-brand-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-semibold text-white/24">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-8 text-2xl font-bold tracking-normal text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/56 sm:text-base sm:leading-8">
                      {service.description}
                    </p>

                    <Link
                      href={href}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition-colors duration-300 group-hover:text-white"
                    >
                      See related work
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.article>
                );
              })}
            </motion.div>
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
                The work stays more consistent when the creative decisions live under one roof.
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
