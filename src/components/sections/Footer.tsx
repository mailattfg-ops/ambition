"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Footer Component
 * Continuous deep blue branding (#153293) incorporating the school partnership
 * section at the top and navigation links at the bottom, perfectly matches
 * the Figma specifications without border partitions or lines.
 */
export default function Footer() {
  return (
    <footer className="relative w-full pt-20 md:pt-24 pb-0 overflow-hidden select-none" style={{ backgroundColor: "#153293" }}>
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
      
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col">
        
        {/* Top Segment: Bring FrameForge to your school (Showcase) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 mb-28 md:mb-40">
          
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

        {/* Middle Segment: Brand Logo + Column Links Grid */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
          
          {/* Brand Identity Block */}
          <div className="flex flex-col items-start max-w-[320px]">
            <div className="flex items-center gap-[11.54px] mb-4 select-none">
              <Image
                src="/assets/icons/footer_icon.png"
                alt="Ambition by FrameForge"
                width={208}
                height={54.43}
                className="w-[208px] h-[54.43px] object-contain"
                priority
              />
            </div>
            <p className="font-sans font-normal text-[16px] leading-[150%] tracking-[-0.02em] text-[#FFFFFF]/70 select-none">
              See your child's future with AI. Magical ambition frames in seconds.
            </p>
          </div>

          {/* Links Grid: Responsive columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 lg:gap-24 w-full lg:w-auto">
            
            {/* Column 1: Product */}
            <div className="flex flex-col items-start">
              <h3 className="font-sans font-bold text-[18px] leading-none tracking-[-0.02em] text-[#FFFFFF] mb-6 select-none">
                Product
              </h3>
              <nav className="flex flex-col gap-4">
                <Link href="#how-it-works" className="font-sans font-medium text-[16px] leading-none text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-300">
                  How it works
                </Link>
                <Link href="#popular" className="font-sans font-medium text-[16px] leading-none text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-300">
                  Popular careers
                </Link>
                <Link href="#showcase" className="font-sans font-medium text-[16px] leading-none text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-300">
                  Frame options
                </Link>
                <Link href="#pricing" className="font-sans font-medium text-[16px] leading-none text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-300">
                  Pricing
                </Link>
              </nav>
            </div>

            {/* Column 2: For Schools */}
            <div className="flex flex-col items-start">
              <h3 className="font-sans font-bold text-[18px] leading-none tracking-[-0.02em] text-[#FFFFFF] mb-6 select-none">
                For Schools
              </h3>
              <nav className="flex flex-col gap-4">
                <Link href="#schools" className="font-sans font-medium text-[16px] leading-none text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-300">
                  Bulk generations
                </Link>
                <Link href="#schools" className="font-sans font-medium text-[16px] leading-none text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-300">
                  School partnerships
                </Link>
                <Link href="#schools" className="font-sans font-medium text-[16px] leading-none text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-300">
                  Annual day frames
                </Link>
              </nav>
            </div>

            {/* Column 3: Contact */}
            <div className="col-span-2 md:col-span-1 flex flex-col items-start">
              <h3 className="font-sans font-bold text-[18px] leading-none tracking-[-0.02em] text-[#FFFFFF] mb-6 select-none">
                Contact
              </h3>
              <div className="flex flex-col gap-4">
                <a href="mailto:hello@frameforge.one" className="font-sans font-medium text-[16px] leading-none text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-300 block">
                  hello@frameforge.one
                </a>
                <span className="font-sans font-medium text-[16px] leading-none text-[#FFFFFF]/70 block select-none">
                  WhatsApp +91 00000 00000
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Segment: Copyright Line with full-width horizontal divider border at the top */}
      <div className="relative z-10 w-full h-[49px] border-t border-[#EDE6DE] mt-16 flex justify-center items-center">
        <p 
          className="font-normal text-[12px] leading-[16px] tracking-normal text-[#FFFFFF] text-center select-none"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          © 2026 FrameForge Future Ambition. Made with ✨ for dreamers.
        </p>
      </div>
    </footer>
  );
}
