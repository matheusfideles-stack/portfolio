"use client";

import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("language") as "pt" | "en" | null;
    if (saved && (saved === "pt" || saved === "en")) {
      setLanguage(saved);
    }
  }, []);

  const handleLanguageChange = (lang: "pt" | "en") => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    window.location.reload();
  };

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 rounded-full border border-border bg-background px-2 py-1.5">
        <Globe className="h-4 w-4 text-muted" />
        <button className="px-2 py-1 text-xs font-medium transition-colors text-muted">
          PT
        </button>
        <span className="text-muted">/</span>
        <button className="px-2 py-1 text-xs font-medium transition-colors text-muted">
          EN
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-background px-2 py-1.5">
      <Globe className="h-4 w-4 text-muted" />
      <button
        onClick={() => handleLanguageChange("pt")}
        className={`px-2 py-1 text-xs font-medium transition-colors ${
          language === "pt"
            ? "text-accent"
            : "text-muted hover:text-foreground"
        }`}
      >
        PT
      </button>
      <span className="text-muted">/</span>
      <button
        onClick={() => handleLanguageChange("en")}
        className={`px-2 py-1 text-xs font-medium transition-colors ${
          language === "en"
            ? "text-accent"
            : "text-muted hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
}
