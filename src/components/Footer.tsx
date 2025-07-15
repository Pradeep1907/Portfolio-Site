import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Pradeep Singh</h3>
            <p className="text-background/80">
              Technical Support Engineer & Project Strategist
            </p>
          </div>
          
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 mb-4 md:mb-0">
              © 2024 Pradeep Singh. Made with <Heart className="inline w-4 h-4 text-red-500" /> and precision.
            </p>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-background hover:bg-background/10"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;