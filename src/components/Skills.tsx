import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS",  "Vue.js", "HTML5/CSS3"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB","Firebase", "REST APIs", "GraphQL"],
  },
  {
    id: "tools",
    label: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My technical toolkit is constantly evolving. Here are the core technologies I work with to bring ideas to life.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 h-12">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-base">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-6 py-4 bg-background rounded-2xl shadow-sm border flex items-center justify-center min-w-[140px] hover:border-primary/50 transition-colors group"
                    >
                      <span className="font-semibold text-lg group-hover:text-primary transition-colors">{skill}</span>
                    </div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
