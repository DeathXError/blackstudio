import { benefits } from "@/constants/benefits";

export default function Benefits() {
  return (
    <section className="border-y border-white/8 bg-white/2.5 px-5 py-20 sm:px-7 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="inline-flex rounded-lg border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-bold uppercase text-brand-accent">
            Why Choose Us
          </p>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-normal text-white sm:text-5xl">
            The benefits of working with a team built for digital launches.
          </h2>
          <p className="mx-auto mt-5 max-w-[680px] text-base leading-8 text-white/58 sm:text-lg">
            We keep the process clear, the output sharp, and the creative
            direction aligned from the first idea to the final delivery.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.value}
              className="rounded-lg border border-white/10 bg-[#020403] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/1 sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/3 text-sm font-bold text-brand-accent">
                {benefit.value}
              </div>
              <h3 className="mt-6 text-2xl font-bold leading-tight tracking-normal text-white">
                {benefit.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-white/56">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
