import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 sm:px-12 py-4 bg-transparent relative z-10">
      {/* Left Column: Brand Identity */}
      <div className="flex items-center gap-[11.54px]">
        <Image
          src="/assets/icons/ambition_logo.svg"
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
        <Link
          href="/generate"
          className="hidden sm:flex items-center justify-center bg-[#000000] rounded-[25.84px] w-[245px] h-[41.35px] pt-[10.34px] pr-[21.71px] pb-[10.34px] pl-[21.71px] gap-[10.34px] hover:bg-black/90 transition-colors"
        >
          <Image
            src="/assets/icons/starts.png"
            alt="Stars icon"
            width={18}
            height={18}
            className="shrink-0 object-contain"
          />
          <span className="font-sans font-semibold text-[16.54px] leading-[24.81px] tracking-[-0.04em] text-[#FFFFFF]">
            Generate Free AI Frame
          </span>
        </Link>

        {/* 2. "Generate Bulk" Action Button */}
        <button
          className="flex items-center justify-center bg-[#561DFF] rounded-[25.84px] w-[179px] h-[45.68px] pt-[10.34px] pr-[21.71px] pb-[10.34px] pl-[21.71px] gap-[10.34px] hover:bg-[#4C1D95] transition-colors"
        >
          <Image
            src="/assets/icons/starts.png"
            alt="Stars icon"
            width={18}
            height={18}
            className="shrink-0 object-contain"
          />
          <div className="w-[106px] h-[25px] flex items-center justify-center">
            <span className="font-sans font-semibold text-[16.54px] leading-[24.81px] tracking-[-0.04em] text-[#FFFFFF]">
              Generate Bulk
            </span>
          </div>
        </button>

        {/* 3. User Account Anchor Profile Shape */}
        <Link href="/profile" className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-out">
          <Image
            src="/assets/icons/user_icon.svg"
            alt="User Profile"
            width={45}
            height={45}
            className="object-contain"
          />
        </Link>
      </div>
    </header>
  );
}
