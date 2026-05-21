"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGenerateContext } from "./GenerateContext";

export default function StepTwo({ onNext }: { onNext: () => void }) {
  const {
    uploadedImage,
    setUploadedImage,
    studentName,
    setStudentName,
    gender,
    setGender,
    schoolName,
    setSchoolName,
    whatsapp,
    setWhatsapp
  } = useGenerateContext();

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
    }
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleContinue = () => {
    if (!studentName || !gender || !schoolName || !whatsapp) {
      alert("Please fill in all the details to continue.");
      return;
    }
    onNext();
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-[960px] bg-[#FFFFFF] rounded-[20px] flex flex-col md:flex-row p-6 md:p-8 gap-8 md:gap-10 lg:gap-12 items-stretch transition-all duration-300 relative border-[3px] border-[#0091FF] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.04)]">
        
        {/* Left Column: Live Preview Area / Photo Wrapper */}
        <div 
          onClick={uploadedImage ? undefined : handleUploadTrigger}
          className={`relative w-full md:w-[440px] h-[340px] sm:h-[420px] md:h-[500px] rounded-[16px] overflow-hidden shrink-0 border border-slate-100 shadow-sm select-none group transition-all duration-500 flex flex-col justify-end ${
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

        {/* Right Column: Dynamic Form Views (Details Form) */}
        <div className="flex-1 flex flex-col justify-center w-full select-none">
          <div className="w-full flex flex-col items-start gap-4 animate-fade-in select-none">
            
            {/* Header group details */}
            <div className="w-full">
              <h2 className="font-sans font-bold text-[32px] sm:text-[36px] leading-[1.1] tracking-[-0.04em] text-[#000000]">
                Tell us about the student
              </h2>
              <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-tight tracking-[-0.02em] text-[#64748B] mt-2 mb-2">
                We&apos;ll use this on the frame and to send updates.
              </p>
            </div>

            {/* Input 1: Student Name */}
            <div className="w-full flex flex-col gap-1.5 items-start">
              <label className="font-sans font-medium text-[13px] text-[#64748B] select-none">
                Student Name
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-[#FFFFFF] border border-[#E2E8F0] rounded-[8px] py-2.5 px-3.5 text-[#000000] placeholder-slate-300 font-sans font-medium text-[15px] focus:outline-none focus:border-black transition-colors h-[46px]"
              />
            </div>

            {/* Input 2: Gender Selection buttons */}
            <div className="w-full flex flex-col gap-1.5 items-start mt-0.5">
              <label className="font-sans font-medium text-[13px] text-[#64748B] select-none">
                Gender
              </label>
              <div className="grid grid-cols-3 gap-3 w-full">
                {(["Boy", "Girl", "Other"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setGender(option)}
                    className={`h-[46px] rounded-[8px] text-[15px] font-sans transition-all duration-300 select-none text-center cursor-pointer flex items-center justify-center ${
                      gender === option
                        ? "bg-[#000000] text-[#FFFFFF] border border-black font-semibold shadow-sm"
                        : "bg-[#FFFFFF] text-slate-500 border border-[#E2E8F0] hover:border-slate-300 hover:bg-slate-50 font-medium"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 3: School Name */}
            <div className="w-full flex flex-col gap-1.5 items-start mt-0.5">
              <label className="font-sans font-medium text-[13px] text-[#64748B] select-none">
                School Name
              </label>
              <input
                type="text"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                placeholder="Delhi Public school"
                className="w-full bg-[#FFFFFF] border border-[#E2E8F0] rounded-[8px] py-2.5 px-3.5 text-[#000000] placeholder-slate-300 font-sans font-medium text-[15px] focus:outline-none focus:border-black transition-colors h-[46px]"
              />
            </div>

            {/* Input 4: Whatsapp Number prefix and input */}
            <div className="w-full flex flex-col gap-1.5 items-start mt-0.5">
              <label className="font-sans font-medium text-[13px] text-[#64748B] select-none">
                Whatsapp Number
              </label>
              <div className="flex gap-3 w-full">
                {/* Country tag prefix (Pure white bg with border to match Figma specs) */}
                <div className="bg-[#FFFFFF] text-slate-500 border border-[#E2E8F0] rounded-[8px] h-[46px] w-[64px] flex items-center justify-center font-medium font-sans select-none text-[15px]">
                  +91
                </div>
                {/* Main phone text input with exact Figma placeholder */}
                <input
                  type="text"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="e.g. 9876543210"
                  className="flex-1 bg-[#FFFFFF] border border-[#E2E8F0] rounded-[8px] py-2.5 px-3.5 text-[#000000] placeholder-slate-300 font-sans font-medium text-[15px] focus:outline-none focus:border-black transition-colors h-[46px]"
                />
              </div>
              <span className="font-sans font-normal text-[13px] leading-none text-[#64748B] mt-0.5 select-none">
                We&apos;ll send your AI frame on WhatsApp.
              </span>
            </div>

            {/* Continue Action Button */}
            <button
              onClick={handleContinue}
              className="w-full bg-[#000000] text-white rounded-full h-[52px] font-sans font-semibold text-[17px] leading-none tracking-tight hover:bg-black/90 active:scale-[0.99] transition-all duration-300 shadow-md cursor-pointer mt-5"
            >
              Continue
            </button>

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
