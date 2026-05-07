'use client';

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { type Locale, getTranslations } from './i18n';

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: ReturnType<typeof getTranslations>;
  dir: 'rtl' | 'ltr';
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('he');
  
  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);
  
  const t = getTranslations(locale);
  const dir = locale === 'he' ? 'rtl' : 'ltr';

  // Update document direction and language when locale changes
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
    console.log('[v0] Locale changed to:', locale, 'dir:', dir);
  }, [locale, dir]);
  
  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
