'use client';


import { useLocale } from '@/lib/locale-context';

export function Footer() {
  const { t, dir } = useLocale();

  return (
    <footer className="py-8 bg-primary text-primary-foreground" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="text-sm opacity-75">
            {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
