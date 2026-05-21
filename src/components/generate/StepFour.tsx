"use client";

import Image from "next/image";
import { useGenerateContext } from "./GenerateContext";
import { CATEGORIES, CAREER_ROLES } from "@/lib/ambitionsData";

export default function StepFour({ onNext }: { onNext: () => void }) {
  const { 
    searchQuery, setSearchQuery, 
    selectedCategory, setSelectedCategory,
    selectedCareer, setSelectedCareer,
    setSelectedAttire
  } = useGenerateContext();

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleContinueToStep5 = () => {
    if (selectedCareer) {
      onNext();
    } else {
      alert("Please select a specific career role below.");
    }
  };

  const categoryObj = CATEGORIES.find(c => c.id === selectedCategory);
  const activeRoles = categoryObj 
    ? categoryObj.roleIds
        .map(id => CAREER_ROLES[id])
        .filter(Boolean)
        .filter(role => role.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <div className="w-full flex flex-col gap-8 animate-fade-in select-none">
      
      {/* Top row: Title and Search bar */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 w-full pb-2 select-none">
        <div className="flex flex-col gap-2">
          <h1 className="font-sans font-bold text-[38px] sm:text-[44px] leading-[1.05] tracking-[-0.04em] text-[#000000]">
            Pick the dream ambition
          </h1>
          <p className="font-sans font-normal text-[16px] sm:text-[18px] leading-none tracking-[-0.03em] text-[#64748B]">
            100+ careers across 13 categories.
          </p>
        </div>

        {/* Search bar inside header row matching figma */}
        <div className="flex items-center border border-[#E2E8F0] bg-white rounded-[12px] pl-5 pr-1.5 py-1.5 w-full lg:w-[380px] h-[52px] shadow-[0_4px_12px_rgba(0,0,0,0.015)] focus-within:border-black transition-all shrink-0">
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

      <div className="flex flex-col gap-6 w-full">
        {/* Category Carousel */}
        <div className="w-full">
          {/* Horizontal Scrollbar */}
          <div className="w-full overflow-x-auto no-scrollbar scroll-smooth flex justify-start items-center gap-5 py-4 select-none">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`relative shrink-0 overflow-hidden rounded-[20px] p-6 w-[280px] h-[135px] flex items-center justify-between cursor-pointer transition-all duration-300 select-none group border-[3px] bg-gradient-to-r ${cat.gradient} ${
                    isSelected
                      ? `${cat.activeBorderColor} shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] scale-[1.02]`
                      : `${cat.borderColor} hover:scale-[1.01] hover:shadow-sm`
                  }`}
                >
                  {/* Left: Category Title */}
                  <div className="z-10 flex flex-col justify-center h-full max-w-[60%]">
                    <h3 className="font-sans font-bold text-[18px] leading-[1.12] tracking-[-0.04em] text-[#121836] whitespace-pre-line select-none">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Right: Floating Illustration Icon */}
                  <div className="absolute right-0 bottom-0 top-0 w-[50%] flex items-center justify-end overflow-visible select-none pointer-events-none">
                    <div className="relative w-[112%] h-[122%] translate-y-[5%] translate-x-[5%] group-hover:scale-105 group-hover:translate-y-[2%] transition-all duration-500">
                      <Image
                        src={cat.image}
                        alt={cat.titleSingleLine}
                        fill
                        className="object-contain object-right-bottom"
                        sizes="180px"
                        priority
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Career Roles Horizontal Flex Layout */}
        <div className="w-full mt-4 select-none">

          {activeRoles.length > 0 ? (
            <div className="flex flex-wrap lg:flex-nowrap gap-6 items-center justify-center lg:justify-between w-full overflow-x-auto no-scrollbar py-4">
              {activeRoles.map((career) => {
                const isSelected = selectedCareer === career.id;
                return (
                  <div
                    key={career.id}
                    onClick={() => {
                      setSelectedCareer(career.id);
                      setSelectedAttire(null); // Reset attire choice on role switch
                    }}
                    className={`relative w-[240px] xs:w-[260px] sm:w-[280px] h-[340px] rounded-[20px] overflow-hidden shrink-0 select-none group transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "border-[4px] border-[#A855F7] shadow-[0_0_25px_rgba(168,85,247,0.6)] scale-[1.02]"
                        : "border border-transparent hover:scale-[1.01] hover:shadow-xl"
                    }`}
                  >
                    {/* 1. Base Image Layer */}
                    <Image
                      src={career.imageSrc}
                      alt={career.title}
                      fill
                      sizes="280px"
                      className="object-cover rounded-[20px] transition-transform duration-700 group-hover:scale-[1.04]"
                      priority
                    />

                    {/* 2. Overlay Gradient Layer */}
                    <div 
                      className="absolute z-1 pointer-events-none transition-opacity duration-300 group-hover:opacity-95"
                      style={{
                        width: "100%",
                        height: "200px",
                        bottom: "0",
                        left: "0",
                        background: `linear-gradient(180deg, ${career.gradientColors.from} 0%, ${career.gradientColors.to} 100%)`
                      }}
                    />

                    {/* 4. Content Typography Layer */}
                    <div className="absolute bottom-[24px] left-0 right-0 z-10 flex flex-col items-center gap-[3px] px-6 text-center">
                      <h3 className="font-bold text-[26px] sm:text-[30px] leading-tight tracking-[-0.5px] text-[#FFFFFF] drop-shadow-sm font-sans">
                        {career.title}
                      </h3>
                      <p className="font-medium text-[12px] sm:text-[13px] leading-normal tracking-[-0.25px] text-[#FFFFFF] opacity-90 font-sans">
                        {career.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-10 w-full text-center border border-dashed border-slate-200 rounded-[20px] bg-slate-50/50">
              <span className="text-[16px] font-sans font-semibold text-slate-700">
                No career roles found in this category matching &quot;{searchQuery}&quot;
              </span>
            </div>
          )}
        </div>

        {/* Bottom centered Action Continue button */}
        <div className="flex items-center justify-center mt-12 pb-4 w-full">
          <button
            type="button"
            onClick={handleContinueToStep5}
            className="w-full max-w-[988px] bg-[#000000] text-white rounded-[37.5px] h-[60px] font-sans font-semibold text-[18px] leading-none tracking-tight hover:bg-black/95 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center"
          >
            Continue
          </button>
        </div>

      </div>
    </div>
  );
}
