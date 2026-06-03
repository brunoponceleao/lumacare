import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const problems = [
  {
    title: "Slow response times",
    description:
      "A patient who waits for a reply is already comparing your clinic with another option.",
  },
  {
    title: "Missed inquiries",
    description:
      "Calls, forms, DMs, and website leads can slip through when the front desk is busy.",
  },
  {
    title: "Lost bookings",
    description:
      "Every unanswered question can become a consultation that never reaches the calendar.",
  },
  {
    title: "Staff overload",
    description:
      "Your team is expected to welcome patients, answer questions, follow up, and sell.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="The problem"
            title="Your clinic is losing bookings every day without realizing it."
            description="Aesthetic patients make decisions quickly. When a lead waits, gets missed, or receives a slow reply, the booking often moves somewhere else."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((problem, index) => (
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
