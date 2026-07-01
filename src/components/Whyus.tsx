"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

function useScrollIn() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, inView };
}

const stats = [
  { label: "Trainee Job Placement", pct: 78, icon: "💼" },
  { label: "Programme Completion", pct: 92, icon: "🎓" },
  { label: "Female Trainees", pct: 65, icon: "👩🏾‍🎓" },
  { label: "Free / Subsidised Slots", pct: 70, icon: "🤝" },
  { label: "Community Partnerships", pct: 55, icon: "🏘️" },
  { label: "Alumni Mentoring Others", pct: 40, icon: "🔁" },
];

export default function WhyUs() {
  const { ref, inView } = useScrollIn();

  return (
    <section id="why-us" className="py-28 bg-deep-green">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={0}
            className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Why Onetouch</span>
            <div className="h-px w-10 bg-gold" />
          </motion.div>
          <motion.h2 variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={1}
            className="font-serif text-4xl md:text-5xl font-semibold uppercase tracking-wide mb-3 text-cream">
            Our Track Record
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={2}
            className="text-sm max-w-xl mx-auto text-cream/70">
            We measure ourselves by outcomes, not intentions — every programme is tracked from
            enrolment to employment.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={3 + i}
              className="rounded-xl p-6 card-surface">
              <div className="text-2xl mb-3">{s.icon}</div>
              <h3 className="font-serif text-sm uppercase tracking-wide mb-3 text-cream">{s.label}</h3>
              <div className="h-2.5 w-full rounded-full mb-2 overflow-hidden bg-white/10">
                <motion.div className="h-full rounded-full bg-gold"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${s.pct}%` } : { width: 0 }}
                  transition={{ duration: 1.1, delay: 0.3 + i * 0.07, ease: "easeOut" }} />
              </div>
              <p className="text-xs tracking-widest uppercase mt-1 text-cream/50">{s.pct}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}