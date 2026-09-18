import { Github, FileDown, ArrowRight, Linkedin, Code2, Terminal } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[88vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-20"
    >
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center w-full">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/60 backdrop-blur-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="font-mono text-xs text-muted-hi">
              Available for SDE / Backend roles
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] mb-6">
            {profile.name}
          </h1>

          <div className="flex items-center gap-3 mb-7">
            <div className="h-px w-12 bg-gradient-to-r from-accent to-transparent" />
            <p className="text-lg md:text-xl text-white/85 font-medium">
              Software Engineer
              <span className="text-muted mx-2">/</span>
              Backend Developer
            </p>
          </div>

          <p className="text-muted-hi leading-relaxed max-w-xl mb-10 text-[15px] md:text-base">
            Computer Science undergraduate building backend systems, REST APIs,
            and software applications with{" "}
            <span className="text-white">Go</span>,{" "}
            <span className="text-white">PostgreSQL</span>,{" "}
            <span className="text-white">Redis</span>,{" "}
            <span className="text-white">Docker</span>, and modern web
            technologies.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-black font-semibold text-sm hover:bg-accent/90 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
            >
              View Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border bg-surface/60 backdrop-blur-sm text-white text-sm font-medium hover:border-border-hi hover:bg-surface-hi transition-all hover:-translate-y-0.5"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border bg-surface/60 backdrop-blur-sm text-white text-sm font-medium hover:border-border-hi hover:bg-surface-hi transition-all hover:-translate-y-0.5"
            >
              <FileDown size={16} />
              Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
            >
              <Code2 size={14} />
              LeetCode
            </a>
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
          <div className="card-premium rounded-2xl border border-border bg-surface/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/60 max-w-md w-full">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-black/40">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-muted flex items-center gap-2">
                <Terminal size={12} />
                ~/suraj
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <p className="text-accent">$ whoami</p>
              <p className="text-white/90 mb-5">suraj-bain</p>

              <p className="text-accent">$ focus</p>
              <p className="text-white/90">backend engineering</p>
              <p className="text-white/90">software development</p>
              <p className="text-white/90 mb-5">problem solving</p>

              <p className="text-accent">$ stack --primary</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Go", "PostgreSQL", "Redis", "Docker"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded border border-accent/30 bg-accent/10 text-accent text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-muted mt-5 flex items-center gap-2">
                <span className="inline-block w-2 h-4 bg-accent align-middle animate-pulse" />
                <span className="text-xs">ready</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}