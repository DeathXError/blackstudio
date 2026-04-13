import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { motion } from "framer-motion";
import ContactCards from "./_components/contact-cards";
import Form from "./_components/form";

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

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020403] text-white">
      <Navbar />

      <section
        id="contact"
        className="px-5 pb-20 pt-36 sm:px-7 sm:pt-40 lg:pb-24"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-[1180px]"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-[880px] text-center"
          >
            <span className="inline-flex rounded-lg border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-semibold text-white/72">
              Contact
            </span>
            <h1 className="mt-8 text-5xl font-extrabold leading-[1.02] tracking-normal text-white sm:text-7xl">
              Get in Touch with Us
            </h1>
            <p className="mx-auto mt-6 max-w-[720px] text-lg leading-9 text-white/58 sm:text-xl">
              Share the idea, deadline, or messy brief. We will help shape the
              next website, edit, brand designs, or launch content with a clear
              path forward.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-[#050706]"
          >
            <div className="grid gap-0 lg:grid-cols-[1.3fr_0.7fr]">
              <Form />
              <ContactCards />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
