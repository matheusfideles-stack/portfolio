"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { getTranslation } from "@/lib/translations";

export function About() {
  const [language, setLanguageState] = useState<"pt" | "en">("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("language") as "pt" | "en" | null;
    if (saved && (saved === "pt" || saved === "en")) {
      setLanguageState(saved);
    }
  }, []);

  const t = getTranslation(language);

  const principles = [
    {
      icon: Code2,
      title: t.about.principles.principle1,
      description: t.about.principles.description1,
    },
    {
      icon: Layers,
      title: t.about.principles.principle2,
      description: t.about.principles.description2,
    },
    {
      icon: Sparkles,
      title: t.about.principles.principle3,
      description: t.about.principles.description3,
    },
  ];

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
            {t.about.eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.about.title}
          </h2>
          <div className="mt-6 space-y-4 text-balance leading-relaxed text-muted">
            <p>
              {language === "pt" ? "Sou um " : "I'm a "}{" "}
              <span className="rounded-md bg-accent-soft px-1.5 py-0.5 font-medium text-accent">
                {language === "pt"
                  ? "Engenheiro de Software Backend"
                  : "Backend Software Engineer"}
              </span>{" "}
              {t.about.description1}
            </p>
            <p>
              {t.about.description2}
            </p>
            <p>
              {t.about.description3}
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
