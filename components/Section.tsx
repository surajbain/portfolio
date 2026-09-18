import Reveal from "./Reveal";

export default function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-16 min-h-[calc(100vh-64px)] flex flex-col justify-center py-16"
    >
      <Reveal>
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-accent" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {label}
            </p>
          </div>
          {title && (
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              {title}
            </h2>
          )}
        </div>
      </Reveal>
      <Reveal delay={100}>{children}</Reveal>
    </section>
  );
}