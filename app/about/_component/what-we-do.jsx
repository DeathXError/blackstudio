import Link from "next/link";

const workItems = [
  {
    title: "Video Editing",
    label: "Video",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Web Development",
    label: "Web",
    image:
      "https://i.pinimg.com/1200x/ce/4f/a5/ce4fa53333e13eac6f790109aa95ba4d.jpg",
  },
  {
    title: "Brand Designing and Content Writing",
    label: "Design & Content",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function WhatWeDo() {
  return (
    <section id="work" className="px-5 py-20 sm:px-7 lg:py-24 mt-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase text-brand-accent">
              What we do
            </p>
            <h2 className="mt-4 max-w-[680px] text-3xl font-bold leading-tight tracking-normal sm:text-5xl">
              Strong visuals, clean builds, and launch assets that feel alive.
            </h2>
          </div>
          <Link
            href="/contact"
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
                <h3 className="text-3xl font-bold tracking-normal">
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
  );
}
