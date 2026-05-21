"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

interface MarqueeImageProps {
  src: string;
  alt: string;
}

function MarqueeImage({ src, alt }: MarqueeImageProps) {
  return (
    <div className="relative w-[407px] h-[464px] rounded-[10px] overflow-hidden shrink-0 bg-gray-50 border border-gray-100">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="407px"
        className="object-cover rounded-[10px]"
        priority
      />
    </div>
  );
}
 
export default function InActionSection() {
  // Columns populated with high-quality career/frame portraits matching the Figma visual language
  const column1 = [
    { src: "/assets/images/new/frame_2.jpg", alt: "Racer helmet boy" },
    { src: "/assets/images/marquee_4.jpg", alt: "Artist designer boy" },
    { src: "/assets/images/new/cricketer.jpg", alt: "Cricketer boy portrait" },
    { src: "/assets/images/marquee_1.jpg", alt: "Kid in astronaut helmet" },
  ];
 
  const column2 = [
    { src: "/assets/images/new/engineer.jpg", alt: "Engineer girl Burj Khalifa" },
    { src: "/assets/images/new/astronaut.jpg", alt: "Astronaut girl space suit" },
    { src: "/assets/images/new/lawyer.jpg", alt: "Lawyer girl court room" },
    { src: "/assets/images/marquee_5.jpg", alt: "Student in classroom" },
  ];
 
  const column3 = [
    { src: "/assets/images/new/frame_1.jpg", alt: "Astronaut child smiling" },
    { src: "/assets/images/new/frame_3.jpg", alt: "Lawyer child holding scale" },
    { src: "/assets/images/new/archeologist.jpg", alt: "Archeologist child holding brush" },
    { src: "/assets/images/marquee_6.jpg", alt: "Kid in pilot uniform" },
  ];
 
  return (
    <section className="relative w-full flex flex-col items-center pt-24 pb-32 bg-[#FFFFFF] overflow-hidden select-none">
      
      {/* 1. Sub-label Pill: Geist Regular, 24px, #000000, 100% line height, -4% tracking */}
      <div className="flex items-center justify-center rounded-[31px] bg-[#EAEAEA] py-[8px] px-[22px] mb-6">
        <span className="font-sans font-normal text-[24px] leading-none tracking-[-0.04em] text-[#000000]">
          In action
        </span>
      </div>
 
      {/* 2. H2 Header Title: Geist SemiBold, 72px, #000000, 100% line height, -4% tracking */}
      <div className="w-full max-w-[900px] px-6 text-center mb-16 z-20">
        <h2 className="font-sans font-semibold text-[40px] md:text-[72px] leading-[100%] tracking-[-0.04em] text-[#000000]">
          A glimpse of the wow<br />moment parents talk about.
        </h2>
      </div>
 
      {/* 3. Vertical Columns Side-by-Side Marquee Container */}
      <div className="relative flex h-[900px] w-full max-w-[1300px] px-6 md:px-12 xl:px-0 flex-row gap-6 items-center justify-center overflow-hidden">
        
        {/* Left Column: Normal Scroll Speed (25s) */}
        <div className="flex flex-col h-full w-[407px] overflow-hidden">
          <Marquee vertical pauseOnHover className="[--duration:25s] [--gap:1.5rem]" repeat={3}>
            {column1.map((img, idx) => (
              <MarqueeImage key={`col1-${idx}`} src={img.src} alt={img.alt} />
            ))}
          </Marquee>
        </div>
 
        {/* Middle Column: Reverse Scroll Speed (25s) */}
        <div className="flex flex-col h-full w-[407px] overflow-hidden">
          <Marquee vertical reverse pauseOnHover className="[--duration:25s] [--gap:1.5rem]" repeat={3}>
            {column2.map((img, idx) => (
              <MarqueeImage key={`col2-${idx}`} src={img.src} alt={img.alt} />
            ))}
          </Marquee>
        </div>
 
        {/* Right Column: Normal Scroll Speed (25s) */}
        <div className="flex flex-col h-full w-[407px] overflow-hidden">
          <Marquee vertical pauseOnHover className="[--duration:25s] [--gap:1.5rem]" repeat={3}>
            {column3.map((img, idx) => (
              <MarqueeImage key={`col3-${idx}`} src={img.src} alt={img.alt} />
            ))}
          </Marquee>
        </div>
 
        {/* Premium Vignette Fade-out Overlay at the top and bottom of the scrolling columns */}
        <div className="absolute inset-x-0 top-0 h-[80px] bg-gradient-to-b from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-[80px] bg-gradient-to-t from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
      </div>

    </section>
  );
}
