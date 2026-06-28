'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { getDictionary, defaultLang, Lang } from '@/dictionaries';
import type { Dictionary } from '@/dictionaries/en';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(defaultLang);

  function setLang(newLang: Lang) {
    setLangState(newLang);
  }

  const t = getDictionary(lang) as Dictionary;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
