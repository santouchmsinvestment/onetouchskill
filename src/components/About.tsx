"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

function useScrollIn() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, inView };
}

export default function About() {
  const { ref, inView } = useScrollIn();

  const pillars = [
    {
      title: "Our Goal",
      text: "To equip underserved young people and women with practical, marketable skills that open a direct path to employment and self-reliance.",
    },
    {
      title: "Our Mission",
      text: "To deliver hands-on, quality vocational training and mentorship — free or subsidised for those who need it most — while connecting graduates to real income opportunities.",
    },
    {
      title: "Our Vision",
      text: "A generation of confident, skilled, and self-sufficient young Nigerians who no longer see unemployment as their only future.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-deep-green">
      <div ref={ref} className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-start">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={0}>
          <div className="overflow-hidden rounded-2xl border border-gold/15">
            {/* Replace with a real photo at /public/about.jpg */}
            <img
              src="/about.jpg"
              alt="Onetouch Skill Development Foundation trainees at work"
              className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={1}
            className="mt-6 rounded-xl p-4 flex items-start gap-3 card-surface">
            <div className="text-2xl shrink-0">🎓</div>
            <div>
              <p className="font-serif text-sm uppercase tracking-wide text-cream">Community-Rooted Training</p>
              <p className="text-xs leading-relaxed mt-1 text-cream/70">
                Every programme is designed around real local demand — so graduates leave with skills
                the community is actually hiring for.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div>
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={2}
            className="mb-5 inline-flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Who We Are</span>
          </motion.div>

          {pillars.map(({ title, text }, idx) => (
            <div key={title}>
              <motion.h2 variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={3 + idx}
                className={`font-serif text-3xl font-semibold uppercase leading-tight mb-3 tracking-wide ${
                  idx === 0 ? "text-cream" : "text-gold-light"
                }`}>
                {title}
              </motion.h2>
              <motion.p variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={3.5 + idx}
                className="leading-relaxed mb-5 text-sm text-cream/75">
                {text}
              </motion.p>
              {idx < pillars.length - 1 && <div className="divider-gold w-full mb-5" />}
            </div>
          ))}

          <motion.button
            variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={7}
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gold"
          >
            Our Skill Programs →
          </motion.button>
        </div>
      </div>
    </section>
  );
}