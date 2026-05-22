"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGenerateContext } from "./GenerateContext";

export default function StepOne({ onNext }: { onNext: () => void }) {
  const { uploadedImage, setUploadedImage } = useGenerateContext();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadTrigger = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      onNext(); // Advance to Step 2
    }
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-[960px] bg-[#FFFFFF] rounded-[20px] flex flex-col md:flex-row p-6 md:p-8 lg:p-10 gap-8 md:gap-8 lg:gap-12 items-stretch transition-all duration-300 relative shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border border-slate-100">
        
        {/* Left Column: Live Preview Area / Photo Wrapper */}
        <div 
          onClick={uploadedImage ? undefined : handleUploadTrigger}
          className={`relative w-full md:w-[320px] lg:w-[440px] h-[340px] md:h-[420px] lg:h-[500px] rounded-[16px] overflow-hidden shrink-0 border border-slate-100 shadow-sm select-none group transition-all duration-500 flex flex-col justify-end ${
            !uploadedImage ? "hidden md:flex" : "flex"
          } ${
            uploadedImage ? "cursor-default" : "cursor-pointer hover:scale-[1.01] hover:shadow-lg"
          }`}
        >
          {uploadedImage ? (
            <div className="relative w-full h-full animate-fade-in transition-all duration-500">
              <Image
                src={uploadedImage}
                alt="Uploaded preview"
                fill
                className="object-cover rounded-[16px]"
                unoptimized
              />
              <button
                onClick={handleRemoveImage}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/85 text-white rounded-full p-2.5 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 shadow-md flex items-center justify-center cursor-pointer z-10"
                title="Upload a different photo"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-b from-[#E2E8F0] via-[#FDBA74] to-[#EA580C] relative" />
          )}
        </div>

        {/* Right Column: Upload instructions */}
        <div className={`flex-1 flex flex-col justify-center w-full select-none ${uploadedImage ? "hidden md:flex" : "flex"}`}>
          <div className="w-full flex flex-col items-start animate-fade-in">
            <h2 className="font-sans font-semibold text-[26px] md:text-[32px] lg:text-[38px] leading-none tracking-[-0.04em] text-[#000000] mb-3">
              Upload your photo
            </h2>
            <p className="font-sans font-normal text-[13px] md:text-[16px] lg:text-[18px] leading-none tracking-[-0.04em] text-[#64748B] mb-6 md:mb-8">
              A clear front-facing photo works best.
            </p>

            <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8 w-full">
              <div className="relative aspect-[4/5] md:aspect-square w-1/2 md:w-[110px] lg:w-[130px] select-none">
                <div className="w-full h-full rounded-[16px] overflow-hidden shadow-sm relative">
                  <Image
                    src="/assets/images/new/upload_img_crct.jpg"
                    alt="Correct photo example"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 130px"
                    priority
                  />
                </div>
                <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[30px] h-[30px] rounded-full bg-[#4CD964] border-[3px] border-[#FFFFFF] z-10 shadow-sm" />
              </div>
              <div className="relative aspect-[4/5] md:aspect-square w-1/2 md:w-[110px] lg:w-[130px] select-none">
                <div className="w-full h-full rounded-[16px] overflow-hidden shadow-sm relative">
                  <Image
                    src="/assets/images/new/upload_img_wrong.jpg"
                    alt="Incorrect photo example"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 130px"
                    priority
                  />
                </div>
                <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[30px] h-[30px] rounded-full bg-[#FF3B30] border-[3px] border-[#FFFFFF] z-10 shadow-sm" />
              </div>
            </div>

            <div className="flex flex-col gap-2.5 md:gap-3.5 mb-8 md:mb-10 w-full">
              <div className="flex items-center gap-2.5 font-sans font-medium text-[13px] md:text-[15px] lg:text-[16px] leading-[150%] tracking-[-0.02em] text-[#64748B]">
                <span className="text-[#555555] font-bold">✓</span>
                <span>Single child in the photo</span>
              </div>
              <div className="flex items-center gap-2.5 font-sans font-medium text-[13px] md:text-[15px] lg:text-[16px] leading-[150%] tracking-[-0.02em] text-[#64748B]">
                <span className="text-[#555555] font-bold">✓</span>
                <span>Good lighting, face clearly visible</span>
              </div>
              <div className="flex items-center gap-2.5 font-sans font-medium text-[13px] md:text-[15px] lg:text-[16px] leading-[150%] tracking-[-0.02em] text-[#64748B]">
                <span className="text-[#555555] font-bold">✓</span>
                <span>JPG / PNG / WebP, up to 5 MB</span>
              </div>
            </div>

            <div className="w-full md:w-auto">
              <button
                onClick={handleUploadTrigger}
                className="w-full md:w-auto min-w-[240px] flex items-center justify-center bg-[#000000] rounded-[25.84px] py-[16px] md:py-[14px] px-[28px] gap-[10px] hover:bg-[#1C1C1E] active:scale-98 transition-all duration-300 shadow-md cursor-pointer select-none text-[#FFFFFF] font-sans font-semibold text-[16px] md:text-[18px] leading-none tracking-[-0.04em]"
              >
                <Image
                  src="/assets/icons/starts.png"
                  alt="Stars icon"
                  width={20}
                  height={20}
                  className="shrink-0 object-contain"
                />
                <span>Upload Image</span>
              </button>
            </div>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
}
