import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, Star, Users, Award, Phone, MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero-accounting.jpg';
import bookkeepingImage from '@/assets/service-bookkeeping.jpg';
import reportingImage from '@/assets/service-reporting.jpg';
import taxImage from '@/assets/service-tax.jpg';

const Home = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.bookkeeping.title'),
      description: t('services.bookkeeping.desc'),
      image: bookkeepingImage,
      href: '/services#bookkeeping',
    },
    {
      title: t('services.reporting.title'),
      description: t('services.reporting.desc'),
      image: reportingImage,
      href: '/services#reporting',
    },
    {
      title: t('services.tax.title'),
      description: t('services.tax.desc'),
      image: taxImage,
      href: '/services#tax',
    },
  ];

  const stats = [
    { number: '100+', label: 'Clients satisfaits' },
    { number: '5+', label: 'Années d\'expérience' },
    { number: '24/7', label: 'Support client' },
    { number: '100%', label: 'Conformité fiscale' },
  ];

  const benefits = [
    'Expertise comptable certifiée',
    'Solutions sur mesure',
    'Respect des délais',
    'Tarifs transparents',
    'Support personnalisé',
    'Conformité garantie',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t('hero.subtitle')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="xl" asChild>
                  <Link to="/contact">{t('hero.cta.quote')}</Link>
                </Button>
                <Button variant="outline" size="xl" className="flex items-center space-x-2" asChild>
                  <a href="tel:+22901970355338">
                    <Phone className="w-5 h-5" />
                    <span>{t('hero.cta.call')}</span>
                  </a>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">5.0 (100+ avis)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-trust" />
                  <span className="text-sm text-muted-foreground">Certifié</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-hero rounded-2xl p-2 shadow-glow">
                <img
                  src={heroImage}
                  alt="Professional accounting services"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-accent/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-accent">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-card transition-spring bg-card">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-hero/20 rounded-lg group-hover:bg-gradient-accent/20 transition-smooth"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={service.href}>{t('common.learn_more')}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/services">Voir tous nos services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Pourquoi choisir Ideal Plus ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nous nous engageons à fournir des services comptables de haute qualité 
                adaptés aux besoins de votre entreprise.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="bg-card/80 backdrop-blur-sm shadow-elegant">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Consultation gratuite
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Discutons de vos besoins comptables et découvrez comment nous pouvons vous aider.
                    </p>
                    <div className="space-y-3">
                      <Button variant="cta" className="w-full" asChild>
                        <Link to="/contact">Prendre rendez-vous</Link>
                      </Button>
                      <Button variant="outline" className="w-full flex items-center space-x-2" asChild>
                        <a href="https://wa.me/22901970355338" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-4 h-4" />
                          <span>WhatsApp</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à simplifier votre comptabilité ?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Contactez-nous dès aujourd'hui pour une consultation personnalisée et découvrez 
            comment nous pouvons transformer votre gestion financière.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">{t('common.get_quote')}</Link>
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="tel:+22901970355338">(+229) 01 97 03 55 38</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;