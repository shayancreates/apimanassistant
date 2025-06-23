import FeaturesSection from "@/components/Feature";
import { AuroraHero } from "@/components/Hero";
import Image from "next/image";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { GlobeDemo } from "@/components/Globe";
import { MarqueeDemo } from "@/components/Mq";
import { AuroraText } from "@/components/magicui/aurora-text";
import { AuroraTextDemo } from "@/components/Auroratext";
import HowItWorks from "@/components/Work";
import Example from "@/components/Carousel";
import TeamSection from "@/components/Team";
import ContactSection from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <AuroraHero />
      <FeaturesSection />
      <HowItWorks />

      <Example />

      <MarqueeDemo />
      <TeamSection />
      <ContactSection />
      <Footer />


      <SmoothCursor />





    </div>
  );
}


