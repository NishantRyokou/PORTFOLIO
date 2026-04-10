import { motion } from "motion/react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, GitFork, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/NishantRyokou/repos?sort=updated&per_page=10")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const filteredRepos = data.filter((repo) => !repo.fork).slice(0, 6);
          setRepos(filteredRepos);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work directly from GitHub.
            </p>
          </motion.div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border shadow-sm hover:shadow-md transition-shadow group h-full flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Github className="h-6 w-6" />
                      </div>
                      <div className="flex gap-3 text-muted-foreground text-sm">
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4" /> {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="h-4 w-4" /> {repo.forks_count}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-xl capitalize leading-tight">
                      {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                      {repo.description || "No description provided for this repository."}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {repo.topics && repo.topics.length > 0 ? (
                        repo.topics.slice(0, 3).map((topic) => (
                          <Badge key={topic} variant="secondary" className="font-medium">
                            {topic}
                          </Badge>
                        ))
                      ) : repo.language ? (
                        <Badge variant="secondary" className="font-medium">
                          {repo.language}
                        </Badge>
                      ) : null}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-4 border-t pt-6 bg-muted/10">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {repo.homepage && (
                      <Button size="sm" className="flex-1" asChild>
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
        
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
            <a href="https://github.com/NishantRyokou" target="_blank" rel="noopener noreferrer">
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
