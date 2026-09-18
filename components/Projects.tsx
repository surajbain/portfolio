import Section from "./Section";
import { projects } from "@/data/projects";
import {
  Github,
  Boxes,
  Database,
  ShieldCheck,
  Container,
} from "lucide-react";

function TechTag({ label }: { label: string }) {
  return (
    <span className="px-2 py-0.5 text-[11px] font-mono rounded border border-border bg-black/40 text-white/75">
      {label}
    </span>
  );
}

function ArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-lg border border-border bg-black/40 p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-3">
        Request Flow
      </p>
      <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
        {steps.map((step, i) => (
          <span key={step} className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded border border-border bg-surface-hi text-white/85">
              {step}
            </span>
            {i < steps.length - 1 && <span className="text-accent">→</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

function LifecycleFlow({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-lg border border-border bg-black/40 p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-3">
        Event Lifecycle
      </p>
      <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
        {steps.map((step, i) => (
          <span key={step} className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded border border-accent/30 bg-accent/10 text-accent">
              {step}
            </span>
            {i < steps.length - 1 && <span className="text-muted">→</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" label="Projects" title="Selected work.">
      <article className="card-premium rounded-2xl border border-border bg-surface/60 backdrop-blur-sm overflow-hidden mb-5">
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  {featured.title}
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] px-2 py-0.5 rounded-full border border-accent/40 bg-accent/10 text-accent">
                  Featured
                </span>
              </div>
              <p className="text-muted-hi text-sm">{featured.subtitle}</p>
            </div>
            <a
              href={featured.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface-hi text-xs hover:border-accent/40 hover:text-accent transition-colors"
            >
              <Github size={12} />
              View Code
            </a>
          </div>

          <p className="text-white/80 leading-relaxed mb-6 max-w-3xl text-sm">
            {featured.summary}
          </p>

          {featured.highlights && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-6">
              {featured.highlights.map((h, i) => {
                const icons = [Boxes, Database, ShieldCheck, Container];
                const Icon = icons[i] || Boxes;
                return (
                  <div
                    key={h.label}
                    className="rounded-lg border border-border bg-black/40 p-3 hover:border-border-hi transition-colors"
                  >
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Icon size={11} className="text-accent" />
                      <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted">
                        {h.label}
                      </p>
                    </div>
                    <p className="text-xs text-white/90 leading-snug">
                      {h.value}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2.5 mb-6">
            {featured.bullets.map((b, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-[13px] text-white/80 leading-relaxed"
              >
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {featured.architecture && (
              <ArchitectureFlow steps={featured.architecture} />
            )}
            {featured.lifecycle && <LifecycleFlow steps={featured.lifecycle} />}
          </div>

          <div className="flex flex-wrap gap-1.5 pt-5 border-t border-border">
            {featured.tech.map((t) => (
              <TechTag key={t} label={t} />
            ))}
          </div>
        </div>
      </article>

      {rest.map((p) => (
        <article
          key={p.slug}
          className="card-premium rounded-2xl border border-border bg-surface/60 backdrop-blur-sm p-6 md:p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-1.5">
                {p.title}
              </h3>
              <p className="text-muted-hi text-sm">{p.subtitle}</p>
            </div>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface-hi text-xs hover:border-accent/40 hover:text-accent transition-colors"
            >
              <Github size={12} />
              View Code
            </a>
          </div>

          <p className="text-white/80 leading-relaxed mb-5 max-w-3xl text-sm">
            {p.summary}
          </p>

          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2.5 mb-5">
            {p.bullets.map((b, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-[13px] text-white/80 leading-relaxed"
              >
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 pt-5 border-t border-border">
            {p.tech.map((t) => (
              <TechTag key={t} label={t} />
            ))}
          </div>
        </article>
      ))}
    </Section>
  );
}