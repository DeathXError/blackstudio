import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ContactCards from "./_components/contact-cards";
import Form from "./_components/form";
import { StaggerContainer, FadeUp } from "./_components/motion-wrappers";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020403] text-white">
      <Navbar />

      <section
        id="contact"
        className="px-5 pb-20 pt-36 sm:px-7 sm:pt-40 lg:pb-24"
      >
        <StaggerContainer className="mx-auto max-w-[1180px]">
          <FadeUp className="mx-auto max-w-[880px] text-center">
            <span className="inline-flex rounded-lg border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-bold uppercase text-brand-accent">
              Contact Us
            </span>
            <h1 className="mt-8 max-w-[980px] font-bold leading-[1.04] tracking-normal text-white text-4xl md:text-5xl lg:text-6xl">
              Get in Touch with Us
            </h1>
            <p className="mx-auto mt-6 max-w-[720px] text-lg leading-9 text-white/58 sm:text-xl">
              Share the idea, deadline, or messy brief. We will help shape the
              next website, edit, brand designs, or launch content with a clear
              path forward.
            </p>
          </FadeUp>

          <FadeUp className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-[#050706]">
            <div className="grid gap-0 lg:grid-cols-[1.3fr_0.7fr]">
              <Form />
              <ContactCards />
            </div>
          </FadeUp>
        </StaggerContainer>
      </section>

      <Footer />
    </main>
  );
}
