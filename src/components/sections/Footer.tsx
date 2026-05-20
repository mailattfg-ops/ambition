"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Footer Component
 * Continuous deep blue branding (#173BA6) matching the school section.
 * Contains:
 * 1. Dividers (border-white/10).
 * 2. Left side logo block (using ambition_logo.svg in white) and tagline.
 * 3. Right side links grid (Product, For Schools, Contact arrays).
 * 4. Bottom copyright line with spark emoji.
 */
export default function Footer() {
  return (
    <footer className="w-full bg-[#173BA6] pt-16 pb-8 overflow-hidden border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col">
        
        {/* Top Content Row: Brand Logo + Column Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
          
          {/* Brand Identity Block */}
          <div className="flex flex-col items-start max-w-[320px]">
            <div className="flex items-center gap-[11.54px] mb-4 select-none">
              <Image
                src="/assets/icons/ambition_logo.svg"
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

            {/* Column 3: Contact (Spans 2 columns on small screens, or fits neatly) */}
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

        {/* Dividing Bottom Bar */}
        <div className="w-full border-t border-[#FFFFFF]/10 mt-16 pt-8 flex justify-center items-center">
          <p className="font-sans font-normal text-[14px] leading-none tracking-[-0.02em] text-[#FFFFFF]/50 select-none">
            © 2026 FrameForge Future Ambition. Made with 🪄 for dreamers.
          </p>
        </div>

      </div>
    </footer>
  );
}
