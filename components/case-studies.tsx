import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const caseStudies = [
  {
    slug: "siemens-energy-cloud",
    image: "/siemens-cloud.png",
    title: "Siemens Energy - On Prem to AWS Cloud Migration | SDLC Toolchain",
    description:
      "Orchestrated stakeholder alignment for enterprise cloud transformation across 40+ business units globally. Consolidation into a single instance infrastructure from On-Prem to AWS Cloud (GitLab, SonarQube, Artifactory). Net savings of €141K result of unification and resource efforts.",
    tags: ["Cloud", "Enterprise", "Stakeholder Mgmt"],
    year: "2025 - 2026",
  },
  {
    slug: "service-now-itsm",
    image: "/siemens-servicenow.png",
    title: "Siemens Energy - JIRA to Service Now ITSM Centralisation | JIRA sunset",
    description:
      "Migration of 12,000 Jira projects to ServiceNow ITSM. Governed the transformation of 6 million records with a 99.5%+ migration accuracy target. Post-migration outcomes include a 47% improvement in SLA compliance and a 94% reduction in duplicate incidents.",
    tags: ["JIRA", "Enterprise", "Service Now"],
    year: "2024 - 2025",
  },
  {
    slug: "itau-superapp-payments",
    image: "/itau-superapp.png",
    title: "Itau Unibanco - SuperApp Unified Payments and Deposits | Digital Banking",
    description:
      "Led requirements for a unified payments experience serving 50M+ users. Defined functional specifications and API requirements for Pix Credit instant payment platform. Contributed to a programme delivering 45+ digital banking products in a single year.",
    tags: ["Digital Banking", "Payments", "Mobile", "Agile"],
    year: "2021 - 2024",
  },
  {
    slug: "energy-australia-mdms",
    image: "/energy-mdms.png",
    title: "Energy Australia - Meter Data Management System 2.0 | Utility",
    description:
      "Supported billing platform and meter data management uplift by improving the flow of validated meter data. Reduced manual exception handling to approximately 30% through improved validation checkpoints.",
    tags: ["Platform Upgrade", "Utility", "Enhancement"],
    year: "2016 - 2021",
  },
  {
    slug: "optus-crm-migration",
    image: "/optus-crm.png",
    title: "Optus - Siebel Oracle to Salesforce CRM Migration | Telecom",
    description:
      "Led migration of 2.5M+ customer records. Achieved 35% reduction in billing query resolution time through Salesforce Unified 360 view.",
    tags: ["CRM Upgrade", "Telecom", "Enhancement"],
    year: "2014 - 2016",
  },
  {
    slug: "energy-australia-billing",
    image: "/energy-billing.jpg",
    title: "Energy Australia - CIS Plus to C1 Billing Platform Upgrade | Utility",
    description:
      "Worked with billing operations and compliance stakeholders to identify delayed bill scenarios and smart meter billing gaps. Achieved a reduction in 90+ and 270+ days overdue billing by approximately 54%.",
    tags: ["Platform Upgrade", "Utility", "Enhancement"],
    year: "2010 - 2014",
  },
]

export function CaseStudies() {
  return (
    <section id="work" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-2">
          Projects Delivered
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Enterprise transformations where I drove discovery, requirements, and delivery.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-study/${study.slug}`}
              className="group block bg-card border border-border rounded-lg hover:border-accent transition-colors overflow-hidden"
            >
              {/* Square image at top */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Card content below image */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs text-muted-foreground">{study.year}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-base font-medium text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}