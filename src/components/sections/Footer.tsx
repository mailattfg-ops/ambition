

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
    <footer className="relative w-full pt-20 md:pt-24 pb-16 md:pb-0 overflow-hidden select-none" style={{ backgroundColor: "#153293" }}>
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
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-12 md:gap-[38px] lg:gap-[50px] xl:gap-[64px] mb-16 md:mb-24 lg:mb-40">
          
          {/* Left Side: Brand Text & Descriptions */}
          <div className="flex-1 flex flex-col items-start text-left max-w-[752px]">
            {/* Pill Badge matching design specifications (Hidden on mobile) */}
            <div className="hidden md:flex items-center justify-center rounded-[31px] bg-[#FFFFFF] py-[6px] px-[18px] mb-[28px] select-none w-max">
              <span className="font-sans font-normal text-[20px] md:text-[16px] lg:text-[20px] xl:text-[24px] leading-[100%] tracking-[-0.04em] text-[#020202]">
                How it works
              </span>
            </div>

            {/* Heading: Geist SemiBold, 72px, leading 100%, tracking -4%, white text */}
            <h2 className="font-sans font-semibold text-[42px] min-[375px]:text-[57.6px] md:text-[44px] lg:text-[58px] xl:text-[72px] leading-[100%] tracking-[-0.04em] text-[#FFFFFF] mb-[14px] w-full max-w-[343px] md:max-w-[450px] lg:max-w-[600px] xl:max-w-[752px]">
              Bring FrameForge to your school
            </h2>

            {/* Copy Descriptions: Exact Figma specs (18px, 28px leading, #BEBEBE) */}
            <div className="w-full max-w-[320px] md:max-w-[450px] lg:max-w-[560px] xl:max-w-[705px] flex flex-col md:block">
              <span className="font-sans font-normal text-[14.4px] md:text-[12px] lg:text-[14.4px] xl:text-[18px] leading-[22.4px] md:leading-[18px] lg:leading-[22.4px] xl:leading-[28px] tracking-[-0.04em] text-[#FFFFFF] md:text-[#BEBEBE] mb-4 md:mb-0 select-none">
                Annual day gifts, career week activities, and bulk frames for every student.
              </span>
              <span className="hidden md:inline text-[12px] lg:text-[14.4px] xl:text-[18px] leading-[18px] lg:leading-[22.4px] xl:leading-[28px] tracking-[-0.04em] text-[#BEBEBE] select-none"> </span>
              <span className="font-sans font-normal text-[14.4px] md:text-[12px] lg:text-[14.4px] xl:text-[18px] leading-[22.4px] md:leading-[18px] lg:leading-[22.4px] xl:leading-[28px] tracking-[-0.04em] text-[#FFFFFF] md:text-[#BEBEBE] select-none">
                Talk to us about a school-wide program.
              </span>
            </div>
          </div>

          {/* Right Side: Showcase Composite SVG */}
          <div className="relative w-full max-w-[320px] md:max-w-none md:w-[305px] lg:w-[407px] xl:w-[509px] h-[260px] md:h-[332px] lg:h-[443px] xl:h-[554px] shrink-0 mx-auto md:mx-0">
            <Image
              src="/assets/images/footer_img.svg"
              alt="School portraits composite showcase"
              fill
              className="object-contain"
            />
          </div>

        </div>

        {/* Mobile Divider */}
        <div className="w-full h-[1px] bg-white/20 mb-12 md:hidden" />

        {/* Middle Segment: Brand Logo + Column Links Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 lg:gap-6 xl:gap-8">
          
          {/* Brand Identity Block */}
          <div className="flex flex-col items-start max-w-[320px] md:max-w-[200px] lg:max-w-[260px] xl:max-w-[320px]">
            <div className="flex items-center gap-[11.54px] mb-4 select-none">
              <Image
                src="/assets/icons/footer_icon.png"
                alt="Ambition by FrameForge"
                width={208}
                height={54.43}
                className="w-[208px] h-[54.43px] md:w-[125px] md:h-[32px] lg:w-[166px] lg:h-[43.5px] xl:w-[208px] xl:h-[54.43px] object-contain"
              />
            </div>
            <p className="font-sans font-normal text-[14.4px] md:text-[11px] lg:text-[13px] xl:text-[16px] leading-[150%] tracking-[-0.02em] text-[#FFFFFF]/70 select-none">
              See your child&apos;s future with AI. Magical ambition frames in seconds.
            </p>
          </div>

          {/* Links Grid: Responsive columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-12 xl:gap-24 w-full md:w-auto">
            
            {/* Column 1: Product */}
            <div className="flex flex-col items-start">
              <h3 className="font-sans font-bold text-[16px] md:text-[12px] lg:text-[14.4px] xl:text-[18px] leading-none tracking-[-0.02em] text-[#FFFFFF] mb-4 md:mb-4 lg:mb-5 xl:mb-6 select-none">
                Product
              </h3>
              <nav className="flex flex-col gap-3 md:gap-2 lg:gap-3 xl:gap-4">
                <Link href="#how-it-works" className="font-sans font-medium text-[14.4px] md:text-[11px] lg:text-[13px] xl:text-[16px] leading-none text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-300">
                  How it works
                </Link>
                <Link href="#popular" className="font-sans font-medium text-[14.4px] md:text-[11px] lg:text-[13px] xl:text-[16px] leading-none text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-300">
                  Popular careers
                </Link>
                <Link href="#showcase" className="font-sans font-medium text-[14.4px] md:text-[11px] lg:text-[13px] xl:text-[16px] leading-none text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-300">
                  Frame options
                </Link>
                <Link href="#pricing" className="font-sans font-medium text-[14.4px] md:text-[11px] lg:text-[13px] xl:text-[16px] leading-none text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-300">
                  Pricing
                </Link>
              </nav>
            </div>

            {/* Column 2: For Schools */}
            <div className="flex flex-col items-start">
              <h3 className="font-sans font-bold text-[16px] md:text-[12px] lg:text-[14.4px] xl:text-[18px] leading-none tracking-[-0.02em] text-[#FFFFFF] mb-4 md:mb-4 lg:mb-5 xl:mb-6 select-none">
                For Schools
              </h3>
              <nav className="flex flex-col gap-3 md:gap-2 lg:gap-3 xl:gap-4">
                <Link href="#schools" className="font-sans font-medium text-[14.4px] md:text-[11px] lg:text-[13px] xl:text-[16px] leading-none text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-300">
                  Bulk generations
                </Link>
                <Link href="#schools" className="font-sans font-medium text-[14.4px] md:text-[11px] lg:text-[13px] xl:text-[16px] leading-none text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-300">
                  School partnerships
                </Link>
                <Link href="#schools" className="font-sans font-medium text-[14.4px] md:text-[11px] lg:text-[13px] xl:text-[16px] leading-none text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-300">
                  Annual day frames
                </Link>
              </nav>
            </div>

            {/* Column 3: Contact */}
            <div className="flex flex-col items-start">
              <h3 className="font-sans font-bold text-[16px] md:text-[12px] lg:text-[14.4px] xl:text-[18px] leading-none tracking-[-0.02em] text-[#FFFFFF] mb-4 md:mb-4 lg:mb-5 xl:mb-6 select-none">
                Contact
              </h3>
              <div className="flex flex-col gap-3 md:gap-2 lg:gap-3 xl:gap-4">
                <a href="mailto:hello@frameforge.one" className="font-sans font-medium text-[14.4px] md:text-[11px] lg:text-[13px] xl:text-[16px] leading-none text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-300 block">
                  hello@frameforge.one
                </a>
                <span className="font-sans font-medium text-[14.4px] md:text-[11px] lg:text-[13px] xl:text-[16px] leading-none text-[#FFFFFF]/70 block select-none whitespace-nowrap">
                  WhatsApp +91 00000 00000
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Segment: Copyright Line with full-width horizontal divider border at the top */}
      <div className="hidden md:flex relative z-10 w-full h-[49px] border-t border-white/20 mt-16 justify-center items-center">
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
