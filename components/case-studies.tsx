import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const caseStudies = [
  {
    slug: "itau-superapp-payments",
    title: "Itau Unibanco - SuperApp: Unified Payments and Deposits | Digital Banking",
    description: "Led requirements for a unified payments experience serving 50M+ users across Brazil&apos;s largest banking ecosystem. Defined functional specifications and API requirements for Pix Credit -  instant payment platform. Led UAT coordination across 6 product squads during the migration of 8 million customers to Itau unified SuperApp. Outcome : Contributed to a programme delivering 45+ digital banking products in a single year, driving 14% growth in card purchase volume. Orchestrated go-live across 8 markets over 3 years and the transformation delivered approximately $42M in annual operational savings",
    tags: ["Payments", "Mobile", "Agile"],
    year: "2021 - 2024",
  },
  {
    slug: "siemens-energy-cloud",
    title: "Siemens Energy - On Premm to AWS Cloud Migration | SDLC Toolchain",
    description: "Orchestrated stakeholder alignment for enterprise cloud transformation across 40+ business units globally. Consolidation into a single instance infrastructure from On-Prem to AWS Cloud (GitLab, SonarQube, Artifactory. Migration outcomes include enhanced scalability, cost-effectiveness, and a unified team managing infrastructure concerns. Net savings of €141K result of unification and resource efforts",
    tags: ["Cloud", "Enterprise", "Stakeholder Mgmt"],
    year: "2025 - 2026",
  },
  {
    slug: "Billing Platform Upgrade",
    title: "Energy Australia - Meter Data Management System 2.0 | Utility",
    description: "•	Supported billing platform and meter data management uplift by improving the flow of validated meter data.Strengthened meter data quality and exception handling by defining validation checkpoints for missing, late, duplicate and inconsistent reads. •	Improved billing reliability and operational control by reducing manual exception handling to ~30%"
 ",
    tags: ["CRM", "Telco", "Process Design"],
    year: "2021",
  },
]

export function CaseStudies() {
  return (
    <section id="work" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-2">
          Selected Work
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Enterprise transformations where I drove discovery, requirements, and delivery.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-study/${study.slug}`}
              className="group block p-6 bg-card border border-border rounded-lg hover:border-accent transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs text-muted-foreground">{study.year}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-accent transition-colors">
                {study.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {study.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
