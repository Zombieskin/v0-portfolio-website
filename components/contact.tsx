import Link from "next/link"
import { Linkedin, Mail, ArrowUpRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-2">
          Get in Touch
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl">
          Let&apos;s make something amazing together? I&apos;m always open to discussing new opportunities.	
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            href="https://www.linkedin.com/in/sumeet-haldankar/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-lg hover:border-accent transition-colors"
          >
            <Linkedin className="w-5 h-5 text-foreground" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">LinkedIn</p>
              <p className="text-xs text-muted-foreground">Connect with me</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
          </Link>

          <Link
            href="mailto:sumeet.haldankar1989@gmail.com"
            className="group flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-lg hover:border-accent transition-colors"
          >
            <Mail className="w-5 h-5 text-foreground" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Email</p>
              <p className="text-xs text-muted-foreground">sumeet.haldankar1989@gmail.com</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
          </Link>
        </div>

        <div className="mt-20 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Sumeet Haldankar. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
