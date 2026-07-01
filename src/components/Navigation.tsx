"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-500 bg-[#0A3D2E]/95 border-b border-gold/20 ${
        isScrolled ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="One Touch Skill Development Foundation logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-serif font-medium text-gold-light tracking-wide leading-tight">
                Onetouch Skill
              </span>
              <span className="text-[8px] uppercase tracking-[0.3em] text-gold-muted leading-tight">
                Foundation
              </span>
            </div>
          </Link>

          {/* Structural hairline separating identity from wayfinding */}
          <div className="hidden lg:block h-7 w-px bg-gold/20 mx-8" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm text-gold-light/75 hover:text-gold transition-colors duration-300 tracking-wide py-1 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-gold after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center ml-auto">
            <Link
              href="#contact"
              className="btn-gold flex items-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="lg:hidden ml-auto w-9 h-9 flex items-center justify-center rounded-lg border border-gold/25"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`w-5 h-0.5 bg-gold-light transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-gold-light transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-gold-light transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu — same solid material as the bar itself, not a separate floating surface */}
      <div
        className={`lg:hidden grid transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-gold/15 bg-[#0A3D2E]">
            <div className="flex flex-col px-4 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-gold-light/80 hover:text-gold transition-colors py-3 px-3 text-sm tracking-wide border-l-2 border-transparent hover:border-gold hover:bg-white/[0.03]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-gold/15 px-4 py-4">
              <Link
                href="#contact"
                className="btn-gold flex items-center justify-center gap-2 text-sm w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}