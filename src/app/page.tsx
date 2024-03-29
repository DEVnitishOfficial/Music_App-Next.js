import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StickyScroll from "@/components/ImplementStickyScroll";
import Instructor from "@/components/Instructor";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingWebminar from "@/components/UpcomingWebminar";
import MusicSchoolContactUs from "./contact/page";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    
    <HeroSection />
    <FeaturedCourses/>
    <StickyScroll />
    <TestimonialCard />
    <UpcomingWebminar />
    <Instructor />
    <Footer />
   </main>
  );
}
