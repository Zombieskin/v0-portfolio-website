import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <nav className="flex items-center gap-6 mb-16 text-sm text-muted-foreground">
          <Link href="#competencies" className="hover:text-foreground transition-colors">
            Competencies
          </Link>
          <Link href="#work" className="hover:text-foreground transition-colors">
            Work
          </Link>
          <Link href="#approach" className="hover:text-foreground transition-colors">
            Approach
          </Link>
          <Link href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-4">
          Sumeet Haldankar
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6">
          Senior Business Analyst & Product Owner
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Translating complex business needs into actionable product strategy across payments, cloud infrastructure, and enterprise transformation.
        </p>

        <div className="flex items-center gap-4 mt-10">
          <Link
            href="https://www.linkedin.com/in/sumeet-haldankar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </Link>
          <Link
            href="mailto:sumeet.haldankar1989@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">Email</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
