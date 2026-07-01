"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroButton {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface BannerProps {
  title: string;
  subtitle: string;
  videoSrc?: string;
  posterSrc?: string;
  welcomeText?: string;
  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;
}

const Banna: React.FC<BannerProps> = ({
  title,
  subtitle,
  videoSrc = "/hero.webm",
  posterSrc = "/dasefront.png",
  welcomeText = "Welcome",
  primaryButton,
  secondaryButton,
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const defaultPrimary: HeroButton = {
    label: "Book now",
    onClick: () =>
      document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" }),
  };

  const defaultSecondary: HeroButton = {
    label: "Learn more",
    href: "/about",
  };

  const primary = primaryButton || defaultPrimary;
  const secondary = secondaryButton || defaultSecondary;

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      
      {/* Background Image */}
      <Image
        src={posterSrc}
        alt="Dase Luxury Hotel Exterior"
        fill
       // priority
        className={`object-cover transition-opacity duration-1000 ${
          videoLoaded && !videoError ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video */}
      {!videoError && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
        >
          <source src={videoSrc} type="video/webm" />
        </video>
      )}

      <div className="absolute inset-0  bg-black/50" />

      <div className="flex z-20 mt-20 md:mt-30 flex-col justify-center items-center h-full w-full max-w-5xl mx-auto px-6 sm:px-12 lg:px-20 text-left">
        <div className="w-full max-w-5xl px-6 pb-16 sm:px-12 lg:px-20 text-center">
          
        

          {/* Title */}
          <h1 className="mb-6 font-bold leading-tight  text-white/80 text-4xl sm:text-6xl lg:text-7xl opacity-0 animate-[fadeUp_0.8s_ease-out_0.15s_forwards]">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mb-10 font-luxury max-w-xl text-xl sm:text-lg text-white/60 text-center opacity-0 animate-[fadeUp_0.8s_ease-out_0.3s_forwards]">
            {subtitle}
          </p>

          {/* Buttons */}
          <div className="inline-flex flex-wrap gap-4 opacity-0 animate-[fadeUp_0.8s_ease-out_0.45s_forwards]">
            
            {/* Primary 
            {primary.href ? (
              <Link
                href={primary.href}
                className="px-5 py-3 backdrop-blur-md bg-[#3d2505] text-white/80 text-sm font-semibold uppercase tracking-wide border border-white/60 hover:bg-[#d6b56d] hover:text-black transition-colors duration-300"
              >
                {primary.label}
              </Link>
            ) : (
              <button
                onClick={primary.onClick}
                className="px-5 py-3 backdrop-blur-md bg-[#3d2505] text-white/80 text-sm font-semibold uppercase tracking-wide border border-white/60 hover:bg-[#d6b56d] hover:text-black transition-colors duration-300"
              >
                {primary.label}
              </button> 
            )} 

            {/* Secondary 
            {secondary.href ? (
              <Link
                href={secondary.href}
                className="px-5 py-3 backdrop-blur-md text-sm uppercase tracking-wide text-white font-semibold border border-white/60 hover:bg-[#966806] hover:text-black transition-colors duration-300"
              >
                {secondary.label}
              </Link>
            ) : (
              <button
                onClick={secondary.onClick}
                className="px-5 py-3 backdrop-blur-md text-sm uppercase tracking-wide text-white font-semibold border border-white/60 hover:bg-[#966806] hover:text-black transition-colors duration-300"
              >
                {secondary.label}
              </button>
            )}
    */}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
};

export default Banna;