import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Demo", href: "#demo" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2e3731]/10 bg-[#fffaf7]/82 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a className="block" href="#top" aria-label="LumaCare home">
          <Image
            src="/brand/lumacare-logo.svg"
            alt="LumaCare - AI Front Desk for Aesthetic Clinics"
            width={455}
            height={150}
            className="h-auto w-[180px] sm:w-[220px]"
            priority
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#58645e] lg:flex">
          {navItems.map((item) => (
            <a key={item.href} className="transition hover:text-[#2f4a3c]" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <Button className="hidden sm:inline-flex" />
      </Container>
    </header>
  );
}
