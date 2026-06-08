import { Fragment } from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { LandingContent } from "@/lib/site";

type ConversationDemoProps = {
  content: LandingContent["demo"];
};

export function ConversationDemo({ content }: ConversationDemoProps) {
  return (
    <section
      id="demo"
      className="demo-motion relative overflow-hidden bg-[#2f4a3c] py-16 text-white sm:py-20 lg:py-10 xl:py-8"
    >
      <div className="absolute left-1/2 top-8 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-[#efcdc7]/16 blur-3xl" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            tone="dark"
            align="center"
          />
        </div>

        <div className="mx-auto mt-8 max-w-[76rem] overflow-hidden rounded-[1.5rem] border border-white/16 bg-white/12 p-2 shadow-[0_32px_90px_rgba(9,22,16,0.35)] backdrop-blur lg:mt-6">
          <div className="overflow-hidden rounded-[1.1rem] bg-[#fffaf7] text-[#1e2420]">
            <div className="flex flex-col gap-4 border-b border-[#2e3731]/10 bg-white px-4 py-4 sm:px-5 lg:flex-row lg:items-center lg:justify-between lg:py-3">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#2f4a3c] text-sm font-bold text-white">
                  LC
                </span>
                <div className="min-w-0">
                  <p className="font-semibold">{content.productName}</p>
                  <p className="text-sm text-[#68736d]">
                    {content.productStatus}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {content.stages.map((stage) => (
                  <span
                    key={stage.label}
                    className={`demo-stage demo-stage-${stage.step} rounded-full bg-[#eef4ef] px-3 py-1.5 text-xs font-semibold text-[#2f4a3c]`}
                  >
                    {stage.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-[0.78fr_1.2fr_0.9fr]">
              <aside className="border-b border-[#2e3731]/10 bg-[#f6eee9] p-5 lg:border-b-0 lg:border-r lg:p-4">
                <div className="rounded-lg border border-[#2e3731]/10 bg-white p-4 shadow-sm lg:p-3">
                  <p className="text-xs font-semibold uppercase text-[#9b7469]">
                    {content.incomingEyebrow}
                  </p>
                  <div className="demo-source-whatsapp mt-4 flex items-center justify-between gap-3 rounded-lg bg-[#2f4a3c] px-4 py-3 text-white lg:mt-3 lg:py-2.5">
                    <div>
                      <p className="text-sm font-semibold">{content.whatsapp.label}</p>
                      <p className="mt-1 text-xs text-white/68">
                        {content.whatsapp.time}
                      </p>
                    </div>
                    <span className="rounded-full bg-white/16 px-3 py-1 text-xs font-semibold">
                      {content.whatsapp.status}
                    </span>
                  </div>

                  <div className="mt-4 space-y-3 lg:mt-3 lg:space-y-2">
                    {content.monitoredSources.map((source) => (
                      <div
                        key={source}
                        className="demo-monitored-source flex items-center justify-between rounded-lg border border-[#2e3731]/10 px-4 py-3 text-sm lg:py-2.5"
                      >
                        <span className="font-semibold text-[#46534c]">
                          {source}
                        </span>
                        <span className="flex items-center gap-2 text-xs text-[#68736d]">
                          <span className="demo-monitor-dot size-1.5 rounded-full bg-[#2f4a3c]" />
                          {content.monitoredLabel}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-[#2e3731]/10 bg-white p-4 shadow-sm lg:mt-3 lg:p-3">
                  <p className="text-xs font-semibold uppercase text-[#9b7469]">
                    {content.qualificationEyebrow}
                  </p>
                  <div className="mt-4 space-y-3 lg:mt-3 lg:space-y-2">
                    {content.patientDetails.map(({ label, value, step }) => (
                      <div
                        key={label}
                        className={`demo-detail demo-detail-${step} flex items-start justify-between gap-4 border-b border-[#2e3731]/10 pb-3 last:border-b-0 last:pb-0`}
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

              <div className="bg-[#fffaf7] p-5 lg:p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase text-[#9b7469]">
                      {content.conversationEyebrow}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold lg:text-lg">
                      {content.conversationTitle}
                    </h3>
                  </div>
                  <span className="rounded-full bg-[#eef4ef] px-3 py-1 text-xs font-semibold text-[#2f4a3c]">
                    {content.respondingLabel}
                  </span>
                </div>

                <div className="demo-thread mt-5 flex flex-col gap-2 lg:mt-4 lg:gap-2">
                  {content.messages.map((message) => {
                    const isPatient = message.sender === "patient";
                    const showsTyping = isPatient && message.step < 6;

                    return (
                      <Fragment key={`${message.label}-${message.text}`}>
                        <div
                          className={`demo-message demo-message-${message.step} flex ${
                            isPatient ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[88%] rounded-2xl px-4 py-3 shadow-sm lg:px-4 lg:py-2.5 ${
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
                              {message.label}
                            </p>
                            <p className="text-sm leading-6">
                              {message.text}
                            </p>
                          </div>
                        </div>
                        {showsTyping ? (
                          <div
                            className={`demo-typing demo-typing-${message.step} flex justify-start`}
                          >
                            <div className="rounded-2xl rounded-tl-md border border-[#2e3731]/10 bg-white px-4 py-3 shadow-sm lg:py-2.5">
                              <p className="mb-2 text-xs font-semibold uppercase text-[#bf8677]">
                                LumaCare
                              </p>
                              <div className="flex gap-1.5">
                                <span className="demo-typing-dot size-2 rounded-full bg-[#9b7469]" />
                                <span className="demo-typing-dot size-2 rounded-full bg-[#9b7469]" />
                                <span className="demo-typing-dot size-2 rounded-full bg-[#9b7469]" />
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </Fragment>
                    );
                  })}
                </div>
              </div>

              <aside className="border-t border-[#2e3731]/10 bg-white p-5 lg:border-l lg:border-t-0 lg:p-4">
                <div className="rounded-lg border border-[#2e3731]/10 bg-[#f8f3ef] p-4 lg:p-3">
                  <p className="text-xs font-semibold uppercase text-[#9b7469]">
                    {content.calendarEyebrow}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold lg:text-lg">
                    {content.calendarTitle}
                  </h3>
                  <div className="mt-4 space-y-2 lg:mt-3">
                    {content.calendarSlots.map((slot) => {
                      return (
                        <div
                          key={`${slot.day}-${slot.time}`}
                          className={`demo-calendar-slot flex items-center justify-between rounded-lg border px-4 py-3 text-sm lg:py-2.5 ${
                            slot.isBooked
                              ? "demo-calendar-booked border-[#2f4a3c] bg-[#2f4a3c] text-white"
                              : "border-[#2e3731]/10 bg-white text-[#46534c]"
                          }`}
                        >
                          <span className="font-semibold">
                            {slot.day} {slot.time}
                          </span>
                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                              slot.isBooked
                                ? "demo-calendar-status-booked bg-white/16 text-white"
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

                <div className="mt-4 rounded-lg border border-[#2e3731]/10 bg-white p-4 shadow-sm lg:mt-3 lg:p-3">
                  <p className="text-xs font-semibold uppercase text-[#9b7469]">
                    {content.summaryEyebrow}
                  </p>
                  <div className="mt-4 space-y-3 lg:mt-3 lg:space-y-2">
                    {content.summaryItems.map(({ label, value, step }) => (
                      <div
                        key={label}
                        className={`demo-summary demo-summary-${step} rounded-lg bg-[#eef4ef] px-4 py-3 lg:py-2.5`}
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
