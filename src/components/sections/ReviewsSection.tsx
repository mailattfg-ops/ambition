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
      className={`flex flex-col justify-between w-full h-auto min-h-[260px] md:min-h-[320px] p-6 md:p-8 bg-[#F5F5F5] rounded-[20px] select-none hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ${inter.className}`}
    >
      {/* 1. Quote Text */}
      <blockquote className="text-[14px] md:text-[18px] leading-[150%] text-[#000000] font-normal tracking-tight">
        {quote}
      </blockquote>

      {/* 2. Author Profile Container */}
      <div className="flex flex-row items-center gap-3 mt-6">
        {/* Avatar */}
        <div className="relative w-[36px] h-[36px] md:w-[48px] md:h-[48px] rounded-[8px] overflow-hidden bg-gray-200 shrink-0">
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        
        {/* Name and Role text */}
        <div className="flex flex-col">
          <cite className="not-italic font-bold text-[14px] md:text-[16px] leading-tight text-[#000000] tracking-tight">
            {name}
          </cite>
          <span className="text-[11px] md:text-[13px] font-medium text-[#64748B] mt-[4px] leading-none">
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
    <section className="relative w-full flex flex-col items-center pt-12 md:pt-24 pb-16 md:pb-32 bg-[#FFFFFF] overflow-hidden select-none">
      
      {/* 1. Sub-label Pill */}
      <div className="flex items-center justify-center w-auto h-[30px] md:h-[43px] rounded-[31px] bg-[#EBEBEB] py-[4px] md:py-[6px] px-[14px] md:px-[18px] mb-4 md:mb-6">
        <span className="font-sans font-normal text-[13px] md:text-[24px] leading-[100%] tracking-[-0.04em] text-[#000000]">
          How it works
        </span>
      </div>

      {/* 2. H2 Title Heading */}
      <div className="w-full max-w-[900px] px-6 text-center mb-8 md:mb-16">
        <h2 className="font-sans font-semibold text-[28px] md:text-[50px] lg:text-[72px] leading-[100%] tracking-[-0.04em] text-[#000000]">
          <span className="hidden md:inline">Real reactions from real<br />families.</span>
          <span className="md:hidden">Real reactions from real families.</span>
        </h2>
      </div>

      {/* 3. Responsive Grid Row */}
      <div className="w-full px-6 md:px-8 lg:px-12 xl:max-w-[1200px] xl:mx-auto flex justify-center py-4 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full max-w-[400px] md:max-w-[800px] lg:max-w-none mx-auto justify-items-center">
          {reviews.map((review, index) => (
            <div key={index} className="w-full">
              <ReviewCard
                quote={review.quote}
                name={review.name}
                role={review.role}
                imageSrc={review.imageSrc}
              />
            </div>
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
