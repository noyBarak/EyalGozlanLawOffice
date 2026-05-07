'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Accessibility, Mail, Phone } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useLocale } from '@/lib/locale-context';

const accessibilityContent = {
  he: {
    title: 'הצהרת נגישות',
    intro: 'אייל גוזלן - משרד עורכי דין מחויב להנגשת האתר לאנשים עם מוגבלויות.',
    sections: [
      {
        title: 'מחויבות לנגישות',
        content: 'אנו מחויבים לספק חוויית גלישה נגישה ושווה לכל המשתמשים, כולל אנשים עם מוגבלויות. אנו פועלים באופן מתמיד לשיפור נגישות האתר בהתאם לתקן הישראלי (ת"י 5568) ולהנחיות WCAG 2.1 ברמה AA.',
      },
      {
        title: 'מה עשינו כדי להנגיש את האתר?',
        content: 'האתר נבנה תוך התחשבות בנגישות, כולל: מבנה סמנטי נכון של דפי האתר, תמיכה בניווט באמצעות מקלדת, שימוש בניגודיות צבעים מספקת, תמיכה בטכנולוגיות מסייעות כמו קוראי מסך, וטקסט חלופי לתמונות.',
      },
      {
        title: 'דפדפנים נתמכים',
        content: 'האתר תומך בגרסאות העדכניות של הדפדפנים Chrome, Firefox, Safari ו-Edge. אנו ממליצים לעדכן את הדפדפן שלכם לגרסה האחרונה לחוויית גלישה מיטבית.',
      },
      {
        title: 'נתקלתם בבעיה?',
        content: 'אם נתקלתם בבעיית נגישות באתר או אם יש לכם הצעות לשיפור, אנא צרו איתנו קשר ונשמח לטפל בפנייתכם בהקדם האפשרי.',
      },
    ],
    contact: {
      title: 'פרטי יצירת קשר לפניות בנושא נגישות:',
      email: 'Eyal@gozlanadv.co.il',
      phone: '02-6337021',
    },
    lastUpdate: 'עודכן לאחרונה: ינואר 2024',
  },
  en: {
    title: 'Accessibility Statement',
    intro: 'Eyal Gozlan - Law Office is committed to making the website accessible to people with disabilities.',
    sections: [
      {
        title: 'Accessibility Commitment',
        content: 'We are committed to providing an accessible and equal browsing experience for all users, including people with disabilities. We continuously work to improve the accessibility of the website in accordance with Israeli Standard (TI 5568) and WCAG 2.1 guidelines at level AA.',
      },
      {
        title: 'What have we done to make the site accessible?',
        content: 'The website was built with accessibility in mind, including: correct semantic structure of website pages, support for keyboard navigation, use of sufficient color contrast, support for assistive technologies such as screen readers, and alternative text for images.',
      },
      {
        title: 'Supported Browsers',
        content: 'The website supports the latest versions of Chrome, Firefox, Safari, and Edge browsers. We recommend updating your browser to the latest version for an optimal browsing experience.',
      },
      {
        title: 'Encountered a Problem?',
        content: 'If you encounter an accessibility problem on the website or have suggestions for improvement, please contact us and we will be happy to address your inquiry as soon as possible.',
      },
    ],
    contact: {
      title: 'Contact details for accessibility inquiries:',
      email: 'Eyal@gozlanadv.co.il',
      phone: '02-6337021',
    },
    lastUpdate: 'Last updated: January 2024',
  },
};

export default function AccessibilityPage() {
  const { t, dir, locale } = useLocale();

  const BackArrow = dir === 'rtl' ? ArrowRight : ArrowLeft;
  const content = locale === 'he' ? accessibilityContent.he : accessibilityContent.en;

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
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/5 mb-4">
              <Accessibility className="size-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {content.title}
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-secondary" />
              <div className="size-1.5 rotate-45 bg-secondary" />
              <div className="h-px w-12 bg-secondary" />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-foreground/85 leading-relaxed mb-10 text-center">
              {content.intro}
            </p>

            <div className="space-y-8">
              {content.sections.map((section, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border/50 shadow-sm">
                  <h2 className="text-xl font-bold text-primary mb-3">
                    {section.title}
                  </h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-10 bg-muted/30 rounded-lg p-6 border border-border/50">
              <h2 className="text-xl font-bold text-primary mb-4">
                {content.contact.title}
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="size-5 text-primary" />
                  <a 
                    href={`mailto:${content.contact.email}`}
                    className="text-foreground/80 hover:text-secondary transition-colors"
                  >
                    {content.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="size-5 text-primary" />
                  <a 
                    href={`tel:${content.contact.phone}`}
                    className="text-foreground/80 hover:text-secondary transition-colors"
                    dir="ltr"
                  >
                    {content.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Last Update */}
            <p className="text-center text-sm text-muted-foreground mt-8">
              {content.lastUpdate}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
