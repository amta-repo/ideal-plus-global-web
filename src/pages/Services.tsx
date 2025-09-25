import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Calculator, 
  BarChart3, 
  FileText, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Phone,
  MessageCircle
} from 'lucide-react';
import bookkeepingImage from '@/assets/service-bookkeeping.jpg';
import reportingImage from '@/assets/service-reporting.jpg';
import taxImage from '@/assets/service-tax.jpg';
import payrollImage from '@/assets/service-payroll.jpg';
import consultingImage from '@/assets/service-consulting.jpg';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'bookkeeping',
      icon: Calculator,
      title: t('services.bookkeeping.title'),
      description: t('services.bookkeeping.desc'),
      image: bookkeepingImage,
      features: [
        'Saisie comptable quotidienne',
        'Rapprochement bancaire',
        'Gestion des factures',
        'Suivi des créances et dettes',
        'Classement des pièces comptables',
      ],
      price: 'À partir de 50,000 FCFA/mois',
    },
    {
      id: 'reporting',
      icon: BarChart3,
      title: t('services.reporting.title'),
      description: t('services.reporting.desc'),
      image: reportingImage,
      features: [
        'Bilan comptable',
        'Compte de résultat',
        'Tableaux de bord financiers',
        'Analyse de rentabilité',
        'Reporting mensuel personnalisé',
      ],
      price: 'À partir de 75,000 FCFA/mois',
    },
    {
      id: 'tax',
      icon: FileText,
      title: t('services.tax.title'),
      description: t('services.tax.desc'),
      image: taxImage,
      features: [
        'Déclaration TVA',
        'Impôt sur les sociétés',
        'Taxes professionnelles',
        'Optimisation fiscale',
        'Représentation fiscale',
      ],
      price: 'À partir de 100,000 FCFA/an',
    },
    {
      id: 'payroll',
      icon: Users,
      title: t('services.payroll.title'),
      description: t('services.payroll.desc'),
      image: payrollImage,
      features: [
        'Calcul des salaires',
        'Bulletins de paie',
        'Déclarations sociales',
        'Gestion des congés',
        'Contrats de travail',
      ],
      price: 'À partir de 5,000 FCFA/employé',
    },
    {
      id: 'consulting',
      icon: TrendingUp,
      title: t('services.consulting.title'),
      description: t('services.consulting.desc'),
      image: consultingImage,
      features: [
        'Audit financier',
        'Conseil en gestion',
        'Plan de financement',
        'Étude de faisabilité',
        'Accompagnement création d\'entreprise',
      ],
      price: 'Sur devis personnalisé',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('services.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">{t('common.get_quote')}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+22901970355338">{t('contact.call')}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id}>
                <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-spring">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-hero/30"></div>
                      <div className="absolute top-6 left-6">
                        <div className="bg-accent rounded-lg p-3">
                          <service.icon className="w-8 h-8 text-accent-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-2xl md:text-3xl font-bold text-primary mb-4">
                          {service.title}
                        </CardTitle>
                        <p className="text-lg text-muted-foreground">
                          {service.description}
                        </p>
                      </CardHeader>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-3">
                            Services inclus :
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                                <span className="text-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div>
                            <span className="text-sm text-muted-foreground">Tarif</span>
                            <div className="text-lg font-semibold text-primary">
                              {service.price}
                            </div>
                          </div>
                          <div className="flex space-x-3">
                            <Button variant="outline" size="sm" asChild>
                              <Link to="/contact">{t('common.learn_more')}</Link>
                            </Button>
                            <Button variant="cta" size="sm" asChild>
                              <Link to="/contact">{t('common.contact_expert')}</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Notre processus en 4 étapes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un accompagnement structuré pour votre réussite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Consultation',
                description: 'Analyse de vos besoins et définition des objectifs',
              },
              {
                step: '2',
                title: 'Proposition',
                description: 'Présentation d\'une solution sur mesure avec devis',
              },
              {
                step: '3',
                title: 'Mise en œuvre',
                description: 'Démarrage des services avec formation si nécessaire',
              },
              {
                step: '4',
                title: 'Suivi',
                description: 'Accompagnement continu et optimisation des processus',
              },
            ].map((item, index) => (
              <Card key={index} className="text-center bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="bg-gradient-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'un service spécifique ?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Contactez-nous pour discuter de vos besoins et obtenir une solution personnalisée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">{t('common.get_quote')}</Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary flex items-center space-x-2" 
              asChild
            >
              <a href="https://wa.me/22901970355338" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;