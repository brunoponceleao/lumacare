import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ConversationDemo } from "@/components/site/ConversationDemo";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ProblemSection } from "@/components/site/ProblemSection";
import { SolutionSection } from "@/components/site/SolutionSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <ConversationDemo />
        <BeforeAfter />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
