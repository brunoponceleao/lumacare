import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-14 sm:pb-28 lg:pb-32 lg:pt-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="min-w-0 max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#bf8677]/25 bg-white/72 px-4 py-2 text-sm font-medium text-[#7b5b52] shadow-sm">
            <span className="size-2 rounded-full bg-[#87a893]" />
            Built for modern aesthetic clinics
          </div>

          <h1 className="font-[var(--font-playfair)] text-5xl font-semibold leading-[1.02] text-[#1e2420] sm:text-6xl lg:text-7xl">
            Never lose a clinic booking again.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f6b65] sm:text-xl">
            LumaCare is your AI Front Desk for aesthetic clinics. Every inquiry
            gets an instant response, even when your team is busy. LumaCare helps
            aesthetic clinics turn more inquiries into booked consultations.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button />
            <a className="text-sm font-semibold text-[#2f4a3c] transition hover:text-[#bf8677]" href="#how-it-works">
              See how it works
            </a>
          </div>

          <div className="mt-10 grid gap-4 border-t border-[#2e3731]/10 pt-7 sm:grid-cols-3">
            {[
              ["Instant", "first response"],
              ["Qualified", "lead handoff"],
              ["Always-on", "patient experience"],
            ].map(([metric, label]) => (
              <div key={metric}>
                <p className="text-2xl font-semibold text-[#2f4a3c]">{metric}</p>
                <p className="mt-1 text-sm text-[#68736d]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#efcdc7]/60 via-white to-[#c4d8cd]/50 blur-2xl" />
          <div className="relative space-y-3">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/80 bg-white shadow-[0_30px_90px_rgba(46,55,49,0.16)]">
              <div className="relative aspect-[4/3] min-h-[320px] sm:min-h-[420px] lg:min-h-[500px]">
                <Image
                  src="/images/hero-clinic-reception-selected.png"
                  alt="Premium aesthetic clinic reception with warm natural light and an elegant front desk"
                  fill
                  priority
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e2420]/16 via-transparent to-white/8" />
              </div>
            </div>
            <div className="grid gap-4 rounded-[1.25rem] border border-white/80 bg-white/95 px-5 py-4 shadow-[0_18px_48px_rgba(46,55,49,0.12)] sm:grid-cols-[1fr_auto] sm:items-center sm:px-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9b7469]">
                  NEW INQUIRY
                </p>
                <p className="mt-2 text-sm font-semibold text-[#1e2420]">
                  Botox consultation
                </p>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#294D3E]">
                <p>✓ Qualified</p>
                <p>✓ Ready to book</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
