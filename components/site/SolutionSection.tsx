import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const features = [
  {
    title: "Every lead gets answered",
    description:
      "LumaCare responds instantly when a new inquiry arrives, even when your team is with patients.",
  },
  {
    title: "The right questions get asked",
    description:
      "It helps understand treatment interest, timeline, and readiness before the lead reaches your staff.",
  },
  {
    title: "More leads move to appointments",
    description:
      "Instead of leaving leads in an inbox, LumaCare keeps the conversation moving toward a booked visit.",
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="bg-[#f6eee9] py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="The solution"
          title="Meet your AI Front Desk"
          description="LumaCare responds instantly to every inquiry and helps aesthetic clinics convert more leads into booked appointments."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
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
