"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function TechStack() {
  return (
    <section id="stack" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-content px-6 py-24">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I use to bring ideas to production."
          description="A pragmatic, modern toolkit focused on type safety, developer experience, and shipping reliable software fast."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="text-sm font-medium uppercase tracking-widest text-accent">
                {category.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
