import Section from "./Section";
import { profile } from "@/data/profile";
import {
  Code2,
  ArrowUpRight,
  TrendingUp,
  Award,
  Target,
  Flame,
} from "lucide-react";

export default function ProblemSolving() {
  const lc = profile.leetcode;
  const easyPct = Math.round((lc.easy / lc.total) * 100);
  const mediumPct = Math.round((lc.medium / lc.total) * 100);
  const hardPct = Math.round((lc.hard / lc.total) * 100);

  return (
    <Section id="dsa" label="Problem Solving" title="Algorithmic practice.">
      <div className="card-premium rounded-3xl border border-border bg-surface/60 backdrop-blur-sm p-7 md:p-12 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #22d3aa 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="p-3 rounded-xl border border-accent/30 bg-accent/10 w-fit mb-5">
                <Code2 size={20} className="text-accent" />
              </div>
              <p className="text-white/85 leading-relaxed text-[15px]">
                Regularly practicing Data Structures and Algorithms using{" "}
                <span className="text-white font-medium">C++</span> and solving
                programming problems to strengthen algorithmic thinking and
                software engineering fundamentals.
              </p>
            </div>

            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-black font-semibold text-sm hover:bg-accent/90 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 whitespace-nowrap"
            >
              View LeetCode
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {/* Total Solved - Featured Card */}
            <div className="col-span-2 lg:col-span-1 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/[0.08] to-accent/[0.02] p-5 relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-accent/10 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 rounded-lg bg-accent/20">
                    <TrendingUp size={14} className="text-accent" />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                    Total Solved
                  </p>
                </div>
                <p className="text-4xl md:text-5xl font-semibold text-white leading-none mb-2">
                  {lc.total}
                </p>
                <p className="text-[11px] text-muted-hi">
                  {lc.submissions} submissions
                </p>
              </div>
            </div>

            {/* Easy */}
            <div className="rounded-2xl border border-border bg-black/40 p-5 hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg bg-emerald-500/10">
                  <Award size={12} className="text-emerald-400" />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-400">
                  Easy
                </p>
              </div>
              <p className="text-3xl md:text-4xl font-semibold text-white leading-none mb-2">
                {lc.easy}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-emerald-400 rounded-full transition-all"
                    style={{ width: `${easyPct}%` }}
                  />
                </div>
                <span className="text-[10px] font-mono text-muted-hi">
                  {easyPct}%
                </span>
              </div>
            </div>

            {/* Medium */}
            <div className="rounded-2xl border border-border bg-black/40 p-5 hover:border-yellow-500/30 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg bg-yellow-500/10">
                  <Target size={12} className="text-yellow-400" />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-yellow-400">
                  Medium
                </p>
              </div>
              <p className="text-3xl md:text-4xl font-semibold text-white leading-none mb-2">
                {lc.medium}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full transition-all"
                    style={{ width: `${mediumPct}%` }}
                  />
                </div>
                <span className="text-[10px] font-mono text-muted-hi">
                  {mediumPct}%
                </span>
              </div>
            </div>

            {/* Hard */}
            <div className="rounded-2xl border border-border bg-black/40 p-5 hover:border-red-500/30 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg bg-red-500/10">
                  <Flame size={12} className="text-red-400" />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-red-400">
                  Hard
                </p>
              </div>
              <p className="text-3xl md:text-4xl font-semibold text-white leading-none mb-2">
                {lc.hard}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-red-400 rounded-full transition-all"
                    style={{ width: `${hardPct}%` }}
                  />
                </div>
                <span className="text-[10px] font-mono text-muted-hi">
                  {hardPct}%
                </span>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-hi">
            <span className="font-mono">
              Acceptance rate:{" "}
              <span className="text-accent">{lc.acceptance}</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-muted/40" />
            <span className="font-mono">
              Profile:{" "}
              <a
                href={profile.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                leetcode.com/u/SurajBain
              </a>
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}