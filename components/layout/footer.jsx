import { navLinks } from "@/constants/navlinks";
import Image from "next/image";
import Link from "next/link";
import { socialLinks, serviceLinks } from "@/constants/footer";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020403] px-5 text-white sm:px-7">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-accent/70 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1180px]">
        {/* TOP */}
        <div className="py-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* LOGO */}
          <div>
            <Link
              href="#hero"
              className="inline-flex items-center gap-3 no-underline transition-opacity duration-300 hover:opacity-80"
            >
              <Image
                src="/logo.png"
                alt=""
                width={136}
                height={136}
                className="rounded-full"
              />
            </Link>

            <p className="mt-1 max-w-[580px] text-md leading-9 text-white/80 sm:text-lg">
              Sharp edits, clean websites, brand systems, and launch content
              shaped for teams that want every touchpoint to feel intentional.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-white/58 no-underline transition-colors duration-300 hover:border-white/24 hover:text-white focus-visible:border-white/24 focus-visible:text-white active:text-white"
                >
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* EXPLORE & SERVICES */}
          <div className="grid gap-8 sm:grid-cols-2 lg:justify-items-end">
            <div>
              <h2 className="text-base font-bold uppercase tracking-normal text-white/95">
                Explore
              </h2>
              <nav className="mt-5 grid gap-3" aria-label="Footer navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="w-fit text-base font-medium text-white/75 no-underline transition-colors duration-300 hover:text-white focus-visible:text-white active:text-white sm:text-md"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="text-base font-bold uppercase tracking-normal text-white/95">
                Services
              </h2>
              <nav className="mt-5 grid gap-3" aria-label="Footer services">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.path}
                    className="w-fit text-base font-medium text-white/75 no-underline transition-colors duration-300 hover:text-white focus-visible:text-white active:text-white sm:text-md"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 text-sm text-white/44 sm:flex-row sm:items-center sm:justify-between border-y border-white/10 py-6">
          <p>© {new Date().getFullYear()} BLACKSTUDIO. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#hero"
              className="text-white/42 no-underline transition-colors duration-300 hover:text-white focus-visible:text-white active:text-white"
            >
              Back to top
            </Link>
            <Link
              href="/contact"
              className="text-white/42 no-underline transition-colors duration-300 hover:text-white focus-visible:text-white active:text-white"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
