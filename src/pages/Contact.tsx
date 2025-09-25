import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  Building2,
  User,
  Calendar
} from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const services = [
    'Tenue de comptabilité',
    'Déclarations fiscales',
    'Gestion de paie',
    'Audit comptable',
    'Conseil financier',
    'Formation comptable',
    'Autre (préciser dans le message)',
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+229 01 97 03 55 38',
      action: 'tel:+22901970355338',
      color: 'text-accent',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+229 01 97 03 55 38',
      action: 'https://wa.me/22901970355338',
      color: 'text-trust',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@idealplus-benin.com',
      action: 'mailto:contact@idealplus-benin.com',
      color: 'text-primary',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Cotonou, Bénin',
      action: '#',
      color: 'text-success',
    },
  ];

  const businessHours = [
    { day: 'Lundi - Vendredi', hours: '8h00 - 18h00' },
    { day: 'Samedi', hours: '9h00 - 14h00' },
    { day: 'Dimanche', hours: 'Fermé' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary flex items-center">
                    <Send className="w-6 h-6 mr-3 text-accent" />
                    Envoyez-nous un message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-primary font-medium">
                          {t('contact.form.name')} *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Votre nom complet"
                          required
                          className="transition-smooth focus:ring-accent"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-primary font-medium">
                          {t('contact.form.email')} *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="votre@email.com"
                          required
                          className="transition-smooth focus:ring-accent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-primary font-medium">
                          {t('contact.form.phone')}
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+229 XX XX XX XX"
                          className="transition-smooth focus:ring-accent"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-primary font-medium">
                          {t('contact.form.company')}
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Nom de votre entreprise"
                          className="transition-smooth focus:ring-accent"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-primary font-medium">
                        {t('contact.form.service')}
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="transition-smooth focus:ring-accent">
                          <SelectValue placeholder="Sélectionnez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-primary font-medium">
                        {t('contact.form.message')} *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Décrivez vos besoins ou posez votre question..."
                        rows={5}
                        required
                        className="transition-smooth focus:ring-accent"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="lg" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-foreground mr-2"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          {t('contact.form.submit')}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <Card className="bg-gradient-subtle shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    Nos coordonnées
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : undefined}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-card transition-smooth group"
                    >
                      <div className={`p-2 rounded-lg bg-background/50 ${info.color} group-hover:scale-110 transition-spring`}>
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium text-primary">{info.title}</div>
                        <div className="text-sm text-muted-foreground">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-accent" />
                    Horaires d'ouverture
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium text-primary">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-primary text-primary-foreground shadow-glow">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-4">Besoin d'aide immédiate ?</h3>
                  <div className="space-y-3">
                    <Button variant="accent" className="w-full" asChild>
                      <a href="tel:+22901970355338">
                        <Phone className="w-4 h-4 mr-2" />
                        Appeler maintenant
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" 
                      asChild
                    >
                      <a href="https://wa.me/22901970355338" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-primary-foreground/80 mt-4">
                    Réponse garantie sous 24h
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Pourquoi nous faire confiance ?
            </h2>
            <p className="text-muted-foreground">
              Ce qui nous distingue dans l'accompagnement de nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: 'Expertise Reconnue',
                description: 'Plus de 5 ans d\'expérience dans la comptabilité et la fiscalité béninoise.',
              },
              {
                icon: User,
                title: 'Service Personnalisé',
                description: 'Un interlocuteur dédié qui comprend les spécificités de votre secteur.',
              },
              {
                icon: Clock,
                title: 'Réactivité Garantie',
                description: 'Réponse sous 24h et respect strict des délais convenus.',
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-spring">
                <CardContent className="p-6">
                  <div className="bg-gradient-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {t('contact.office')}
            </h2>
            <p className="text-muted-foreground">
              Venez nous rendre visite dans nos locaux à Cotonou
            </p>
          </div>

          <Card className="overflow-hidden shadow-elegant">
            <div className="bg-gradient-hero text-primary-foreground p-8 text-center">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Ideal Plus Commerce et Conseils</h3>
              <p className="text-primary-foreground/80">
                {t('contact.address')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Button variant="accent" asChild>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-4 h-4 mr-2" />
                    Voir sur Google Maps
                  </a>
                </Button>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="tel:+22901970355338">
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler pour directions
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Calendar className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Planifions votre consultation gratuite
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            30 minutes pour analyser vos besoins et vous proposer les meilleures solutions comptables.
          </p>
          <Button variant="accent" size="xl">
            Réserver ma consultation gratuite
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;