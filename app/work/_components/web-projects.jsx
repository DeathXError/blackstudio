"use client";
import { motion } from "framer-motion";

const row1 = [
  "/projects/1.png",
  "/projects/2.png",
  "/projects/3.png",
  "/projects/4.png",
];

const row2 = [
  "/projects/5.png",
  "/projects/6.png",
  "/projects/7.png",
  "/projects/8.png",
];

export default function WebProjects() {
  // Duplicate arrays to create a seamless infinite scroll loop.
  // We double it so the motion animates from 0 to -50% smoothly.
  const duplicatedRow1 = [...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2];

  return (
    <section
      id="web-projects-showcase"
      className="relative z-10 w-full overflow-hidden py-24 scroll-mt-32"
    >
      <div className="px-2 mx-auto max-w-[760px] text-center">
      <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
        Featured Web Projects
      </h2>
      <p className="my-3 mx-auto max-w-[620px] text-md leading-7 text-white/46 sm:text-base sm:leading-8">
        Explore the world of web design with us and see what we can do for you!
      </p>
    </div>

      <div className="mt-9 flex flex-col gap-8 md:gap-12 relative w-full">
        {/* Top and Bottom Gradients for smooth fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-linear-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-linear-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Right to Left */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
            className="flex gap-6 md:gap-8 w-max px-4"
          >
            {duplicatedRow1.map((src, idx) => (
              <div
                key={`row1-${idx}`}
                className="relative w-[320px] md:w-[480px] h-[200px] md:h-[300px] rounded-2xl overflow-hidden shrink-0 border border-white/10 bg-white/5"
              >
                <img
                  src={src}
                  alt={`Project image ${idx}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Left to Right */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", 0] }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear",
            }}
            className="flex gap-6 md:gap-8 w-max px-4"
          >
            {duplicatedRow2.map((src, idx) => (
              <div
                key={`row2-${idx}`}
                className="relative w-[320px] md:w-[480px] h-[200px] md:h-[300px] rounded-2xl overflow-hidden shrink-0 border border-white/10 bg-white/5"
              >
                <img
                  src={src}
                  alt={`Project image ${idx}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
