'use client';

import Link from 'next/link';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useLocale } from '@/lib/locale-context';

export default function BlogPage() {
  const { t, dir, locale } = useLocale();

  const BackArrow = dir === 'rtl' ? ArrowRight : ArrowLeft;

  return (
    <div dir={dir} className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-12">
          {/* Back Link */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <BackArrow className="size-4" />
            {locale === 'he' ? 'חזרה לעמוד הראשי' : 'Back to Home'}
          </Link>

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t.blog.title}
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-secondary" />
              <div className="size-1.5 rotate-45 bg-secondary" />
              <div className="h-px w-12 bg-secondary" />
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.blog.posts.map((post, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-secondary/50 bg-card flex flex-col"
              >
                {/* Placeholder Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-t-lg" />
                
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <span className="text-border">|</span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3.5" />
                      {t.blog.readTime} {post.readTime} {t.blog.minutes}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-primary group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-foreground/70 text-sm leading-relaxed line-clamp-4">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
