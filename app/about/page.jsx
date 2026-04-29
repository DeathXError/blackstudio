"use client";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { ArrowRight, Check, X } from "lucide-react";
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

const stats = [
  {
    value: "500+",
    label: "Projects delivered",
    description:
      "Launch assets, websites, and edits handled across fast-moving brand work.",
  },
  {
    value: "50+",
    label: "Happy clients",
    description:
      "Creators, founders, and growing teams that needed sharper digital work.",
  },
  {
    value: "4+",
    label: "Years experience",
    description:
      "Built through real launch cycles, revisions, deadlines, and delivery pressure.",
  },
];

const whyUsLeft = [
  "Disconnected freelancers and uneven creative quality",
  "Slow approvals and too many revision loops",
  "Separate assets that never quite feel like one brand",
  "Launch work that looks good but is hard to use later",
  "A lot of explaining the same context over and over",
];

const whyUsRight = [
  "One team shaping the website, visuals, edits, and content together",
  "Clear direction early, so decisions move faster",
  "A more consistent brand feel across every touchpoint",
  "Deliverables your team can actually keep using after launch",
  "Direct communication with fewer layers and less drag",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020403] text-white">
      <Navbar />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="px-5 pb-20 pt-36 sm:px-7 sm:pt-40 lg:pb-24"
      >
        {/* Hero */}
        <section className="mx-auto max-w-[1180px]">
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-[860px] text-center"
          >
            <p className="inline-flex rounded-lg border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-bold uppercase text-brand-accent">
              About Us
            </p>
            <h1 className="mt-8 max-w-[980px] font-bold leading-[1.04] tracking-normal text-white text-4xl md:text-5xl lg:text-6xl">
                We help businesses with creative brands, websites, and content systems.
            </h1>
            <p className="mx-auto mt-6 max-w-[720px] text-lg leading-9 text-white/58 sm:text-xl">
              Blackstudio brings editing, web development, design, and content
              into one sharper process so brands move faster without feeling
              fragmented.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {stats.map((stat, index) => (
              <motion.article
                key={stat.label}
                variants={fadeUp}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-lg border border-white/10 bg-white/3 p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/4.5 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-3xl font-bold leading-none text-white">
                      {stat.value}
                    </div>
                    <div className="mt-4 text-sm font-semibold uppercase tracking-normal text-white/54">
                      {stat.label}
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-white/24">
                    0{index + 1}
                  </span>
                </div>
                <div className="mt-6 h-px w-full bg-white/10" />
                <p className="mt-5 text-sm leading-7 text-white/46 sm:text-base">
                  {stat.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Who we are */}
        <section className="py-20 lg:py-24 mx-auto mt-20 max-w-[1180px]">
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-[820px] text-center"
          >
            <p className="inline-flex rounded-lg border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-bold uppercase text-brand-accent">
              Who We Are
            </p>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-normal sm:text-5xl">
              We are a digital creative partner for teams that want clearer,
              faster launch work.
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] text-lg leading-9 text-white/58">
              We are not built around bloated handoffs or overcomplicated
              process. The goal is simple: make the work feel stronger, more
              connected, and easier to ship.
            </p>
          </motion.div>
        </section>

        {/* Why us */}
        <section className="pb-20 lg:pb-24 mx-auto mt-20 max-w-[1180px]">
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-[860px] text-center"
          >
            <p className="inline-flex rounded-lg border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-bold uppercase text-brand-accent">
              Why Us
            </p>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-normal sm:text-5xl">
              What makes working with us feel different.
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] text-lg leading-9 text-white/58">
              We keep the pace fast, the communication direct, and the creative
              system tight enough that the final work feels intentional
              everywhere it appears.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="mt-14 grid gap-5 lg:grid-cols-2"
          >
            <motion.article
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-lg border border-white/10 bg-[#020403] p-7 sm:p-8"
            >
              <h3 className="text-2xl font-bold text-white">
                Typical creative process
              </h3>
              <div className="mt-8 space-y-5">
                {whyUsLeft.map((item) => (
                  <div key={item} className="flex gap-4">
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 text-white/72">
                      <X className="h-4 w-4" />
                    </span>
                    <p className="text-lg leading-8 text-white/58">{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-7 sm:p-8"
            >
              <h3 className="text-2xl font-bold text-white">
                Working with Blackstudio
              </h3>
              <div className="mt-8 space-y-5">
                {whyUsRight.map((item) => (
                  <div key={item} className="flex gap-4">
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-accent text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    <p className="text-lg leading-8 text-white/78">{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="pb-20 lg:pb-24 mx-auto mt-20 max-w-[1180px]">
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-lg border border-white/10 bg-white/[0.035] px-6 py-10 text-center sm:px-10 sm:py-12"
          >
            <h2 className="text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
              Ready to bring clarity and impact to your next project?
            </h2>
            <p className="mx-auto mt-5 max-w-[700px] text-base leading-8 text-white/58 sm:text-lg">
              Send over the brief, the timeline, or even a rough idea. We
              help shape it into work that feels intentional and ready for launch.
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
