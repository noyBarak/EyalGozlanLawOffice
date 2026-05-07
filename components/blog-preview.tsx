'use client';

import Link from 'next/link';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/lib/locale-context';

export function BlogPreview() {
  const { t, dir, locale } = useLocale();

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 bg-muted/50" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.blog.title}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-secondary" />
            <div className="size-1.5 rotate-45 bg-secondary" />
            <div className="h-px w-12 bg-secondary" />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {t.blog.posts.slice(0, 3).map((post, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-secondary/50 bg-card"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span>{post.date}</span>
                  <span className="text-border">|</span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3.5" />
                    {post.readTime} {t.blog.minutes}
                  </span>
                </div>
                <CardTitle className="text-lg text-primary group-hover:text-secondary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button asChild variant="outline" className="group">
            <Link href="/blog" className="flex items-center gap-2">
              {locale === 'he' ? 'לכל הפוסטים' : 'View All Posts'}
              <ArrowIcon className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
