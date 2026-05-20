"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

// Initialize Inter font for exact typography match in cards
const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-inter",
});

interface CareerCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  gradientColors: {
    from: string;
    to: string;
  };
}

/**
 * CareerCard Component
 * Implements Figma dimensions and gradient layering precisely.
 * Width: 342px, Height: 460px, Corner Radius: 20px.
 */
export function CareerCard({ title, subtitle, imageSrc, gradientColors }: CareerCardProps) {
  return (
    <div 
      className="relative w-[342px] h-[460px] rounded-[20px] overflow-hidden shrink-0 select-none group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
      style={{
        boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)"
      }}
    >
      {/* 1. Base Image Layer (The professional career portrait) */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="342px"
        className="object-cover rounded-[20px] transition-transform duration-700 group-hover:scale-[1.04]"
        priority
      />

      {/* 2. Overlay Gradient Layer (Precision Width: 347px, Height: 259px, Top: 201px, Left: -5px) */}
      <div 
        className="absolute z-1 pointer-events-none transition-opacity duration-300 group-hover:opacity-95"
        style={{
          width: "347px",
          height: "259px",
          top: "201px",
          left: "-5px",
          background: `linear-gradient(180deg, ${gradientColors.from} 0%, ${gradientColors.to} 100%)`
        }}
      />

      {/* 3. Typography Specs & Content Layer (z-index 10) */}
      <div className={`absolute bottom-[35px] left-0 right-0 z-10 flex flex-col items-center gap-[6px] px-6 text-center ${inter.className}`}>
        {/* Job Title: Inter Bold, 38.1px, Line-height: 38px, Letter-spacing: -0.5px, Text color: #FFFFFF */}
        <h3 className="font-bold text-[38.1px] leading-[38px] tracking-[-0.5px] text-[#FFFFFF] drop-shadow-sm select-none">
          {title}
        </h3>
        
        {/* Subtitle: Inter Medium, 15.1px, Line-height: 24px, Letter-spacing: -0.25px, Text color: #FFFFFF */}
        <p className="font-medium text-[15.1px] leading-[24px] tracking-[-0.25px] text-[#FFFFFF] opacity-90 select-none">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
