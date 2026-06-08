import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { languageLinks, type LandingContent, type Locale } from "@/lib/site";

const localeOrder: Locale[] = ["en", "pt"];

type HeaderProps = {
  content: LandingContent["header"];
  locale: Locale;
};

export function Header({ content, locale }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2e3731]/10 bg-[#fffaf7]/82 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a className="block" href="#top" aria-label={content.homeAriaLabel}>
          <Image
            src="/brand/lumacare-logo.svg"
            alt={content.logoAlt}
            width={455}
            height={150}
            className="h-auto w-[180px] sm:w-[220px]"
            priority
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#58645e] lg:flex">
          {content.navItems.map((item) => (
            <a key={item.href} className="transition hover:text-[#2f4a3c]" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            aria-label={content.languageSwitcherLabel}
            className="flex shrink-0 rounded-full border border-[#2f4a3c]/12 bg-white/68 p-1 text-xs font-semibold text-[#2f4a3c] shadow-sm"
          >
            {localeOrder.map((code) => {
              const isActive = code === locale;

              return (
                <Link
                  key={code}
                  href={languageLinks[code].href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-2.5 py-1 transition ${
                    isActive
                      ? "bg-[#2f4a3c] text-white"
                      : "text-[#58645e] hover:bg-[#eef4ef] hover:text-[#2f4a3c]"
                  }`}
                >
                  {languageLinks[code].label}
                </Link>
              );
            })}
          </div>
          <div className="hidden sm:block">
            <Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
