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
      "From database schema to UI state, I care about how the pieces fit together, not just the feature in front of me.",
  },
  {
    icon: Sparkles,
    title: "Detail-driven craft",
    description:
      "Micro-interactions, loading states, and edge cases aren't an afterthought — they're part of what makes software feel finished.",
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
            I build software the way I'd want to use it.
          </h2>
          <div className="mt-6 space-y-4 text-balance leading-relaxed text-muted">
            <p>
              I&apos;m a{" "}
              <span className="rounded-md bg-accent-soft px-1.5 py-0.5 font-medium text-accent">
                Full Stack Software Engineer
              </span>{" "}
              who enjoys the entire lifecycle of a product — architecting
              APIs, shaping data models, and polishing the interface people
              actually touch. My background spans React and Next.js on the
              frontend to Node.js and Python on the backend, always with an
              eye for maintainability.
            </p>
            <p>
              What drives me is the intersection of engineering and design:
              building things that are technically solid and genuinely
              pleasant to use. I care about{" "}
              <span className="rounded-md bg-accent-soft px-1.5 py-0.5 font-medium text-accent">
                clean architecture
              </span>
              , thoughtful UX, and shipping software that holds up under
              real-world use.
            </p>
            <p>
              Outside of writing code, I&apos;m usually refining my
              workflow, exploring new tools, or studying how great products
              are designed — always looking for ways to raise the bar on my
              own work.
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
