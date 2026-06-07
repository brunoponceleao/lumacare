import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const stages = [
  "Inquiry captured",
  "Patient qualified",
  "Calendar checked",
  "Consultation booked",
];

const messages = [
  {
    sender: "Patient",
    text: "Hi, do you offer Botox consultations?",
  },
  {
    sender: "LumaCare",
    text: "Yes. Is this your first injectable treatment, or have you had Botox before?",
  },
  {
    sender: "Patient",
    text: "First time. I want something natural.",
  },
  {
    sender: "LumaCare",
    text: "A consultation is the right next step. I can check the clinic calendar for this week.",
  },
  {
    sender: "Patient",
    text: "Friday morning would be ideal.",
  },
  {
    sender: "LumaCare",
    text: "Friday at 11:00 is available. I booked your consultation and shared the details with the clinic team.",
  },
];

const patientDetails = [
  ["Treatment", "Botox consultation"],
  ["Patient type", "First-time injectable patient"],
  ["Preference", "Natural-looking result"],
  ["Readiness", "Ready to book"],
];

const calendarSlots = [
  { day: "Thu", time: "2:00 PM", status: "Available" },
  { day: "Fri", time: "11:00 AM", status: "Booked" },
  { day: "Fri", time: "3:30 PM", status: "Available" },
];

export function ConversationDemo() {
  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-[#2f4a3c] py-20 text-white sm:py-28"
    >
      <div className="absolute left-1/2 top-8 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-[#efcdc7]/16 blur-3xl" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Live booking experience"
            title="See LumaCare in motion."
            description="Watch a new patient inquiry get answered, qualified, matched with calendar availability, and turned into a booked consultation."
            tone="dark"
            align="center"
          />
        </div>

        <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-white/16 bg-white/12 p-2 shadow-[0_32px_90px_rgba(9,22,16,0.35)] backdrop-blur">
          <div className="overflow-hidden rounded-[1.1rem] bg-[#fffaf7] text-[#1e2420]">
            <div className="flex flex-col gap-4 border-b border-[#2e3731]/10 bg-white px-4 py-4 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#2f4a3c] text-sm font-bold text-white">
                  LC
                </span>
                <div className="min-w-0">
                  <p className="font-semibold">LumaCare AI Front Desk</p>
                  <p className="text-sm text-[#68736d]">
                    WhatsApp inquiry synced with clinic calendar
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {stages.map((stage, index) => (
                  <span
                    key={stage}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                      index === stages.length - 1
                        ? "bg-[#2f4a3c] text-white"
                        : "bg-[#eef4ef] text-[#2f4a3c]"
                    }`}
                  >
                    {stage}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-[0.78fr_1.2fr_0.9fr]">
              <aside className="border-b border-[#2e3731]/10 bg-[#f6eee9] p-5 lg:border-b-0 lg:border-r">
                <div className="rounded-lg border border-[#2e3731]/10 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase text-[#9b7469]">
                    Incoming inquiry
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-3 rounded-lg bg-[#2f4a3c] px-4 py-3 text-white">
                    <div>
                      <p className="text-sm font-semibold">WhatsApp</p>
                      <p className="mt-1 text-xs text-white/68">
                        Sunday, 14:18
                      </p>
                    </div>
                    <span className="rounded-full bg-white/16 px-3 py-1 text-xs font-semibold">
                      New lead
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    {["Instagram DM", "Website form"].map((source) => (
                      <div
                        key={source}
                        className="flex items-center justify-between rounded-lg border border-[#2e3731]/10 px-4 py-3 text-sm"
                      >
                        <span className="font-semibold text-[#46534c]">
                          {source}
                        </span>
                        <span className="text-xs text-[#68736d]">Monitored</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-[#2e3731]/10 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase text-[#9b7469]">
                    Qualification
                  </p>
                  <div className="mt-4 space-y-3">
                    {patientDetails.map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-start justify-between gap-4 border-b border-[#2e3731]/10 pb-3 last:border-b-0 last:pb-0"
                      >
                        <span className="text-sm text-[#68736d]">{label}</span>
                        <span className="max-w-36 text-right text-sm font-semibold text-[#25302a]">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>

              <div className="bg-[#fffaf7] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase text-[#9b7469]">
                      Patient conversation
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">
                      Botox consultation request
                    </h3>
                  </div>
                  <span className="rounded-full bg-[#eef4ef] px-3 py-1 text-xs font-semibold text-[#2f4a3c]">
                    Responding now
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {messages.map((message) => {
                    const isPatient = message.sender === "Patient";

                    return (
                      <div
                        key={`${message.sender}-${message.text}`}
                        className={`flex ${isPatient ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[88%] rounded-2xl px-4 py-3 shadow-sm ${
                            isPatient
                              ? "rounded-tr-md bg-[#2f4a3c] text-white"
                              : "rounded-tl-md border border-[#2e3731]/10 bg-white text-[#25302a]"
                          }`}
                        >
                          <p
                            className={`mb-1 text-xs font-semibold uppercase ${
                              isPatient ? "text-white/62" : "text-[#bf8677]"
                            }`}
                          >
                            {message.sender}
                          </p>
                          <p className="text-sm leading-6 sm:text-base">
                            {message.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <aside className="border-t border-[#2e3731]/10 bg-white p-5 lg:border-l lg:border-t-0">
                <div className="rounded-lg border border-[#2e3731]/10 bg-[#f8f3ef] p-4">
                  <p className="text-xs font-semibold uppercase text-[#9b7469]">
                    Clinic calendar
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">
                    Friday slot confirmed
                  </h3>
                  <div className="mt-4 space-y-2">
                    {calendarSlots.map((slot) => {
                      const isBooked = slot.status === "Booked";

                      return (
                        <div
                          key={`${slot.day}-${slot.time}`}
                          className={`flex items-center justify-between rounded-lg border px-4 py-3 text-sm ${
                            isBooked
                              ? "border-[#2f4a3c] bg-[#2f4a3c] text-white"
                              : "border-[#2e3731]/10 bg-white text-[#46534c]"
                          }`}
                        >
                          <span className="font-semibold">
                            {slot.day} {slot.time}
                          </span>
                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                              isBooked
                                ? "bg-white/16 text-white"
                                : "bg-[#eef4ef] text-[#2f4a3c]"
                            }`}
                          >
                            {slot.status}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-[#2e3731]/10 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase text-[#9b7469]">
                    Booking summary
                  </p>
                  <div className="mt-4 space-y-3">
                    {[
                      ["Status", "Consultation booked"],
                      ["Calendar", "Clinic calendar updated"],
                      ["Team handoff", "Patient details sent"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-lg bg-[#eef4ef] px-4 py-3"
                      >
                        <p className="text-xs font-semibold uppercase text-[#68736d]">
                          {label}
                        </p>
                        <p className="mt-1 font-semibold text-[#2f4a3c]">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
