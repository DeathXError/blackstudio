"use client";
import { testimonials } from "@/constants/testimonials";
import Image from "next/image";
import { ArrowLeft, ArrowRight, StarIcon } from "lucide-react";
import { useRef, useState } from "react";

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const maxPage = testimonials.length - 1; // show 1 at a time

  const go = (p) => setPage(Math.max(0, Math.min(p, maxPage)));

  return (
    <section className="px-5 pt-16 sm:px-7 lg:py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left — title + controls */}
          <div className="flex-none w-full lg:w-[280px] lg:pt-1">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-accent mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-white mb-4">
              What clients say about us
            </h2>
            <p className="text-base sm:text-lg leading-7 text-white/52 mb-7">
              From creators to founders - a few words from those who trusted us
              with their content.
            </p>

            {/* Nav buttons */}
            <div className="flex justify-end gap-3 mb-5">
              <button
                onClick={() => go(page - 1)}
                disabled={page === 0}
                className="h-10 w-10 rounded-lg border border-white/14 bg-transparent text-white flex items-center justify-center transition hover:bg-white/8 disabled:opacity-30 disabled:cursor-default"
                aria-label="Previous"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => go(page + 1)}
                disabled={page >= maxPage}
                className="h-10 w-10 rounded-lg border border-white/14 bg-transparent text-white flex items-center justify-center transition hover:bg-white/8 disabled:opacity-30 disabled:cursor-default"
                aria-label="Next"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-end flex-wrap gap-2">
              {Array.from({ length: maxPage + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === page ? "w-5 bg-white" : "w-1.5 bg-white/25"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right — sliding cards */}
          <div className="flex-1 w-full overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${page} * (100% + 16px)))`,
              }}
            >
              {testimonials.map((t) => (
                <article
                  key={t.name}
                  className="flex-none w-full h-fit rounded-xl border border-white/10 bg-white/[0.035] p-6 sm:px-8 flex flex-col gap-5 sm:gap-6 transition-all duration-300 hover:bg-white/1 hover:border-brand-accent/30"
                >
                  {/* Person */}
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="h-11 w-11 rounded-full object-cover ring-1 ring-white/10 shrink-0"
                    />
                    <div>
                      <p className="text-medium font-semibold text-white">
                        {t.name}
                      </p>
                      <p className="text-sm text-white/50 mt-0.5">{t.role}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-base ${i < t.star ? "text-amber-400" : "text-white/20"}`}
                      >
                        <StarIcon fill="currentColor" className="h-4 w-4" />
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-base leading-7 text-white/65 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
