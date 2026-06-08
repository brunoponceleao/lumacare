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
import { landingContent, type Locale } from "@/lib/site";

type LandingPageProps = {
  locale: Locale;
};

export function LandingPage({ locale }: LandingPageProps) {
  const content = landingContent[locale];

  return (
    <>
      <Header content={content.header} locale={locale} />
      <main>
        <Hero content={content.hero} />
        <ProblemSection content={content.problem} />
        <SolutionSection content={content.solution} />
        <HowItWorks content={content.howItWorks} />
        <ConversationDemo content={content.demo} />
        <BeforeAfter content={content.beforeAfter} />
        <FAQ content={content.faq} />
        <FinalCTA content={content.finalCta} />
      </main>
      <Footer content={content.footer} />
    </>
  );
}
