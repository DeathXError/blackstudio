"use client";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";

const email = "blackstudioo.production@gmail.com";
const phoneNumber = "+91 8626008473";
const phoneHref = "tel:+918626008473";
const message = encodeURIComponent(
  "Hi BlackStudio! I'm interested in discussing a project.",
);
const whatsappHref = `https://wa.me/8626008473?text=${message}`;

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

export default function ContactCards() {
  const contactOptions = [
    {
      label: "E-mail",
      value: email,
      href: `mailto:${email}`,
      icon: Mail,
    },
    {
      label: "Phone call",
      value: phoneNumber,
      href: phoneHref,
      icon: Phone,
    },
    {
      label: "WhatsApp",
      value: phoneNumber,
      href: whatsappHref,
      icon: MessageCircle,
    },
  ];

  return (
    <motion.div
      variants={stagger}
      className="flex h-full flex-col gap-4 p-6 sm:p-8 lg:border-l lg:border-white/10"
    >
      {contactOptions.map(({ label, value, href, icon: Icon }) => (
        <motion.a
          key={label}
          variants={fadeUp}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          href={href}
          target={label === "WhatsApp" ? "_blank" : undefined}
          rel={label === "WhatsApp" ? "noreferrer" : undefined}
          className="group rounded-lg border border-white/10 bg-white/[0.035] p-6 text-white no-underline transition-colors duration-300 hover:border-brand-accent/45 hover:bg-white/5.5"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-[#020403] text-white transition-colors duration-300 group-hover:border-brand-accent/50 group-hover:text-brand-accent">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-lg font-bold text-white">{label}</h2>
              <p className="mt-1 text-base font-medium text-white/58">
                {value}
              </p>
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}
