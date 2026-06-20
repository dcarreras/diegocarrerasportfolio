import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { PropsWithChildren } from "react";
import type { Language } from "./index";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LANGUAGE_STORAGE_KEY = "diego-carreras-language";

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "es";
  }

  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (stored === "es" || stored === "en") {
    return stored;
  }

  return window.navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
