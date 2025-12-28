import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
          </p>
        </div>

        <Card className="p-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Email
                </h3>
                <a
                  href="mailto:jpuram@umass.edu"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  jpuram@umass.edu
                </a>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Phone
                </h3>
                <a href="tel:+14134665227" className="text-muted-foreground hover:text-primary transition-colors">
                  (413) 466-5227
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Linkedin className="h-5 w-5 text-primary" />
                  LinkedIn
                </h3>
                <a
                  href="https://www.linkedin.com/in/jyothirmai-puram-b75b71201/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  linkedin.com/in/jyothirmai-puram-b75b71201
                </a>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Github className="h-5 w-5 text-primary" />
                  GitHub
                </h3>
                <a
                  href="https://github.com/puramjyothirmai1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  github.com/puramjyothirmai1
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="mailto:jpuram@umass.edu">Send me an email</a>
            </Button>
          </div>
        </Card>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
        </footer>
      </div>
    </section>
  )
}
