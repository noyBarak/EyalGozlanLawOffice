'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { localeNames, type Locale } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export function Header() {
  const { locale, setLocale, t, dir } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const desktopLangMenuRef = useRef<HTMLDivElement>(null);
  const mobileLangMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  const locales: Locale[] = ['he', 'en', 'fr'];

  const navItems = [
    { label: t.nav.home, href: '#home', type: 'anchor' },
    { label: t.nav.practiceAreas, href: '#practice-areas', type: 'anchor' },
    { label: t.nav.about, href: '#about', type: 'anchor' },
    { label: t.nav.testimonials, href: '#testimonials', type: 'anchor' },
    { label: t.nav.blog, href: '/blog', type: 'page' },
    { label: t.nav.accessibility, href: '/accessibility', type: 'page' },
    { label: t.nav.contact, href: '#contact', type: 'anchor' },
  ];

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isOutsideDesktop = desktopLangMenuRef.current && !desktopLangMenuRef.current.contains(target);
      const isOutsideMobile = mobileLangMenuRef.current && !mobileLangMenuRef.current.contains(target);
      if (isOutsideDesktop && isOutsideMobile) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (href: string, type: string) => {
    setIsMenuOpen(false);
    if (type === 'anchor') {
      if (isHomePage) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push('/' + href);
      }
    }
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      const element = document.querySelector('#home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push('/');
    }
  };

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsLangMenuOpen(false);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm"
      dir={dir}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-3 cursor-pointer"
          >
            <Image
              src="/images/logo.png"
              alt="אייל גוזלן - משרד עורכי דין"
              width={180}
              height={60}
              className="h-12 w-auto md:h-14"
              priority
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              item.type === 'page' ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-muted"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.type)}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-muted"
                >
                  {item.label}
                </button>
              )
            ))}
            
            {/* Language Menu */}
            <div className="relative" ref={desktopLangMenuRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-muted"
                aria-label="Select language"
              >
                <Globe className="size-4" />
                <span>{localeNames[locale]}</span>
                <ChevronDown className={cn("size-3 transition-transform", isLangMenuOpen && "rotate-180")} />
              </button>
              {isLangMenuOpen && (
                <div className="absolute top-full mt-1 right-0 bg-card border border-border rounded-md shadow-lg py-1 min-w-[120px] z-50">
                  {locales.map((l) => (
                    <button
                      key={l}
                      onClick={() => handleLanguageChange(l)}
                      className={cn(
                        "w-full px-4 py-2 text-sm text-left hover:bg-muted transition-colors",
                        locale === l && "text-primary font-medium"
                      )}
                    >
                      {localeNames[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="relative" ref={mobileLangMenuRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="p-2 text-foreground/80 hover:text-primary transition-colors flex items-center gap-1"
                aria-label="Select language"
              >
                <Globe className="size-5" />
                <span className="text-xs">{locale.toUpperCase()}</span>
              </button>
              {isLangMenuOpen && (
                <div className="absolute top-full mt-1 right-0 bg-card border border-border rounded-md shadow-lg py-1 min-w-[100px] z-50">
                  {locales.map((l) => (
                    <button
                      key={l}
                      onClick={() => handleLanguageChange(l)}
                      className={cn(
                        "w-full px-3 py-2 text-sm text-left hover:bg-muted transition-colors",
                        locale === l && "text-primary font-medium"
                      )}
                    >
                      {localeNames[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground/80 hover:text-primary transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 bg-card border-t border-border',
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            item.type === 'page' ? (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.type)}
                className={cn(
                  "px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors",
                  dir === 'rtl' ? 'text-right' : 'text-left'
                )}
              >
                {item.label}
              </button>
            )
          ))}
        </nav>
      </div>
    </header>
  );
}
