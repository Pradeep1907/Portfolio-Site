import { GraduationCap, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const education = [
    {
      degree: "Diploma in Engineering",
      institution: "S.S.S.S.S. Ram Singh Bisht Govt Polytechnic",
      year: "2019",
      type: "Diploma"
    },
    {
      degree: "Higher Secondary (XII)",
      institution: "Hindi Medium Board",
      year: "2016",
      type: "Higher Secondary"
    },
    {
      degree: "Secondary (X)",
      institution: "Hindi Medium Board", 
      year: "2014",
      type: "Secondary"
    }
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            About <span className="text-primary">Me</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                My Story
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm Pradeep Singh, a dedicated Technical Support Engineer with over 6 years 
                  of experience in managing projects across SQL Server, Moodle LMS, server 
                  monitoring, UI/UX design, and client engagement.
                </p>
                <p>
                  Throughout my career, I've specialized in delivering seamless IT experiences 
                  through precise project execution, comprehensive technical support, and 
                  strategic problem-solving. My expertise spans from database administration 
                  to LMS implementation, always with a focus on user experience and operational excellence.
                </p>
                <p>
                  I believe in continuous learning and staying updated with the latest 
                  technologies to provide innovative solutions that drive business success. 
                  My approach combines technical proficiency with strong communication skills 
                  to bridge the gap between complex technical concepts and practical business needs.
                </p>
              </div>
            </div>

            {/* Education Timeline */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                            <GraduationCap className="w-6 h-6 text-primary-foreground" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-foreground mb-1">
                            {edu.degree}
                          </h4>
                          <p className="text-muted-foreground mb-2">
                            {edu.institution}
                          </p>
                          <div className="flex items-center text-sm text-primary">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.year}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;