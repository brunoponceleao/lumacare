import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { LandingContent } from "@/lib/site";

type FAQProps = {
  content: LandingContent["faq"];
};

export function FAQ({ content }: FAQProps) {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />

          <div className="space-y-4">
            {content.items.map((item) => (
              <details
                key={item.question}
                className="group rounded-lg border border-[#2e3731]/10 bg-white/72 p-6 open:bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-[#1e2420]">
                  {item.question}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#2f4a3c]/10 text-[#2f4a3c] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-[#68736d]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
