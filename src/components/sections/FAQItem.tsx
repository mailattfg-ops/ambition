"use client";

import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`w-full bg-[#FFFFFF] rounded-[16px] md:rounded-[20px] shadow-sm overflow-hidden transition-all duration-300 border border-gray-100 ${inter.className}`}
    >
      {/* Accordion Header / Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 px-6 md:py-6 md:px-8 text-left hover:bg-gray-50/50 transition-colors focus:outline-none cursor-pointer select-none"
      >
        {/* Question: Inter SemiBold/Bold */}
        <span className="font-semibold text-[13px] min-[375px]:text-[14px] md:text-[20px] text-[#000000] tracking-tight pr-4">
          {question}
        </span>
        
        {/* Chevron down icon rotating on active expand (Hidden on mobile as per screenshot) */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`hidden md:block text-slate-500 shrink-0 transition-transform duration-300 w-[16px] h-[16px] md:w-[20px] md:h-[20px] ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Accordion Content Panel with Smooth Height Animation */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] border-t border-gray-50" : "max-h-0"
        }`}
      >
        <div className="py-4 px-6 md:py-6 md:px-8 text-[12px] md:text-[15px] leading-[160%] text-[#64748B] font-medium">
          {answer}
        </div>
      </div>
    </div>
  );
}
