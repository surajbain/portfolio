import Section from "./Section";
import { skillGroups } from "@/data/skills";
import {
  SiCplusplus,
  SiC,
  SiGo,
  SiPython,
  SiDart,
  SiTypescript,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiSqlite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiFlutter,
  SiAndroid,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiGoogle,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  SiAuth0,
  SiJsonwebtokens,
} from "react-icons/si";
import { Database, Server, Terminal, Code2 } from "lucide-react";
import { IconType } from "react-icons";

const iconMap: Record<string, { icon: IconType; color: string }> = {
  cpp: { icon: SiCplusplus, color: "#00599C" },
  c: { icon: SiC, color: "#A8B9CC" },
  go: { icon: SiGo, color: "#00ADD8" },
  python: { icon: SiPython, color: "#3776AB" },
  dart: { icon: SiDart, color: "#0175C2" },
  typescript: { icon: SiTypescript, color: "#3178C6" },
  php: { icon: SiPhp, color: "#777BB4" },
  sql: { icon: Database, color: "#8B8B94" },
  gin: { icon: Server, color: "#22D3AA" },
  rest: { icon: Code2, color: "#22D3AA" },
  jwt: { icon: SiJsonwebtokens, color: "#D63AFF" },
  gorm: { icon: Database, color: "#00ADD8" },
  postgres: { icon: SiPostgresql, color: "#4169E1" },
  mysql: { icon: SiMysql, color: "#4479A1" },
  redis: { icon: SiRedis, color: "#DC382D" },
  mongodb: { icon: SiMongodb, color: "#47A248" },
  sqlite: { icon: SiSqlite, color: "#003B57" },
  html: { icon: SiHtml5, color: "#E34F26" },
  css: { icon: SiCss3, color: "#1572B6" },
  javascript: { icon: SiJavascript, color: "#F7DF1E" },
  nextjs: { icon: SiNextdotjs, color: "#FFFFFF" },
  flutter: { icon: SiFlutter, color: "#02569B" },
  android: { icon: SiAndroid, color: "#3DDC84" },
  docker: { icon: SiDocker, color: "#2496ED" },
  git: { icon: SiGit, color: "#F05032" },
  github: { icon: SiGithub, color: "#FFFFFF" },
  postman: { icon: SiPostman, color: "#FF6C37" },
  vscode: { icon: VscVscode, color: "#007ACC" },
  androidstudio: { icon: SiAndroid, color: "#3DDC84" },
};

export default function Skills() {
  return (
    <Section id="skills" label="Tech Stack" title="Tools I work with.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="card-premium rounded-2xl border border-border bg-surface/60 backdrop-blur-sm p-6 hover:bg-surface-hi transition-colors"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-hi">
                {group.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => {
                const iconData = item.icon ? iconMap[item.icon] : null;
                const Icon = iconData?.icon;
                return (
                  <span
                    key={item.name}
                    className="group inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-md border border-border bg-black/40 text-white/85 hover:border-accent/40 hover:text-accent transition-all cursor-default"
                  >
                    {Icon && (
                      <Icon
                        size={14}
                        style={{ color: iconData.color }}
                        className="shrink-0"
                      />
                    )}
                    {item.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}