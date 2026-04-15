import { testimonials } from "@/constants/testimonials";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="px-5 py-20 sm:px-7 lg:py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="inline-flex rounded-lg border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-bold uppercase text-brand-accent">
            Testimonials
          </p>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-normal text-white sm:text-5xl">
            Why Clients and Businesses Love Working With Us.
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-base leading-8 text-white/58 sm:text-lg">
            A few words from teams who trusted us with edits, websites, visuals,
            and content systems.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`p-6 md:px-7 md:py-5 rounded-lg border border-white/10 bg-white/[0.035] transition-colors duration-200 hover:border-brand-accent/35 hover:bg-white/5.5 h-fit min-h-60`}
            >
              <div className="flex gap-1 text-brand-accent">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-5 w-5 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="mt-5 min-h-20 text-md font-medium leading-7 text-white/77">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-5 flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt=""
                  width={56}
                  height={56}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-md font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-white/52">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
