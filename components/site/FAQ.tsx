import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqItems } from "@/lib/site";

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions clinic owners usually ask first."
            description="This first version focuses on explaining the value clearly before adding product workflows or account functionality."
          />

          <div className="space-y-4">
            {faqItems.map((item) => (
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
