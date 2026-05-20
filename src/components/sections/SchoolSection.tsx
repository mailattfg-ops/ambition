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
    <section id="schools" className="relative w-full bg-[#173BA6] py-20 md:py-28 overflow-hidden select-none">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
        
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

        {/* Right Side: Triple Overlapping Fluid Portrait Cards */}
        <div className="relative flex justify-center items-center w-[320px] md:w-[480px] lg:w-[640px] h-[260px] md:h-[380px] lg:h-[480px] shrink-0 mt-8 lg:mt-0">
          
          {/* 1. Left Card: Lawyer (background depth) */}
          <div 
            className="absolute rounded-[16px] md:rounded-[20px] overflow-hidden border-[4px] md:border-[6px] border-[#FFFFFF] shadow-2xl transition-all duration-500 ease-out hover:scale-[1.12] hover:z-50 hover:rotate-0 hover:shadow-black/50 cursor-pointer origin-bottom-left"
            style={{
              width: "42%",
              height: "75%",
              top: "15%",
              left: "5%",
              transform: "rotate(-12deg)",
              zIndex: 10
            }}
          >
            <Image
              src="/assets/images/new/lawyer.jpg"
              alt="Lawyer child portrait frame"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 140px, 280px"
              priority
            />
          </div>

          {/* 2. Right Card: Archeologist (background depth) */}
          <div 
            className="absolute rounded-[16px] md:rounded-[20px] overflow-hidden border-[4px] md:border-[6px] border-[#FFFFFF] shadow-2xl transition-all duration-500 ease-out hover:scale-[1.12] hover:z-50 hover:rotate-0 hover:shadow-black/50 cursor-pointer origin-bottom-right"
            style={{
              width: "42%",
              height: "75%",
              top: "10%",
              left: "53%",
              transform: "rotate(8deg)",
              zIndex: 20
            }}
          >
            <Image
              src="/assets/images/new/archeologist.jpg"
              alt="Archeologist child portrait frame"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 140px, 280px"
              priority
            />
          </div>

          {/* 3. Middle Card: Astronaut (front-most depth) */}
          <div 
            className="absolute rounded-[16px] md:rounded-[20px] overflow-hidden border-[4px] md:border-[6px] border-[#FFFFFF] shadow-2xl transition-all duration-500 ease-out hover:scale-[1.12] hover:z-50 hover:rotate-0 hover:shadow-black/50 cursor-pointer origin-center"
            style={{
              width: "42%",
              height: "75%",
              top: "22%",
              left: "29%",
              transform: "rotate(-4deg)",
              zIndex: 30
            }}
          >
            <Image
              src="/assets/images/new/astronaut.jpg"
              alt="Astronaut child portrait frame"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 140px, 280px"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}
