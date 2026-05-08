import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

const coreCompetencies = [
  {
    category: "Technical Awareness",
    skills: "ServiceNow ITSM, ITOM, Salesforce CRM, Atlassian JIRA, Confluence",
  },
  {
    category: "Business Analysis",
    skills: "Requirements Elicitation, Gap Analysis, Process Mapping (BPMN), UAT Planning, User Story, Requirements Traceability",
  },
  {
    category: "Agile & Delivery",
    skills: "SAFe 6.0, SDLC, Scrum, Kanban, PI Planning, Sprint Facilitation, Backlog Refinement, Agile Ceremonies, Release Planning",
  },
  {
    category: "Tooling",
    skills: "Jira, Confluence, ServiceNow, Azure DevOps, Siemens Polarion, Miro, SQL",
  },
  {
    category: "Integration & API",
    skills: "REST APIs, Postman, OIDC/SAML (IAM)",
  },
  {
    category: "Cloud & Infrastructure",
    skills: "AWS (EC2, ECS, S3, CloudWatch, API Gateway), Azure, Docker, EKS, OpenShift",
  },
  {
    category: "Cybersecurity",
    skills: "CIA, Risk Treatment Plan, BIA, ISO 27001, RBAC, Vulnerability Management, GDPR",
  },
  {
    category: "Automation & AI",
    skills: "UiPath, Power Apps, Power Automate, GitHub Copilot, OpenAI, Google Gemini",
  },
  {
    category: "Design & Prototyping",
    skills: "Figma, Balsamiq",
  },
  {
    category: "Analytics & Observability",
    skills: "Power BI, Grafana, Datadog, Splunk",
  },
  {
    category: "Certifications",
    skills: "SAFe 6.0 POPM, AWS CCP, Scrum Fundamentals Certified, Microsoft Azure AI-900",
  },
  {
    category: "Leadership & Mentoring",
    skills: "BA Chapter Lead, Mentoring Junior BAs, Stakeholder Engagement, Backlog Governance",
  },
]

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <nav className="flex items-center justify-center md:justify-start gap-6 mb-16 text-sm text-muted-foreground">
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

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
        {/* Mobile: Centered square photo */}
        <div className="flex justify-center md:hidden">
          <div className="relative w-48 h-48 overflow-hidden rounded-lg border-2 border-border">
            <Image
              src="/Resume Picture Enhanced.png"
              alt="Sumeet Haldankar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Left column: Name, title, tagline, links */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-4 text-center md:text-left">
            Sumeet Haldankar
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 text-center md:text-left">
            Senior Business Analyst & Product Owner
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-center md:text-left mb-8">
            Translating complex business needs into actionable product strategy across payments, cloud infrastructure, and enterprise transformation.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 mb-10">
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

          {/* Core Competencies */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-foreground text-center md:text-left">Core Competencies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coreCompetencies.map((item) => (
                <div key={item.category} className="bg-secondary/50 rounded-lg p-3 border border-border">
                  <p className="text-sm font-medium text-accent mb-1">{item.category}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.skills}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Square photo on the right */}
        <div className="hidden md:flex md:items-start md:justify-end">
          <div className="relative w-56 h-56 lg:w-64 lg:h-64 overflow-hidden rounded-lg border-2 border-border">
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
