"use client";

import Image from "next/image";

/**
 * SchoolSection Component
 * Implements high-fidelity "Bring FrameForge to your school" details.
 * Deep blue background (#173BA6), clean copy, and 3 fluid overlapping cards
 * with premium thick white borders, soft drop shadows, and responsive scaling.
 */
export default function SchoolSection() {
  return (
    <section id="schools" className="relative w-full py-20 md:py-28 overflow-hidden select-none" style={{ backgroundColor: "#153293" }}>
      {/* Figma Spec: Subtle dot-pattern texture overlay blending with background color */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/assets/images/bg_for_footer.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundBlendMode: "multiply",
          backgroundColor: "#153293",
          opacity: 0.9,
        }}
      />
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
        
        {/* Left Side: Brand Text & Descriptions */}
        <div className="flex-1 flex flex-col items-start text-left max-w-[620px]">
          {/* Pill Badge matching design specifications */}
          <div className="flex items-center justify-center rounded-[31px] bg-[#FFFFFF]/10 border border-white/20 py-[8px] px-[22px] mb-8 hover:bg-white/15 transition-all duration-300 select-none">
            <span className="font-sans font-normal text-[20px] md:text-[24px] leading-none tracking-[-0.04em] text-[#FFFFFF]">
              How it works
            </span>
          </div>

          {/* Heading: Geist SemiBold, 72px, leading 100%, tracking -4%, white text */}
          <h2 className="font-sans font-semibold text-[40px] md:text-[72px] leading-[100%] tracking-[-0.04em] text-[#FFFFFF] mb-8">
            Bring FrameForge to your school
          </h2>

          {/* Copy Descriptions: Inter/Geist style, leading 140%, tracking -4%, white text/80 */}
          <p className="font-sans font-normal text-[18px] md:text-[24px] leading-[140%] tracking-[-0.04em] text-[#FFFFFF]/80 mb-4 select-none">
            Annual day gifts, career week activities, and bulk frames for every student.
          </p>
          <p className="font-sans font-normal text-[18px] md:text-[24px] leading-[140%] tracking-[-0.04em] text-[#FFFFFF]/80 select-none">
            Talk to us about a school-wide program.
          </p>
        </div>

        {/* Right Side: Showcase Composite SVG */}
        <div className="relative w-[320px] md:w-[480px] lg:w-[620px] h-[260px] md:h-[380px] lg:h-[450px] shrink-0 mt-8 lg:mt-0">
          <Image
            src="/assets/images/footer_img.svg"
            alt="School portraits composite showcase"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
