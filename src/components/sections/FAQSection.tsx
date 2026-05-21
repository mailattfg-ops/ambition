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

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`w-full bg-[#FFFFFF] rounded-[20px] shadow-sm overflow-hidden transition-all duration-300 border border-gray-100 ${inter.className}`}
    >
      {/* Accordion Header / Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 px-8 text-left hover:bg-gray-50/50 transition-colors focus:outline-none cursor-pointer select-none"
      >
        {/* Question: Inter SemiBold/Bold, 18px, Black */}
        <span className="font-semibold text-[18px] md:text-[20px] text-[#000000] tracking-tight">
          {question}
        </span>
        
        {/* Chevron Chevron down icon rotating on active expand */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-slate-500 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Accordion Content Panel with Smooth Height Animation */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[300px] border-t border-gray-50" : "max-h-0"
        }`}
      >
        <div className="py-6 px-8 text-[15px] leading-[160%] text-[#64748B] font-medium">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const faqs = [
    {
      question: "Is the AI frame really free?",
      answer: "Yes! Generating, previewing, and downloading the high-quality digital AI frame of your child in their dream career is 100% free. Optional museum-grade physical prints and wooden frames can be ordered to be delivered directly to your doorstep.",
    },
    {
      question: "How long does AI generation take?",
      answer: "It usually takes less than 60 seconds! Once you upload a clear front-facing photo and choose your child's dream career, our custom high-fidelity generative AI instantly constructs a beautiful, natural-looking portrait.",
    },
    {
      question: "Is my child's photo safe?",
      answer: "Absolutely. We prioritize your privacy and data security. All uploaded photos are securely processed solely for generating your digital frame and are automatically purged from our secure servers within hours of completion.",
    },
    {
      question: "How long does delivery take?",
      answer: "For physical orders, premium printing and framing are handled immediately. Shipping and delivery typically take 3 to 5 business days across all major regions in India.",
    },
    {
      question: "Can schools order in bulk?",
      answer: "Yes, definitely! We offer special bulk pricing models and customized layout templates for schools, graduations, annual events, and career days. Get in touch with our partnerships team to coordinate.",
    },
  ];

  return (
    <section className="relative w-full pt-24 pb-32 overflow-hidden select-none" style={{ backgroundColor: "#F0F0F0" }}>
      {/* Figma Spec: Subtle dot-pattern texture overlay blending with background color */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/assets/images/bg_for_footer.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundBlendMode: "multiply",
          backgroundColor: "#F0F0F0",
          opacity: 0.9,
        }}
      />
      
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* 1. Sub-label Pill: Geist Regular, 24px, #000000, 100% line height, -4% tracking */}
        <div className="flex items-center justify-center rounded-[31px] bg-[#EAEAEA] py-[8px] px-[22px] mb-6">
          <span className="font-sans font-normal text-[24px] leading-none tracking-[-0.04em] text-[#000000]">
            How it works
          </span>
        </div>

        {/* 2. Main Title Heading: Geist SemiBold, 72px, #000000, 100% line height, -4% tracking */}
        <div className="w-full max-w-[900px] px-6 text-center mb-16">
          <h2 className="font-sans font-semibold text-[40px] md:text-[72px] leading-[100%] tracking-[-0.04em] text-[#000000]">
            Everything parents ask<br />before generating.
          </h2>
        </div>

        {/* 3. Vertically stacked FAQ list */}
        <div className="w-full max-w-[900px] px-6 flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
