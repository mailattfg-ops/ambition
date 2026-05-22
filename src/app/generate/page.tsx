"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { GenerateProvider } from "@/components/generate/GenerateContext";

// Dynamically import steps to split the JavaScript bundle and improve initial page load performance
const StepOne = dynamic(() => import("@/components/generate/StepOne"), { ssr: false });
const StepTwo = dynamic(() => import("@/components/generate/StepTwo"), { ssr: false });
const StepThree = dynamic(() => import("@/components/generate/StepThree"), { ssr: false });
const StepFour = dynamic(() => import("@/components/generate/StepFour"), { ssr: false });
const StepFive = dynamic(() => import("@/components/generate/StepFive"), { ssr: false });
const StepSix = dynamic(() => import("@/components/generate/StepSix"), { ssr: false });

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

function GenerateRouter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const stepParam = searchParams.get("step");
  const currentStep = stepParam ? parseInt(stepParam, 10) : 1;

  const handleNextStep = (nextStep: number) => {
    router.push(`?step=${nextStep}`);
  };

  return (
    <div className={`min-h-screen bg-[#FFFFFF] flex flex-col font-sans ${inter.variable}`}>
      
      {/* Top Header with Figma Styling */}
      <header className="relative w-full bg-[#FFFFFF] md:border-b md:border-[#EAEAEA] z-50 md:shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1280px] mx-auto px-6 h-[70px] md:h-[85px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-[11.54px] group mt-4 md:mt-0">
            {/* Desktop/Tablet Logo */}
            <Image 
              src="/assets/icons/generate_ambition.svg" 
              alt="Ambition by FrameForge" 
              width={208} 
              height={54} 
              className="hidden md:block w-[150px] lg:w-[180px] xl:w-[208px] h-auto object-contain group-hover:opacity-90 transition-opacity" 
              priority 
            />
            {/* Mobile Logo */}
            <Image 
              src="/assets/images/responsive/generate_page_logo.png" 
              alt="Ambition by FrameForge" 
              width={140} 
              height={36} 
              className="block md:hidden w-[140px] sm:w-[160px] h-auto object-contain group-hover:opacity-90 transition-opacity" 
              priority
              unoptimized 
            />
          </Link>
          <nav 
            className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-10 font-medium tracking-[-0.04em]"
            style={{ fontFamily: 'Geist, sans-serif', color: '#121836' }}
          >
            <Link href="#popular" className="text-[14px] lg:text-[16px] xl:text-[20px] hover:opacity-60 transition-opacity whitespace-nowrap">Most Popular</Link>
            <Link href="#testimonials" className="text-[14px] lg:text-[16px] xl:text-[20px] hover:opacity-60 transition-opacity whitespace-nowrap">Testimonials</Link>
            <button className="bg-[#000000] text-white rounded-full px-4 lg:px-5 xl:px-6 py-2 lg:py-2.5 xl:py-3 font-semibold text-[12px] lg:text-[13px] xl:text-[14px] hover:bg-black/90 active:scale-95 transition-all shadow-sm flex items-center gap-1.5 lg:gap-2 font-sans tracking-normal whitespace-nowrap shrink-0">
              <Image src="/assets/icons/starts.png" alt="" width={16} height={16} className="w-[14px] h-[14px] xl:w-[16px] xl:h-[16px]" />
              <span>Generate Free AI Frame</span>
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full px-4 py-8 sm:p-12 lg:p-16 flex flex-col items-center relative overflow-hidden">

        <div className="w-full max-w-[1280px] mx-auto relative z-10 flex flex-col items-center">
          {currentStep === 1 && <StepOne onNext={() => handleNextStep(2)} />}
          {currentStep === 2 && <StepTwo onNext={() => handleNextStep(3)} />}
          {currentStep === 3 && <StepThree onNext={() => handleNextStep(4)} />}
          {currentStep === 4 && <StepFour onNext={() => handleNextStep(5)} />}
          {currentStep === 5 && <StepFive onNext={() => handleNextStep(6)} />}
          {currentStep === 6 && <StepSix />}
        </div>

      </main>

      {/* CSS Utility Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes confettiFall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(450px) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-confetti-fall {
          animation: confettiFall 2.8s linear infinite;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes scaleUp {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-up {
          animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}

export default function GeneratePage() {
  return (
    <GenerateProvider>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-sans text-slate-500">Loading...</div>}>
        <GenerateRouter />
      </Suspense>
    </GenerateProvider>
  );
}
