import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.testimonials'), href: '/testimonials' },
    { name: t('nav.faq'), href: '/faq' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-lg">
                <span className="text-accent-foreground font-bold text-lg">I+</span>
              </div>
              <div>
                <span className="text-xl font-bold">Ideal Plus</span>
                <br />
                <span className="text-sm text-primary-foreground/80">Commerce et Conseils</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              {t('about.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-smooth"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-smooth"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <a
                  href="tel:+22901970355338"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  +229 01 97 03 55 38
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a
                  href="mailto:contact@idealplus-benin.com"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth"
                >
                  contact@idealplus-benin.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">
                  {t('contact.address')}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Ideal Plus Commerce et Conseils. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-primary-foreground/60 hover:text-accent text-sm transition-smooth"
              >
                Politique de confidentialité
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/60 hover:text-accent text-sm transition-smooth"
              >
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;