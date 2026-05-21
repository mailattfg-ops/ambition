import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import HowItWorksSection from "@/components/sections/how-it-works";
import CareersSection from "@/components/sections/CareersSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import InActionSection from "@/components/sections/InActionSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] bg-[url('/assets/images/header_bg.png')] bg-[length:100%_auto] bg-[center_-2px] bg-no-repeat flex flex-col">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <CareersSection />
      <ShowcaseSection />
      <InActionSection />
      <ReviewsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

