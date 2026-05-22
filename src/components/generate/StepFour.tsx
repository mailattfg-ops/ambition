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
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-6 w-full pb-2 md:pb-2 select-none">
        <div className="flex flex-col gap-1 md:gap-2">
          <h1 className="font-sans font-bold text-[32px] md:text-[38px] sm:text-[44px] leading-[1.05] tracking-[-0.04em] text-[#000000]">
            Pick the dream ambition
          </h1>
          <p className="font-sans font-normal text-[13px] md:text-[16px] sm:text-[18px] leading-none tracking-[-0.03em] text-[#64748B]">
            100+ careers across 13 categories.
          </p>
        </div>

        {/* Search bar inside header row matching figma */}
        <div className="flex items-center border border-[#E2E8F0] bg-white rounded-[12px] pl-4 md:pl-5 pr-1.5 py-1.5 w-full lg:w-[380px] h-[48px] md:h-[52px] shadow-[0_4px_12px_rgba(0,0,0,0.015)] focus-within:border-black transition-all shrink-0">
          <input
            type="text"
            placeholder="Search for careers"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-[#000000] placeholder-slate-400 font-sans font-medium text-[13px] md:text-[15px] focus:outline-none"
          />
          <button 
            type="button"
            className="bg-[#000000] text-white rounded-[8px] h-[36px] md:h-[40px] px-5 md:px-6 font-sans font-semibold text-[13px] md:text-[14px] hover:bg-black/90 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center"
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full">
        {/* Category Carousel */}
        <div className="w-full">
          {/* Horizontal Scrollbar */}
          <div className="w-full overflow-x-auto no-scrollbar scroll-smooth flex justify-start items-center gap-3 md:gap-5 py-2 md:py-4 select-none">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`relative shrink-0 overflow-hidden rounded-[16px] md:rounded-[20px] p-3.5 md:p-6 w-[160px] md:w-[280px] h-[85px] md:h-[135px] flex items-center justify-between cursor-pointer transition-all duration-300 select-none group border-[2px] md:border-[3px] bg-gradient-to-r ${cat.gradient} ${
                    isSelected
                      ? `${cat.activeBorderColor} shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] md:scale-[1.02]`
                      : `${cat.borderColor} hover:scale-[1.01] hover:shadow-sm`
                  }`}
                >
                  {/* Left: Category Title */}
                  <div className="z-10 flex flex-col justify-center h-full max-w-[55%] md:max-w-[60%]">
                    <h3 className="font-sans font-bold text-[11px] md:text-[18px] leading-[1.15] md:leading-[1.12] tracking-[-0.04em] text-[#121836] whitespace-pre-line select-none">
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
                        sizes="(max-width: 768px) 80px, 180px"
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
        <div className="w-full mt-2 md:mt-4 select-none">

          {activeRoles.length > 0 ? (
            <div className="grid grid-cols-2 lg:flex lg:flex-nowrap gap-3 md:gap-6 lg:justify-between w-full overflow-x-hidden lg:overflow-x-auto no-scrollbar py-2 md:py-4">
              {activeRoles.map((career) => {
                const isSelected = selectedCareer === career.id;
                return (
                  <div
                    key={career.id}
                    onClick={() => {
                      setSelectedCareer(career.id);
                      setSelectedAttire(null); // Reset attire choice on role switch
                    }}
                    className={`relative w-full lg:w-[280px] h-[220px] md:h-[340px] rounded-[16px] md:rounded-[20px] overflow-hidden lg:shrink-0 select-none group transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "border-[3px] md:border-[4px] border-[#A855F7] shadow-[0_0_25px_rgba(168,85,247,0.6)] lg:scale-[1.02]"
                        : "border border-transparent hover:scale-[1.01] hover:shadow-xl"
                    }`}
                  >
                    {/* 1. Base Image Layer */}
                    <Image
                      src={career.imageSrc}
                      alt={career.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 280px"
                      className="object-cover rounded-[16px] md:rounded-[20px] transition-transform duration-700 lg:group-hover:scale-[1.04]"
                      priority
                    />

                    {/* 2. Overlay Gradient Layer */}
                    <div 
                      className="absolute z-1 pointer-events-none transition-opacity duration-300 lg:group-hover:opacity-95 bottom-0 left-0 right-0 h-[120px] md:h-[200px]"
                      style={{
                        background: `linear-gradient(180deg, ${career.gradientColors.from} 0%, ${career.gradientColors.to} 100%)`
                      }}
                    />

                    {/* 4. Content Typography Layer */}
                    <div className="absolute bottom-[16px] md:bottom-[24px] left-0 right-0 z-10 flex flex-col items-center gap-[2px] md:gap-[3px] px-3 md:px-6 text-center">
                      <h3 className="font-bold text-[18px] md:text-[26px] sm:text-[30px] leading-tight tracking-[-0.5px] text-[#FFFFFF] drop-shadow-sm font-sans">
                        {career.title}
                      </h3>
                      <p className="font-medium text-[9px] md:text-[12px] sm:text-[13px] leading-normal tracking-[-0.25px] text-[#FFFFFF] opacity-90 font-sans">
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
