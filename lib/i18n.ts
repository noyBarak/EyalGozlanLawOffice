export type Locale = 'he' | 'en' | 'fr';

export const localeNames: Record<Locale, string> = {
  he: 'עברית',
  en: 'English',
  fr: 'Français',
};

export const translations = {
  he: {
    // Navigation
    nav: {
      home: 'ראשי',
      practiceAreas: 'תחומי עיסוק',
      about: 'אודות',
      testimonials: 'ממליצים',
      blog: 'בלוג',
      accessibility: 'הצהרת נגישות',
      contact: 'צור קשר',
    },
    // CTA
    cta: {
      consultation: 'לתיאום פגישת ייעוץ ללא תשלום',
    },
    // Hero
    hero: {
      title: 'Gozlan Law Office',
      subtitle: 'אייל גוזלן - משרד עורכי דין',
    },
    // Vision Section
    vision: {
      title: 'חזון המשרד',
      content: [
        '"אייל גוזלן - משרד עורכי דין" הינו משרד בוטיק ירושלמי המתמחה במקרקעין, עזבונות וירושות ומשפט אזרחי. משרדנו מעניק ליווי משפטי מקיף בעסקאות נדל"ן וניהול עניינים משפטיים מורכבים הקשורים בנכסים ובזכויות במקרקעין.',
        'בשנים האחרונות הרחיב המשרד את פעילותו גם לליווי וניהול משפטי של פרויקטים בבניינים משותפים, ובכלל זה פרויקטים של קבוצות דיירים לבניית ממ״דים, הוספת מרפסות ושיפוצים משותפים בבניינים. במסגרת זו אנו מלווים את נציגויות הדיירים לכל אורך הפרויקט – החל מהסדרת ההסכמות בין הדיירים, דרך התקשרות עם קבלנים ואנשי מקצוע, ועד ניהול חשבון נאמנות וליווי משפטי שוטף של הפרויקט.',
        'אנו מתחייבים לשמור על הסטנדרטים הגבוהים ביותר של יושרה, יסודיות, הגינות, מסירות ואדיבות בכל אספקט של עבודתנו. המשימה שלנו היא להעניק ללקוחות תמיכה משפטית מותאמת תוך הקפדה על מקצועיות ונחישות מרבית.',
        'ב"אייל גוזלן – משרד עורכי דין" אנחנו מאמינים בהנגשת עולם המשפט ללקוחותינו. לאורך כל התהליך אנו מלווים את הלקוחות ומוודאים שהם מבינים היטב את הזכויות והחובות שלהם. משרדנו מחויב לתקשורת שקופה ולשיתוף הלקוחות בהערכות מקצועיות של הסיכונים והסיכויים הכרוכים בכל מהלך.',
        'המשרד דוגל בזמינות ובנגישות גבוהה, תוך מתן מענה מהיר ומקיף לצרכי הלקוחות. כל ענייני הלקוחות מטופלים בדיסקרטיות מלאה ובקפדנות מקצועית.',
        'מה שמייחד את עבודתנו הוא השילוב בין מומחיות רחבה בתחום המקרקעין לבין ליווי אישי וצמוד של כל לקוח ולקוח. ניסיוננו מאפשר לנו להציע פתרונות משפטיים מקיפים המותאמים לצרכים ולמטרות הייחודיות של כל מקרה.',
        'אנו מבינים שעניינים משפטיים יכולים להיות מורכבים ומרתיעים. לכן אנחנו מקפידים להסביר מושגים משפטיים בצורה פשוטה, ברורה ונגישה, על מנת לאפשר ללקוחות לקבל החלטות מושכלות. באמצעות תקשורת פתוחה ושקופה אנו מגשרים על הפער בין עולם המשפט לבין הבנת הלקוחות.',
      ],
    },
    // Practice Areas
    practiceAreas: {
      title: 'תחומי עיסוק',
      areas: [
        {
          title: 'דירות עיזבון וצווי ירושה',
          description: 'טיפול בדירות עיזבון וצווי ירושה עם ניסיון רב. אנו מלווים את הלקוחות בהיבטים המשפטיים של דירות עיזבון, לרבות צווי ירושה וצווי קיום צוואה.',
        },
        {
          title: 'עסקאות נדל״ן למגורים',
          description: 'ייצוג קונים ומוכרים בדירות יד שנייה: אנו מספקים תמיכה משפטית מקיפה ללקוחות ברכישה או מכירה של דירות יד שנייה, תוך הבטחת תהליך עסקה חלק והגנה על האינטרסים שלהם. רכישה מקבלנים: המומחיות המיוחדת שלנו משתרעת על סיוע ללקוחות ברכישת נכסים ישירות מקבלנים, תוך מתן הדרכה ובדיקת רקע הפרויקט, סקירת חוזים ומשא ומתן. הסכמי שכירות: אנו מסייעים למשכירים ולשוכרים לנווט במורכבות של הסכמי שכירות, ומספקים סיוע במשא ומתן ובסקירה כדי להבטיח תנאים הוגנים ושקופים.',
        },
        {
          title: 'ליווי פרויקטים בבניינים משותפים',
          description: 'ליווי משפטי וניהולי של פרויקטים משותפים בבנייני מגורים, כגון בניית ממ״דים, הוספת מרפסות ושיפוצים רחבים בבניין. אנו מלווים את נציגות הדיירים לכל אורך הדרך – החל מהסדרת ההסכמות בין הדיירים, דרך התקשרות עם קבלנים ואנשי מקצוע, ועד ניהול חשבון נאמנות וליווי משפטי שוטף של הפרויקט. הניסיון המשפטי בתחום המקרקעין מאפשר לנו להוביל פרויקטים מורכבים בבניינים בצורה מסודרת, תוך שמירה על האינטרסים של כלל הדיירים.',
        },
      ],
    },
    // About
    about: {
      title: 'אודות',
      name: 'עו״ד אייל גוזלן',
      credentials: '(LL.B) בוגר תואר ראשון במשפטים (B.A) בוגר תואר ראשון בתקשורת המסלול האקדמי המכללה למנהל',
      quote: 'משא ומתן מוצלח מקורו אינו בהחזקת הקלפים הטובים, אלא בידיעה כיצד לשחק בהם.',
    },
    // Contact
    contact: {
      title: 'צור קשר',
      officeName: 'אייל גוזלן - משרד עורכי דין',
      address: '״בית הנציב״ , דרך חברון 101, ירושלים',
      email: 'Eyal@gozlanadv.co.il',
      phone: '02-6337021',
      mobile: '050-3233496',
      form: {
        firstName: 'שם פרטי',
        lastName: 'שם משפחה',
        email: 'כתובת דוא״ל',
        phone: 'מספר טלפון',
        message: 'כתבו לי - במה אוכל לעזור לכם?',
        submit: 'שלח',
        success: 'תודה על פנייתך!',
      },
    },
    // Blog
    blog: {
      title: 'בלוג',
      readTime: 'זמן קריאה',
      minutes: 'דקות',
      posts: [
        {
          title: 'הוספת מרפסות לבניין משותף – המדריך לדיירים',
          excerpt: 'בשנים האחרונות יותר ויותר בניינים בישראל בוחנים אפשרות של הוספת מרפסות לדירות קיימות. מעבר לשיפור איכות החיים של הדיירים, הוספת מרפסת יכולה להעלות משמעותית את ערך הדירה.',
          date: '16 במרץ',
          readTime: 2,
        },
        {
          title: 'עושים סדר | ייפוי כוח מתמשך ונכסי מקרקעין',
          excerpt: 'לאחרונה פונים אליי לקוחות רבים לעריכת ייפוי כוח מתמשך ובשונה מבעבר, עולות שאלות הקשורות לתחום עיסוקי בעולם המקרקעין...',
          date: '4 בינו׳ 2023',
          readTime: 2,
        },
        {
          title: 'טעויות יקרות בעסקאות מקרקעין',
          excerpt: 'החלטתם לקנות דירה? החלטתם למכור את הבית? כעו"ד שעוסק בעיקר בעסקאות מכר, אני נתקל בטעויות שנעשות לקראת העסקה ובמהלכה.',
          date: '16 בינו׳ 2022',
          readTime: 2,
        },
        {
          title: 'פודקאסט ׳זמן לחשוב׳ | רוית גופמן ואייל גוזלן',
          excerpt: 'בעולם המשפט אין לרוב מקום להתחדשות, מתיחת גבולות או שינויים מהותיים בתצורת ההתנהלות.',
          date: '11 באוק׳ 2021',
          readTime: 1,
        },
        {
          title: 'שמאות מקדימה',
          excerpt: 'מהי בכלל שמאות מקדימה ולמה היא חשובה? כאשר אתם רוכשים דירה ומתכננים לקחת משכנתא, הבנק יבקש מכם לבצע שמאות על מנת לקבוע את ערך הדירה.',
          date: '5 באוג׳ 2021',
          readTime: 1,
        },
      ],
    },
    // Footer
    footer: {
      rating: 'ציון 10 באתר מדרג',
      copyright: '© 2023 Gozlan Eyal ADV. - עו"ד אייל גוזלן',
    },
    // Testimonials
    testimonials: {
      title: 'ממליצים',
      subtitle: 'מה אומרים עלינו',
    },
    // Accessibility
    accessibility: {
      title: 'הצהרת נגישות',
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      practiceAreas: 'Practice Areas',
      about: 'About',
      testimonials: 'Testimonials',
      blog: 'Blog',
      accessibility: 'Accessibility',
      contact: 'Contact',
    },
    // CTA
    cta: {
      consultation: 'Schedule a Free Consultation',
    },
    // Hero
    hero: {
      title: 'Gozlan Law Office',
      subtitle: 'Eyal Gozlan - Law Firm',
    },
    // Vision Section
    vision: {
      title: 'Our Vision',
      content: [
        '"Eyal Gozlan - Law Office" is a Jerusalem-based boutique firm specializing in real estate, estates and inheritances, and civil law. Our office provides comprehensive legal support for real estate transactions and management of complex legal matters related to properties and property rights.',
        'In recent years, the office has expanded its activities to include legal support and management of projects in shared buildings, including projects for tenant groups to build safe rooms, add balconies, and joint renovations in buildings. In this framework, we accompany the tenant representatives throughout the project - from arranging agreements between tenants, through contracting with contractors and professionals, to managing a trust account and ongoing legal support of the project.',
        'We are committed to maintaining the highest standards of integrity, thoroughness, fairness, dedication, and courtesy in every aspect of our work. Our mission is to provide clients with tailored legal support while maintaining the utmost professionalism and determination.',
        'At "Eyal Gozlan - Law Office" we believe in making the legal world accessible to our clients. Throughout the process, we accompany clients and ensure they fully understand their rights and obligations. Our office is committed to transparent communication and sharing professional assessments of the risks and opportunities involved in each step.',
        'The office advocates high availability and accessibility, while providing fast and comprehensive responses to client needs. All client matters are handled with complete discretion and professional rigor.',
        'What distinguishes our work is the combination of broad expertise in real estate with personal and close accompaniment of each and every client. Our experience allows us to offer comprehensive legal solutions tailored to the unique needs and goals of each case.',
        'We understand that legal matters can be complex and daunting. Therefore, we make sure to explain legal concepts in a simple, clear, and accessible manner, to enable clients to make informed decisions. Through open and transparent communication, we bridge the gap between the legal world and client understanding.',
      ],
    },
    // Practice Areas
    practiceAreas: {
      title: 'Practice Areas',
      areas: [
        {
          title: 'Estate Apartments and Inheritance Orders',
          description: 'Handling estate apartments and inheritance orders with extensive experience. We accompany clients in the legal aspects of estate apartments, including inheritance orders and will probate orders.',
        },
        {
          title: 'Residential Real Estate Transactions',
          description: 'Representing buyers and sellers in second-hand apartments: We provide comprehensive legal support to clients in purchasing or selling second-hand apartments, ensuring a smooth transaction process and protecting their interests. Purchase from contractors: Our special expertise extends to assisting clients in purchasing properties directly from contractors, providing guidance and background checks on the project, contract review and negotiation. Lease agreements: We assist landlords and tenants in navigating the complexity of lease agreements, providing negotiation and review assistance to ensure fair and transparent terms.',
        },
        {
          title: 'Shared Building Project Support',
          description: 'Legal and administrative support for shared projects in residential buildings, such as building safe rooms, adding balconies, and extensive renovations in the building. We accompany the tenant representatives throughout the process - from arranging agreements between tenants, through contracting with contractors and professionals, to managing a trust account and ongoing legal support of the project. Legal experience in real estate allows us to lead complex projects in buildings in an orderly manner, while protecting the interests of all tenants.',
        },
      ],
    },
    // About
    about: {
      title: 'About',
      name: 'Adv. Eyal Gozlan',
      credentials: '(LL.B) Bachelor of Laws (B.A) Bachelor of Communications - The Academic Center of Management',
      quote: 'Successful negotiation does not come from holding good cards, but from knowing how to play them.',
    },
    // Contact
    contact: {
      title: 'Contact Us',
      officeName: 'Eyal Gozlan - Law Office',
      address: '"Beit HaNatziv", Hebron Road 101, Jerusalem',
      email: 'Eyal@gozlanadv.co.il',
      phone: '02-6337021',
      mobile: '050-3233496',
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Write to me - how can I help you?',
        submit: 'Send',
        success: 'Thank you for your inquiry!',
      },
    },
    // Blog
    blog: {
      title: 'Blog',
      readTime: 'Read time',
      minutes: 'minutes',
      posts: [
        {
          title: 'Adding Balconies to a Shared Building - Guide for Residents',
          excerpt: 'In recent years, more and more buildings in Israel are considering the option of adding balconies to existing apartments. Beyond improving the quality of life for residents, adding a balcony can significantly increase the value of the apartment.',
          date: 'March 16',
          readTime: 2,
        },
        {
          title: 'Getting Organized | Continuing Power of Attorney and Real Estate',
          excerpt: 'Recently, many clients have approached me to prepare a continuing power of attorney, and unlike before, questions related to my field of practice in real estate are arising...',
          date: 'Jan 4, 2023',
          readTime: 2,
        },
        {
          title: 'Expensive Mistakes in Real Estate Transactions',
          excerpt: 'Decided to buy an apartment? Decided to sell the house? As a lawyer who deals mainly with sales transactions, I encounter mistakes made before and during the transaction.',
          date: 'Jan 16, 2022',
          readTime: 2,
        },
        {
          title: 'Podcast "Time to Think" | Ravit Gofman and Eyal Gozlan',
          excerpt: 'In the legal world, there is usually no room for innovation, pushing boundaries, or fundamental changes in the way things are conducted.',
          date: 'Oct 11, 2021',
          readTime: 1,
        },
        {
          title: 'Preliminary Appraisal',
          excerpt: 'What is a preliminary appraisal and why is it important? When you buy an apartment and plan to take a mortgage, the bank will ask you to perform an appraisal to determine the value of the apartment.',
          date: 'Aug 5, 2021',
          readTime: 1,
        },
      ],
    },
    // Footer
    footer: {
      rating: 'Rating 10 on Midrug',
      copyright: '© 2023 Gozlan Eyal ADV. - Eyal Gozlan Law Office',
    },
    // Testimonials
    testimonials: {
      title: 'Testimonials',
      subtitle: 'What Our Clients Say',
    },
    // Accessibility
    accessibility: {
      title: 'Accessibility Statement',
    },
  },
  fr: {
    // Navigation
    nav: {
      home: 'Accueil',
      practiceAreas: 'Domaines',
      about: 'À propos',
      testimonials: 'Témoignages',
      blog: 'Blog',
      accessibility: 'Accessibilité',
      contact: 'Contact',
    },
    // CTA
    cta: {
      consultation: 'Planifier une consultation gratuite',
    },
    // Hero
    hero: {
      title: 'Gozlan Law Office',
      subtitle: 'Eyal Gozlan - Cabinet d\'avocats',
    },
    // Vision Section
    vision: {
      title: 'Notre Vision',
      content: [
        '"Eyal Gozlan - Cabinet d\'avocats" est un cabinet boutique basé à Jérusalem, spécialisé dans l\'immobilier, les successions et héritages, et le droit civil. Notre cabinet fournit un accompagnement juridique complet pour les transactions immobilières et la gestion d\'affaires juridiques complexes liées aux propriétés et aux droits immobiliers.',
        'Ces dernières années, le cabinet a élargi ses activités pour inclure le soutien juridique et la gestion de projets dans des immeubles partagés, y compris des projets pour des groupes de locataires pour construire des abris, ajouter des balcons et effectuer des rénovations communes dans les immeubles. Dans ce cadre, nous accompagnons les représentants des locataires tout au long du projet.',
        'Nous nous engageons à maintenir les plus hauts standards d\'intégrité, de rigueur, d\'équité, de dévouement et de courtoisie dans chaque aspect de notre travail. Notre mission est de fournir aux clients un soutien juridique adapté tout en maintenant le plus haut professionnalisme et détermination.',
        'Chez "Eyal Gozlan - Cabinet d\'avocats", nous croyons en l\'accessibilité du monde juridique pour nos clients. Tout au long du processus, nous accompagnons les clients et nous assurons qu\'ils comprennent parfaitement leurs droits et obligations.',
        'Le cabinet prône une haute disponibilité et accessibilité, tout en fournissant des réponses rapides et complètes aux besoins des clients. Toutes les affaires des clients sont traitées avec une discrétion totale et une rigueur professionnelle.',
        'Ce qui distingue notre travail est la combinaison d\'une expertise large en immobilier avec un accompagnement personnel et proche de chaque client.',
        'Nous comprenons que les questions juridiques peuvent être complexes et intimidantes. C\'est pourquoi nous nous assurons d\'expliquer les concepts juridiques de manière simple, claire et accessible.',
      ],
    },
    // Practice Areas
    practiceAreas: {
      title: 'Domaines de Pratique',
      areas: [
        {
          title: 'Appartements successoraux et ordonnances d\'héritage',
          description: 'Gestion des appartements successoraux et des ordonnances d\'héritage avec une vaste expérience. Nous accompagnons les clients dans les aspects juridiques des appartements successoraux.',
        },
        {
          title: 'Transactions immobilières résidentielles',
          description: 'Représentation des acheteurs et vendeurs pour les appartements d\'occasion. Achat auprès de promoteurs avec conseils et vérifications. Contrats de location pour propriétaires et locataires.',
        },
        {
          title: 'Accompagnement de projets d\'immeubles partagés',
          description: 'Accompagnement juridique et administratif pour les projets partagés dans les immeubles résidentiels, tels que la construction d\'abris, l\'ajout de balcons et les rénovations importantes.',
        },
      ],
    },
    // About
    about: {
      title: 'À Propos',
      name: 'Me Eyal Gozlan',
      credentials: '(LL.B) Licence en Droit (B.A) Licence en Communication - Centre Académique de Management',
      quote: 'Une négociation réussie ne vient pas du fait d\'avoir de bonnes cartes, mais de savoir comment les jouer.',
    },
    // Contact
    contact: {
      title: 'Contactez-nous',
      officeName: 'Eyal Gozlan - Cabinet d\'avocats',
      address: '"Beit HaNatziv", Route de Hébron 101, Jérusalem',
      email: 'Eyal@gozlanadv.co.il',
      phone: '02-6337021',
      mobile: '050-3233496',
      form: {
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Adresse e-mail',
        phone: 'Numéro de téléphone',
        message: 'Écrivez-moi - comment puis-je vous aider ?',
        submit: 'Envoyer',
        success: 'Merci pour votre demande !',
      },
    },
    // Blog
    blog: {
      title: 'Blog',
      readTime: 'Temps de lecture',
      minutes: 'minutes',
      posts: [
        {
          title: 'Ajouter des balcons à un immeuble partagé - Guide pour les résidents',
          excerpt: 'Ces dernières années, de plus en plus d\'immeubles en Israël envisagent l\'option d\'ajouter des balcons aux appartements existants.',
          date: '16 mars',
          readTime: 2,
        },
        {
          title: 'S\'organiser | Procuration continue et immobilier',
          excerpt: 'Récemment, de nombreux clients m\'ont contacté pour préparer une procuration continue, et des questions liées à l\'immobilier surgissent...',
          date: '4 jan. 2023',
          readTime: 2,
        },
        {
          title: 'Erreurs coûteuses dans les transactions immobilières',
          excerpt: 'Vous avez décidé d\'acheter un appartement ? Vous avez décidé de vendre la maison ? Je rencontre des erreurs commises avant et pendant la transaction.',
          date: '16 jan. 2022',
          readTime: 2,
        },
        {
          title: 'Podcast "Temps de réfléchir" | Ravit Gofman et Eyal Gozlan',
          excerpt: 'Dans le monde juridique, il n\'y a généralement pas de place pour l\'innovation ou des changements fondamentaux.',
          date: '11 oct. 2021',
          readTime: 1,
        },
        {
          title: 'Évaluation préliminaire',
          excerpt: 'Qu\'est-ce qu\'une évaluation préliminaire et pourquoi est-elle importante ? La banque vous demandera d\'effectuer une évaluation pour déterminer la valeur de l\'appartement.',
          date: '5 août 2021',
          readTime: 1,
        },
      ],
    },
    // Footer
    footer: {
      rating: 'Note 10 sur Midrug',
      copyright: '© 2023 Gozlan Eyal ADV. - Cabinet d\'avocats Eyal Gozlan',
    },
    // Testimonials
    testimonials: {
      title: 'Témoignages',
      subtitle: 'Ce que disent nos clients',
    },
    // Accessibility
    accessibility: {
      title: 'Déclaration d\'accessibilité',
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
