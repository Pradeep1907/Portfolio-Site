import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import pradeepProfile from '@/assets/pradeep-profile.jpg';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient">Pradeep Singh</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
              Technical Support Engineer & Project Strategist
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Delivering seamless IT experiences with precision and purpose. 
              Over 6 years of expertise in project management, technical support, 
              and database administration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollToSection('#portfolio')}
                className="font-semibold"
              >
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-semibold"
                onClick={() => scrollToSection('#contact')}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src={pradeepProfile}
                  alt="Pradeep Singh - Technical Support Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;