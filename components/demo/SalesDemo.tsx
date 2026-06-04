"use client";

import { useMemo, useState } from "react";

type Scenario = {
  id: string;
  label: string;
  source: string;
  patient: string;
  treatment: string;
  urgency: string;
  availability: string;
  summary: string;
  nextStep: string;
  messages: {
    from: "Patient" | "LumaCare";
    text: string;
  }[];
};

const scenarios: Scenario[] = [
  {
    id: "botox",
    label: "Botox inquiry",
    source: "Website form",
    patient: "Maya Thompson",
    treatment: "First-time Botox consultation",
    urgency: "This week",
    availability: "Friday at 11:00 AM",
    summary:
      "First-time patient, interested in softening forehead lines, no prior injectable treatment, ready to book a consultation.",
    nextStep: "Send to front desk with Friday 11:00 AM as the preferred slot.",
    messages: [
      {
        from: "Patient",
        text: "Hi, do you offer Botox for forehead lines?",
      },
      {
        from: "LumaCare",
        text: "Yes. We can help with that. Is this your first injectable treatment?",
      },
      {
        from: "Patient",
        text: "Yes, first time. I want something natural, nothing too heavy.",
      },
      {
        from: "LumaCare",
        text: "That makes sense. A consultation is the right next step so the clinic can review your goals and answer safety questions.",
      },
      {
        from: "Patient",
        text: "Do they have anything this week?",
      },
      {
        from: "LumaCare",
        text: "Friday at 11:00 AM is available. Would you like the team to hold that for you?",
      },
      {
        from: "Patient",
        text: "Yes please.",
      },
    ],
  },
  {
    id: "laser",
    label: "Laser consult",
    source: "Instagram DM",
    patient: "Alex Rivera",
    treatment: "Laser hair removal consultation",
    urgency: "Next 2 weeks",
    availability: "Tuesday at 3:30 PM",
    summary:
      "Prospective patient asked through Instagram, wants underarm laser hair removal, has not visited the clinic before.",
    nextStep: "Offer Tuesday 3:30 PM and ask the clinic team to confirm pricing range.",
    messages: [
      {
        from: "Patient",
        text: "Do you do laser hair removal? I saw your Instagram.",
      },
      {
        from: "LumaCare",
        text: "Yes. Which area are you interested in treating?",
      },
      {
        from: "Patient",
        text: "Underarms. I have never done it before.",
      },
      {
        from: "LumaCare",
        text: "A consultation will help the team review skin type, treatment plan, and expected number of sessions.",
      },
      {
        from: "Patient",
        text: "Can I come in after work sometime?",
      },
      {
        from: "LumaCare",
        text: "Tuesday at 3:30 PM is the closest available late-afternoon option.",
      },
    ],
  },
  {
    id: "facial",
    label: "After-hours facial",
    source: "After-hours chat",
    patient: "Sofia Bennett",
    treatment: "Hydrafacial and skin assessment",
    urgency: "Before an event",
    availability: "Thursday at 2:00 PM",
    summary:
      "Patient reached out after hours, has an event next weekend, wants a glow-focused treatment and product guidance.",
    nextStep: "Route as time-sensitive and ask the team to confirm Thursday 2:00 PM.",
    messages: [
      {
        from: "Patient",
        text: "I have an event next weekend. Do you have facials that help with glow?",
      },
      {
        from: "LumaCare",
        text: "Yes. The clinic can recommend a treatment after a quick skin assessment. Have you visited before?",
      },
      {
        from: "Patient",
        text: "No, first time. My skin is a little sensitive.",
      },
      {
        from: "LumaCare",
        text: "Thank you. I will note sensitivity so the team can guide you toward the right option.",
      },
      {
        from: "Patient",
        text: "Is there anything open this week?",
      },
      {
        from: "LumaCare",
        text: "Thursday at 2:00 PM is available for a skin assessment and treatment recommendation.",
      },
    ],
  },
];

const stages = [
  "Inquiry captured",
  "Intent qualified",
  "Readiness checked",
  "Slot suggested",
  "Team handoff",
];

