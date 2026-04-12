import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="contact"
      className="border-y border-white/10 px-5 py-20 sm:px-7 lg:py-24"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="relative mx-auto overflow-hidden rounded-lg border border-white/10 bg-[#080908] px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-16">
          <div
            className="absolute left-0 top-0 h-24 w-24 rounded-br-full bg-neutral-400/14"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-full bg-neutral-400/14"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center">
            <p className="text-sm font-bold uppercase text-brand-accent">
              Next launch
            </p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-normal sm:text-5xl">
              Ready to make your next project feel sharper?
            </h2>
            <p className="mt-5 max-w-[620px] text-base leading-8 text-white/58 sm:text-lg">
              Tell us what you are building. We will shape the website, edits,
              visuals, and content your launch needs.
            </p>

            <Link
              href="mailto:hello@xtract.studio"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-accent px-5 py-3 text-sm md:text-base font-bold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-accent/90"
            >
              <Mail className="h-4 w-4" />
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
