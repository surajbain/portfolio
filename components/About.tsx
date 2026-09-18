import Section from "./Section";

const focusAreas = [
  "REST APIs",
  "Backend services",
  "Database-driven applications",
  "Authentication systems",
  "Multi-tenant systems",
  "Full-stack applications",
];

export default function About() {
  return (
    <Section id="about" label="About" title="Backend-focused, product-minded.">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <div className="md:col-span-2 space-y-4 text-muted-hi leading-relaxed text-[15px]">
          <p>
            I&apos;m a B.Tech Computer Science &amp; Engineering student at
            Bhilai Institute of Technology, Raipur, graduating in{" "}
            <span className="text-white">2027</span>. My focus is on backend
            engineering and software development — designing APIs, modeling
            data, and building reliable systems.
          </p>
          <p>
            I enjoy working across the full stack — from database schema to
            client — but I care most about the server-side:{" "}
            <span className="text-white">clean architecture</span>,{" "}
            <span className="text-white">authentication</span>, and{" "}
            <span className="text-white">correctness</span>.
          </p>
          <p>
            Alongside backend work, I regularly practice{" "}
            <span className="text-white">C++</span>,{" "}
            <span className="text-white">DSA</span>, and problem solving.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface/60 backdrop-blur-sm p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-4">
            What I build
          </p>
          <ul className="space-y-2.5">
            {focusAreas.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[13px] text-white/85"
              >
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}