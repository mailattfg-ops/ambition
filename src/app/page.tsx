import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] bg-[url('/assets/images/header_bg.png')] bg-[length:100%_auto] bg-[center_-2px] bg-no-repeat flex flex-col">
      <Header />
      <HeroSection />
    </main>
  );
}
