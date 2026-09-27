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

      <div className="space-y-8">
        {journey.map((item, index) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                {item.logo && (
                  <div className="h-12 w-12 flex-shrink-0 rounded-lg border border-border bg-background p-1">
                    <img src={item.logo} alt={item.company} className="h-full w-full object-contain" />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground">
                    {item.company}
                  </h3>
                  <p className="text-sm text-muted">{language === "pt" ? item.rolePt : item.roleEn}</p>
                </div>
              </div>
              <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {item.period}
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              {language === "pt" ? item.descriptionPt : item.descriptionEn}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
