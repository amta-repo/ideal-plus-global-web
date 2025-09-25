import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.testimonials'), href: '/testimonials' },
    { name: t('nav.faq'), href: '/faq' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-hero rounded-lg">
              <span className="text-primary-foreground font-bold text-lg">I+</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-primary">Ideal Plus</span>
              <br />
              <span className="text-sm text-muted-foreground">Commerce et Conseils</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-smooth rounded-md ${
                  location.pathname === item.href
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              className="flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-medium">{language.toUpperCase()}</span>
            </Button>
            <Button variant="cta" size="sm" asChild>
              <Link to="/contact">{t('hero.cta.quote')}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              className="flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs">{language.toUpperCase()}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-secondary/50 rounded-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-smooth ${
                    location.pathname === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button variant="cta" size="sm" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    {t('hero.cta.quote')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;