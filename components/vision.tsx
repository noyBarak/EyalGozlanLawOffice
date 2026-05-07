'use client';

import { useLocale } from '@/lib/locale-context';

export function Vision() {
  const { t, dir } = useLocale();

  return (
    <section className="py-20 bg-card" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t.vision.title}
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-secondary" />
              <div className="size-1.5 rotate-45 bg-secondary" />
              <div className="h-px w-12 bg-secondary" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-foreground/85 leading-relaxed">
            {t.vision.content.map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
