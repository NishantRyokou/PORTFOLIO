import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-2xl font-bold tracking-tighter">NISHANT</span>
            <p className="mt-2 text-sm text-muted-foreground">
              Building digital experiences that matter.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://github.com/NishantRyokou" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} Nishant. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
