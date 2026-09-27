"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Sparkles } from "lucide-react";

const principles = [
  {
    icon: Code2,
    title: "Code quality first",
    description:
      "I write code that's easy to read, test, and change six months from now — not just code that works today.",
  },
  {
    icon: Layers,
    title: "Thinking in systems",
    description:
      "From database schema to service boundaries, I care about how the pieces fit together, not just the feature in front of me.",
  },
  {
    icon: Sparkles,
    title: "Detail-driven craft",
    description:
      "Edge cases, failure modes, and error handling aren't an afterthought — they're part of what makes a system production-ready.",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-24">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            About
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            I build software the way I&apos;d want to use it.
          </h2>
          <div className="mt-6 space-y-4 text-balance leading-relaxed text-muted">
            <p>
              I&apos;m a{" "}
              <span className="rounded-md bg-accent-soft px-1.5 py-0.5 font-medium text-accent">
                Backend Software Engineer
              </span>{" "}
              focused on Java and Spring Boot — building APIs, services, and
              data models that stay reliable as they scale. I care about
              getting the fundamentals right: clear boundaries, solid data
              structures, and code that&apos;s easy to reason about.
            </p>
            <p>
              What drives me is building things that hold up under
              real-world use. I care about{" "}
              <span className="rounded-md bg-accent-soft px-1.5 py-0.5 font-medium text-accent">
                clean architecture
              </span>
              , thoughtful engineering trade-offs, and shipping software that
              keeps working long after it ships.
            </p>
            <p>
              Outside of writing code, I&apos;m usually refining my
              workflow, exploring new tools, or studying how solid backend
              systems are designed — always looking for ways to raise the
              bar on my own work.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className={`rounded-2xl border border-border bg-surface p-6 ${
                index === 2 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-accent">
                <principle.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
