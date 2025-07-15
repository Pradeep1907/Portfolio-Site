import { ExternalLink, Github, Code, Database, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const projects = [
    {
      title: "Gym Management System",
      description: "Comprehensive gym management solution with member tracking, subscription management, and automated billing system.",
      technologies: ["SQL Server", "C#", ".NET", "Windows Forms"],
      features: [
        "Member Registration & Management",
        "Subscription & Payment Tracking",
        "Equipment & Inventory Management",
        "Automated Billing System",
        "Reports & Analytics"
      ],
      icon: Code,
      category: "Management System"
    },
    {
      title: "Library Management System",
      description: "Digital library management platform with book cataloging, member management, and automated issue/return tracking.",
      technologies: ["SQL Server", "ASP.NET", "C#", "HTML/CSS"],
      features: [
        "Book Catalog Management",
        "Member Registration",
        "Issue & Return Tracking",
        "Fine Calculation",
        "Search & Filter System"
      ],
      icon: BookOpen,
      category: "Management System"
    },
    {
      title: "Moodle LMS Implementation",
      description: "Complete Moodle LMS setup and customization for educational institutions with custom themes and plugins.",
      technologies: ["Moodle", "PHP", "MySQL", "Apache", "Linux"],
      features: [
        "Custom Theme Development",
        "Plugin Integration",
        "User Role Management",
        "Course Structure Setup",
        "Assessment Configuration"
      ],
      icon: Database,
      category: "LMS Implementation"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            My <span className="text-primary">Portfolio</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="card-hover group h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-foreground mb-3 text-xl">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-foreground mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6 flex-grow">
                      <h4 className="font-medium text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="tech-badge text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => {
                          const element = document.querySelector('#contact');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Learn More
                      </Button>
                    </div>
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

export default PortfolioSection;