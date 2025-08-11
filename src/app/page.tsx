import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { Logo } from '@/components/logo';
import { CalendarDays, MapPin, Users } from 'lucide-react';
import { ProjectSummarizer } from '@/components/project-summarizer';
import { ContactForm } from '@/components/contact-form';

export default function Home() {
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

  const galleryImages = [
    { src: 'https://placehold.co/800x600.png', alt: 'Surveying in a mountainous region', hint: 'surveying landscape' },
    { src: 'https://placehold.co/800x600.png', alt: 'Team using a total station', hint: 'surveying equipment' },
    { src: 'https://placehold.co/800x600.png', alt: 'Drone survey in progress', hint: 'drone survey' },
    { src: 'https://placehold.co/800x600.png', alt: 'Digital terrain model visualization', hint: 'digital map' },
    { src: 'https://placehold.co/800x600.png', alt: 'Construction site layout staking', hint: 'construction site' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex items-center">
            <Logo className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold">TopoWeb</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 text-center">
          <div className="container">
            <h1 className="text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl">
              TopoWeb
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
              Precision Surveying for Modern Projects.
            </p>
          </div>
        </section>

        <section id="project-info" className="py-16 bg-card">
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
        </section>

        <section id="gallery" className="py-16">
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
        </section>
        
        <section id="ai-summarizer" className="py-16 bg-card">
          <div className="container">
            <ProjectSummarizer />
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container">
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="py-6 border-t">
        <div className="container text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TopoWeb. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
