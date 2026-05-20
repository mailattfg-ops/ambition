"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

// Initialize Inter font for perfect form guidelines matching
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

/**
 * GeneratePage Component
 * Implements the Figma-spec Photo Upload and Generation flow.
 * Displays a multi-step form inside the central card:
 * - Step 1: guidelines checklist + Upload Image trigger button.
 * - Step 2: "Tell us about the student" details form with Boy/Girl/Other tabs.
 */
export default function GeneratePage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  
  // Form details states for Step 2
  const [studentName, setStudentName] = useState("");
  const [gender, setGender] = useState<"Boy" | "Girl" | "Other" | null>(null);
  const [schoolName, setSchoolName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  // Step 3 Search and Category states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: "science_medical",
      title: "Science &\nMedical",
      titleSingleLine: "Science & Medical",
      image: "/assets/images/new/science_and_medical.png",
      gradient: "from-[#FFF2F5] to-[#FFEAEF]", // Delicate pink
    },
    {
      id: "engineering_technology",
      title: "Engineering\n& Technology",
      titleSingleLine: "Engineering & Technology",
      image: "/assets/images/new/engineering_and_technology.png",
      gradient: "from-[#EAF4FF] to-[#D5E9FF]", // Delicate blue
    },
    {
      id: "education_research",
      title: "Education &\nResearch",
      titleSingleLine: "Education & Research",
      image: "/assets/images/new/education_and_research.png",
      gradient: "from-[#FFF7F0] to-[#FFEADA]", // Delicate peach/orange
    },
    {
      id: "government_public",
      title: "Government\n& Public Service",
      titleSingleLine: "Government & Public Service",
      image: "/assets/images/new/government_and_public_service.png",
      gradient: "from-[#FCFBE7] to-[#ECFBE7]", // Pale yellow/green
    },
    {
      id: "business_finance",
      title: "Business &\nFinance",
      titleSingleLine: "Business & Finance",
      image: "/assets/images/new/business_and_finance.png",
      gradient: "from-[#E9FAF1] to-[#D4F7E4]", // Delicate mint
    },
    {
      id: "aviation_transport",
      title: "Aviation &\nTransport",
      titleSingleLine: "Aviation & Transport",
      image: "/assets/images/new/aviation_and_transport.png",
      gradient: "from-[#FFFDF0] to-[#FFF9D4]", // Soft yellow
    },
    {
      id: "sports_fitness",
      title: "Sports &\nFitness",
      titleSingleLine: "Sports & Fitness",
      image: "/assets/images/new/sports_and_fitness.png",
      gradient: "from-[#F0F6FC] to-[#E0EEFC]", // Slate/steel blue
    },
    {
      id: "creative_media",
      title: "Creative &\nMedia",
      titleSingleLine: "Creative & Media",
      image: "/assets/images/new/creative_and_media.png",
      gradient: "from-[#F3F1FD] to-[#E6E0FD]", // Lavender/purple
    },
    {
      id: "agriculture_environment",
      title: "Agriculture &\nEnvironment",
      titleSingleLine: "Agriculture & Environment",
      image: "/assets/images/new/agriculture_environment.png",
      gradient: "from-[#EBF7F2] to-[#DBF2E9]", // Light greenish blue
    },
    {
      id: "skilled_technical",
      title: "Skilled &\nTechnical Careers",
      titleSingleLine: "Skilled & Technical Careers",
      image: "/assets/images/new/skilled_technical_careers.png",
      gradient: "from-[#EBF6FC] to-[#DBEEFC]", // Soft cyan
    },
    {
      id: "digital_modern",
      title: "Digital &\nModern Careers",
      titleSingleLine: "Digital & Modern Careers",
      image: "/assets/images/new/digital_modern_careers.png",
      gradient: "from-[#FFF5EE] to-[#FFE7D9]", // Soft peach
    },
    {
      id: "space_advanced",
      title: "Space &\nAdvanced Dreams",
      titleSingleLine: "Space & Advanced Dreams",
      image: "/assets/images/new/space_advanced_dreams.png",
      gradient: "from-[#FFF0F5] to-[#FFE1EC]", // Pinkish lavender
    },
  ];

  const filteredCategories = categories.filter((cat) =>
    cat.titleSingleLine.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Trigger system file upload dialog
  const handleUploadTrigger = () => {
    fileInputRef.current?.click();
  };

  // Process selected file and load its preview URL
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setStep(2); // Automatically advance to Step 2 Details Form
    }
  };

  // Remove uploaded preview, reset form inputs, and return to Step 1
  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadedImage(null);
    setStep(1);
    setStudentName("");
    setGender(null);
    setSchoolName("");
    setWhatsapp("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Form submission handler
  const handleContinue = () => {
    if (!studentName || !gender || !schoolName || !whatsapp) {
      alert("Please fill in all the details to continue.");
      return;
    }
    setStep(3); // Advance to Step 3 category choice
  };

  return (
    <div className={`min-h-screen flex flex-col bg-[#FFFFFF] select-none ${inter.className}`}>
      
      {/* 1. Specialized Simplified Header matching Figma specs */}
      <header className="w-full flex items-center justify-between px-6 sm:px-12 py-4 bg-[#FFFFFF] border-b border-[#EAEAEA] relative z-10 h-[80px]">
        {/* Left Column: Black Logo Identity linking back home */}
        <Link href="/" className="flex items-center gap-[11.54px] hover:opacity-90 transition-opacity">
          <Image
            src="/assets/images/new/Frame 2087326346.svg"
            alt="Ambition by FrameForge"
            width={208}
            height={54.43}
            className="w-[208px] h-[54.43px] object-contain"
            priority
          />
        </Link>

        {/* Center Column: Navigation links pointing back to home anchor headers */}
        <nav className="hidden md:flex flex-1 justify-end items-center gap-8 mr-12">
          <Link
            href="/#popular"
            className="flex items-center align-middle font-sans font-medium text-[20px] leading-[100%] tracking-[-0.04em] text-[#121836] hover:opacity-80 transition-opacity"
          >
            Most Popular
          </Link>
          <Link
            href="/#testimonials"
            className="flex items-center align-middle font-sans font-medium text-[20px] leading-[100%] tracking-[-0.04em] text-[#121836] hover:opacity-80 transition-opacity"
          >
            Testimonials
          </Link>
        </nav>

        {/* Right Column: "Generate Free AI Frame" Black Pill Badge */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center bg-[#000000] rounded-[25.84px] w-[245px] h-[41.35px] pt-[10.34px] pr-[21.71px] pb-[10.34px] pl-[21.71px] gap-[10.34px] select-none cursor-default">
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="shrink-0 text-white"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            </svg>
            <span className="font-sans font-semibold text-[16.54px] leading-[24.81px] tracking-[-0.04em] text-[#FFFFFF]">
              Generate Free AI Frame
            </span>
          </div>
        </div>
      </header>

      {/* 2. Main Page Layout Container */}
      <main className="flex-1 py-8 sm:py-16 px-6 sm:px-12 md:px-24">
        {step !== 3 ? (
          // STEP 1 & 2 Layout: Central Form Card
          <div className="flex items-center justify-center w-full">
            <div 
              className={`w-full max-w-[960px] bg-[#FFFFFF] rounded-[20px] flex flex-col md:flex-row p-6 md:p-8 gap-8 md:gap-10 lg:gap-12 items-stretch transition-all duration-300 relative ${
                step === 2 
                  ? "border-[3px] border-[#0091FF] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.04)]" 
                  : "border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)]"
              }`}
            >
              {/* Left Column: Live Preview Area / Photo Wrapper */}
              <div 
                onClick={uploadedImage ? undefined : handleUploadTrigger}
                className={`relative w-full md:w-[440px] h-[340px] sm:h-[420px] md:h-[500px] rounded-[16px] overflow-hidden shrink-0 border border-slate-100 shadow-sm select-none group transition-all duration-500 flex flex-col justify-end ${
                  uploadedImage ? "cursor-default" : "cursor-pointer hover:scale-[1.01] hover:shadow-lg"
                }`}
              >
                {uploadedImage ? (
                  // Uploaded Photo Live Preview canvas with exact high rounded corner style
                  <div className="relative w-full h-full animate-fade-in transition-all duration-500">
                    <Image
                      src={uploadedImage}
                      alt="Uploaded preview"
                      fill
                      className="object-cover rounded-[16px]"
                      unoptimized
                    />
                    
                    {/* Float Remove / Change Trash Action */}
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
                  // Figma gradient placeholder background layer inside Step 1
                  <div 
                    className="w-full h-full bg-gradient-to-b from-[#E2E8F0] via-[#FDBA74] to-[#EA580C] relative"
                  />
                )}
              </div>

              {/* Right Column: Dynamic Form Views (Guidelines vs Details Form) */}
              <div className="flex-1 flex flex-col justify-center w-full select-none">
                
                {step === 1 ? (
                  // STEP 1: Upload instructions & validation parameters
                  <div className="w-full flex flex-col items-start animate-fade-in">
                    
                    {/* Title & Description specs */}
                    <h2 className="font-sans font-semibold text-[32px] sm:text-[38px] leading-none tracking-[-0.04em] text-[#000000] mb-3">
                      Upload your photo
                    </h2>
                    <p className="font-sans font-normal text-[16px] sm:text-[18px] leading-none tracking-[-0.04em] text-[#64748B] mb-8">
                      A clear front-facing photo works best.
                    </p>

                    {/* Validation Avatar comparisons */}
                    <div className="flex items-center gap-6 mb-8 w-full">
                      
                      {/* Good Photo Example Card */}
                      <div className="relative w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-[16px] overflow-hidden border border-slate-100 shadow-sm">
                        <Image
                          src="/assets/images/new/upload_img_crct.jpg"
                          alt="Correct photo example"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 110px, 130px"
                          priority
                        />
                        {/* Green badge dot */}
                        <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[24px] h-[24px] rounded-full bg-[#10B981] border-[3px] border-[#FFFFFF] flex items-center justify-center z-10 shadow-sm" />
                      </div>

                      {/* Bad Photo Example Card */}
                      <div className="relative w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-[16px] overflow-hidden border border-slate-100 shadow-sm">
                        <Image
                          src="/assets/images/new/upload_img_wrong.jpg"
                          alt="Incorrect photo example"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 110px, 130px"
                          priority
                        />
                        {/* Red badge dot */}
                        <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[24px] h-[24px] rounded-full bg-[#EF4444] border-[3px] border-[#FFFFFF] flex items-center justify-center z-10 shadow-sm" />
                      </div>

                    </div>

                    {/* Checklist Guidelines requirements block */}
                    <div className="flex flex-col gap-3.5 mb-10 w-full">
                      <div className="flex items-center gap-2.5 font-sans font-medium text-[15px] sm:text-[16px] leading-[150%] tracking-[-0.02em] text-[#64748B]">
                        <span className="text-[#10B981] font-bold">✓</span>
                        <span>Single child in the photo</span>
                      </div>
                      <div className="flex items-center gap-2.5 font-sans font-medium text-[15px] sm:text-[16px] leading-[150%] tracking-[-0.02em] text-[#64748B]">
                        <span className="text-[#10B981] font-bold">✓</span>
                        <span>Good lighting, face clearly visible</span>
                      </div>
                      <div className="flex items-center gap-2.5 font-sans font-medium text-[15px] sm:text-[16px] leading-[150%] tracking-[-0.02em] text-[#64748B]">
                        <span className="text-[#10B981] font-bold">✓</span>
                        <span>JPG / PNG / WebP, up to 5 MB</span>
                      </div>
                    </div>

                    {/* Upload action interactive trigger */}
                    <div className="w-full sm:w-auto">
                      <button
                        onClick={handleUploadTrigger}
                        className="w-full sm:w-auto min-w-[240px] flex items-center justify-center bg-[#000000] rounded-[25.84px] py-[14px] px-[28px] gap-[10px] hover:bg-[#1C1C1E] active:scale-98 transition-all duration-300 shadow-md cursor-pointer select-none text-[#FFFFFF] font-sans font-semibold text-[18px] leading-none tracking-[-0.04em]"
                      >
                        <svg 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="shrink-0 text-[#FFFFFF]"
                        >
                          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                        </svg>
                        <span>Upload Image</span>
                      </button>
                    </div>

                  </div>
                ) : (
                  // STEP 2: "Tell us about the student" form fields
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
                        placeholder="Delhi Public schoool"
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
                          placeholder="m@example.com"
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
                )}

                {/* Invisible Native File Input */}
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
        ) : (
          // STEP 3: "Pick the dream ambition" selection grid layout
          <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8 animate-fade-in">
            {/* Top row: Title and Search bar */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full pb-2">
              <div className="flex flex-col gap-2">
                <h1 className="font-sans font-bold text-[38px] sm:text-[44px] leading-[1.05] tracking-[-0.04em] text-[#000000]">
                  Pick the dream ambition
                </h1>
                <p className="font-sans font-normal text-[16px] sm:text-[18px] leading-none tracking-[-0.03em] text-[#64748B]">
                  100+ careers across 13 categories.
                </p>
              </div>

              {/* Search bar inside header row matching figma */}
              <div className="flex items-center border border-[#E2E8F0] bg-white rounded-[12px] pl-5 pr-1.5 py-1.5 w-full md:w-[380px] h-[52px] shadow-[0_4px_12px_rgba(0,0,0,0.015)] focus-within:border-black transition-all">
                <input
                  type="text"
                  placeholder="Search for careers"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-[#000000] placeholder-slate-400 font-sans font-medium text-[15px] focus:outline-none"
                />
                <button 
                  type="button"
                  className="bg-[#000000] text-white rounded-[8px] h-[40px] px-6 font-sans font-semibold text-[14px] hover:bg-black/90 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Grid of beautiful pastel gradients and illustration cards */}
            {filteredCategories.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
                {filteredCategories.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <div
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`relative overflow-hidden rounded-[20px] p-6 h-[135px] flex items-center justify-between cursor-pointer transition-all duration-300 select-none group border-[3px] ${
                        isSelected
                          ? "border-[#0091FF] shadow-[0_12px_32px_rgba(0,145,255,0.18)] scale-[1.03]"
                          : "border-transparent shadow-sm hover:scale-[1.01] hover:shadow-md"
                      } bg-gradient-to-r ${cat.gradient}`}
                    >
                      {/* Left: Category Title */}
                      <div className="z-10 flex flex-col justify-center h-full max-w-[55%]">
                        <h3 className="font-sans font-bold text-[18px] sm:text-[20px] leading-[1.12] tracking-[-0.04em] text-[#121836] whitespace-pre-line select-none">
                          {cat.title}
                        </h3>
                      </div>

                      {/* Right: Floating Illustration Icon with parallax hover */}
                      <div className="absolute right-0 bottom-0 top-0 w-[50%] flex items-center justify-end overflow-visible select-none pointer-events-none">
                        <div className="relative w-[112%] h-[122%] translate-y-[5%] translate-x-[5%] group-hover:scale-105 group-hover:translate-y-[2%] transition-all duration-500">
                          <Image
                            src={cat.image}
                            alt={cat.titleSingleLine}
                            fill
                            className="object-contain object-right-bottom"
                            sizes="180px"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 w-full text-center border border-dashed border-slate-200 rounded-[20px] bg-slate-50/50">
                <span className="text-[18px] font-sans font-semibold text-slate-700 mb-1">
                  No careers found
                </span>
                <span className="text-[14px] font-sans text-slate-400">
                  Try searching for a different term (e.g. &apos;Science&apos; or &apos;Aviation&apos;)
                </span>
              </div>
            )}

            {/* Bottom centered Action button */}
            <div className="flex items-center justify-center mt-8 pb-4">
              <button
                type="button"
                onClick={() => {
                  if (!selectedCategory) {
                    alert("Please select a career ambition to continue.");
                    return;
                  }
                  const selected = categories.find((c) => c.id === selectedCategory);
                  alert(`Success! You have chosen "${selected?.titleSingleLine}" as your ambition. Preparing AI framework...`);
                }}
                className="w-full max-w-[640px] bg-[#000000] text-white rounded-full h-[58px] font-sans font-semibold text-[17px] leading-none tracking-tight hover:bg-black/90 active:scale-[0.99] transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center"
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Slide / fade-in animation utilities */}
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
      `}</style>

    </div>
  );
}
