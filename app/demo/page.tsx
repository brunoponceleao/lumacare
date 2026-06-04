import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SalesDemo } from "@/components/demo/SalesDemo";

export const metadata: Metadata = {
  title: "LumaCare Demo | AI Front Desk",
  description:
    "A lightweight LumaCare sales demo showing how a patient inquiry can become a qualified consultation request.",
};

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#fffaf7] text-[#1e2420]">
      <header className="border-b border-[#2e3731]/10 bg-[#fffaf7]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link href="/" aria-label="LumaCare home">
            <Image
              src="/brand/lumacare-logo.svg"
              alt="LumaCare - AI Front Desk for Aesthetic Clinics"
              width={455}
              height={150}
              className="h-auto w-[178px] sm:w-[218px]"
              priority
            />
          </Link>
          <Link
            href="/"
            className="rounded-full border border-[#2f4a3c]/15 bg-white/72 px-4 py-2 text-sm font-semibold text-[#2f4a3c] transition hover:bg-white"
          >
            Back to site
          </Link>
        </div>
      </header>

      <SalesDemo />
    </main>
  );
}
