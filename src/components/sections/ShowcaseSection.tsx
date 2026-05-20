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
    <div className={`flex flex-col w-[342px] shrink-0 group select-none ${inter.className}`}>
      {/* Rectangular Image with sharp corners as per the Figma screenshot */}
      <div className="relative w-[342px] h-[342px] overflow-hidden bg-gray-50 border border-[#E2E8F0]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="342px"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          priority
        />
      </div>

      {/* Typography and Meta Row */}
      <div className="flex justify-between items-start mt-4 w-full px-1">
        <div className="flex flex-col">
          {/* Title: Inter Bold, 20px, Slate-900 */}
          <h3 className="font-bold text-[20px] leading-tight text-[#000000] tracking-tight">
            {title}
          </h3>
          
          {/* Subtitle: Inter Regular, 14px, Slate-500 */}
          <p className="text-[14px] font-medium text-[#64748B] mt-1 leading-normal">
            {subtitle}
          </p>
        </div>
        
        {/* Price: Inter Bold, 20px, aligned to right */}
        <div className="text-[20px] font-bold text-[#000000] leading-tight shrink-0">
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
    <section className="relative w-full flex flex-col items-center pt-24 pb-32 bg-[#FFFFFF] overflow-hidden select-none">
      
      {/* 1. Sub-label Pill: Geist Regular, 24px, #000000, 100% line height, -4% tracking */}
      <div className="flex items-center justify-center rounded-[31px] bg-[#EAEAEA] py-[8px] px-[22px] mb-6">
        <span className="font-sans font-normal text-[24px] leading-none tracking-[-0.04em] text-[#000000]">
          How it works
        </span>
      </div>

      {/* 2. Main Title Heading: Geist SemiBold, 72px, 100% line height, -4% tracking */}
      <div className="w-full max-w-[1000px] px-6 text-center mb-16">
        <h2 className="font-sans font-semibold text-[40px] md:text-[72px] leading-[100%] tracking-[-0.04em] text-[#000000]">
          Showcase your child's<br />future ambition proudly on<br />your wall or study table.
        </h2>
      </div>

      {/* 3. Responsive Horizontal Scroll Flex Grid Row */}
      <div className="w-full overflow-x-auto no-scrollbar scroll-smooth flex justify-start xl:justify-center items-center py-6 px-6 md:px-12 xl:px-0">
        <div className="flex gap-6 items-center shrink-0 xl:mx-auto">
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
