import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    company: "Lemmata",
    role: "Data AI & ML Intern",
    period: "May 2025 – Aug 2025",
    description:
      "Developed end-to-end machine learning pipelines for ARR forecasting using TFT, Facebook Prophet, N-Beats, ARIMA, SSA, and deployed solutions on Google Cloud Platform and Qlik.",
    achievements: [
      "Achieved 80%+ prediction accuracy with automated feature engineering",
      "Integrated interactive dashboards and scalable analytics for business stakeholders"
    ],
    technologies: ["Python", "scikit-learn", "Prophet", "TensorFlow", "GCP", "Qlik", "Plotly"],
  },
  {
    company: "Graphite - UMass IESL LAB",
    role: "Graduate Student Researcher",
    period: "Jan 2025 – May 2025",
    description: "Implemented Multi-orchestrator outline generating model for long-form articles generation.",
    achievements: [
      "Conducted Zero-shot, Storm and Check-Eval based testing",
      "Enhanced quality of generated articles using advanced LLM techniques"
    ],
    technologies: ["Python", "PyTorch", "Transformers", "RAG", "LLM", "GPT"],
  },
  {
    company: "Kinaxis",
    role: "Software Engineer",
    period: "Jul 2023 – Jan 2024",
    location: "Bengaluru, India",
    description: "Enhanced the Demand AI forecasting pipeline to efficiently process 6B+ global retail sales records.",
    achievements: [
      "30% reduction in processing time with advanced C++ algorithms",
      "15% increase in forecast accuracy across three new regions"
    ],
    technologies: ["C++", "RESTful API", "G-test", "Supply Chain Algorithms", "Multithreading"],
  },
  {
    company: "Kinaxis",
    role: "Software Engineer Intern",
    period: "Jan 2023 – Jun 2023",
    location: "Bengaluru, India",
    description: "Integrated ARIMA-based forecasting modules and supply chain heuristics into existing pipeline.",
    achievements: [
      "Reduced forecast errors by 20%",
      "Accelerated strategic planning by 40% through comprehensive testing"
    ],
    technologies: ["C++", "Python", "ARIMA", "G-tests", "Tableau"],
  },
  {
    company: "Fiserv",
    role: "Software Intern",
    period: "Jun 2022 – Aug 2022",
    location: "Chennai, India",
    description: "Improved code quality and deployment stability across 10+ microservices.",
    achievements: [
      "Boosted validation accuracy to 80%",
      "Reduced critical code smells by 60%",
      "Halved bug resolution time"
    ],
    technologies: ["Java", "SonarQube", "Jenkins", "GitLab CI"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="h-8 w-8 text-primary" />
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <p className="text-lg text-primary">{exp.company}</p>
                  {exp.location && <p className="text-sm text-muted-foreground">{exp.location}</p>}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

              <ul className="space-y-2 mb-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
