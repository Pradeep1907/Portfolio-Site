import { 
  Headphones, 
  Server, 
  Database, 
  BookOpen, 
  Figma, 
  TestTube, 
  Kanban,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Headphones,
      title: "Technical Support & Remote Assistance",
      description: "Comprehensive technical support across Windows, Linux, and Mac OS platforms with remote troubleshooting capabilities.",
      features: ["24/7 Support", "Multi-platform", "Remote Access", "Issue Resolution"]
    },
    {
      icon: Server,
      title: "Server Setup & Monitoring",
      description: "Complete server infrastructure setup, configuration, and continuous monitoring for optimal performance.",
      features: ["Infrastructure Setup", "Performance Monitoring", "Security Configuration", "Maintenance"]
    },
    {
      icon: Database,
      title: "SQL Database Management",
      description: "Expert SQL Server administration including performance tuning, security implementation, and backup strategies.",
      features: ["Performance Tuning", "Security Management", "Backup & Recovery", "Optimization"]
    },
    {
      icon: BookOpen,
      title: "Moodle LMS Deployment",
      description: "End-to-end Moodle LMS implementation from setup to customization and ongoing support.",
      features: ["LMS Setup", "Customization", "User Training", "Support & Maintenance"]
    },
    {
      icon: Figma,
      title: "UI/UX Design Support",
      description: "Professional UI/UX design services using Figma, from wireframing to final design implementation.",
      features: ["Prototyping", "Design Systems", "User Research", "Implementation Support"]
    },
    {
      icon: TestTube,
      title: "Web & Mobile App Testing",
      description: "Comprehensive testing services for web and mobile applications ensuring quality and reliability.",
      features: ["Functional Testing", "Performance Testing", "Bug Tracking", "Quality Assurance"]
    },
    {
      icon: Kanban,
      title: "Agile Project Management",
      description: "Expert project management using Agile methodologies, JIRA, and sprint planning for successful delivery.",
      features: ["Sprint Planning", "Team Coordination", "JIRA Management", "Delivery Optimization"]
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            My <span className="text-primary">Services</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="card-hover group h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <h3 className="font-semibold text-foreground mb-3 text-lg">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="inline-block bg-accent text-accent-foreground px-2 py-1 rounded text-xs mr-2 mb-1"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={scrollToContact}
                      className="mt-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;