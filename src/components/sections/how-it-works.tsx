"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && containerRef.current) {
        const parentWidth = containerRef.current.parentElement?.clientWidth || window.innerWidth;
        // Calculate scale to fit 1728px width, clamped between 0.2 and 1
        const newScale = Math.max(0.2, Math.min(parentWidth / 1728, 1));
        setScale(newScale);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    // Extra timeout trigger to ensure container size is caught after full load
    const timer = setTimeout(handleResize, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center pt-12 pb-8 bg-transparent w-full overflow-hidden">
      
      {/* Structural Layer 1: Mini Section Label */}
      <div className="flex items-center justify-center w-auto h-[30px] md:h-[43px] rounded-[31px] bg-[#EBEBEB] py-[4px] md:py-[6px] px-[14px] md:px-[18px]">
        <span className="font-sans font-normal text-[13px] md:text-[24px] leading-[100%] tracking-[-0.04em] text-[#000000]">
          How it works
        </span>
      </div>

      {/* Structural Layer 2: Main Section Title */}
      <div className="w-full max-w-[882px] px-6 md:px-0 h-auto mt-[16px] md:mt-[24px] flex items-center justify-center">
        <h2 className="font-sans font-semibold text-[32px] md:text-[50px] lg:text-[72px] leading-[1.1] md:leading-[100%] tracking-[-0.04em] text-[#000000] text-center">
          Three simple steps. <br className="block md:hidden" />Less than a minute.
        </h2>
      </div>

      {/* Mobile Vertical Stack Layout (hidden on desktop) */}
      <div className="flex md:hidden flex-col items-center w-full px-6 gap-4 mt-8">
        <Image 
          src="/assets/images/responsive/card_1.png" 
          alt="01 Upload a Photo" 
          width={400} 
          height={480} 
          className="w-full max-w-[340px] h-auto object-contain drop-shadow-sm" 
        />
        <Image 
          src="/assets/images/responsive/card_2.png" 
          alt="02 Pick the Dream" 
          width={400} 
          height={480} 
          className="w-full max-w-[340px] h-auto object-contain drop-shadow-sm" 
        />
        <Image 
          src="/assets/images/responsive/card_3.png" 
          alt="03 Get the Frame" 
          width={400} 
          height={480} 
          className="w-full max-w-[340px] h-auto object-contain drop-shadow-sm" 
        />
        <Image 
          src="/assets/images/responsive/card_4.png" 
          alt="04 Get frame delivered" 
          width={400} 
          height={480} 
          className="w-full max-w-[340px] h-auto object-contain drop-shadow-sm" 
        />
      </div>

      {/* 
        Structural Layer 3: Antigravity Spatial Mapping Bounding Canvas (Desktop Only)
        Using a locked 1728px relative viewport that scales perfectly down on smaller screens.
      */}
      <div 
        ref={containerRef}
        className="hidden md:flex w-full mt-[50px] justify-center items-start overflow-hidden pb-0"
        style={{ height: `${670 * scale}px` }}
      >
        <div 
          className="relative w-[1728px] h-[670px] shrink-0 origin-top"
          style={{ transform: `scale(${scale})` }}
        >

          {/* ----- CARDS STACK ----- */}

          {/* Card 1: Upload a Photo (Left: 99px, Top: 1661.17px -> 181.17px) */}
          <div 
            className="absolute z-10 transition-all duration-300 hover:scale-105"
            style={{ 
              top: '181.17px', 
              left: '99px'
            }}
          >
            <div className="relative w-[378px] h-[443px] select-none">
              <Image 
                src="/assets/images/upload_a_photo.png" 
                alt="01 Upload a Photo" 
                fill 
                sizes="378px"
                className="object-contain" 
              />
            </div>
          </div>

          {/* Card 2: Pick the Dream (Left: 500.63px, Top: 1651.88px -> 171.88px) */}
          <div 
            className="absolute z-10 transition-all duration-300 hover:scale-105"
            style={{ 
              top: '171.88px', 
              left: '500.63px'
            }}
          >
            <div className="relative w-[343px] h-[415px] select-none">
              <Image 
                src="/assets/images/pick_the_dream.png" 
                alt="02 Pick the Dream" 
                fill 
                sizes="343px"
                className="object-contain" 
              />
            </div>
          </div>

          {/* Card 3: Get the Frame (Left: 884.54px, Top: 1652.55px -> 172.55px) */}
          <div 
            className="absolute z-10 transition-all duration-300 hover:scale-105"
            style={{ 
              top: '172.55px', 
              left: '884.54px'
            }}
          >
            <div className="relative w-[343px] h-[415px] select-none">
              <Image 
                src="/assets/images/get_the_frame.png" 
                alt="03 Get the Frame" 
                fill 
                sizes="343px"
                className="object-contain" 
              />
            </div>
          </div>

          {/* Card 4: Get frame delivered (Left: 1252.06px, Top: 1661.74px -> 181.74px) */}
          <div 
            className="absolute z-10 transition-all duration-300 hover:scale-105"
            style={{ 
              top: '181.74px', 
              left: '1252.06px'
            }}
          >
            <div className="relative w-[378px] h-[443px] select-none">
              <Image 
                src="/assets/images/get_frame_delivered.png" 
                alt="04 Get frame delivered" 
                fill 
                sizes="378px"
                className="object-contain" 
              />
            </div>
          </div>


          {/* ----- ABSOLUTE DECORATOR CONNECTOR VECTORS ----- */}
          
          {/* Vector 1 (Arrow Top-Left): Adjusted to fit exact card tops */}
          <div 
            className="absolute z-0 pointer-events-none"
            style={{ 
              top: '122px', 
              left: '332px'
            }}
          >
            <Image 
              src="/assets/icons/vector_1.svg" 
              alt="Connector arrow 1" 
              width={172.42} 
              height={49.53} 
              className="w-[172.42px] h-[49.53px] object-contain"
            />
          </div>

          {/* Vector 2 (Arrow Top-Right): Perfected alignment and rotation to match Card 4 top-left, Rotation: 4deg */}
          <div 
            className="absolute z-0 pointer-events-none"
            style={{ 
              top: '120px', 
              left: '1180px', 
              transform: 'rotate(4deg)' 
            }}
          >
            <Image 
              src="/assets/icons/vector_1.svg" 
              alt="Connector arrow 2" 
              width={172.42} 
              height={49.53} 
              className="w-[172.42px] h-[49.53px] object-contain"
            />
          </div>

          {/* Vector 3 (Arrow Bottom-Center): Top: 599.56px, Left: 751.03px, Rotation: 4deg */}
          <div 
            className="absolute z-0 pointer-events-none"
            style={{ 
              top: '599.56px', 
              left: '751.03px', 
              transform: 'rotate(4deg)' 
            }}
          >
            <Image 
              src="/assets/icons/vector_2.svg" 
              alt="Connector arrow 3" 
              width={172.42} 
              height={49.53} 
              className="w-[172.42px] h-[49.53px] object-contain"
            />
          </div>

        </div>
      </div>

    </section>
  );
}
