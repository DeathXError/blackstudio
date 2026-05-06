
const steps = [
  "Audit the brand, offer, and audience.",
  "Shape the creative direction and production map.",
  "Build, refine, and launch the final assets.",
];

export default function Process() {
  return (
    <section className="border-y border-white/8 bg-[#020403] px-5 py-20 sm:px-7 lg:py-24">
      <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase text-brand-accent">
            Clear process
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-normal sm:text-5xl">
            From raw idea to polished launch, without the drag.
          </h2>
        </div>
        <div className="grid gap-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-6"
            >
              <div className="text-sm font-bold text-brand-accent">
                Step 0{index + 1}
              </div>
              <p className="mt-3 text-lg font-semibold text-white/84">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
