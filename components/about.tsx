'use client';

import Image from 'next/image';
import { Quote } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';

export function About() {
  const { t, dir } = useLocale();

  return (
    <section id="about" className="py-20 bg-card" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t.about.title}
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-secondary" />
              <div className="size-1.5 rotate-45 bg-secondary" />
              <div className="h-px w-12 bg-secondary" />
            </div>
          </div>

          {/* About Content */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="w-48 h-60 rounded-lg border border-border overflow-hidden shadow-lg">
                <Image
                  src="/images/eyal-gozlan.jpg"
                  alt="עו״ד אייל גוזלן"
                  width={192}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-start">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                {t.about.name}
              </h3>
              <p className="text-foreground/75 mb-6 leading-relaxed">
                {t.about.credentials}
              </p>

              {/* Quote */}
              <div className="relative bg-muted/50 rounded-lg p-6 border-s-4 border-secondary">
                <Quote className="absolute top-4 end-4 size-8 text-secondary/30" />
                <p className="text-lg italic text-foreground/85 leading-relaxed">
                  {t.about.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
