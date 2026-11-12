'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';

export function Footer() {
  const { t, dir } = useLocale();

  return (
    <footer className="py-8 bg-primary text-primary-foreground" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between" dir="ltr">
          <div className="text-sm opacity-75" dir={dir}>
            {t.footer.copyright}
          </div>
          <Link
            href="/accessibility"
            className="text-sm opacity-80 underline-offset-4 hover:underline transition-opacity"
          >
            {t.nav.accessibility}
          </Link>
        </div>
      </div>
    </footer>
  );
}
