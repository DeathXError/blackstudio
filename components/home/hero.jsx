"use client";
import { ParticleCanvas } from "../ui/particle-canvas";
import { services } from "@/constants/services";
import { stats } from "@/constants/stats";
import { useEffect, useState } from "react";
import RollingText from "../ui/rolling-text";
import Link from "next/link";

export default function Hero() {
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % services.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-fit overflow-hidden pt-28 pb-12 sm:pt-32 md:pb-16"
    >
      <ParticleCanvas />

      <div className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-col items-center px-5 text-center animate-[fade-up-in_0.9s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral/20 bg-black/8 px-4 py-1.5 text-xs font-semibold uppercase text-neutral-300">
          <span className="h-2 w-2 rounded-full bg-brand-accent animate-dot-pulse" />
          Digital Creative Agency
        </div>

        <h1 className="max-w-[980px] text-4xl font-extrabold leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-7xl">
          We Provide Services in
          <span className="relative mt-2 grid min-h-[1.12em] place-items-center overflow-hidden italic">
            {services.map((word, i) => (
              <span
                key={word}
                className="absolute inset-0 flex items-center justify-center transition-all duration-500 [text-shadow:0_0_38px_color-mix(in_srgb,var(--brand-accent)_24%,transparent)]"
                style={{
                  opacity: i === activeWord ? 1 : 0,
                  transform:
                    i === activeWord ? "translateY(0)" : "translateY(36px)",
                }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        <p className="mt-6 max-w-[660px] text-base leading-8 text-white/62 sm:text-lg">
          Cinematic edits, fast websites, brand systems, and launch content for
          teams that want sharper work without the slow agency maze.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-accent px-6 py-3 w-full md:w-fit text-center text-sm font-bold text-white no-underline transition-all duration-300 hover:shadow-[0_0_30px_color-mix(in_srgb,var(--brand-accent)_34%,transparent)]"
          >
            <RollingText>Start Your Project</RollingText>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/work"
            className="group inline-flex justify-center items-center rounded-lg border border-white/12 bg-white/4 px-6 py-3 w-full md:w-fit text-center text-sm font-semibold text-white/74 no-underline transition-all duration-300 hover:border-white/30 hover:bg-white/8 hover:text-white"
          >
            <RollingText>View Our Work</RollingText>
          </Link>
        </div>

        <div className="mt-12 grid w-full max-w-[860px] gap-3 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] px-5 py-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/22 hover:bg-white/6"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-white/18" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-3xl font-extrabold tracking-normal text-white sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-normal text-white/52">
                    {stat.label}
                  </div>
                </div>
                <span className="mt-1 text-xs font-semibold text-white/26">
                  0{index + 1}
                </span>
              </div>
              <div className="mt-5 h-px w-full bg-white/10" />
              <div className="mt-3 text-xs font-medium leading-5 text-white/42">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
