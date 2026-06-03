import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const messages = [
  {
    sender: "Patient",
    text: "Hi, do you offer Botox?",
  },
  {
    sender: "AI",
    text: "Yes. We'd be happy to help. Is this your first treatment?",
  },
  {
    sender: "Patient",
    text: "Yes.",
  },
  {
    sender: "AI",
    text: "Great. We currently have appointments available Thursday at 2pm or Friday at 11am.",
  },
  {
    sender: "Patient",
    text: "Friday works.",
  },
  {
    sender: "AI",
    text: "Perfect. You're booked for Friday at 11am.",
  },
];

export function ConversationDemo() {
  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-[#2f4a3c] py-20 text-white sm:py-28"
    >
      <div className="absolute left-1/2 top-0 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-[#efcdc7]/20 blur-3xl" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Static sales demo"
              title="See how an inquiry becomes a booking."
              description="This is a simple preview of the patient experience LumaCare is designed to create: fast, helpful, and appointment-focused from the first message."
              tone="dark"
            />
            <p className="mt-6 max-w-xl leading-8 text-white/72">
              Here&rsquo;s how LumaCare is designed to turn a new inquiry into a
              booked consultation.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/18 bg-white/12 p-3 shadow-[0_30px_90px_rgba(9,22,16,0.28)] backdrop-blur">
            <div className="overflow-hidden rounded-[1.25rem] bg-[#fffaf7] text-[#1e2420] shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#2e3731]/10 px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-[#2f4a3c] text-sm font-bold text-white">
                    LC
                  </span>
                  <div>
                    <p className="font-semibold">LumaCare AI Front Desk</p>
                    <p className="text-sm text-[#68736d]">
                      Responding now
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-[#eef4ef] px-3 py-1 text-xs font-semibold text-[#2f4a3c]">
                  Live inquiry
                </span>
              </div>

              <div className="space-y-4 px-5 py-6 sm:px-6">
                {messages.map((message) => {
                  const isAi = message.sender === "AI";

                  return (
                    <div
                      key={`${message.sender}-${message.text}`}
                      className={`flex ${isAi ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[84%] rounded-2xl px-5 py-4 shadow-sm ${
                          isAi
                            ? "rounded-tl-md border border-[#2e3731]/10 bg-white text-[#25302a]"
                            : "rounded-tr-md bg-[#2f4a3c] text-white"
                        }`}
                      >
                        <p
                          className={`mb-1 text-xs font-semibold uppercase tracking-[0.12em] ${
                            isAi ? "text-[#bf8677]" : "text-white/62"
                          }`}
                        >
                          {message.sender}
                        </p>
                        <p className="leading-7">{message.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-[#2e3731]/10 bg-white px-5 py-4">
                <div className="flex items-center justify-between gap-4 rounded-full border border-[#2e3731]/10 bg-[#f6eee9] px-4 py-3 text-sm text-[#68736d]">
                  <span>Appointment confirmed</span>
                  <span className="rounded-full bg-[#2f4a3c] px-3 py-1 text-xs font-semibold text-white">
                    Friday 11am
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
