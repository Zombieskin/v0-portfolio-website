import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
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

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <div className="flex justify-center md:hidden">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-border">
            <Image
              src="/Resume Picture Enhanced.png"
              alt="Sumeet Haldankar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-4 text-center md:text-left">
            Sumeet Haldankar
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 text-center md:text-left">
            Senior Business Analyst & Product Owner
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed text-center md:text-left">
            Translating complex business needs into actionable product strategy across payments, cloud infrastructure, and enterprise transformation.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 mt-10">
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

        <div className="hidden md:block">
          <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-border">
            <Image
              src="/Resume Picture Enhanced.png"
              alt="Sumeet Haldankar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
