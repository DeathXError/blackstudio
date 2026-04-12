import { navLinks } from "@/constants/navlinks";
import Image from "next/image";
import Link from "next/link";

const InstagramIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <rect
      x="5"
      y="5"
      width="14"
      height="14"
      rx="4"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="16.4" cy="7.8" r="1" fill="currentColor" />
  </svg>
);

const LinkedinIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M6.5 10v8M6.5 7v.1M11 18v-8M11 13.5c.4-2.1 1.7-3.5 3.6-3.5 2.2 0 3.4 1.5 3.4 4.1V18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.9"
    />
  </svg>
);

const XIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M7 6l10 12M17 6L7 18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    />
  </svg>
);

const YoutubeIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <rect
      x="4.5"
      y="7"
      width="15"
      height="10"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path d="M10.5 9.8v4.4l4-2.2-4-2.2Z" fill="currentColor" />
  </svg>
);

const serviceLinks = [
  { label: "Video Editing", path: "#about" },
  { label: "Web Development", path: "#about" },
  { label: "Brand Design", path: "#about" },
  { label: "Content Systems", path: "#about" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: LinkedinIcon,
  },
  {
    label: "X",
    href: "https://x.com",
    icon: XIcon,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: YoutubeIcon,
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020403] px-5 text-white sm:px-7">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-accent/70 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1180px]">
        <div className="py-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
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

            <p className="mt-1 max-w-[580px] text-lg leading-9 text-white/62 sm:text-xl">
              Sharp edits, clean websites, brand systems, and launch content
              shaped for teams that want every touchpoint to feel intentional.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-white/58 no-underline transition-colors duration-300 hover:border-white/24 hover:text-white focus-visible:border-white/24 focus-visible:text-white active:text-white"
                >
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:justify-items-end">
            <div>
              <h2 className="text-base font-bold uppercase tracking-normal text-white/92">
                Explore
              </h2>
              <nav className="mt-5 grid gap-3" aria-label="Footer navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="w-fit text-base font-semibold text-white/52 no-underline transition-colors duration-300 hover:text-white focus-visible:text-white active:text-white sm:text-lg"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="text-base font-bold uppercase tracking-normal text-white/92">
                Services
              </h2>
              <nav className="mt-5 grid gap-3" aria-label="Footer services">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.path}
                    className="w-fit text-base font-semibold text-white/52 no-underline transition-colors duration-300 hover:text-white focus-visible:text-white active:text-white sm:text-lg"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-base text-white/44 sm:flex-row sm:items-center sm:justify-between border-y border-white/10 py-6">
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
