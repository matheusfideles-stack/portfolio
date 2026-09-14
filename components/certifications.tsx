"use client";

import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";
import { certifications } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-border bg-surface/40"
    >
      <div className="mx-auto max-w-content px-6 py-24">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified credentials."
          description="Courses and certifications that back up what I know."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent/40"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-accent">
                <Award className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-foreground">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted">{cert.issuer}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
