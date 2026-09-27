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

      <div className="relative border-l-2 border-border pl-8 space-y-12">
        {journey.map((item, index) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            className="relative"
          >
            {/* Timeline dot */}
            <span className="absolute -left-[2.35rem] top-1 flex h-4 w-4 items-center justify-center">
              {item.current && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              )}
              <span className="relative inline-flex h-4 w-4 rounded-full bg-accent" />
            </span>

            {/* Logo and header */}
            <div className="flex items-start gap-4">
              {item.logo && (
                <div className="h-14 w-14 flex-shrink-0 rounded-lg border border-border bg-background p-2">
                  <img src={item.logo} alt={item.company} className="h-full w-full object-contain" />
                </div>
              )}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.company}
                    </h3>
                    <p className="text-sm text-muted">{language === "pt" ? item.rolePt : item.roleEn}</p>
                  </div>
                  <span className="text-sm font-medium text-accent">
                    {item.period}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {language === "pt" ? item.descriptionPt : item.descriptionEn}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
