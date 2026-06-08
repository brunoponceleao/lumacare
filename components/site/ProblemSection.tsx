import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { LandingContent } from "@/lib/site";

type ProblemSectionProps = {
  content: LandingContent["problem"];
};

export function ProblemSection({ content }: ProblemSectionProps) {
  return (
    <section id="problem" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {content.items.map((problem, index) => (
              <div
                key={problem.title}
                className="rounded-lg border border-[#2e3731]/10 bg-white/70 p-6 shadow-sm"
              >
                <p className="mb-3 text-sm font-semibold text-[#bf8677]">
                  0{index + 1}
                </p>
                <h3 className="text-xl font-semibold text-[#26302a]">
                  {problem.title}
                </h3>
                <p className="mt-3 leading-7 text-[#68736d]">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
