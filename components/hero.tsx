'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/lib/locale-context';

export function Hero() {
  const { t, dir } = useLocale();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ChevronIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;

  return (
    <section 
      id="home" 
      className="relative min-h-[70vh] flex items-center justify-center pt-20 bg-primary"
      dir={dir}
    >
      {/* Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* CTA Button */}
          <Button
            onClick={scrollToContact}
            size="lg"
            className="mb-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {t.cta.consultation}
            <ChevronIcon className="size-5" />
          </Button>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            {t.hero.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 font-medium drop-shadow-md">
            {t.hero.subtitle}
          </p>

          {/* Decorative Line */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-secondary" />
            <div className="size-2 rotate-45 bg-secondary" />
            <div className="h-px w-16 bg-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}
