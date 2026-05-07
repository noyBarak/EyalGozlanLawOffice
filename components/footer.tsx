'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';

export function Footer() {
  const { t, dir } = useLocale();

  return (
    <footer className="py-8 bg-primary text-primary-foreground" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm opacity-90">{t.footer.rating}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              href="/accessibility" 
              className="text-sm opacity-75 hover:opacity-100 transition-opacity"
            >
              {t.nav.accessibility}
            </Link>
          </div>

          <div className="text-sm opacity-75">
            {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
