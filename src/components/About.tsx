import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Terminal, Zap } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description: "Building responsive, high-performance user interfaces with React, Next.js, and Tailwind CSS.",
    icon: Code2,
  },
  {
    title: "Backend Solutions",
    description: "Designing scalable server-side architectures and APIs using Node.js, Express, and PostgreSQL.",
    icon: Terminal,
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually stunning user experiences with a focus on usability and accessibility.",
    icon: Palette,
  },
  {
    title: "Performance Optimization",
    description: "Ensuring lightning-fast load times and smooth interactions for the best possible user experience.",
    icon: Zap,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative max-w-md mx-auto lg:max-w-none"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-muted relative z-10 border-4 border-background shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt="Nishant" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 blur-3xl rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 blur-3xl rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a dedicated Full Stack Developer with a passion for creating seamless digital experiences. With a background in both engineering and design, I bridge the gap between complex backend logic and intuitive frontend interfaces.
            </p>
            <div className="space-y-6 mb-10">
              <div>
                <h3 className="text-xl font-semibold mb-2">Career Goals</h3>
                <p className="text-muted-foreground leading-relaxed">
                  My goal is to build scalable, high-impact applications that solve real-world problems. I am particularly driven by the challenge of optimizing performance and accessibility.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What Drives Me</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am fueled by continuous learning and the rapid evolution of web technologies. The ability to turn a concept into a functional, beautiful product is what keeps me inspired every single day.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="border-none shadow-sm bg-background">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
