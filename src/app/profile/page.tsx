"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

// Initialize Inter font for premium typography
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"orders" | "generations" | "credits">("orders");

  return (
    <div className={`min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-[#FFFFFF] relative select-none ${inter.className}`}>
      
      {/* Premium Top Radial Gradient Background matching Figma exactly */}
      <div 
        className="absolute pointer-events-none z-0"
        style={{
          width: "1770px",
          height: "546px",
          top: "-339px",
          left: "-21px",
          background: "radial-gradient(50% 50% at 50% 50%, #5679B8 0%, #B0C3E5 100%)",
          filter: "blur(140.1px)",
          opacity: 1,
        }}
      />

      {/* 1. Global Header */}
      <header className="w-full bg-transparent relative z-10 border-b border-white/20 pb-4">
        <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-12 md:px-20 h-[80px] flex items-center justify-between mt-4">
          {/* Left Column: Brand Identity */}
          <Link href="/" className="flex items-center gap-[11.54px] hover:opacity-90 transition-opacity">
            <Image
              src="/assets/icons/ambition_logo.svg"
              alt="Ambition by FrameForge"
              width={208}
              height={54.43}
              className="w-[140px] md:w-[180px] lg:w-[208px] h-auto object-contain"
              priority
            />
          </Link>

          {/* Right Column: "Generate Free AI Frame" Action button */}
          <div className="flex items-center gap-4">
            <Link
              href="/generate"
              className="flex items-center justify-center bg-[#000000] rounded-[25.84px] w-auto px-4 lg:w-[245px] h-[36px] lg:h-[41.35px] gap-2 lg:gap-[10.34px] hover:bg-black/90 active:scale-98 transition-all"
            >
              <Image
                src="/assets/icons/starts.png"
                alt="Stars icon"
                width={18}
                height={18}
                className="shrink-0 object-contain w-[14px] h-[14px] lg:w-[18px] lg:h-[18px]"
              />
              <span className="font-sans font-semibold text-[13px] lg:text-[16.54px] leading-none tracking-[-0.04em] text-[#FFFFFF] whitespace-nowrap">
                <span className="hidden sm:inline">Generate Free AI Frame</span>
                <span className="sm:hidden">Generate</span>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Main Profile Layout Dashboard Container */}
      <main className="flex-1 pt-24 pb-16 px-6 sm:px-12 md:px-20 max-w-[1600px] w-full mx-auto">
        
        {/* Navigation Tab Heads */}
        <div className="w-full flex flex-col select-none border-b border-[#E2E8F0] pb-4 md:pb-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 w-max">
            <button
              onClick={() => setActiveTab("orders")}
              className={`font-sans font-semibold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[100%] tracking-[-0.04em] cursor-pointer transition-all duration-300 relative ${
                activeTab === "orders" ? "text-[#000000]" : "text-[#94A3B8] hover:text-black"
              }`}
            >
              <span>Orders</span>
            </button>
            <button
              onClick={() => setActiveTab("generations")}
              className={`font-sans font-semibold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[100%] tracking-[-0.04em] cursor-pointer transition-all duration-300 relative ${
                activeTab === "generations" ? "text-[#000000]" : "text-[#94A3B8] hover:text-black"
              }`}
            >
              <span>Generations</span>
            </button>
            <button
              onClick={() => setActiveTab("credits")}
              className={`font-sans font-semibold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[100%] tracking-[-0.04em] cursor-pointer transition-all duration-300 relative ${
                activeTab === "credits" ? "text-[#000000]" : "text-[#94A3B8] hover:text-black"
              }`}
            >
              <span>Credits</span>
            </button>
          </div>
        </div>

        {/* Tab Content Canvas */}
        <div className="mt-20 md:mt-24 w-full animate-fade-in duration-300">
          
          {activeTab === "orders" && (
            // TAB 1: Orders - Figma spec progress tracking cards
            <div className="flex flex-col xl:flex-row gap-8 w-full justify-center xl:justify-start items-center xl:items-start">
              
              {/* Order Card 1 */}
              <div className="bg-[#FFFFFF] border border-[#BCBCBC] rounded-[24px] lg:rounded-[37px] w-full max-w-[677px] shrink-0 h-auto lg:h-[369px] p-5 md:p-6 lg:p-8 flex flex-col-reverse lg:flex-row justify-between items-center gap-6 lg:gap-8 shadow-[0_10px_40px_rgba(0,0,0,0.015)]">
                {/* Left Card content details */}
                <div className="flex-1 flex flex-col justify-between h-full w-full py-1">
                  <div className="w-full">
                    <h3 className="font-sans font-bold text-[20px] lg:text-[24px] tracking-[-0.03em] text-[#101828] leading-none">
                      Wall poster with frame
                    </h3>
                    <p className="font-sans font-normal text-[14px] lg:text-[15px] tracking-[-0.02em] text-[#667085] mt-2">
                      Perfect for the walls
                    </p>
                    <h4 className="font-sans font-bold text-[24px] lg:text-[32px] text-[#000000] tracking-[-0.04em] mt-3 lg:mt-5 leading-none">
                      ₹299
                    </h4>
                  </div>

                  {/* High Fidelity purple progress bar timeline */}
                  <div className="w-full lg:pr-4 mt-6 lg:mt-4">
                    <div className="flex items-center w-full gap-2">
                      {/* Active Shipped dot to Intermediate dot */}
                      <div className="flex items-center flex-1">
                        <div className="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px] rounded-full bg-[#561DFF] shrink-0" />
                        <div className="flex-1 h-[3px] lg:h-[4px] bg-[#561DFF]" />
                        <div className="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px] rounded-full bg-[#561DFF] shrink-0" />
                      </div>
                      
                      {/* Inactive dotted segment */}
                      <div className="flex items-center gap-2 lg:gap-3 px-2">
                        <div className="w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] rounded-full bg-[#E2E8F0]" />
                        <div className="w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] rounded-full bg-[#E2E8F0]" />
                        <div className="w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] rounded-full bg-[#E2E8F0]" />
                      </div>
                      
                      {/* Inactive destination dot */}
                      <div className="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px] rounded-full bg-[#D1D5DB] shrink-0" />
                    </div>
                    {/* Progress Labels */}
                    <div className="flex justify-between w-full mt-2.5 select-none">
                      <span className="font-sans font-semibold text-[11px] lg:text-[13px] text-[#000000]">
                        Shipped
                      </span>
                      <span className="font-sans font-semibold text-[11px] lg:text-[13px] text-[#000000]">
                        Destination
                      </span>
                    </div>
                  </div>

                  {/* Black Expected Delivery Pill Banner */}
                  <div className="bg-[#000000] text-[#FFFFFF] font-sans font-semibold text-[13px] lg:text-[15px] tracking-[-0.03em] rounded-[14px] lg:rounded-[18px] h-[44px] lg:h-[54px] flex items-center justify-center w-full text-center select-none shadow-sm cursor-default mt-6 lg:mt-4 shrink-0">
                    Expected delivery : May 14, Thursday
                  </div>
                </div>

                {/* Right Card Mockup thumbnail */}
                <div className="relative w-full lg:w-[288px] aspect-[4/3] lg:aspect-auto lg:h-[305px] shrink-0 overflow-hidden rounded-[16px] lg:rounded-[24px] shadow-sm">
                  <Image
                    src="/assets/images/new/frame_1.jpg"
                    alt="Framed poster on wall"
                    fill
                    className="object-cover rounded-[16px] lg:rounded-[24px]"
                    sizes="(max-width: 1024px) 100vw, 288px"
                    priority
                  />
                </div>
              </div>

              {/* Order Card 2 */}
              <div className="bg-[#FFFFFF] border border-[#BCBCBC] rounded-[24px] lg:rounded-[37px] w-full max-w-[677px] shrink-0 h-auto lg:h-[369px] p-5 md:p-6 lg:p-8 flex flex-col-reverse lg:flex-row justify-between items-center gap-6 lg:gap-8 shadow-[0_10px_40px_rgba(0,0,0,0.015)]">
                {/* Left Card content details */}
                <div className="flex-1 flex flex-col justify-between h-full w-full py-1">
                  <div className="w-full">
                    <h3 className="font-sans font-bold text-[20px] lg:text-[24px] tracking-[-0.03em] text-[#101828] leading-none">
                      Wall poster with frame
                    </h3>
                    <p className="font-sans font-normal text-[14px] lg:text-[15px] tracking-[-0.02em] text-[#667085] mt-2">
                      Perfect for the walls
                    </p>
                    <h4 className="font-sans font-bold text-[24px] lg:text-[32px] text-[#000000] tracking-[-0.04em] mt-3 lg:mt-5 leading-none">
                      ₹299
                    </h4>
                  </div>

                  {/* High Fidelity purple progress bar timeline */}
                  <div className="w-full lg:pr-4 mt-6 lg:mt-4">
                    <div className="flex items-center w-full gap-2">
                      {/* Active Shipped dot to Intermediate dot */}
                      <div className="flex items-center flex-1">
                        <div className="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px] rounded-full bg-[#561DFF] shrink-0" />
                        <div className="flex-1 h-[3px] lg:h-[4px] bg-[#561DFF]" />
                        <div className="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px] rounded-full bg-[#561DFF] shrink-0" />
                      </div>
                      
                      {/* Inactive dotted segment */}
                      <div className="flex items-center gap-2 lg:gap-3 px-2">
                        <div className="w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] rounded-full bg-[#E2E8F0]" />
                        <div className="w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] rounded-full bg-[#E2E8F0]" />
                        <div className="w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] rounded-full bg-[#E2E8F0]" />
                      </div>
                      
                      {/* Inactive destination dot */}
                      <div className="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px] rounded-full bg-[#D1D5DB] shrink-0" />
                    </div>
                    {/* Progress Labels */}
                    <div className="flex justify-between w-full mt-2.5 select-none">
                      <span className="font-sans font-semibold text-[11px] lg:text-[13px] text-[#000000]">
                        Shipped
                      </span>
                      <span className="font-sans font-semibold text-[11px] lg:text-[13px] text-[#000000]">
                        Destination
                      </span>
                    </div>
                  </div>

                  {/* Black Expected Delivery Pill Banner */}
                  <div className="bg-[#000000] text-[#FFFFFF] font-sans font-semibold text-[13px] lg:text-[15px] tracking-[-0.03em] rounded-[14px] lg:rounded-[18px] h-[44px] lg:h-[54px] flex items-center justify-center w-full text-center select-none shadow-sm cursor-default mt-6 lg:mt-4 shrink-0">
                    Expected delivery : May 14, Thursday
                  </div>
                </div>

                {/* Right Card Mockup thumbnail */}
                <div className="relative w-full lg:w-[288px] aspect-[4/3] lg:aspect-auto lg:h-[305px] shrink-0 overflow-hidden rounded-[16px] lg:rounded-[24px] shadow-sm">
                  <Image
                    src="/assets/images/new/frame_1.jpg"
                    alt="Framed poster on stand"
                    fill
                    className="object-cover rounded-[16px] lg:rounded-[24px]"
                    sizes="(max-width: 1024px) 100vw, 288px"
                    priority
                  />
                </div>
              </div>

            </div>
          )
}

          {activeTab === "generations" && (
            // TAB 2: Generations - 1x4 portfolio layout matching Figma
            <div className="w-full flex flex-col items-center gap-12">
              
              {/* 4-column portrait card grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                
                {/* Generation Card 1: Space Astronaut */}
                <div className="relative rounded-[12px] overflow-hidden select-none cursor-default hover:scale-[1.02] hover:shadow-lg transition-all duration-300" style={{ aspectRatio: "195/207" }}>
                  <Image
                    src="/assets/images/new/astronaut.jpg"
                    alt="Astronaut Portrait Generation"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    priority
                  />
                </div>

                {/* Generation Card 2: F1 Driver / Racer */}
                <div className="relative rounded-[12px] overflow-hidden select-none cursor-default hover:scale-[1.02] hover:shadow-lg transition-all duration-300" style={{ aspectRatio: "195/207" }}>
                  <Image
                    src="/assets/images/new/engineer.jpg"
                    alt="F1 Driver Portrait Generation"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    priority
                  />
                </div>

                {/* Generation Card 3: Lawyer */}
                <div className="relative rounded-[12px] overflow-hidden select-none cursor-default hover:scale-[1.02] hover:shadow-lg transition-all duration-300" style={{ aspectRatio: "195/207" }}>
                  <Image
                    src="/assets/images/new/lawyer.jpg"
                    alt="Lawyer Portrait Generation"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    priority
                  />
                </div>

                {/* Generation Card 4: Archeologist */}
                <div className="relative rounded-[12px] overflow-hidden select-none cursor-default hover:scale-[1.02] hover:shadow-lg transition-all duration-300" style={{ aspectRatio: "195/207" }}>
                  <Image
                    src="/assets/images/new/archeologist.jpg"
                    alt="Archaeologist Portrait Generation"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    priority
                  />
                </div>

              </div>

              {/* Centered Premium credits redirect action button — Figma spec */}
              <button
                onClick={() => {
                  setActiveTab("credits");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-[#000000] hover:bg-black/90 text-white rounded-full font-sans font-semibold text-[15px] tracking-[-0.02em] py-[14px] px-[28px] inline-flex items-center gap-[10px] cursor-pointer shadow-md select-none transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <Image
                  src="/assets/icons/starts.png"
                  alt="Stars"
                  width={16}
                  height={16}
                  className="shrink-0 object-contain"
                />
                <span>For more generations recharge your credits</span>
              </button>
            </div>
          )}

          {activeTab === "credits" && (
            // TAB 3: Credits - Exact Figma spec 4-tier pricing layout
            // Outer container: 1414px × 564px, radius 31.43px, border 1px #A7A7A7, bg #FAFAFA
            <div className="w-full bg-[#FAFAFA] border border-[#A7A7A7] rounded-[24px] lg:rounded-[31.43px] px-4 py-6 md:px-8 md:py-10 flex items-center justify-center overflow-visible">
              <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-6 lg:gap-6 w-full select-none">

                {/* Plan 1: Intro — 280px × 467px */}
                <div className="bg-transparent flex flex-col justify-between h-auto min-h-[400px] lg:min-h-[467px] w-full max-w-[320px] lg:w-[280px] p-6 lg:p-8 rounded-[24px] lg:rounded-[31.43px]">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-baseline gap-1 select-none">
                      <span className="font-sans font-bold text-[32px] lg:text-[36px] tracking-[-0.04em] text-[#0f172a]">
                        $20
                      </span>
                      <span className="font-sans font-medium text-[13px] lg:text-[14px] text-[#64748B]">
                        /month
                      </span>
                    </div>

                    <div className="flex flex-col gap-1 items-start mt-1">
                      <h4 className="font-sans font-bold text-[20px] lg:text-[22px] text-[#0f172a] tracking-tight">
                        Intro
                      </h4>
                      <p className="font-sans font-medium text-[13px] lg:text-[14px] leading-[145%] text-[#64748B] text-left">
                        For most businesses that want to optimize web queries
                      </p>
                    </div>

                    {/* Features Checklist */}
                    <div className="flex flex-col gap-3 mt-4 mb-6 w-full">
                      {["All limited links","Own analytics platform","Chat support","Optimize hashtags","Unlimited users"].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-left">
                          <span
                            className="shrink-0 flex items-center justify-center rounded-full"
                            style={{ width: "24px", height: "24px", background: "rgba(82,67,194,0.104)" }}
                          >
                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                              <path d="M1.5 5.5L5 9L12.5 1.5" stroke="#5243C2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span className="font-sans font-medium text-[13px] lg:text-[14px] text-[#334155] tracking-tight select-none">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    className="bg-[#E8E8E8] text-[#334155] mt-auto shrink-0 mx-auto w-full max-w-[250px] h-[48px] lg:h-[54px] flex items-center justify-center rounded-[29px] font-black text-[16px] lg:text-[18.13px] leading-none text-center tracking-[0px]"
                    style={{ fontFamily: 'Avenir, sans-serif' }}
                  >
                    Choose plan
                  </button>
                </div>

                {/* Plan 2: Base — 280px × 467px */}
                <div className="bg-transparent flex flex-col justify-between h-auto min-h-[400px] lg:min-h-[467px] w-full max-w-[320px] lg:w-[280px] p-6 lg:p-8 rounded-[24px] lg:rounded-[31.43px]">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-baseline gap-1 select-none">
                      <span className="font-sans font-bold text-[32px] lg:text-[36px] tracking-[-0.04em] text-[#0f172a]">
                        $50
                      </span>
                      <span className="font-sans font-medium text-[13px] lg:text-[14px] text-[#64748B]">
                        /month
                      </span>
                    </div>

                    <div className="flex flex-col gap-1 items-start mt-1">
                      <h4 className="font-sans font-bold text-[20px] lg:text-[22px] text-[#0f172a] tracking-tight">
                        Base
                      </h4>
                      <p className="font-sans font-medium text-[13px] lg:text-[14px] leading-[145%] text-[#64748B] text-left">
                        For most businesses that want to optimize web queries
                      </p>
                    </div>

                    {/* Features Checklist */}
                    <div className="flex flex-col gap-3 mt-4 mb-6 w-full">
                      {["All limited links","Own analytics platform","Chat support","Optimize hashtags","Unlimited users"].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-left">
                          <span
                            className="shrink-0 flex items-center justify-center rounded-full"
                            style={{ width: "24px", height: "24px", background: "rgba(82,67,194,0.104)" }}
                          >
                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                              <path d="M1.5 5.5L5 9L12.5 1.5" stroke="#5243C2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span className="font-sans font-medium text-[13px] lg:text-[14px] text-[#334155] tracking-tight select-none">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    className="bg-[#E8E8E8] text-[#334155] mt-auto shrink-0 mx-auto w-full max-w-[250px] h-[48px] lg:h-[54px] flex items-center justify-center rounded-[29px] font-black text-[16px] lg:text-[18.13px] leading-none text-center tracking-[0px]"
                    style={{ fontFamily: 'Avenir, sans-serif' }}
                  >
                    Choose plan
                  </button>
                </div>

                {/* Plan 3: Pro — 353px × 580px, #561DFF bg, protrudes above/below container */}
                <div
                  className="relative rounded-[24px] lg:rounded-[31.43px] p-6 lg:p-8 flex flex-col justify-between w-full max-w-[320px] lg:max-w-none lg:w-[353px] h-auto min-h-[460px] lg:min-h-[580px] shrink-0 lg:-mt-[113px]"
                  style={{
                    background: "#561DFF",
                    boxShadow: "0px 50.77px 41.1px 0px rgba(82, 67, 194, 0.295)",
                  }}
                >
                  {/* Diagonal line texture overlay matching Figma */}
                  <div className="absolute inset-0 rounded-[24px] lg:rounded-[31.43px] pointer-events-none overflow-hidden opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="diag" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                          <line x1="0" y1="0" x2="0" y2="20" stroke="white" strokeWidth="1.5"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#diag)"/>
                    </svg>
                  </div>

                  {/* Most Popular Badge — top center */}
                  <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
                    <span className="bg-[#7B6EF6] text-white text-[10px] lg:text-[11px] font-sans font-bold uppercase tracking-widest py-[4px] px-[12px] lg:py-[5px] lg:px-[16px] rounded-full whitespace-nowrap select-none">
                      MOST POPULAR
                    </span>
                  </div>

                  <div className="flex flex-col gap-4 pt-8">
                    <div className="flex items-baseline gap-1 select-none text-white">
                      <span className="font-sans font-bold text-[36px] lg:text-[42px] tracking-[-0.04em]">
                        $100
                      </span>
                      <span className="font-sans font-medium text-[13px] lg:text-[14px] opacity-80">
                        /month
                      </span>
                    </div>

                    <div className="flex flex-col gap-1 items-start mt-1">
                      <h4 className="font-sans font-bold text-[22px] lg:text-[26px] text-white tracking-tight">
                        Pro
                      </h4>
                      <p className="font-sans font-medium text-[13px] lg:text-[14px] leading-[145%] text-white opacity-80 text-left">
                        For most businesses that want to optimize web queries
                      </p>
                    </div>

                    {/* Features Checklist */}
                    <div className="flex flex-col gap-3 mt-4 mb-6 w-full">
                      {["All limited links","Own analytics platform","Chat support","Optimize hashtags","Unlimited users"].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-left">
                          <span
                            className="shrink-0 flex items-center justify-center rounded-full"
                            style={{ width: "24px", height: "24px", background: "rgba(255,255,255,0.15)" }}
                          >
                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                              <path d="M1.5 5.5L5 9L12.5 1.5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span className="font-sans font-medium text-[13px] lg:text-[14px] text-white tracking-tight select-none">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    className="bg-[#000000] text-white mt-auto shrink-0 mx-auto w-full max-w-[250px] h-[48px] lg:h-[54px] flex items-center justify-center rounded-[29px] font-black text-[16px] lg:text-[18.13px] leading-none text-center tracking-[0px]"
                    style={{ fontFamily: 'Avenir, sans-serif' }}
                  >
                    Choose plan
                  </button>
                </div>

                {/* Plan 4: Enterprise — 280px × 467px */}
                <div className="bg-transparent flex flex-col justify-between h-auto min-h-[400px] lg:min-h-[467px] w-full max-w-[320px] lg:w-[280px] p-6 lg:p-8 rounded-[24px] lg:rounded-[31.43px]">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-baseline gap-1 select-none">
                      <span className="font-sans font-bold text-[32px] lg:text-[36px] tracking-[-0.04em] text-[#0f172a]">
                        $200
                      </span>
                      <span className="font-sans font-medium text-[13px] lg:text-[14px] text-[#64748B]">
                        /month
                      </span>
                    </div>

                    <div className="flex flex-col gap-1 items-start mt-1">
                      <h4 className="font-sans font-bold text-[20px] lg:text-[22px] text-[#0f172a] tracking-tight">
                        Enterprise
                      </h4>
                      <p className="font-sans font-medium text-[13px] lg:text-[14px] leading-[145%] text-[#64748B] text-left">
                        For most businesses that want to optimize web queries
                      </p>
                    </div>

                    {/* Features Checklist */}
                    <div className="flex flex-col gap-3 mt-4 mb-6 w-full">
                      {["All limited links","Own analytics platform","Chat support","Optimize hashtags","Unlimited users"].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-left">
                          <span
                            className="shrink-0 flex items-center justify-center rounded-full"
                            style={{ width: "24px", height: "24px", background: "rgba(82,67,194,0.104)" }}
                          >
                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                              <path d="M1.5 5.5L5 9L12.5 1.5" stroke="#5243C2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span className="font-sans font-medium text-[13px] lg:text-[14px] text-[#334155] tracking-tight select-none">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    className="bg-[#E8E8E8] text-[#334155] mt-auto shrink-0 mx-auto w-full max-w-[250px] h-[48px] lg:h-[54px] flex items-center justify-center rounded-[29px] font-black text-[16px] lg:text-[18.13px] leading-none text-center tracking-[0px]"
                    style={{ fontFamily: 'Avenir, sans-serif' }}
                  >
                    Choose plan
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>
      </main>

    </div>
  );
}
