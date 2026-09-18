import Section from "./Section";
import { education } from "@/data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <Section id="education" label="Education" title="Academic background.">
      <article className="card-premium rounded-2xl border border-border bg-surface/60 backdrop-blur-sm p-7 md:p-10">
        <div className="flex items-start gap-5">
          <div className="p-3 rounded-xl border border-accent/30 bg-accent/10 shrink-0">
            <GraduationCap size={22} className="text-accent" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <h3 className="text-lg md:text-xl font-semibold">
                {education.institution}
              </h3>
              <span className="font-mono text-xs text-accent px-3 py-1 rounded-md border border-accent/30 bg-accent/10">
                Expected {education.graduation}
              </span>
            </div>
            <p className="text-white/85 mb-2 text-[15px]">
              {education.degree} — {education.field}
            </p>
            <p className="text-sm text-muted-hi">{education.university}</p>
            <p className="text-sm text-muted-hi mt-1">{education.location}</p>
          </div>
        </div>
      </article>
    </Section>
  );
}