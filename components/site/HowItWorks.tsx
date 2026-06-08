import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { LandingContent } from "@/lib/site";

type HowItWorksProps = {
  content: LandingContent["howItWorks"];
};

export function HowItWorks({ content }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {content.steps.map((step, index) => (
            <div key={step.title} className="relative rounded-lg border border-[#2e3731]/10 bg-white/72 p-7">
              <span className="mb-8 inline-flex size-11 items-center justify-center rounded-full bg-[#2f4a3c] text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="text-xl font-semibold text-[#1e2420]">
                {step.title}
              </h3>
              <p className="mt-4 leading-7 text-[#68736d]">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
