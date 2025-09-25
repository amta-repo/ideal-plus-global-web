import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  CheckCircle, 
  Star,
  MapPin,
  Calendar,
  TrendingUp
} from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque service que nous offrons à nos clients.',
    },
    {
      icon: Users,
      title: 'Partenariat',
      description: 'Nous construisons des relations durables basées sur la confiance mutuelle.',
    },
    {
      icon: CheckCircle,
      title: 'Intégrité',
      description: 'Transparence et honnêteté dans tous nos engagements professionnels.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Nous adoptons les meilleures pratiques et technologies modernes.',
    },
  ];

  const achievements = [
    {
      number: '100+',
      label: 'Clients accompagnés',
      description: 'Entreprises de toutes tailles nous font confiance',
    },
    {
      number: '5+',
      label: 'Années d\'expérience',
      description: 'Expertise reconnue sur le marché béninois',
    },
    {
      number: '98%',
      label: 'Taux de satisfaction',
      description: 'Clients satisfaits de nos services',
    },
    {
      number: '24/7',
      label: 'Support disponible',
      description: 'Assistance continue pour vos urgences',
    },
  ];

  const services = [
    'Comptabilité générale et analytique',
    'Déclarations fiscales et sociales',
    'Audit et conseil financier',
    'Formation comptable',
    'Accompagnement création d\'entreprise',
    'Externalisation comptable complète',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {t('about.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t('about.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">Nous contacter</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">Nos services</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-card/80 backdrop-blur-sm shadow-elegant">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-accent" />
                      <span className="font-medium">Cotonou, Bénin</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-accent" />
                      <span className="font-medium">Fondée en 2019</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-accent" />
                      <span className="font-medium">Équipe d\'experts certifiés</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-accent" />
                      <span className="font-medium">100+ clients satisfaits</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="font-semibold text-primary mb-4">Nos domaines d\'expertise :</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          <span className="text-sm text-foreground">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="bg-gradient-hero text-primary-foreground shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold">Notre Mission</h2>
                </div>
                <p className="text-lg leading-relaxed text-primary-foreground/90">
                  {t('about.mission')} Nous nous engageons à fournir des solutions comptables 
                  innovantes et personnalisées qui permettent à nos clients de prospérer dans 
                  un environnement économique en constante évolution.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-trust text-trust-foreground shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold">Notre Vision</h2>
                </div>
                <p className="text-lg leading-relaxed text-trust-foreground/90">
                  Devenir le cabinet comptable de référence au Bénin en offrant des services 
                  d\'excellence qui contribuent au développement économique des entreprises 
                  locales et à leur succès sur les marchés régionaux et internationaux.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre approche professionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-card/80 backdrop-blur-sm hover:shadow-card transition-spring">
                <CardContent className="p-6">
                  <div className="bg-gradient-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos Réalisations
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Des chiffres qui témoignent de notre engagement et de notre expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold mb-2">
                  {achievement.label}
                </div>
                <p className="text-primary-foreground/70 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ce qui nous distingue des autres cabinets comptables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expertise Locale',
                description: 'Connaissance approfondie de la réglementation béninoise et des spécificités du marché local.',
                icon: MapPin,
              },
              {
                title: 'Technologie Moderne',
                description: 'Utilisation d\'outils comptables avancés pour une gestion efficace et sécurisée.',
                icon: TrendingUp,
              },
              {
                title: 'Accompagnement Personnalisé',
                description: 'Chaque client bénéficie d\'un suivi individualisé adapté à ses besoins spécifiques.',
                icon: Users,
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-card transition-spring">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
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
      <section className="bg-gradient-subtle py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Prêt à collaborer avec nous ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Découvrez comment notre expertise peut contribuer au succès de votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">Demander un rendez-vous</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/services">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;