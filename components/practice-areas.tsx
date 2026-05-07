'use client';

import { Scale, Home, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocale } from '@/lib/locale-context';

const icons = [Scale, Home, Building2];

export function PracticeAreas() {
  const { t, dir } = useLocale();

  return (
    <section id="practice-areas" className="py-20 bg-muted/50" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.practiceAreas.title}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-secondary" />
            <div className="size-1.5 rotate-45 bg-secondary" />
            <div className="h-px w-12 bg-secondary" />
          </div>
        </div>

        {/* Practice Area Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.practiceAreas.areas.map((area, index) => {
            const Icon = icons[index];
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-secondary/50 bg-card"
              >
                <CardHeader className="pb-4">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="p-4 rounded-full bg-primary/5 group-hover:bg-secondary/10 transition-colors">
                      <Icon className="size-8 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-center text-primary group-hover:text-secondary transition-colors">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/75 leading-relaxed text-center">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
