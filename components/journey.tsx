"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { journey } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { getTranslation } from "@/lib/translations";

export function Journey() {
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

  return (
    <section id="journey" className="mx-auto max-w-content px-6 py-24">
      <SectionHeading
        eyebrow={t.journey.eyebrow}
        title={language === "pt" ? "Onde trabalhei." : "Where I've worked."}
        description={language === "pt" ? "Uma visão rápida do meu caminho profissional até agora." : "A quick look at my professional path so far."}
      />

      <div className="relative border-l border-border pl-8">
        {journey.map((item, index) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            className="relative pb-10 last:pb-0"
          >
            <span className="absolute -left-[2.35rem] top-1.5 flex h-3 w-3 items-center justify-center">
              {item.current && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              )}
              <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
            </span>

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-base font-semibold text-foreground">
                {item.role} &middot; {item.company}
              </h3>
              <span className="text-xs font-medium uppercase tracking-wide text-muted">
                {item.period}
              </span>
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
