import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { Logos } from "@/components/sections/Logos";
import { Testimonials } from "@/components/sections/Testimonials";
import { VideoSection } from "@/components/sections/VideoSection";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Difference } from "@/components/sections/Difference";
import { ProgramStructure } from "@/components/sections/ProgramStructure";
import { ProgramDetails } from "@/components/sections/ProgramDetails";
import { Diagnostics } from "@/components/sections/Diagnostics";
import { Comparison } from "@/components/sections/Comparison";
import { Pricing } from "@/components/sections/Pricing";
import { FitCheck } from "@/components/sections/FitCheck";
import { ApplicationCTA } from "@/components/sections/ApplicationCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
      <Header />
      <Hero />
      <Metrics />
      <Logos />
      <Testimonials />
      <VideoSection />
      <Problem />
      <Solution />
      <Difference />
      <ProgramStructure />
      <ProgramDetails />
      <Diagnostics />
      <Comparison />
      <Pricing />
      <FitCheck />
      <ApplicationCTA />
      <Footer />
    </main>
  );
}
