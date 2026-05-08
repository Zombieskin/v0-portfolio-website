import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

const caseStudies = {
  "itau-superapp-payments": {
    title: "Itaú SuperApp Payments",
    subtitle: "Unified payments experience for Brazil&apos;s largest banking ecosystem",
    year: "2023",
    duration: "18 months",
    role: "Senior Business Analyst & Product Owner",
    client: "Itaú Unibanco",
    overview:
      "Led the requirements engineering and product ownership for a next-generation payments module within Itaú's SuperApp, serving over 50 million users. The initiative consolidated multiple payment flows into a seamless, unified experience.",
    challenge:
      "The existing payments infrastructure consisted of siloed systems built over two decades, resulting in inconsistent user experiences and high maintenance overhead. Regulatory changes in Brazil's PIX instant payments system added urgency to modernise.",
    approach: [
      "Conducted stakeholder mapping across 12 business units to align on vision and priorities",
      "Facilitated discovery workshops to document 200+ user stories and edge cases",
      "Created detailed process models using BPMN to visualise current and future states",
      "Established governance framework for regulatory compliance (BACEN, LGPD)",
      "Led sprint ceremonies for a cross-functional team of 40+ engineers",
    ],
    outcomes: [
      "Reduced payment completion time by 60%",
      "Achieved 99.9% uptime for PIX transactions",
      "Consolidated 5 legacy systems into unified platform",
      "Enabled $2B+ monthly transaction volume",
    ],
    tools: ["Jira", "Confluence", "Miro", "BPMN", "Figma", "SQL"],
  },
  "siemens-energy-cloud": {
    title: "Siemens Energy Cloud Migration",
    subtitle: "Enterprise cloud transformation across global business units",
    year: "2022",
    duration: "24 months",
    role: "Lead Business Analyst",
    client: "Siemens Energy",
    overview:
      "Orchestrated stakeholder alignment and requirements definition for a multi-cloud migration strategy affecting 40+ business units across Europe, Americas, and APAC regions.",
    challenge:
      "The organisation operated disparate on-premise infrastructure across multiple regions, creating security vulnerabilities, compliance gaps, and operational inefficiencies. Each business unit had unique requirements and varying levels of cloud readiness.",
    approach: [
      "Developed stakeholder engagement strategy for 150+ key decision makers",
      "Created business capability models to prioritise migration sequences",
      "Defined non-functional requirements for security, compliance, and performance",
      "Established change management framework to drive adoption",
      "Built executive dashboards for migration progress and risk tracking",
    ],
    outcomes: [
      "Migrated 400+ applications to multi-cloud environment",
      "Reduced infrastructure costs by 35%",
      "Achieved ISO 27001 compliance across all regions",
      "Improved system availability from 97% to 99.5%",
    ],
    tools: ["Azure DevOps", "ServiceNow", "Power BI", "Enterprise Architect", "SharePoint"],
  },
  "optus-crm-migration": {
    title: "Optus CRM Migration",
    subtitle: "CRM consolidation for Australia&apos;s second-largest telco",
    year: "2021",
    duration: "12 months",
    role: "Business Analyst",
    client: "Optus (Singtel)",
    overview:
      "Defined business requirements for migrating from a legacy CRM to Salesforce, impacting 10M+ customer records and 2,000 contact centre agents across Australia.",
    challenge:
      "The legacy CRM was 15 years old, causing agent inefficiency, poor customer data quality, and inability to support omnichannel experiences. The migration required zero downtime and preservation of complex business rules.",
    approach: [
      "Mapped 500+ business rules and data transformation requirements",
      "Facilitated UAT sessions with contact centre teams across 5 locations",
      "Designed agent workflow optimisations based on time-motion studies",
      "Created data quality metrics and cleansing protocols",
      "Developed training materials and change communication plan",
    ],
    outcomes: [
      "Reduced average handling time by 25%",
      "Improved first-call resolution by 18%",
      "Migrated 10M+ records with 99.8% accuracy",
      "Enabled omnichannel customer view for agents",
    ],
    tools: ["Salesforce", "JIRA", "Confluence", "Lucidchart", "SQL", "Tableau"],
  },
}

type CaseStudySlug = keyof typeof caseStudies

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const study = caseStudies[slug as CaseStudySlug]
    if (!study) return { title: "Case Study Not Found" }
    return {
      title: `${study.title} | Case Study`,
      description: study.overview,
    }
  })
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = caseStudies[slug as CaseStudySlug]

  if (!study) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <article className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span>{study.year}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span>{study.duration}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span>{study.client}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-medium text-foreground mb-3">
              {study.title}
            </h1>
            <p className="text-lg text-muted-foreground">{study.subtitle}</p>
          </header>

          <section className="mb-12">
            <h2 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
              Role
            </h2>
            <p className="text-muted-foreground">{study.role}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
              Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">{study.overview}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
              The Challenge
            </h2>
            <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
              My Approach
            </h2>
            <ul className="space-y-3">
              {study.approach.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
              Outcomes
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {study.outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="p-4 bg-card border border-border rounded-lg"
                >
                  <p className="text-sm text-foreground">{outcome}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
              Tools & Methods
            </h2>
            <div className="flex flex-wrap gap-2">
              {study.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs px-3 py-1.5 bg-secondary text-muted-foreground rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          <div className="pt-12 border-t border-border">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              View more case studies
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
