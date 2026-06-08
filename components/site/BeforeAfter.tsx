import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { LandingContent } from "@/lib/site";

type BeforeAfterProps = {
  content: LandingContent["beforeAfter"];
};

export function BeforeAfter({ content }: BeforeAfterProps) {
  return (
    <section className="bg-[#eef4ef] py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <ComparisonCard title={content.beforeTitle} items={content.beforeItems} tone="before" />
          <ComparisonCard title={content.afterTitle} items={content.afterItems} tone="after" />
        </div>
      </Container>
    </section>
  );
}

function ComparisonCard({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "before" | "after";
}) {
  const isAfter = tone === "after";

  return (
    <article className="rounded-lg border border-white/80 bg-white/76 p-7 shadow-sm">
      <h3 className="text-2xl font-semibold text-[#1e2420]">{title}</h3>
      <ul className="mt-7 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[#5f6b65]">
            <span
              className={`mt-1 grid size-5 shrink-0 place-items-center rounded-full text-xs font-bold ${
                isAfter
                  ? "bg-[#2f4a3c] text-white"
                  : "bg-[#efcdc7] text-[#7b4d43]"
              }`}
            >
              {isAfter ? "OK" : "!"}
            </span>
            <span className="leading-7">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
