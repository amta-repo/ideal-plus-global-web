import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, Phone, Mail, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      category: 'Services généraux',
      questions: [
        {
          question: 'Quels services comptables proposez-vous ?',
          answer: 'Nous offrons une gamme complète de services : tenue de comptabilité, déclarations fiscales, paie, audit, conseil financier, et accompagnement à la création d\'entreprise. Nos services sont adaptés aux besoins des PME et TPE.',
        },
        {
          question: 'Travaillez-vous avec tous les types d\'entreprises ?',
          answer: 'Oui, nous accompagnons les entreprises de toutes tailles et de tous secteurs : commerce, industrie, services, BTP, restauration, technologie, santé, etc. Chaque client bénéficie d\'un service personnalisé.',
        },
        {
          question: 'Vos services sont-ils conformes à la réglementation béninoise ?',
          answer: 'Absolument. Notre équipe maîtrise parfaitement la réglementation comptable et fiscale du Bénin. Nous garantissons la conformité de tous nos travaux avec les normes OHADA et les exigences locales.',
        },
      ],
    },
    {
      category: 'Tarifs et facturation',
      questions: [
        {
          question: 'Comment sont calculés vos tarifs ?',
          answer: 'Nos tarifs dépendent de plusieurs facteurs : taille de votre entreprise, volume de transactions, services demandés, et fréquence d\'intervention. Nous proposons des forfaits mensuels transparents sans frais cachés.',
        },
        {
          question: 'Proposez-vous des forfaits mensuels ?',
          answer: 'Oui, nous privilégions les forfaits mensuels qui permettent une meilleure prévisibilité budgétaire. Ces forfaits incluent la tenue de comptabilité, les déclarations courantes, et un suivi régulier.',
        },
        {
          question: 'Y a-t-il des frais supplémentaires ?',
          answer: 'Nos forfaits incluent la plupart des services courants. Des frais supplémentaires peuvent s\'appliquer pour des missions exceptionnelles comme les audits spéciaux ou l\'accompagnement dans des procédures complexes.',
        },
        {
          question: 'Peut-on avoir un devis gratuit ?',
          answer: 'Bien sûr ! Nous offrons une consultation gratuite pour évaluer vos besoins et vous proposer un devis personnalisé. Cette consultation nous permet de comprendre votre activité et vos objectifs.',
        },
      ],
    },
    {
      category: 'Processus et délais',
      questions: [
        {
          question: 'Quels sont vos délais de traitement ?',
          answer: 'Pour la tenue courante : traitement sous 48h. Pour les déclarations fiscales : 5-7 jours ouvrés avant les échéances. Pour les missions ponctuelles : délai convenu selon la complexité.',
        },
        {
          question: 'Comment se déroule la collaboration ?',
          answer: 'Après un audit initial, nous définissons ensemble un processus de travail. Vous nous transmettez vos documents (physiques ou numériques), nous traitons et vous retournons les éléments finalisés avec un reporting détaillé.',
        },
        {
          question: 'Que se passe-t-il en cas d\'urgence ?',
          answer: 'Nous avons un service d\'urgence pour nos clients. En cas de contrôle fiscal ou d\'échéance critique, nous mobilisons immédiatement nos ressources. Nos clients ont un numéro d\'urgence disponible 24/7.',
        },
        {
          question: 'Comment suivre l\'avancement de mes dossiers ?',
          answer: 'Chaque client a accès à un tableau de bord personnalisé où il peut suivre l\'état de ses dossiers. Nous envoyons également des notifications par email à chaque étape importante.',
        },
      ],
    },
    {
      category: 'Sécurité et confidentialité',
      questions: [
        {
          question: 'Comment protégez-vous nos données ?',
          answer: 'Nous utilisons des systèmes sécurisés avec chiffrement des données, sauvegardes automatiques, et accès restreints. Tous nos collaborateurs signent des clauses de confidentialité strictes.',
        },
        {
          question: 'Où sont stockées nos informations ?',
          answer: 'Vos données sont stockées sur des serveurs sécurisés avec double sauvegarde. Nous respectons la réglementation sur la protection des données et garantissons la confidentialité absolue.',
        },
        {
          question: 'Qui a accès à nos informations comptables ?',
          answer: 'Seuls les membres de l\'équipe assignés à votre dossier ont accès à vos informations. Chaque accès est tracé et audité. Nous ne partageons jamais vos données avec des tiers.',
        },
      ],
    },
    {
      category: 'Support et communication',
      questions: [
        {
          question: 'Comment vous contacter en cas de question ?',
          answer: 'Plusieurs moyens : téléphone, email, WhatsApp, ou rendez-vous en présentiel. Nous privilégions la réactivité avec un engagement de réponse sous 24h maximum pour toute question.',
        },
        {
          question: 'Proposez-vous des formations ?',
          answer: 'Oui, nous proposons des formations sur les outils comptables, la gestion financière, et les obligations fiscales. Ces formations peuvent être individuelles ou en groupe selon vos besoins.',
        },
        {
          question: 'Puis-je changer d\'interlocuteur si besoin ?',
          answer: 'Bien que nous privilégions la continuité avec un interlocuteur dédié, nous pouvons réassigner votre dossier si nécessaire. La transition se fait sans interruption de service.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-16 h-16 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('faq.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('faq.subtitle')}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <div className="bg-gradient-accent rounded-lg w-8 h-8 flex items-center justify-center mr-3">
                    <span className="text-accent-foreground font-bold">{categoryIndex + 1}</span>
                  </div>
                  {category.category}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`}
                      className="border border-border rounded-lg px-6 bg-card/50 hover:bg-card transition-smooth"
                    >
                      <AccordionTrigger className="text-left font-medium text-primary hover:text-accent transition-smooth py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Besoin d'aide immédiate ?
            </h2>
            <p className="text-muted-foreground">
              Notre équipe est là pour répondre à toutes vos questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-card transition-spring">
              <CardContent className="p-6">
                <div className="bg-gradient-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Appelez-nous
                </h3>
                <p className="text-muted-foreground mb-4">
                  Réponse immédiate à vos questions urgentes
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:+22901970355338">
                    (+229) 01 97 03 55 38
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-spring">
              <CardContent className="p-6">
                <div className="bg-gradient-trust rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-trust-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  WhatsApp
                </h3>
                <p className="text-muted-foreground mb-4">
                  Chat en temps réel avec nos experts
                </p>
                <Button variant="trust" className="w-full" asChild>
                  <a href="https://wa.me/22901970355338" target="_blank" rel="noopener noreferrer">
                    Démarrer le chat
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-spring">
              <CardContent className="p-6">
                <div className="bg-gradient-hero rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Email
                </h3>
                <p className="text-muted-foreground mb-4">
                  Envoyez-nous vos questions détaillées
                </p>
                <Button variant="default" className="w-full" asChild>
                  <a href="mailto:contact@idealplus-benin.com">
                    Envoyer un email
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Ressources utiles
            </h2>
            <p className="text-muted-foreground">
              Guides et informations pour mieux comprendre la comptabilité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Guide fiscal Bénin',
                description: 'Les principales obligations fiscales des entreprises',
                link: '#',
              },
              {
                title: 'Normes OHADA',
                description: 'Comprendre les normes comptables régionales',
                link: '#',
              },
              {
                title: 'Création d\'entreprise',
                description: 'Étapes et formalités de création au Bénin',
                link: '#',
              },
              {
                title: 'Glossaire comptable',
                description: 'Définitions des termes comptables courants',
                link: '#',
              },
            ].map((resource, index) => (
              <Card key={index} className="hover:shadow-card transition-spring">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Consulter
                  </Button>
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
            Vous ne trouvez pas votre réponse ?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Contactez-nous directement pour une réponse personnalisée à votre situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" 
              asChild
            >
              <Link to="/services">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;