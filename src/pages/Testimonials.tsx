import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Quote, Building2, User } from 'lucide-react';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Marie Adjovi',
      company: 'Boutique Mode & Style',
      position: 'Propriétaire',
      content: 'Ideal Plus a transformé la gestion comptable de ma boutique. Leur professionnalisme et leur réactivité sont exceptionnels. Je recommande vivement leurs services.',
      rating: 5,
      category: 'Commerce',
    },
    {
      name: 'Jean-Baptiste Kougblénou',
      company: 'KB Construction',
      position: 'Directeur Général',
      content: 'Grâce à leur expertise, nous avons optimisé notre gestion financière et respectons tous nos délais fiscaux. Une équipe compétente et digne de confiance.',
      rating: 5,
      category: 'BTP',
    },
    {
      name: 'Rachelle Hounsinou',
      company: 'Restaurant Le Palmier',
      position: 'Gérante',
      content: 'Service impeccable ! Ils ont simplifié toute notre comptabilité et nous conseillent régulièrement sur les meilleures pratiques. Très satisfaite.',
      rating: 5,
      category: 'Restauration',
    },
    {
      name: 'Prosper Agbodjan',
      company: 'Tech Solutions Bénin',
      position: 'Fondateur',
      content: 'En tant que startup, nous avions besoin d\'un accompagnement personnalisé. Ideal Plus nous a aidés depuis la création jusqu\'à notre développement actuel.',
      rating: 5,
      category: 'Technologie',
    },
    {
      name: 'Sylvie Dossou',
      company: 'Pharmacie Centrale',
      position: 'Directrice',
      content: 'Leur connaissance des spécificités du secteur pharmaceutique est remarquable. Ils nous font gagner un temps précieux sur la gestion administrative.',
      rating: 5,
      category: 'Santé',
    },
    {
      name: 'Désiré Tokpanou',
      company: 'Tokpa Transport',
      position: 'Gérant',
      content: 'Service de qualité à un prix très compétitif. L\'équipe est toujours disponible pour répondre à nos questions. Je les recommande sans hésitation.',
      rating: 5,
      category: 'Transport',
    },
  ];

  const stats = [
    {
      number: '98%',
      label: 'Taux de satisfaction',
      description: 'Clients satisfaits de nos services',
    },
    {
      number: '4.9/5',
      label: 'Note moyenne',
      description: 'Évaluation de nos clients',
    },
    {
      number: '100+',
      label: 'Clients actifs',
      description: 'Entreprises nous font confiance',
    },
    {
      number: '24h',
      label: 'Temps de réponse',
      description: 'Délai moyen de réponse',
    },
  ];

  const clientLogos = [
    'Boutique Mode & Style',
    'KB Construction',
    'Restaurant Le Palmier',
    'Tech Solutions Bénin',
    'Pharmacie Centrale',
    'Tokpa Transport',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('testimonials.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('testimonials.subtitle')}
          </p>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold text-primary">4.9/5</span>
            <span className="text-muted-foreground">(100+ avis)</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-accent">
                  {stat.number}
                </div>
                <div className="font-semibold">
                  {stat.label}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-card transition-spring bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-accent/20 absolute -top-2 -left-2" />
                    <p className="text-foreground italic leading-relaxed pl-4">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-start space-x-3">
                    <div className="bg-gradient-accent rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-primary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <Building2 className="w-3 h-3 text-accent" />
                        <span className="text-xs text-muted-foreground">
                          {testimonial.company}
                        </span>
                      </div>
                      <div className="inline-block bg-accent/10 text-accent text-xs px-2 py-1 rounded-full mt-2">
                        {testimonial.category}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-muted-foreground">
              Plus de 100 entreprises de tous secteurs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((logo, index) => (
              <Card key={index} className="bg-card/50 hover:bg-card transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-hero rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-sm font-medium text-primary text-center leading-tight">
                    {logo}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Histoires de Réussite
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comment nous avons aidé nos clients à atteindre leurs objectifs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-hero text-primary-foreground shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">KB Construction</h3>
                    <p className="text-primary-foreground/80">Secteur BTP</p>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-4">
                  Optimisation fiscale et croissance
                </h4>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Grâce à notre accompagnement, KB Construction a réduit ses charges fiscales 
                  de 15% tout en améliorant sa conformité réglementaire. L'entreprise a pu 
                  réinvestir ces économies dans de nouveaux équipements, générant une 
                  croissance de 30% de son chiffre d'affaires.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-trust text-trust-foreground shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Tech Solutions Bénin</h3>
                    <p className="text-trust-foreground/80">Secteur Technologie</p>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-4">
                  Accompagnement startup vers la réussite
                </h4>
                <p className="text-trust-foreground/90 leading-relaxed">
                  Dès la création de leur startup, nous avons accompagné Tech Solutions Bénin 
                  dans la mise en place de processus comptables robustes. Aujourd'hui, 
                  l'entreprise emploie 25 personnes et a levé 500 millions FCFA pour 
                  son expansion régionale.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Découvrez comment nous pouvons contribuer au succès de votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">Demander un devis</Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" 
              asChild
            >
              <a href="tel:+22901970355338">Appelez-nous</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;