import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import StickyScroll from "@/components/ImplementStickyScroll";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    
    <HeroSection />
    <FeaturedCourses/>
    <StickyScroll />
   </main>
  );
}
