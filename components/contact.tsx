'use client';

import { useState } from 'react';
import { MapPin, Phone, Smartphone, Mail, Linkedin, Facebook, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLocale } from '@/lib/locale-context';
import { cn } from '@/lib/utils';

export function Contact() {
  const { t, dir } = useLocale();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-card" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.contact.title}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-secondary" />
            <div className="size-1.5 rotate-45 bg-secondary" />
            <div className="h-px w-12 bg-secondary" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-6">
                {t.contact.officeName}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/5 text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="text-foreground/85">{t.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-primary/5 text-primary">
                    <Mail className="size-5" />
                  </div>
                  <a 
                    href={`mailto:${t.contact.email}`}
                    className="text-foreground/85 hover:text-secondary transition-colors"
                  >
                    {t.contact.email}
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-primary/5 text-primary">
                    <Phone className="size-5" />
                  </div>
                  <a 
                    href={`tel:${t.contact.phone}`}
                    className="text-foreground/85 hover:text-secondary transition-colors"
                    dir="ltr"
                  >
                    {t.contact.phone}
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-primary/5 text-primary">
                    <Smartphone className="size-5" />
                  </div>
                  <a 
                    href={`tel:${t.contact.mobile}`}
                    className="text-foreground/85 hover:text-secondary transition-colors"
                    dir="ltr"
                  >
                    {t.contact.mobile}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="flex items-center gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/5 text-primary hover:bg-secondary/10 hover:text-secondary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-5" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/5 text-primary hover:bg-secondary/10 hover:text-secondary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="size-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/5 text-primary hover:bg-secondary/10 hover:text-secondary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="size-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted/30 rounded-xl p-6 md:p-8 border border-border/50">
            {isSubmitted ? (
              <div className="flex items-center justify-center h-full min-h-[300px]">
                <div className="text-center">
                  <div className="size-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Send className="size-8 text-secondary" />
                  </div>
                  <p className="text-xl font-semibold text-primary">
                    {t.contact.form.success}
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground/80">
                      {t.contact.form.firstName}
                    </label>
                    <Input 
                      id="firstName"
                      name="firstName"
                      required 
                      className="bg-card"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground/80">
                      {t.contact.form.lastName}
                    </label>
                    <Input 
                      id="lastName"
                      name="lastName"
                      required 
                      className="bg-card"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                    {t.contact.form.email}
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email" 
                    required 
                    className="bg-card"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground/80">
                    {t.contact.form.phone}
                  </label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel" 
                    className="bg-card"
                    dir="ltr"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                    {t.contact.form.message}
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    rows={4} 
                    required
                    className="bg-card resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="size-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      {t.contact.form.submit}
                    </span>
                  ) : (
                    t.contact.form.submit
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
