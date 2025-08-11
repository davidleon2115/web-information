'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Logo } from '@/components/logo';
import { CalendarDays, MapPin, Users, Menu, Flag, Target } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeInOut' },
};

const MotionCard = motion(Card);

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#project-info', label: 'Project Info' },
    { href: '#team', label: 'Team' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#mission-vision', label: 'Misión y Visión' },
    { href: '#contact', label: 'Contact' },
  ];

  const projectInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Location',
      value: 'Andes Mountains, Peru',
    },
    {
      icon: <CalendarDays className="h-6 w-6 text-primary" />,
      title: 'Dates',
      value: 'June 2024 - August 2024',
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Personnel',
      value: '5-Person Survey Team',
    },
  ];

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Lead Surveyor',
      image: 'https://placehold.co/400x400.png',
      hint: 'person portrait',
    },
    {
      name: 'Jane Smith',
      role: 'GIS Specialist',
      image: 'https://placehold.co/400x400.png',
      hint: 'person portrait',
    },
    {
      name: 'Sam Wilson',
      role: 'Drone Pilot',
      image: 'https://placehold.co/400x400.png',
      hint: 'person portrait',
    },
  ];

  const galleryImages = [
    { src: 'https://placehold.co/800x600.png', alt: 'Surveying in a mountainous region', hint: 'surveying landscape' },
    { src: 'https://placehold.co/800x600.png', alt: 'Team using a total station', hint: 'surveying equipment' },
    { src: 'https://placehold.co/800x600.png', alt: 'Drone survey in progress', hint: 'drone survey' },
    { src: 'https://placehold.co/800x600.png', alt: 'Digital terrain model visualization', hint: 'digital map' },
    { src: 'https://placehold.co/800x600.png', alt: 'Construction site layout staking', hint: 'construction site' },
  ];
  
  const closeMenu = () => setMenuOpen(false);


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Logo className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold">TopoWeb</span>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
               <motion.a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                    <a key={link.href} href={link.href} onClick={closeMenu} className="text-lg font-medium text-muted-foreground hover:text-primary">
                        {link.label}
                    </a>
                ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <motion.section
          className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Ultra modern buildings"
            layout="fill"
            objectFit="cover"
            className="z-0"
            data-ai-hint="modern buildings"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="container z-20">
            <motion.h1
              className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              TopoWeb
            </motion.h1>
            <motion.p
              className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Precision Surveying for Modern Projects.
            </motion.p>
          </div>
        </motion.section>

        <motion.section id="project-info" className="py-16 bg-card" variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-10">Project Information</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {projectInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="team" className="py-16" variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-10">Our Team</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {teamMembers.map((member, index) => (
                <MotionCard 
                  key={index} 
                  className="overflow-hidden text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <CardContent className="p-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="aspect-square w-full object-cover"
                      data-ai-hint={member.hint}
                    />
                  </CardContent>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <p className="text-primary">{member.role}</p>
                  </CardHeader>
                </MotionCard>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="gallery" className="py-16 bg-card" variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-10">Image Gallery</h2>
            <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={800}
                          height={600}
                          className="aspect-[4/3] w-full object-cover"
                          data-ai-hint={image.hint}
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </motion.section>
        
        <motion.section id="mission-vision" className="py-16" variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-10">Misión y Visión</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <MotionCard
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <CardHeader>
                  <div className="flex flex-col items-center gap-2">
                    <Flag className="w-8 h-8 text-primary" />
                    <CardTitle>Nuestra Misión</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Proporcionar servicios de topografía de la más alta precisión y confiabilidad, utilizando tecnología de punta y un equipo de profesionales altamente calificados para garantizar el éxito de los proyectos de nuestros clientes.
                  </p>
                </CardContent>
              </MotionCard>
              <MotionCard
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <CardHeader>
                   <div className="flex flex-col items-center gap-2">
                    <Target className="w-8 h-8 text-primary" />
                    <CardTitle>Nuestra Visión</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ser la empresa líder en soluciones topográficas innovadoras, reconocida por nuestra excelencia, integridad y compromiso con el desarrollo sostenible, transformando el paisaje de la ingeniería y la construcción.
                  </p>
                </CardContent>
              </MotionCard>
            </div>
          </div>
        </motion.section>

        <motion.section id="contact" className="py-16 bg-card" variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <div className="container">
            <ContactForm />
          </div>
        </motion.section>
      </main>

      <footer className="py-6 border-t">
        <div className="container text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TopoWeb. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}