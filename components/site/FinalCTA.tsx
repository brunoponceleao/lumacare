import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { LandingContent } from "@/lib/site";

type FinalCTAProps = {
  content: LandingContent["finalCta"];
};

export function FinalCTA({ content }: FinalCTAProps) {
  return (
    <section className="pb-8 sm:pb-10">
      <Container>
        <div className="overflow-hidden rounded-[1.5rem] bg-[#2f4a3c] px-6 py-14 text-center text-white shadow-[0_30px_90px_rgba(47,74,60,0.22)] sm:px-10 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#efcdc7]">
            {content.eyebrow}
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-[var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/78">
            {content.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="light" href={content.primaryCta.href}>
              {content.primaryCta.label}
            </Button>
            <a
              className="text-sm font-semibold text-white/82 transition hover:text-white"
              href={content.secondaryCta.href}
            >
              {content.secondaryCta.label}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
