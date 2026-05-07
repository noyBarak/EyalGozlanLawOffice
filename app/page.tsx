'use client';

import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Vision } from '@/components/vision';
import { PracticeAreas } from '@/components/practice-areas';
import { About } from '@/components/about';
import { Testimonials } from '@/components/testimonials';
import { BlogPreview } from '@/components/blog-preview';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { useLocale } from '@/lib/locale-context';

export default function HomePage() {
  const { dir } = useLocale();

  return (
    <div dir={dir} className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Vision />
        <PracticeAreas />
        <About />
        <Testimonials />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
