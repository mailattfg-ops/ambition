"use client";

import Image from "next/image";
import { useGenerateContext } from "./GenerateContext";
import { CAREER_ROLES } from "@/lib/ambitionsData";

export default function StepFive({ onNext }: { onNext: () => void }) {
  const { 
    searchQuery, setSearchQuery, 
    selectedCareer, selectedAttire, setSelectedAttire 
  } = useGenerateContext();

  const careerObj = selectedCareer ? CAREER_ROLES[selectedCareer] : null;
  
  if (!careerObj) {
    return (
      <div className="w-full flex items-center justify-center p-12 text-slate-500 font-sans">
        Please select a career role first.
      </div>
    );
  }

  const activeAttires = careerObj.attireVariations || [];

  const handleStartGeneration = () => {
    if (selectedAttire) {
      onNext();
    } else {
      alert("Please select an outfit variation before generating.");
    }
  };

  return (
    <div className="w-full flex flex-col gap-8 animate-fade-in select-none">
      
      {/* Top row: Title and Search bar */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-6 w-full pb-2 md:pb-2 select-none">
        <div className="flex flex-col gap-1 md:gap-2">
          <h1 className="font-sans font-bold text-[32px] md:text-[38px] sm:text-[44px] leading-[1.05] tracking-[-0.04em] text-[#000000]">
            Future {careerObj.title}
          </h1>
          <p className="font-sans font-normal text-[13px] md:text-[16px] sm:text-[18px] leading-none tracking-[-0.03em] text-[#64748B]">
            Choose the look
          </p>
        </div>

        {/* Search bar inside header row matching figma (Hidden on mobile for Step 5) */}
        <div className="hidden md:flex items-center border border-[#E2E8F0] bg-white rounded-[12px] pl-5 pr-1.5 py-1.5 w-full lg:w-[380px] h-[52px] shadow-[0_4px_12px_rgba(0,0,0,0.015)] focus-within:border-black transition-all shrink-0">
          <input
            type="text"
            placeholder="Search for careers"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-[#000000] placeholder-slate-400 font-sans font-medium text-[15px] focus:outline-none"
          />
          <button 
            type="button"
            className="bg-[#000000] text-white rounded-[8px] h-[40px] px-6 font-sans font-semibold text-[14px] hover:bg-black/90 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center"
          >
            Search
          </button>
        </div>
      </div>

      {/* 4 AI outfit variation cards inside a container panel */}
      <div className="bg-[#FBFBFB] border border-[#EAEAEA] rounded-[16px] md:rounded-[24px] p-3 md:p-6 w-full mt-2 md:mt-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 w-full select-none">
          {activeAttires.map((attire) => {
            const isSelected = selectedAttire === attire.id;
            
            return (
              <div
                key={attire.id}
                onClick={() => setSelectedAttire(attire.id)}
                className={`relative h-[220px] md:h-[380px] rounded-[16px] md:rounded-[20px] overflow-hidden cursor-pointer border-[3px] md:border-[4px] transition-all duration-300 group select-none ${
                  isSelected
                    ? "border-[#A855F7] shadow-[0_0_25px_rgba(168,85,247,0.6)] md:scale-[1.02]"
                    : "border-transparent hover:scale-[1.01] hover:shadow-lg"
                }`}
              >
                {/* 1. Base Image Layer */}
                <div className="absolute inset-0 w-full h-full bg-slate-900">
                  <Image
                    src={careerObj.imageSrc}
                    alt={attire.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 280px"
                    className="object-cover rounded-[16px] md:rounded-[20px] transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>

                {/* 2. Overlay Gradient Layer */}
                <div 
                  className="absolute z-1 pointer-events-none transition-opacity duration-300 md:group-hover:opacity-95 bottom-0 left-0 right-0 h-[120px] md:h-[200px]"
                  style={{
                    background: `linear-gradient(180deg, ${careerObj.gradientColors.from} 0%, ${careerObj.gradientColors.to} 100%)`
                  }}
                />

                {/* 3. Content Typography Layer */}
                <div className="absolute bottom-[16px] md:bottom-[24px] left-0 right-0 z-10 flex flex-col items-center gap-[2px] md:gap-[3px] px-3 md:px-6 text-center">
                  <h3 className="font-bold text-[18px] md:text-[26px] sm:text-[30px] leading-tight tracking-[-0.5px] text-[#FFFFFF] drop-shadow-sm font-sans">
                    {careerObj.title}
                  </h3>
                  <p className="font-medium text-[9px] md:text-[12px] sm:text-[13px] leading-normal tracking-[-0.25px] text-[#FFFFFF] opacity-90 font-sans">
                    {careerObj.subtitle}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Action Continue button (Inside the container on mobile, matching figma) */}
        <div className="flex items-center justify-center mt-3 md:mt-8 pt-1 pb-1">
          <button
            type="button"
            onClick={handleStartGeneration}
            className="w-full max-w-[988px] bg-[#000000] text-white rounded-[37.5px] h-[48px] md:h-[60px] font-sans font-semibold text-[16px] md:text-[18px] leading-none tracking-tight hover:bg-black/95 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center"
          >
            Continue
          </button>
        </div>
      </div>

    </div>
  );
}
