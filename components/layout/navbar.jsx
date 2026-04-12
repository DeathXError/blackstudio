"use client";
import { navLinks } from "@/constants/navlinks";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import RollingText from "../ui/rolling-text";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(2,4,3,0.82)" : "rgba(2,4,3,0.2)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Desktop Navbar */}
      <div className="mx-auto grid max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center px-5 py-1 sm:px-7">
        <Link
          href="#hero"
          className="inline-flex items-center gap-2 justify-self-start text-[1.1rem] font-extrabold tracking-normal text-white no-underline transition-opacity duration-200 hover:opacity-80"
        >
          <Image src="/logo.png" alt="" width={128} height={128} className="rounded-full" priority />
        </Link>

        <div className="hidden items-center gap-14 justify-self-center md:flex">
          {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              className="group relative inline-flex font-semibold text-white/72 no-underline transition-colors duration-300 hover:text-white"
            >
              <RollingText>{link.label}</RollingText>
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="group hidden justify-self-end rounded-lg bg-brand-accent px-3.5 py-1.5 text-sm font-semibold text-white no-underline transition-all duration-300 hover:shadow-[0_0_24px_color-mix(in_srgb,var(--brand-accent)_34%,transparent)] md:inline-flex"
        >
          <RollingText>Get Started <ArrowUpRight className="w-4" /></RollingText>
        </Link>

        <button
          className="col-start-3 flex items-center justify-center justify-self-end rounded-lg border border-white/10 bg-white/6 p-2 text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/8 bg-[#020403]/96 md:hidden animate-slide-down">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-5 py-6 sm:px-7">
            {navLinks.map((link) => (
              <Link
                href={link.path}
                key={link.path}
                onClick={() => setIsOpen(false)}
                className="group inline-flex w-fit py-1 text-lg font-semibold text-white/72 no-underline transition-colors duration-300 hover:text-white"
              >
                <RollingText>{link.label}</RollingText>
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="group mt-2 inline-flex justify-center rounded-lg bg-brand-accent px-5 py-3 text-center text-sm font-bold text-white no-underline transition-all duration-300 hover:shadow-[0_0_20px_color-mix(in_srgb,var(--brand-accent)_35%,transparent)]"
            >
              <RollingText>Get Started</RollingText>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
