import Section from "./Section";
import { certifications } from "@/data/certifications";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      label="Certifications"
      title="Verified credentials."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((c, i) => (
          <div
            key={i}
            className="card-premium rounded-2xl border border-border bg-surface/60 backdrop-blur-sm p-6 flex flex-col hover:bg-surface-hi transition-colors"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="p-2.5 rounded-lg border border-accent/30 bg-accent/10">
                <Award size={16} className="text-accent" />
              </div>
              <span className="font-mono text-xs text-muted-hi">{c.year}</span>
            </div>

            <h3 className="text-base font-semibold text-white mb-1.5 leading-snug">
              {c.title}
            </h3>
            <p className="text-sm text-muted-hi mb-1">{c.issuer}</p>
            <p className="font-mono text-xs text-muted mb-5">{c.date}</p>

            {c.credentialId && (
              <p className="font-mono text-[10px] text-muted/70 mb-5 break-all">
                ID: {c.credentialId}
              </p>
            )}

            <div className="mt-auto pt-4 border-t border-border">
              {c.file ? (
                <a
                  href={c.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent/80 transition-colors"
                >
                  View Certificate
                  <ExternalLink size={12} />
                </a>
              ) : (
                <span className="text-xs text-muted/60">
                  Available on request
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}