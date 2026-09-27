"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/lib/data";

const socialRow = [
  { label: "GitHub", href: socialLinks.github },
  { label: "LinkedIn", href: socialLinks.linkedin },
];

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative mx-auto flex max-w-content flex-col items-center px-6 pb-24 pt-24 text-center md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Software Engineer &middot; Backend
          </p>

          <h1 className="text-balance text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-[3.2rem]">
            &ldquo;Build it clean,
            <br />
            ship it fast.&rdquo;
          </h1>

          <p className="mt-4 text-sm text-muted">
            A principle that shapes how Matheus Fideles writes software.
          </p>

          <div className="mt-8 h-px w-16 bg-accent" />

          <p className="mt-8 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            I design and build scalable, reliable backend systems — APIs,
            services, and data pipelines — using Java, Spring Boot, and
            solid engineering practices.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="focus-ring group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
            >
              <Mail className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
              Get in Touch
            </a>
            <a
              href={socialLinks.resume}
              className="focus-ring group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
            >
              Resume
              <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {socialRow.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="link-underline focus-ring text-sm font-medium text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
