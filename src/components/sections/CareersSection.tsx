"use client";

import { CareerCard } from "./CareerCard";

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
    <section className="relative w-full flex flex-col items-center pt-24 pb-32 bg-[#FFFFFF] overflow-hidden select-none">
      
      {/* 1. Sub-label Pill: Geist Regular, 24px, #000000, 100% line height, -4% tracking */}
      <div className="flex items-center justify-center rounded-[31px] bg-[#EAEAEA] py-[8px] px-[22px] mb-6">
        <span className="font-sans font-normal text-[24px] leading-none tracking-[-0.04em] text-[#000000]">
          How it works
        </span>
      </div>

      {/* 2. Main Title Heading: Geist SemiBold, 72px, #000000, 100% line height, -4% tracking */}
      <div className="w-full max-w-[900px] px-6 text-center mb-16">
        <h2 className="font-sans font-semibold text-[44px] md:text-[72px] leading-[100%] tracking-[-0.04em] text-[#000000]">
          Our Most<br />Popular careers
        </h2>
      </div>

      {/* 3. Reusable Modular CareerCard Flex List with overflow scroll on mobile */}
      <div className="w-full overflow-x-auto no-scrollbar scroll-smooth flex justify-start xl:justify-center items-center py-6 px-6 md:px-12 xl:px-0">
        <div className="flex gap-6 items-center shrink-0 xl:mx-auto">
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
          className="flex items-center justify-center bg-[#000000] rounded-[25.84px] py-[12px] px-[28px] gap-[10px] hover:bg-black/90 hover:scale-[1.04] active:scale-95 transition-all duration-300 shadow-md cursor-pointer select-none"
        >
          {/* Sparkling Stars Icon */}
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="shrink-0 text-white"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          </svg>
          <span className="font-sans font-semibold text-[18px] leading-[100%] tracking-[-0.04em] text-[#FFFFFF]">
            View all Careers
          </span>
        </button>
      </div>

      {/* Embedded CSS for hiding browser scrollbars on the carousel */}
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
