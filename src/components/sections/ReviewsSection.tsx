"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

interface ReviewCardProps {
  quote: string;
  name: string;
  role: string;
  imageSrc: string;
}

function ReviewCard({ quote, name, role, imageSrc }: ReviewCardProps) {
  return (
    <div 
      className={`flex flex-col justify-between w-[342px] h-[320px] p-8 bg-[#F5F5F5] rounded-[20px] shrink-0 select-none hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ${inter.className}`}
    >
      {/* 1. Quote Text: Inter Regular/Medium, ~18px, comfortable leading */}
      <blockquote className="text-[18px] leading-[150%] text-[#000000] font-normal tracking-tight">
        {quote}
      </blockquote>

      {/* 2. Author Profile Container */}
      <div className="flex flex-row items-center gap-3 mt-6">
        {/* Avatar: Square shape with small rounded corners, matching the Figma screenshot */}
        <div className="relative w-[48px] h-[48px] rounded-[8px] overflow-hidden bg-gray-200">
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="48px"
            className="object-cover"
            priority
          />
        </div>
        
        {/* Name and Role text */}
        <div className="flex flex-col">
          <cite className="not-italic font-bold text-[16px] leading-tight text-[#000000] tracking-tight">
            {name}
          </cite>
          <span className="text-[13px] font-medium text-[#64748B] mt-[4px] leading-none">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const reviews = [
    {
      quote: `"Lily dreamt of being a marine biologist, and her smile was contagious. We put her drawing on the fridge!"`,
      name: "Sarah Parker",
      role: "Mother of Lily, age 7",
      imageSrc: "/assets/images/review_1.jpg",
    },
    {
      quote: `"Lily dreamt of being a marine biologist, and her smile was contagious. We put her drawing on the fridge!"`,
      name: "Sarah Parker",
      role: "Mother of Lily, age 7",
      imageSrc: "/assets/images/review_2.jpg",
    },
    {
      quote: `"Max imagined himself as a superhero, and his creativity flowed. We turned his art into a poster for his room!"`,
      name: "Daniel Lee",
      role: "Father of Max, age 8",
      imageSrc: "/assets/images/review_3.jpg",
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

      {/* 2. H2 Title Heading: Geist SemiBold, 72px, #000000, 100% line height, -4% tracking */}
      <div className="w-full max-w-[900px] px-6 text-center mb-16">
        <h2 className="font-sans font-semibold text-[40px] md:text-[72px] leading-[100%] tracking-[-0.04em] text-[#000000]">
          Real reactions from real<br />families.
        </h2>
      </div>

      {/* 3. Reusable Modular ReviewCard list with absolute consistency */}
      <div className="w-full overflow-x-auto no-scrollbar scroll-smooth flex justify-start xl:justify-center items-center py-6 px-6 md:px-12 xl:px-0">
        <div className="flex gap-6 items-center shrink-0 xl:mx-auto">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              quote={review.quote}
              name={review.name}
              role={review.role}
              imageSrc={review.imageSrc}
            />
          ))}
        </div>
      </div>

      {/* Embedded CSS for hiding scrollbars */}
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
