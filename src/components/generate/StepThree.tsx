"use client";

import Image from "next/image";
import { useGenerateContext } from "./GenerateContext";
import { CATEGORIES } from "@/lib/ambitionsData";

export default function StepThree({ onNext }: { onNext: () => void }) {
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useGenerateContext();

  const filteredCategories = CATEGORIES.filter((cat) =>
    cat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

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

      {/* Categories Grid View */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 w-full mt-2 md:mt-4 select-none">
        {filteredCategories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`relative overflow-hidden rounded-[16px] md:rounded-[20px] p-3.5 md:p-6 h-[85px] md:h-[135px] flex items-center justify-between cursor-pointer transition-all duration-300 select-none group border-[2px] md:border-[3px] bg-gradient-to-r ${cat.gradient} ${
                isSelected
                  ? `${cat.activeBorderColor} shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] scale-[1.02]`
                  : `border-slate-100/80 hover:border-slate-300 hover:shadow-md hover:scale-[1.02]`
              }`}
            >
              {/* Left: Category Title */}
              <div className="z-10 flex flex-col justify-center h-full max-w-[55%] md:max-w-[60%]">
              <h3 className="font-sans font-bold text-[11px] md:text-[18px] sm:text-[20px] leading-[1.15] md:leading-[1.12] tracking-[-0.04em] text-[#121836] whitespace-pre-line select-none">
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

      {/* Continue button at bottom */}
      <div className="flex items-center justify-center mt-12 pb-4">
        <button
          type="button"
          onClick={() => {
            if (selectedCategory) {
              onNext();
            } else {
              alert("Please select a career category from the grid above to continue.");
            }
          }}
          className="w-full max-w-[640px] bg-[#000000] text-white rounded-full h-[58px] font-sans font-semibold text-[18px] leading-none tracking-tight hover:bg-black/95 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center"
        >
          Continue
        </button>
      </div>

    </div>
  );
}
