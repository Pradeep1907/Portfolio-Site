import { 
  Cpu, 
  Database, 
  Monitor, 
  Figma, 
  Shield, 
  TestTube, 
  Cloud, 
  Kanban,
  BookOpen,
  Settings,
  Terminal,
  Workflow
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Project Execution",
      icon: Kanban,
      skills: ["Agile", "JIRA", "Sprint Planning", "Team Coordination"],
      color: "bg-blue-500"
    },
    {
      title: "Tech Support",
      icon: Monitor,
      skills: ["Windows", "Linux", "Mac OS", "Remote Assistance"],
      color: "bg-green-500"
    },
    {
      title: "Database Management",
      icon: Database,
      skills: ["SQL Server", "Performance Tuning", "Security", "Backup & Recovery"],
      color: "bg-purple-500"
    },
    {
      title: "LMS (Moodle)",
      icon: BookOpen,
      skills: ["Setup", "Customization", "Support", "User Management"],
      color: "bg-orange-500"
    },
    {
      title: "UI/UX Tools",
      icon: Figma,
      skills: ["Figma", "Prototyping", "Design Systems", "User Research"],
      color: "bg-pink-500"
    },
    {
      title: "Server & Network",
      icon: Shield,
      skills: ["Fortinet", "Sophos", "VPN", "DNS Configuration"],
      color: "bg-red-500"
    },
    {
      title: "QA & Testing",
      icon: TestTube,
      skills: ["Web Testing", "Mobile Testing", "Bug Tracking", "Test Planning"],
      color: "bg-yellow-500"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Infrastructure", "Monitoring", "Deployment"],
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            My <span className="text-primary">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="card-hover group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-3">
                      {category.title}
                    </h3>
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="tech-badge inline-block mx-1"
                        >
                          {skill}
                        </span>
                      ))}
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

export default SkillsSection;