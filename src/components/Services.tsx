"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

function useScrollIn() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, inView };
}

const services = [
  {
    img: "/service-tailoring.jpg",
    title: "Tailoring & Fashion Design",
    desc: "Pattern-making, sewing, and garment production training that leads straight into paid apprenticeships or independent tailoring work.",
    tag: "Vocational",
    icon: "🧵",
  },
  {
    img: "/service-ict.jpg",
    title: "ICT & Digital Skills",
    desc: "Computer literacy, basic graphic design, and digital marketing training to open up remote and freelance income opportunities.",
    tag: "Digital",
    icon: "💻",
  },
  {
    img: "/service-catering.jpg",
    title: "Catering & Hospitality",
    desc: "Practical culinary and hospitality training preparing trainees for employment or their own food business.",
    tag: "Hospitality",
    icon: "🍲",
  },
  {
    img: "/service-hair.jpg",
    title: "Hairdressing & Cosmetology",
    desc: "Hands-on salon training covering styling, treatments, and basic business skills for running a salon.",
    tag: "Beauty",
    icon: "💇🏾‍♀️",
  },
  {
    img: "/service-carpentry.jpg",
    title: "Carpentry & Furniture Making",
    desc: "Workshop-based training in woodwork and furniture production for young men and women entering the trade.",
    tag: "Trade",
    icon: "🪚",
  },
];

export default function Services() {
  const { ref, inView } = useScrollIn();

  return (
    <section id="services" className="py-28 section-alt">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="text-center mb-16">
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={0}
            className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold">What We Offer</span>
            <div className="h-px w-10 bg-gold" />
          </motion.div>
          <motion.h2 variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={1}
            className="font-serif text-4xl md:text-5xl font-semibold uppercase tracking-wide text-cream">
            Our Skill<br className="sm:hidden" /> <span className="text-gold-light">Programs</span>
          </motion.h2>
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={2}
            className="mx-auto mt-4 h-1 w-24 divider-gold" />
        </div>

        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={3}
          className="grid md:grid-cols-5 rounded-2xl overflow-hidden mb-6 border border-gold/15">
          <div className="md:col-span-3 overflow-hidden">
            <img src={services[0].img} alt={services[0].title}
              className="w-full h-72 md:h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="md:col-span-2 p-10 flex flex-col justify-center bg-deep-green">
            <span className="text-[10px] tracking-[0.35em] uppercase rounded-full w-fit mb-4 px-3 py-1 text-gold bg-gold/10">
              {services[0].icon} {services[0].tag}
            </span>
            <h3 className="font-serif text-2xl uppercase tracking-wide mb-3 text-cream">{services[0].title}</h3>
            <div className="divider-gold w-14 mb-4" />
            <p className="text-sm leading-relaxed text-cream/75">{services[0].desc}</p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.slice(1).map((s, i) => (
            <motion.div key={s.title}
              variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={4 + i}
              className="group rounded-2xl overflow-hidden transition-all duration-300 card-surface hover:border-gold/50">
              <div className="overflow-hidden h-44">
                <img src={s.img} alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold">{s.icon} {s.tag}</span>
                <h3 className="font-serif text-lg uppercase tracking-wide mt-1 mb-2 text-cream">{s.title}</h3>
                <div className="divider-gold w-10 mb-3" />
                <p className="text-xs leading-relaxed text-cream/70">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}