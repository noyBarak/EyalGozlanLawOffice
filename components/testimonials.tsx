'use client';

import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLocale } from '@/lib/locale-context';

// ============================================
// הממליצים מאתר מידרג - ציון כללי 9.92 מתוך 72 חוות דעת
// מקור: https://www.midrag.co.il/SpCard/Sp/55360
// ============================================
const testimonials = {
  he: [
    {
      name: 'עדינה דרעי, פסגת זאב',
      text: 'הכול היה מצוין, היה לי עורך דין קודם וכמעט הפסדנו את העסקה, שמצאנו את אייל הוא ממש הציל את המצב, טרח ועבד מאוד טוב, מקצועי, נחמד ומתחשב, הסביר על כל התהליך ונשאר בקשר גם אחר כך. מגיע לו ציון 11 מתוך 10!',
      rating: 5,
    },
    {
      name: 'נ. ג., ירושלים',
      text: 'אייל בעל מקצוע מדהים! הוא מאוד מאוד אנושי, מאוד נחמד ומסור, עובד בכל רגע נתון והזמינות שלו מקסימאלית. הוא מאוד מקצועי, ניכר שאכפת לו מהלקוח, הוא שיתף אותנו בכל צעד בתהליך והמחיר היה הוגן.',
      rating: 5,
    },
    {
      name: 'ידידיה שנדורפי, עפולה',
      text: 'השירות היה עשר! אייל זמין מאד ועושה הכל כדי שתרגיש טוב ותהיה הכי מרוצה שאפשר. היה גמיש מאד על מנת לבצע את המכירה והרכישה בצורה מיטבית ומהירה. ממליץ בחום!',
      rating: 5,
    },
    {
      name: 'מירי לוי, ירושלים',
      text: 'הכול היה ממש עשר! הוא ממש שירותי והיה נעים לעבוד איתו, הוא נעים ואדיב ואני ממליצה עליו בחום.',
      rating: 5,
    },
    {
      name: 'נעמה בן דוד, רעננה',
      text: 'הוא היה ממש מצוין, הוא מאוד נגיש וזמין. מנסה לעזור גם אם הוא לא בקיא באיזשהו תחום הוא מברר וחוזר. המחיר שלו הוגן.',
      rating: 5,
    },
    {
      name: 'א. ב., ירושלים',
      text: 'אנחנו מאוד מרוצים ממנו, נעזרנו בו פעמיים! הוא מאוד ענייני, יעיל ועשה את התהליך במקביל לשירות מילואים!',
      rating: 5,
    },
  ],
  en: [
    {
      name: 'Adina Drai, Pisgat Ze\'ev',
      text: 'Everything was excellent, I had a previous lawyer and we almost lost the deal. When we found Eyal, he really saved the situation, worked hard and very well, professional, nice and considerate, explained the whole process and stayed in touch afterwards. He deserves 11 out of 10!',
      rating: 5,
    },
    {
      name: 'N. G., Jerusalem',
      text: 'Eyal is an amazing professional! He is very human, very nice and dedicated, works at any given moment and his availability is maximum. He is very professional, you can tell he cares about the client, he shared every step in the process and the price was fair.',
      rating: 5,
    },
    {
      name: 'Yedidia Shendorfi, Afula',
      text: 'The service was perfect! Eyal is very available and does everything to make you feel good and be as satisfied as possible. He was very flexible to complete the sale and purchase optimally and quickly. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Miri Levi, Jerusalem',
      text: 'Everything was perfect! He is very service-oriented and it was pleasant to work with him, he is pleasant and polite and I highly recommend him.',
      rating: 5,
    },
    {
      name: 'Naama Ben David, Ra\'anana',
      text: 'He was really excellent, he is very accessible and available. He tries to help and even if he is not familiar with a certain area, he checks and gets back. His price is fair.',
      rating: 5,
    },
    {
      name: 'A. B., Jerusalem',
      text: 'We are very satisfied with him, we used his services twice! He is very to the point, efficient and handled the process while doing reserve duty!',
      rating: 5,
    },
  ],
};

export function Testimonials() {
  const { t, dir, locale } = useLocale();
  const currentTestimonials = locale === 'he' ? testimonials.he : testimonials.en;

  return (
    <section id="testimonials" className="py-20 bg-muted/30" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            {t.testimonials.subtitle}
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-secondary" />
            <div className="size-1.5 rotate-45 bg-secondary" />
            <div className="h-px w-12 bg-secondary" />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {currentTestimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-secondary/50 bg-card"
            >
              <CardContent className="p-6 relative">
                <Quote className="absolute top-4 end-4 size-6 text-secondary/20" />
                
                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-secondary text-secondary" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-foreground/80 leading-relaxed mb-4 text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                {/* Name */}
                <div className="font-semibold text-primary text-sm">
                  {testimonial.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Midrag Badge */}
        <div className="text-center mt-10">
          <a 
            href="https://www.midrag.co.il/SpCard/Sp/55360"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors border border-border/50"
          >
            <span className="text-2xl font-bold text-secondary">9.92</span>
            <span className="text-sm text-muted-foreground">
              {locale === 'he' ? 'ציון ממוצע מתוך 72 חוות דעת במידרג' : 'Average rating from 72 reviews on Midrag'}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
