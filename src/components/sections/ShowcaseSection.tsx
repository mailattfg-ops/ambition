"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-inter",
});

interface FrameCardProps {
  title: string;
  subtitle: string;
  price: string;
  imageSrc: string;
}

function FrameCard({ title, subtitle, price, imageSrc }: FrameCardProps) {
  return (
    <div className={`flex flex-col w-full group select-none ${inter.className}`}>
      {/* Rectangular Image with sharp corners as per the Figma screenshot */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-50 border border-[#E2E8F0]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 342px"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>

      {/* Typography and Meta Row */}
      <div className="flex justify-between items-start mt-3 md:mt-4 w-full px-1">
        <div className="flex flex-col pr-2">
          {/* Title: Inter Bold */}
          <h3 className="font-bold text-[18px] md:text-[14px] lg:text-[16px] xl:text-[20px] leading-tight text-[#000000] tracking-tight">
            {title}
          </h3>
          
          {/* Subtitle: Inter Regular */}
          <p className="text-[12px] md:text-[10px] lg:text-[12px] xl:text-[14px] font-medium text-[#64748B] mt-1 leading-normal">
            {subtitle}
          </p>
        </div>
        
        {/* Price: Inter Bold */}
        <div className="text-[16px] md:text-[14px] lg:text-[16px] xl:text-[20px] font-bold text-[#000000] leading-tight shrink-0">
          {price}
        </div>
      </div>
    </div>
  );
}

export default function ShowcaseSection() {
  const frames = [
    {
      title: "Wall Frame",
      subtitle: "Perfect for the study desk",
      price: "₹299",
      imageSrc: "/assets/images/new/frame_1.jpg",
    },
    {
      title: "Table Frame",
      subtitle: "Perfect for the study desk",
      price: "₹299",
      imageSrc: "/assets/images/new/frame_2.jpg",
    },
    {
      title: "Poster Print",
      subtitle: "Perfect for the study desk",
      price: "₹299",
      imageSrc: "/assets/images/new/frame_3.jpg",
    },
    {
      title: "Acrylic frame",
      subtitle: "Perfect for the study desk",
      price: "₹299",
      imageSrc: "/assets/images/new/frame_4.jpg",
    },
  ];

  return (
    <section className="relative w-full flex flex-col items-center pt-12 md:pt-24 pb-16 md:pb-32 bg-[#FFFFFF] overflow-hidden select-none">
      
      {/* 1. Sub-label Pill */}
      <div className="flex items-center justify-center w-auto h-[30px] md:h-[43px] rounded-[31px] bg-[#EBEBEB] py-[4px] md:py-[6px] px-[14px] md:px-[18px] mb-4 md:mb-6">
        <span className="font-sans font-normal text-[13px] md:text-[24px] leading-[100%] tracking-[-0.04em] text-[#000000]">
          Dream Big
        </span>
      </div>

      {/* 2. Main Title Heading */}
      <div className="w-full max-w-[1000px] px-6 text-center mb-8 md:mb-16">
        <h2 className="font-sans font-semibold text-[28px] md:text-[50px] lg:text-[72px] leading-[1.1] md:leading-[100%] tracking-[-0.04em] text-[#000000]">
          <span className="hidden md:inline">Showcase your child&apos;s<br />future ambition proudly on<br />your wall or study table.</span>
          <span className="md:hidden">Showcase your child&apos;s future ambition proudly on your wall or study table.</span>
        </h2>
      </div>

      {/* 3. Responsive 4-Column Grid Row (No horizontal scrolling on tablet/desktop) */}
      <div className="w-full px-6 md:px-8 lg:px-12 xl:max-w-[1400px] xl:mx-auto flex justify-center py-4 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 lg:gap-6 items-start w-full">
          {frames.map((frame, index) => (
            <FrameCard
              key={index}
              title={frame.title}
              subtitle={frame.subtitle}
              price={frame.price}
              imageSrc={frame.imageSrc}
            />
          ))}
        </div>
      </div>

      {/* 4. "Start with a Free AI Frame" Call-To-Action Button */}
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
            Start with a Free AI Frame
          </span>
        </button>
      </div>

      {/* Embedded CSS for hiding browser scrollbars */}
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
