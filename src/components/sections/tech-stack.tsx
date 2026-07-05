import { techStack } from "@/config/portfolio";

export function TechStack() {
  const items = [...techStack, ...techStack];
  return (
    <section aria-label="Tech stack" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass overflow-hidden rounded-3xl">
          <div className="relative py-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
            <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
              {items.map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full gradient-bg" />
                  <span className="font-display text-2xl font-semibold text-foreground/80">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
