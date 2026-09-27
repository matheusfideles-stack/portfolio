"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Hammer } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-24">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects I've built and shipped."
        description="A mix of backend systems and services — each built with an emphasis on performance, maintainability, and a great developer experience."
      />

      {projects.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-surface px-6 py-16 text-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-accent">
            <Hammer className="h-5 w-5" />
          </div>
          <p className="text-sm font-medium text-foreground">
            New projects coming soon.
          </p>
          <p className="max-w-sm text-sm text-muted">
            I&apos;m currently working on things worth sharing here. Check
            back soon, or take a look at my GitHub in the meantime.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/40"
            >
              <div
                className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(var(--foreground)/0.06),transparent_60%)] transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-medium text-muted">
                    Project preview
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-5 border-t border-border pt-5">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline focus-ring group/link inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                  >
                    Live Demo
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline focus-ring inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
}
