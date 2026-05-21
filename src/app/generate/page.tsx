"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { GenerateProvider } from "@/components/generate/GenerateContext";
import StepOne from "@/components/generate/StepOne";
import StepTwo from "@/components/generate/StepTwo";
import StepThree from "@/components/generate/StepThree";
import StepFour from "@/components/generate/StepFour";
import StepFive from "@/components/generate/StepFive";
import StepSix from "@/components/generate/StepSix";

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
      <header className="relative w-full bg-[#FFFFFF] border-b border-[#EAEAEA] z-50 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1280px] mx-auto px-6 h-[85px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-[11.54px] group">
            <Image src="/assets/icons/generate_ambition.svg" alt="Ambition by FrameForge" width={208} height={54} className="object-contain group-hover:opacity-90 transition-opacity" priority />
          </Link>
          <nav 
            className="hidden md:flex items-center gap-10 font-medium tracking-[-0.04em]"
            style={{ fontFamily: 'Geist, sans-serif', fontSize: '20px', color: '#121836' }}
          >
            <Link href="#popular" className="hover:opacity-60 transition-opacity">Most Popular</Link>
            <Link href="#testimonials" className="hover:opacity-60 transition-opacity">Testimonials</Link>
            <button className="bg-[#000000] text-white rounded-full px-6 py-3 font-semibold text-[14px] hover:bg-black/90 active:scale-95 transition-all shadow-sm flex items-center gap-2 font-sans tracking-normal">
              <Image src="/assets/icons/starts.png" alt="" width={16} height={16} />
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
