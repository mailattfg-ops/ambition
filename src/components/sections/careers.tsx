"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

// Initialize Inter font for exact typography match
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

// Modular CareerCard Component
export function CareerCard({ title, subtitle, imageSrc, gradientColors }: CareerCardProps) {
  return (
    <div 
      className="relative w-[342px] h-[460px] rounded-[20px] overflow-hidden shrink-0 select-none group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
      style={{
        boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)"
      }}
    >
      {/* Layer 1: Base Portrait Image Layer */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover rounded-[20px] transition-transform duration-700 group-hover:scale-[1.04]"
        priority
      />

      {/* Layer 2: Precision Absolute Bounded Gradient Overlay Layer */}
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

      {/* Layer 3: Text & Typography Layer (z-index 10) */}
      <div className={`absolute bottom-[35px] left-0 right-0 z-10 flex flex-col items-center gap-[6px] px-6 text-center ${inter.className}`}>
        <h3 className="font-bold text-[38.1px] leading-[38px] tracking-[-0.5px] text-[#FFFFFF] drop-shadow-sm">
          {title}
        </h3>
        <p className="font-medium text-[15.1px] leading-[24px] tracking-[-0.25px] text-[#FFFFFF] opacity-90">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

// Main CareersSection Component
export default function CareersSection() {
  const careers = [
    {
      title: "Engineer",
      subtitle: "High performance coach",
      imageSrc: "/assets/images/new/engineer.jpg",
      gradientColors: {
        from: "rgba(69, 139, 188, 0)",
        to: "#458BBC"
      }
    },
    {
      title: "Astronaut",
      subtitle: "High performance coach",
      imageSrc: "/assets/images/new/astronaut.jpg",
      gradientColors: {
        from: "rgba(18, 24, 38, 0)",
        to: "#121826"
      }
    },
    {
      title: "Archeologist",
      subtitle: "High performance coach",
      imageSrc: "/assets/images/new/archeologist.jpg",
      gradientColors: {
        from: "rgba(93, 89, 79, 0)",
        to: "#5D594F"
      }
    },
    {
      title: "Lawyer",
      subtitle: "High performance coach",
      imageSrc: "/assets/images/new/lawyer.jpg",
      gradientColors: {
        from: "rgba(45, 50, 56, 0)",
        to: "#2D3238"
      }
    },
    {
      title: "Cricketer",
      subtitle: "High performance coach",
      imageSrc: "/assets/images/new/cricketer.jpg",
      gradientColors: {
        from: "rgba(160, 106, 55, 0)",
        to: "#A06A37"
      }
    }
  ];

  return (
    <section className="relative w-full flex flex-col items-center pt-24 pb-32 bg-[#FFFFFF] overflow-hidden">
      
      {/* 1. Mini Section Label Pill */}
      <div className="flex items-center justify-center w-[168px] h-[43px] rounded-[31px] bg-[#EBEBEB] py-[6px] px-[18px]">
        <span className="font-sans font-normal text-[24px] leading-[100%] tracking-[-0.04em] text-[#000000]">
          How it works
        </span>
      </div>

      {/* 2. Main Section Title Header */}
      <div className="w-full max-w-[882px] h-auto mt-[27px] flex items-center justify-center">
        <h2 className="font-sans font-semibold text-[48px] md:text-[72px] leading-[100%] tracking-[-0.04em] text-[#000000] text-center">
          Our Most<br />Popular careers
        </h2>
      </div>

      {/* 3. Horizontal Carousel Container */}
      <div className="w-full mt-[60px] overflow-x-auto no-scrollbar scroll-smooth flex justify-start lg:justify-center items-center py-6 px-6 sm:px-12 md:px-16 lg:px-0">
        <div className="flex gap-6 items-center shrink-0">
          {careers.map((career, index) => (
            <CareerCard
              key={index}
              title={career.title}
              subtitle={career.subtitle}
              imageSrc={career.imageSrc}
              gradientColors={career.gradientColors}
            />
          ))}
        </div>
      </div>

      {/* 4. "View all Careers" Call-To-Action Button */}
      <div className="w-full flex justify-center mt-12">
        <button
          className="flex items-center justify-center bg-[#000000] rounded-[25.84px] py-[12px] px-[28px] gap-[10px] hover:bg-black/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md cursor-pointer select-none"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white animate-pulse">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          </svg>
          <span className="font-sans font-semibold text-[18px] leading-[100%] tracking-[-0.04em] text-[#FFFFFF]">
            View all Careers
          </span>
        </button>
      </div>

      {/* Embedded Hide-Scrollbar CSS Utility */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </section>
  );
}
