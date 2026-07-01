"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0A3D2E]/95 border-b border-gold/20 ${
          isScrolled ? "backdrop-blur-md shadow-lg shadow-black/20" : ""
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="One Touch Skill Development Foundation logo"
                  width={96}
                  height={96}
                  className="h-14 w-14 lg:h-20 lg:w-20 object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-serif font-medium text-white/90 tracking-wide leading-tight">
                  Onetouch Skill
                </span>
                <span className="text-[11px] lg:text-[16px] uppercase tracking-[0.3em] text-white/60 leading-tight">
                  Development Foundation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm text-white/75 hover:text-gold transition-colors duration-300 tracking-wide py-1 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-gold after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link href="#contact" className="btn-gold flex items-center gap-2 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Button — this was missing, so the drawer below could never open */}
            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden ml-auto w-9 h-9 flex items-center justify-center rounded-lg border border-gold/25 relative"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            >
              <motion.span
                className="absolute block h-0.5 w-5 rounded-full bg-white"
                animate={isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />
              <motion.span
                className="absolute block h-0.5 w-5 rounded-full bg-white"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1, scaleX: isMobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute block h-0.5 w-5 rounded-full bg-white"
                animate={isMobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu — rendered outside the nav flow so it doesn't get clipped, RKGEF-style AnimatePresence drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-[49] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              key="drawer"
              className="fixed left-0 right-0 top-18 z-50 lg:hidden bg-emerald-500/15 backdrop-blur-xl border-t border-white/20 shadow-xl shadow-black/20"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col px-4 py-3">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      className="relative block text-gold-light/80 hover:text-gold transition-colors py-3 px-3 text-sm tracking-wide border-l-2 border-transparent hover:border-gold hover:bg-white/[0.06]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="border-t border-white/15 px-4 py-4">
                <Link
                  href="#contact"
                  className="btn-gold flex items-center justify-center gap-2 text-sm w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}