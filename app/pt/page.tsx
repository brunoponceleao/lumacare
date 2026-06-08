import type { Metadata } from "next";

import { LandingPage } from "@/components/site/LandingPage";
import { landingContent } from "@/lib/site";

const content = landingContent.pt;

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: {
    canonical: content.metadata.canonical,
    languages: {
      en: "/",
      "pt-PT": "/pt",
    },
  },
};

export default function PortugueseHome() {
  return <LandingPage locale="pt" />;
}
