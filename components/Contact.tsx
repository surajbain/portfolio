import { profile } from "@/data/profile";
import { Mail, Github, Linkedin } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-24">
      <Reveal>
        <div className="card-premium rounded-3xl border border-border bg-surface/60 backdrop-blur-sm p-10 md:p-16 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #22d3aa 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-accent" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Contact
              </p>
              <span className="w-8 h-px bg-accent" />
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-5">
              Let&apos;s Build Something
            </h2>
            <p className="text-muted-hi max-w-xl mx-auto leading-relaxed mb-10 text-[15px]">
              Interested in software engineering, backend systems, or building
              something useful? Feel free to connect.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-black font-semibold text-sm hover:bg-accent/90 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
              >
                <Mail size={16} />
                Email Me
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border bg-black/30 text-white text-sm font-medium hover:border-accent/40 hover:text-accent transition-all hover:-translate-y-0.5"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border bg-black/30 text-white text-sm font-medium hover:border-accent/40 hover:text-accent transition-all hover:-translate-y-0.5"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-sm text-muted-hi hover:text-accent transition-colors"
            >
              {profile.email}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}