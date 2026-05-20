import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/ui/marquee";

const marqueeImages = [
  "/assets/images/marquee_1.jpg",
  "/assets/images/marquee_2.jpg",
  "/assets/images/marquee_3.jpg",
  "/assets/images/marquee_4.jpg",
];

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center pt-20 pb-16 bg-transparent w-full overflow-hidden">
      
      {/* Structural Layer 1: Context Sub-Header Pill Tag */}
      <div className="relative w-[435px] h-[44px] rounded-[31px] border border-[#B1B1B1] bg-[#FFFFFF] mb-8 mx-auto flex items-center justify-center">
        {/* Green Indicator Status Dot Element */}
        <div className="absolute top-[13px] left-[18px] w-[17px] h-[17px] rounded-full bg-[#91FF3D]" />
        
        {/* Label Typography Text Layer */}
        <div className="absolute top-[6px] left-[74px] w-[287px] h-[31px] flex items-center">
          <span className="font-sans font-normal text-[24px] leading-[100%] tracking-[-0.04em] text-[#000000]">
            AI-powered ambition frames
          </span>
        </div>
      </div>

      {/* Structural Layer 2: Primary Landing Page Heading (H1) */}
      <h1 className="w-[882px] h-[144px] flex items-center justify-center text-center font-sans font-semibold text-[72px] leading-[100%] tracking-[-0.04em] text-[#000000] mx-auto mb-6">
        Envision Your Child&apos;s Future with the Power of AI
      </h1>

      {/* Structural Layer 3: Supporting Paragraph Subtext (P) */}
      <p className="w-[882px] h-[77px] flex items-center justify-center text-center font-sans font-normal text-[18px] leading-[28px] tracking-[-0.04em] text-[#575C75] mx-auto mb-10">
        Upload a photo and instantly transform into a Doctor, Pilot, AI Engineer, Astronaut and more. 100% free digital frame, optional premium prints delivered home.
      </p>

      {/* Structural Layer 4: Floating Content Call-To-Action Flex Array Group */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[30px] w-full max-w-4xl mx-auto">
        
        {/* A. Interactive Primary Action Button Layer */}
        <Link 
          href="/generate"
          className="flex items-center justify-center w-[355.5px] rounded-[37.5px] pt-[15px] pr-[31.5px] pb-[15px] pl-[31.5px] gap-[15px] bg-[#000000] hover:bg-black/90 transition-colors"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#FFFFFF]">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
          </svg>
          <span className="font-sans font-semibold text-[24px] leading-[36px] tracking-[-0.04em] text-[#FFFFFF]">
            Generate Free AI Frame
          </span>
        </Link>

        {/* B. Customer Social Proof Badge Wrapper Layer */}
        <div className="flex items-center w-[314px] h-[58px] gap-[11px]">
          {/* 1. Overlapping User Avatars Row Setup */}
          <div className="flex items-center">
            {['review_1.jpg', 'review_2.jpg', 'review_3.jpg', 'review_4.jpg'].map((src, i) => (
              <div 
                key={i} 
                className={`relative w-[58px] h-[58px] rounded-full border-[2px] border-[#FFFFFF] overflow-hidden ${i !== 0 ? '-ml-[15px]' : ''}`}
                style={{ zIndex: 10 - i }}
              >
                <Image 
                  src={`/assets/images/${src}`} 
                  alt={`Reviewer ${i + 1}`} 
                  fill 
                  className="object-cover" 
                />
              </div>
            ))}
          </div>

          {/* Ratings & Metadata Layer */}
          <div className="flex flex-col justify-center">
            {/* 2. Ratings Metric Star Stack Container */}
            <div className="flex items-center gap-[2px]">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-[16px] h-[16px] fill-[#B1B1B1]" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            {/* 3. Text Metadata Metric Label Layer */}
            <div className="w-[157px] h-[21px] flex items-center mt-1">
              <span className="font-sans font-normal text-[14px] leading-[28px] tracking-[-0.04em] text-[#575C75] whitespace-nowrap">
                Loved by 10,000+ parents
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Marquee Gallery Loop Grid */}
      <div className="w-full mt-24 mb-10 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {marqueeImages.map((src, idx) => (
            <div key={idx} className="relative w-[280px] sm:w-[320px] aspect-[4/5] rounded-[24px] overflow-hidden shadow-xl shadow-black/5 mx-2">
              <Image 
                src={src} 
                alt={`Marquee image ${idx + 1}`} 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 280px, 320px"
              />
            </div>
          ))}
        </Marquee>
      </div>

    </section>
  );
}
