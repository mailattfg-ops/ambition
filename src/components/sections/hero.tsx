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
      <div className="relative w-fit max-w-[90vw] px-4 md:px-6 xl:px-0 md:h-[36px] xl:w-[435px] py-1 md:py-0 xl:h-[44px] rounded-[31px] border border-[#B1B1B1] bg-[#FFFFFF] mb-6 md:mb-8 mx-auto flex items-center justify-center gap-2">
        {/* Green Indicator Status Dot Element */}
        <div className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] xl:w-[17px] xl:h-[17px] rounded-full bg-[#91FF3D] shrink-0" />
        
        {/* Label Typography Text Layer */}
        <span className="font-sans font-normal text-[12px] min-[375px]:text-[14px] min-[425px]:text-[16px] md:text-[18px] xl:text-[24px] leading-[100%] tracking-[-0.04em] text-[#000000]">
          AI-powered ambition frames
        </span>
      </div>

      {/* Structural Layer 2: Primary Landing Page Heading (H1) */}
      <h1 className="w-full max-w-[882px] px-4 md:px-6 xl:px-0 flex items-center justify-center text-center font-sans font-semibold text-[34px] min-[375px]:text-[40px] min-[425px]:text-[45px] leading-[1.1] md:text-[50px] lg:text-[72px] md:leading-[1.05] lg:leading-[100%] tracking-[-0.04em] text-[#000000] mx-auto mb-4 md:mb-6">
        Envision Your Child&apos;s Future with the Power of AI
      </h1>

      {/* Structural Layer 3: Supporting Paragraph Subtext (P) */}
      <p className="w-full max-w-[882px] px-6 xl:px-0 flex items-center justify-center text-center font-sans font-normal text-[12px] leading-[18px] min-[375px]:text-[14px] min-[375px]:leading-[22px] min-[425px]:text-[16px] min-[425px]:leading-[24px] md:text-[16px] xl:text-[18px] md:leading-[26px] xl:leading-[28px] tracking-[-0.04em] text-[#575C75] mx-auto mb-8 md:mb-10">
        Upload a photo and instantly transform into a Doctor, Pilot, AI Engineer, Astronaut and more. 100% free digital frame, optional premium prints delivered home.
      </p>

      {/* Structural Layer 4: Floating Content Call-To-Action Flex Array Group */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 min-[375px]:gap-4 min-[425px]:gap-5 md:gap-6 xl:gap-[30px] w-full px-6 xl:px-0 max-w-4xl mx-auto">
        
        {/* A. Interactive Primary Action Button Layer */}
        <Link 
          href="/generate"
          className="flex items-center justify-center w-full md:w-auto xl:w-[355.5px] rounded-[37.5px] py-[10px] min-[375px]:py-[12px] min-[425px]:py-[14px] md:py-[10px] xl:py-[15px] px-[16px] min-[375px]:px-[20px] min-[425px]:px-[24px] md:px-[24px] xl:px-[31.5px] gap-[10px] xl:gap-[15px] bg-[#000000] hover:bg-black/90 transition-colors"
        >
          <Image
            src="/assets/icons/starts.png"
            alt="Stars icon"
            width={24}
            height={24}
            className="shrink-0 object-contain w-[20px] h-[20px] min-[375px]:w-[24px] min-[375px]:h-[24px] md:w-[20px] md:h-[20px] xl:w-[30px] xl:h-[30px]"
          />
          <span className="font-sans font-semibold text-[15px] min-[375px]:text-[18px] min-[425px]:text-[20px] md:text-[20px] xl:text-[24px] leading-[28px] md:leading-[30px] xl:leading-[36px] tracking-[-0.04em] text-[#FFFFFF] whitespace-nowrap">
            Generate Free AI Frame
          </span>
        </Link>

        {/* Generate Bulk Button (Mobile Only) */}
        <button className="flex md:hidden items-center justify-center w-full rounded-[37.5px] py-[10px] min-[375px]:py-[12px] min-[425px]:py-[14px] px-[16px] min-[375px]:px-[20px] min-[425px]:px-[24px] gap-[10px] bg-[#561DFF] hover:bg-[#4C1D95] transition-colors">
          <Image
            src="/assets/icons/starts.png"
            alt="Stars icon"
            width={24}
            height={24}
            className="shrink-0 object-contain w-[20px] h-[20px] min-[375px]:w-[24px] min-[375px]:h-[24px]"
          />
          <span className="font-sans font-semibold text-[15px] min-[375px]:text-[18px] min-[425px]:text-[20px] leading-[28px] tracking-[-0.04em] text-[#FFFFFF]">
            Generate Bulk
          </span>
        </button>

        {/* B. Customer Social Proof Badge Wrapper Layer */}
        <div className="hidden md:flex items-center w-auto xl:w-[314px] h-auto xl:h-[58px] gap-[8px] xl:gap-[11px]">
          {/* 1. Overlapping User Avatars Row Setup */}
          <div className="flex items-center">
            {['review_1.jpg', 'review_2.jpg', 'review_3.jpg', 'review_4.jpg'].map((src, i) => (
              <div 
                key={i} 
                className={`relative w-[40px] h-[40px] xl:w-[58px] xl:h-[58px] rounded-full border-[2px] border-[#FFFFFF] overflow-hidden ${i !== 0 ? '-ml-[10px] xl:-ml-[15px]' : ''}`}
                style={{ zIndex: 10 - i }}
              >
                <Image 
                  src={`/assets/images/${src}`} 
                  alt={`Reviewer ${i + 1}`} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 1280px) 40px, 58px"
                />
              </div>
            ))}
          </div>

          {/* Ratings & Metadata Layer */}
          <div className="flex flex-col justify-center">
            {/* 2. Ratings Metric Star Stack Container */}
            <div className="flex items-center gap-[2px]">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-[12px] h-[12px] xl:w-[16px] xl:h-[16px] fill-[#B1B1B1]" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            {/* 3. Text Metadata Metric Label Layer */}
            <div className="flex items-center mt-1">
              <span className="font-sans font-normal text-[12px] xl:text-[14px] leading-tight xl:leading-[28px] tracking-[-0.04em] text-[#575C75] whitespace-nowrap">
                Loved by 10,000+ parents
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Marquee Gallery Loop Grid */}
      <div className="w-full mt-24 mb-10 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s] [--gap:10px] md:[--gap:20px]">
          {marqueeImages.map((src, idx) => (
            <div key={idx} className="relative w-[170px] sm:w-[280px] md:w-[320px] aspect-[4/5] rounded-[16px] md:rounded-[24px] overflow-hidden shadow-xl shadow-black/5">
              <Image 
                src={src} 
                alt={`Marquee image ${idx + 1}`} 
                fill 
                className="object-cover"
                sizes="(max-width: 640px) 170px, (max-width: 768px) 280px, 320px"
              />
            </div>
          ))}
        </Marquee>
      </div>

    </section>
  );
}
