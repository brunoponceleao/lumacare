import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { LandingContent } from "@/lib/site";

type SolutionSectionProps = {
  content: LandingContent["solution"];
};

export function SolutionSection({ content }: SolutionSectionProps) {
  return (
    <section id="solution" className="bg-[#f6eee9] py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {content.features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-lg border border-white/80 bg-white/76 p-7 shadow-sm"
            >
              <div className="mb-6 grid size-12 place-items-center rounded-full bg-[#2f4a3c]/10 text-[#2f4a3c]">
                <span className="size-3 rounded-full bg-[#2f4a3c]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e2420]">
                {feature.title}
              </h3>
              <p className="mt-4 leading-7 text-[#68736d]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
