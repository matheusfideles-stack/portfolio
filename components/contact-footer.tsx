"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { socialLinks } from "@/lib/data";

const links = [
  { label: "GitHub", href: socialLinks.github },
  { label: "LinkedIn", href: socialLinks.linkedin },
];

export function ContactFooter() {
  return (
    <footer id="contact" className="relative border-t border-border">
      <div className="relative mx-auto max-w-content px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s build something exceptional together.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-balance leading-relaxed text-muted">
            Have a project in mind, an opportunity to discuss, or just want to
            say hello? My inbox is always open.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${socialLinks.email}`}
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              {socialLinks.email}
            </a>
            <a
              href={socialLinks.resume}
              className="focus-ring group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
            >
              Download Resume
              <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
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

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted sm:flex-row">
          <p>© 2026 Matheus Fideles. All rights reserved.</p>
          <p className="text-xs text-muted/70">
            Designed &amp; built from scratch with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
