import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À Propos',
    'nav.testimonials': 'Témoignages',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Votre partenaire de confiance pour la tenue de vos comptes',
    'hero.subtitle': 'Ideal Plus Commerce et Conseils simplifie votre gestion financière et vous aide à prendre des décisions éclairées.',
    'hero.cta.quote': 'Demandez un devis',
    'hero.cta.call': 'Appelez maintenant',
    'hero.cta.learn': 'En savoir plus',
    
    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Solutions professionnelles pour votre réussite financière',
    'services.bookkeeping.title': 'Tenue de Comptes',
    'services.bookkeeping.desc': 'Gestion complète de vos livres comptables avec précision et conformité.',
    'services.reporting.title': 'Rapports Financiers',
    'services.reporting.desc': 'Analyses détaillées pour des décisions éclairées.',
    'services.tax.title': 'Déclarations Fiscales',
    'services.tax.desc': 'Préparation et dépôt de toutes vos déclarations fiscales.',
    'services.payroll.title': 'Gestion de Paie',
    'services.payroll.desc': 'Service complet de paie pour vos employés.',
    'services.consulting.title': 'Conseil Financier',
    'services.consulting.desc': 'Conseils stratégiques pour optimiser vos finances.',
    
    // About
    'about.title': 'À Propos de Nous',
    'about.subtitle': 'Excellence en comptabilité depuis des années',
    'about.description': 'Ideal Plus Commerce et Conseils est votre partenaire de confiance basé à Cotonou, Bénin. Nous offrons des services comptables professionnels adaptés aux petites et moyennes entreprises.',
    'about.mission': 'Notre mission est de simplifier votre gestion financière pour que vous puissiez vous concentrer sur votre cœur de métier.',
    
    // Testimonials
    'testimonials.title': 'Ce que disent nos clients',
    'testimonials.subtitle': 'La satisfaction client au cœur de nos priorités',
    
    // FAQ
    'faq.title': 'Questions Fréquentes',
    'faq.subtitle': 'Réponses à vos questions les plus courantes',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Prêt à commencer ? Parlons de vos besoins',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Téléphone',
    'contact.form.company': 'Entreprise',
    'contact.form.service': 'Service souhaité',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer',
    'contact.whatsapp': 'WhatsApp',
    'contact.call': 'Appeler',
    'contact.office': 'Notre Bureau',
    'contact.address': 'Cotonou, Bénin',
    
    // Common
    'common.learn_more': 'En savoir plus',
    'common.contact_expert': 'Contacter un expert',
    'common.get_quote': 'Obtenir un devis',
    'common.start_today': 'Commencer aujourd\'hui',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Your Trusted Partner in Bookkeeping & Accounting',
    'hero.subtitle': 'Ideal Plus Commerce et Conseils simplifies your financial management and helps you make informed decisions.',
    'hero.cta.quote': 'Get a Quote',
    'hero.cta.call': 'Call Now',
    'hero.cta.learn': 'Learn More',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Professional solutions for your financial success',
    'services.bookkeeping.title': 'Bookkeeping',
    'services.bookkeeping.desc': 'Complete management of your accounting books with precision and compliance.',
    'services.reporting.title': 'Financial Reporting',
    'services.reporting.desc': 'Detailed analysis for informed business decisions.',
    'services.tax.title': 'Tax Preparation',
    'services.tax.desc': 'Preparation and filing of all your tax returns.',
    'services.payroll.title': 'Payroll Services',
    'services.payroll.desc': 'Complete payroll service for your employees.',
    'services.consulting.title': 'Business Consulting',
    'services.consulting.desc': 'Strategic advice to optimize your finances.',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Excellence in accounting for years',
    'about.description': 'Ideal Plus Commerce et Conseils is your trusted partner based in Cotonou, Benin. We offer professional accounting services tailored to small and medium businesses.',
    'about.mission': 'Our mission is to simplify your financial management so you can focus on your core business.',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Client satisfaction at the heart of our priorities',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Answers to your most common questions',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to get started? Let\'s discuss your needs',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.company': 'Company',
    'contact.form.service': 'Desired Service',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.whatsapp': 'WhatsApp',
    'contact.call': 'Call',
    'contact.office': 'Our Office',
    'contact.address': 'Cotonou, Benin',
    
    // Common
    'common.learn_more': 'Learn More',
    'common.contact_expert': 'Contact an Expert',
    'common.get_quote': 'Get Quote',
    'common.start_today': 'Start Today',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};