import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-4 md:px-6 xl:px-12 py-4 bg-transparent relative z-10">
      {/* Left Column: Brand Identity */}
      <div className="flex items-center gap-[11.54px] shrink-0">
        <Image
          src="/assets/icons/ambition_logo.svg"
          alt="Ambition by FrameForge"
          width={208}
          height={54.43}
          className="w-[133px] h-[35px] md:w-[145px] md:h-[38px] xl:w-[208px] xl:h-[54.43px] opacity-100 rotate-[0deg] object-contain"
          priority
        />
      </div>

      {/* Center Column: Navigation Link Array */}
      <nav className="hidden md:flex flex-1 justify-end items-center gap-3 xl:gap-8 mr-3 xl:mr-12">
        <Link
          href="#popular"
          className="flex items-center align-middle whitespace-nowrap font-sans font-medium text-[13px] xl:text-[20px] leading-[100%] tracking-[-0.04em] text-[#121836] hover:opacity-80 transition-opacity"
        >
          Most Popular
        </Link>
        <Link
          href="#testimonials"
          className="flex items-center align-middle whitespace-nowrap font-sans font-medium text-[13px] xl:text-[20px] leading-[100%] tracking-[-0.04em] text-[#121836] hover:opacity-80 transition-opacity"
        >
          Testimonials
        </Link>
      </nav>

      {/* Right Column: Call To Action Actions Array */}
      <div className="flex items-center gap-2 xl:gap-4 shrink-0">
        {/* 1. "Generate Free AI Frame" Action Button */}
        <Link
          href="/generate"
          className="hidden md:flex items-center justify-center bg-[#000000] rounded-[25.84px] py-[6px] xl:py-[10.34px] px-[12px] xl:px-[21.71px] gap-[4px] xl:gap-[10.34px] hover:bg-black/90 transition-colors whitespace-nowrap"
        >
          <Image
            src="/assets/icons/starts.png"
            alt="Stars icon"
            width={18}
            height={18}
            className="shrink-0 object-contain w-[12px] xl:w-[18px] h-[12px] xl:h-[18px]"
          />
          <span className="font-sans font-semibold text-[12px] xl:text-[16.54px] leading-[24.81px] tracking-[-0.04em] text-[#FFFFFF]">
            Generate Free AI Frame
          </span>
        </Link>

        {/* 2. "Generate Bulk" Action Button */}
        <button
          className="hidden md:flex items-center justify-center bg-[#561DFF] rounded-[25.84px] py-[6px] xl:py-[10.34px] px-[12px] xl:px-[21.71px] gap-[4px] xl:gap-[10.34px] hover:bg-[#4C1D95] transition-colors whitespace-nowrap"
        >
          <Image
            src="/assets/icons/starts.png"
            alt="Stars icon"
            width={18}
            height={18}
            className="shrink-0 object-contain w-[12px] xl:w-[18px] h-[12px] xl:h-[18px]"
          />
          <span className="font-sans font-semibold text-[12px] xl:text-[16.54px] leading-[24.81px] tracking-[-0.04em] text-[#FFFFFF]">
            Generate Bulk
          </span>
        </button>

        {/* 3. User Account Anchor Profile Shape */}
        <Link href="/profile" className="hidden md:flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-out shrink-0">
          <Image
            src="/assets/icons/user_icon.svg"
            alt="User Profile"
            width={45}
            height={45}
            className="object-contain w-[30px] xl:w-[45px] h-[30px] xl:h-[45px]"
          />
        </Link>
      </div>
    </header>
  );
}