export function SalesDemo() {
  const [scenarioId, setScenarioId] = useState(scenarios[0].id);
  const [stageIndex, setStageIndex] = useState(2);

  const scenario = useMemo(
    () => scenarios.find((item) => item.id === scenarioId) ?? scenarios[0],
    [scenarioId],
  );

  const visibleMessages = scenario.messages.slice(
    0,
    Math.min(scenario.messages.length, stageIndex + 3),
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <aside className="space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9b7469]">
              Sales demo
            </p>
            <h1 className="mt-3 max-w-xl font-[var(--font-playfair)] text-4xl font-semibold leading-tight text-[#1e2420]">
              Patient inquiry to booked consultation.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#5f6b65]">
              A lightweight front-desk workflow for the first sales calls:
              instant response, qualification, booking intent, and a clean team
              handoff.
            </p>
          </div>

          <div className="rounded-lg border border-[#2e3731]/10 bg-white/76 p-4 shadow-[0_18px_50px_rgba(46,55,49,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#68736d]">
              Scenario
            </p>
            <div className="mt-3 grid gap-2">
              {scenarios.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setScenarioId(item.id);
                    setStageIndex(2);
                  }}
                  className={`rounded-md border px-4 py-2.5 text-left text-sm font-semibold transition ${
                    item.id === scenario.id
                      ? "border-[#2f4a3c] bg-[#eef4ef] text-[#2f4a3c]"
                      : "border-[#2e3731]/10 bg-white text-[#59645f] hover:border-[#2f4a3c]/30"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[#2e3731]/10 bg-[#2f4a3c] p-4 text-white shadow-[0_18px_50px_rgba(47,74,60,0.16)]">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/62">
              Demo outcome
            </p>
            <p className="mt-2 text-lg font-semibold">Qualified and ready for follow-up</p>
            <p className="mt-2 text-sm leading-6 text-white/72">
              The clinic team gets the treatment interest, readiness, preferred
              time, and recommended next action without needing to search
              through the conversation.
            </p>
          </div>
        </aside>

        <div className="rounded-lg border border-[#2e3731]/10 bg-white shadow-[0_24px_70px_rgba(46,55,49,0.11)]">
          <div className="grid gap-4 border-b border-[#2e3731]/10 p-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="grid gap-2 sm:grid-cols-5">
              {stages.map((stage, index) => (
                <button
                  key={stage}
                  type="button"
                  onClick={() => setStageIndex(index)}
                  className={`min-h-12 rounded-md border px-3 py-2 text-left text-xs font-semibold leading-5 transition ${
                    index <= stageIndex
                      ? "border-[#2f4a3c] bg-[#eef4ef] text-[#2f4a3c]"
                      : "border-[#2e3731]/10 bg-white text-[#68736d] hover:border-[#2f4a3c]/30"
                  }`}
                >
                  <span className="block text-[0.68rem] uppercase tracking-[0.12em] opacity-70">
                    Step {index + 1}
                  </span>
                  {stage}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setStageIndex(0)}
                className="rounded-full border border-[#2f4a3c]/15 bg-white px-4 py-3 text-sm font-semibold text-[#2f4a3c] transition hover:bg-[#fffaf7]"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() =>
                  setStageIndex((current) =>
                    current === stages.length - 1 ? current : current + 1,
                  )
                }
                className="rounded-full bg-[#2f4a3c] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(47,74,60,0.2)] transition hover:bg-[#263f33]"
              >
                Advance
              </button>
            </div>
          </div>

          <div className="grid border-b border-[#2e3731]/10 lg:grid-cols-[1.06fr_0.94fr]">
            <div className="border-b border-[#2e3731]/10 p-4 lg:border-b-0 lg:border-r">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9b7469]">
                    Patient conversation
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-[#1e2420]">
                    {scenario.patient}
                  </h2>
                </div>
                <span className="rounded-full bg-[#f6eee9] px-3 py-1 text-xs font-semibold text-[#7b5b52]">
                  {scenario.source}
                </span>
              </div>

              <div className="mt-4 min-h-[356px] space-y-2.5 rounded-lg bg-[#f7f1ec] p-4">
                {visibleMessages.map((message, index) => {
                  const isAi = message.from === "LumaCare";

                  return (
                    <div
                      key={`${message.from}-${index}`}
                      className={`flex ${isAi ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[86%] rounded-2xl px-4 py-2.5 text-sm leading-6 shadow-sm ${
                          isAi
                            ? "rounded-tl-md border border-[#2e3731]/10 bg-white text-[#25302a]"
                            : "rounded-tr-md bg-[#2f4a3c] text-white"
                        }`}
                      >
                        <p
                          className={`mb-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] ${
                            isAi ? "text-[#9b7469]" : "text-white/62"
                          }`}
                        >
                          {message.from}
                        </p>
                        <p>{message.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#68736d]">
                    Qualified handoff
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-[#1e2420]">
                    Front desk summary
                  </h2>
                </div>
                <span className="rounded-full bg-[#eef4ef] px-3 py-1 text-xs font-semibold text-[#2f4a3c]">
                  High intent
                </span>
              </div>

              <dl className="mt-4 grid gap-2">
                {[
                  ["Treatment", scenario.treatment],
                  ["Timing", scenario.urgency],
                  ["Preferred slot", scenario.availability],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-md border border-[#2e3731]/10 bg-[#fffaf7] px-4 py-2.5"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#68736d]">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold leading-6 text-[#1e2420]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-3 rounded-md border border-[#2e3731]/10 bg-white px-4 py-2.5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#68736d]">
                  Notes
                </p>
                <p className="mt-2 text-sm leading-6 text-[#4f5c55]">
                  {scenario.summary}
                </p>
              </div>

              <div className="mt-3 rounded-md border border-[#bf8677]/22 bg-[#fff4ef] px-4 py-2.5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9b7469]">
                  Next action
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#1e2420]">
                  {scenario.nextStep}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
