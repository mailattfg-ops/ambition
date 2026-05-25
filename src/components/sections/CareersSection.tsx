

import Image from "next/image";
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
    <section className="relative w-full flex flex-col items-center pt-12 md:pt-24 pb-16 md:pb-32 bg-[#FFFFFF] overflow-hidden select-none">

      {/* 1. Sub-label Pill */}
      <div className="flex items-center justify-center w-auto h-[30px] md:h-[43px] rounded-[31px] bg-[#EBEBEB] py-[4px] md:py-[6px] px-[14px] md:px-[18px] mb-4 md:mb-6">
        <span className="font-sans font-normal text-[13px] md:text-[24px] leading-[100%] tracking-[-0.04em] text-[#000000]">
          How it works
        </span>
      </div>

      {/* 2. Main Title Heading */}
      <div className="w-full max-w-[900px] px-6 text-center mb-8 md:mb-16">
        <h2 className="font-sans font-semibold text-[32px] md:text-[50px] lg:text-[72px] leading-[1.1] md:leading-[100%] tracking-[-0.04em] text-[#000000]">
          Our Most<br />Popular careers
        </h2>
      </div>

      {/* 3. Reusable Modular CareerCard Flex List */}
      <div className="w-full flex justify-center py-6">
        {/* Mobile: 2x2 grid (4 cards) */}
        <div className="grid grid-cols-2 gap-4 px-4 w-full md:hidden max-w-[500px]">
          {careers.slice(0, 4).map((career, index) => (
            <CareerCard
              key={index}
              title={career.title}
              subtitle={career.subtitle}
              imageSrc={career.imageSrc}
              gradientColors={career.gradientColors}
            />
          ))}
        </div>

        {/* Tablet & Desktop: Flex row of 5 items, centered and scaled to fit the window */}
        <div className="hidden md:flex gap-[6px] lg:gap-[10px] xl:gap-[12px] items-center w-full max-w-full px-[6px] lg:px-[10px] xl:px-[12px] mx-auto justify-center">
          {careers.map((career, index) => (
            <CareerCard
              key={index}
              title={career.title}
              subtitle={career.subtitle}
              imageSrc={career.imageSrc}
              gradientColors={career.gradientColors}
              className="flex-1 max-w-[600px]"
            />
          ))}
        </div>
      </div>

      {/* 4. "View all Careers" Call-To-Action Button */}
      <div className="w-full flex justify-center mt-8 md:mt-12">
        <button
          className="flex items-center justify-center bg-[#000000] rounded-[37.5px] md:rounded-[25.84px] py-[10px] md:py-[12px] px-[20px] md:px-[28px] gap-[8px] md:gap-[10px] hover:bg-black/90 hover:scale-[1.04] active:scale-95 transition-all duration-300 shadow-md cursor-pointer select-none"
        >
          <Image
            src="/assets/icons/starts.png"
            alt="Stars icon"
            width={18}
            height={18}
            className="shrink-0 object-contain w-[16px] h-[16px] md:w-[18px] md:h-[18px]"
          />
          <span className="font-sans font-semibold text-[15px] md:text-[18px] leading-[100%] tracking-[-0.04em] text-[#FFFFFF]">
            View all Careers
          </span>
        </button>
      </div>

    </section>
  );
}
