import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#2e3731]/10 py-10">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-5">
          <a className="block" href="#top" aria-label="LumaCare home">
            <Image
              src="/brand/lumacare-logo.svg"
              alt="LumaCare - AI Front Desk for Aesthetic Clinics"
              width={455}
              height={150}
              className="h-auto w-[185px] sm:w-[220px]"
            />
          </a>
          <p className="text-sm text-[#68736d]">
            &copy; 2026 {site.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm font-medium text-[#68736d] sm:items-end">
          <a
            className="transition hover:text-[#294D3E]"
            href={`mailto:${site.contactEmail}`}
          >
            {site.contactEmail}
          </a>
          <a
            className="transition hover:text-[#294D3E]"
            href={site.websiteHref}
            target="_blank"
            rel="noreferrer"
          >
            {site.domain}
          </a>
        </div>
      </Container>
    </footer>
  );
}
