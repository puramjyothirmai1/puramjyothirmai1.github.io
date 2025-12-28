import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FolderGit2, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Multi-Domain Reinforcement Learning",
    description:
      "Implemented TD-Learning, SARSA, Q-Learning, and Actor-Critic algorithms for episodic tasks across benchmark environments like Inverted Pendulum, Cartpole, and GridWorld.",
    technologies: ["Python", "NumPy", "Pandas", "PyTorch", "Matplotlib"],
    link: "https://github.com/puramjyothirmai1/GraphiteLFIA",
  },
  {
    title: "Visual Grounding in Unseen Domain",
    description:
      "Fine-tuned pre-trained visual grounding models using LoRA in cluttered retail scenes. Reduced computational overhead by 15% and achieved up to 30% accuracy on unseen domains.",
    technologies: ["Python", "PyTorch", "LoRA", "TransVG", "Hugging Face"],
    link: "https://github.com/puramjyothirmai1",
  },
  {
    title: "Automation of Optimized Aggregation Queries using SeeDB",
    description:
      "Scripted a Python utility to implement the SeeDB algorithm for automated pruning-based optimization of aggregation queries in PostgreSQL. Visualized the top 5 aggregate views ranked by K-L divergence.",
    technologies: ["PostgreSQL", "Python", "pandas", "matplotlib"],
    link: "https://github.com/puramjyothirmai1/SeeDB",
  },
  {
    title: "Healthcare Management System",
    description:
      "Implemented a full-stack healthcare platform with secure EHR management, AI-driven recommendations, and HIPAA-compliant doctor-patient communication, including real-time reminders and role-based access.",
    technologies: ["React.js", "Next.js", "Spring Boot", "PostgreSQL", "Spring Security"],
    link: "https://github.com/puramjyothirmai1/HealthcareManagementSystem",
  },
  {
    title: "Biomart",
    description:
      "Built an end-to-end E-commerce web platform to connect farmers with suppliers, transporters, and buyers. Reduced middlemen by 40%, increased farmer profit margins by 25%, and supported 500+ product listings.",
    technologies: ["PHP", "JavaScript", "HTML", "CSS", "Node.js", "MySQL"],
    link: "https://github.com/puramjyothirmai1",
  },
  {
    title: "XSS Detection & Prevention System",
    description:
      "Built a system to simulate and detect Cross-Site Scripting (XSS) attacks in web apps, targeting JavaScript vulnerabilities. Implemented prevention mechanisms and security protocols to protect user data.",
    technologies: ["JavaScript", "HTML", "Web Security", "OWASP"],
    link: "https://github.com/puramjyothirmai1/Vulnerability-Testing-solution-XSS-Attack",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <FolderGit2 className="h-8 w-8 text-primary" />
          <h2 className="text-4xl font-bold">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button variant="ghost" size="sm" className="gap-2 w-fit" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  View on GitHub
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
