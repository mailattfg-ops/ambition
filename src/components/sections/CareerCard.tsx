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
export function CareerCard({ title, subtitle, imageSrc, gradientColors, className = "" }: CareerCardProps & { className?: string }) {
  return (
    <div 
      className={`relative w-full aspect-[342/460] md:w-[200px] md:h-[269px] lg:w-[240px] lg:h-[323px] xl:w-[280px] xl:h-[376px] 2xl:w-[342px] 2xl:h-[460px] md:aspect-auto md:shrink-0 rounded-[12px] md:rounded-[16px] lg:rounded-[20px] overflow-hidden select-none group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${className}`}
      style={{
        boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)"
      }}
    >
      {/* 1. Base Image Layer (The professional career portrait) */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 200px, (max-width: 1280px) 240px, (max-width: 1536px) 280px, 342px"
        className="object-cover rounded-[12px] md:rounded-[16px] lg:rounded-[20px] transition-transform duration-700 group-hover:scale-[1.04]"
      />

      {/* 2. Overlay Gradient Layer */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[60%] z-1 pointer-events-none transition-opacity duration-300 group-hover:opacity-95"
        style={{
          background: `linear-gradient(180deg, ${gradientColors.from} 0%, ${gradientColors.to} 100%)`
        }}
      />

      {/* 3. Typography Specs & Content Layer (z-index 10) */}
      <div className={`absolute bottom-[12px] md:bottom-[20px] lg:bottom-[26px] xl:bottom-[30px] 2xl:bottom-[35px] left-0 right-0 z-10 flex flex-col items-center gap-[2px] md:gap-[4px] lg:gap-[6px] px-2 md:px-4 lg:px-6 text-center ${inter.className}`}>
        {/* Job Title: Inter Bold, 38.1px, Line-height: 38px, Letter-spacing: -0.5px, Text color: #FFFFFF */}
        <h3 className="font-bold text-[18px] md:text-[22px] lg:text-[26px] xl:text-[30px] 2xl:text-[38.1px] leading-[1.1] md:leading-[24px] lg:leading-[28px] xl:leading-[32px] 2xl:leading-[38px] tracking-[-0.5px] text-[#FFFFFF] drop-shadow-sm select-none">
          {title}
        </h3>
        
        {/* Subtitle: Inter Medium, 15.1px, Line-height: 24px, Letter-spacing: -0.25px, Text color: #FFFFFF */}
        <p className="font-medium text-[9px] md:text-[11px] lg:text-[13px] xl:text-[14px] 2xl:text-[15.1px] leading-[1.2] md:leading-[16px] lg:leading-[18px] xl:leading-[20px] 2xl:leading-[24px] tracking-[-0.25px] text-[#FFFFFF] opacity-90 select-none">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
