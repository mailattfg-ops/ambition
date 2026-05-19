import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 sm:px-12 py-4 bg-transparent relative z-10">
      {/* Left Column: Brand Identity */}
      <div className="flex items-center gap-[11.54px]">
        <Image 
          src="/assets/images/ambition_logo.svg" 
          alt="Ambition by FrameForge" 
          width={208} 
          height={54.43} 
          className="w-[208px] h-[54.43px] opacity-100 rotate-[0deg] object-contain"
          priority
        />
      </div>

      {/* Center Column: Navigation Link Array */}
      <nav className="hidden md:flex flex-1 justify-end items-center gap-8 mr-12">
        <Link 
          href="#popular" 
          className="flex items-center align-middle w-[118px] h-[28px] font-sans font-medium text-[20px] leading-[100%] tracking-[-0.04em] text-[#121836] hover:opacity-80 transition-opacity"
        >
          Most Popular
        </Link>
        <Link 
          href="#testimonials" 
          className="flex items-center align-middle w-[118px] h-[28px] font-sans font-medium text-[20px] leading-[100%] tracking-[-0.04em] text-[#121836] hover:opacity-80 transition-opacity"
        >
          Testimonials
        </Link>
      </nav>

      {/* Right Column: Call To Action Actions Array */}
      <div className="flex items-center gap-4">
        {/* 1. "Generate Free AI Frame" Action Button */}
        <button 
          className="hidden sm:flex items-center justify-center bg-[#000000] rounded-[25.84px] w-[245px] h-[41.35px] pt-[10.34px] pr-[21.71px] pb-[10.34px] pl-[21.71px] gap-[10.34px] hover:bg-black/90 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
          </svg>
          <span className="font-sans font-semibold text-[16.54px] leading-[24.81px] tracking-[-0.04em] text-[#FFFFFF]">
            Generate Free AI Frame
          </span>
        </button>

        {/* 2. "Generate Bulk" Action Button */}
        <button 
          className="flex items-center justify-center bg-[#561DFF] rounded-[25.84px] w-[179px] h-[45.68px] pt-[10.34px] pr-[21.71px] pb-[10.34px] pl-[21.71px] gap-[10.34px] hover:bg-[#4C1D95] transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
          </svg>
          <div className="w-[106px] h-[25px] flex items-center justify-center">
            <span className="font-sans font-semibold text-[16.54px] leading-[24.81px] tracking-[-0.04em] text-[#FFFFFF]">
              Generate Bulk
            </span>
          </div>
        </button>

        {/* 3. User Account Anchor Profile Shape */}
        <div className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-out">
          <Image 
            src="/assets/icons/user_icon.svg" 
            alt="User Profile" 
            width={45} 
            height={45} 
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
}
