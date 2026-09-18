import Section from "./Section";
import { experiences } from "@/data/experience";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Training & internships.">
      <div className="relative">
        <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-accent/50 via-border to-transparent hidden md:block" />

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <article
              key={idx}
              className="card-premium md:pl-12 relative rounded-2xl border border-border bg-surface/60 backdrop-blur-sm p-6 md:p-8"
            >
              <div className="hidden md:flex absolute left-0 top-8 w-6 h-6 rounded-full border-2 border-accent bg-bg items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>

              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg border border-border bg-black/40 shrink-0 md:hidden">
                    <Briefcase size={16} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted-hi mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-muted-hi px-3 py-1 rounded-md border border-border bg-black/40">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2.5">
                {exp.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-white/80 leading-relaxed"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}