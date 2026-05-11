import { Building2, Calendar } from "lucide-react"

const experiences = [
  {
    company: "Siemens Energy",
    role: "Platform Product Owner - Cloud Migration",
    period: "April 2024 – March 2026",
    description:
      "Led an enterprise-wide cloud migration program, migrating legacy DevOps toolchain (GitLab, SonarQube, Artifactory) from on-premises infrastructure to AWS within a €2.4M portfolio. Facilitated program-level planning aligning 100+ workflows into a unified AWS platform. Delivered €216K in immediate annual cloud savings through consumption analysis, infrastructure monitoring, and auto-scaling implementation. Partnered with solution architects and cybersecurity teams to ensure compliance with ISO 27001, CIA, and RBAC requirements. Led steering committee meetings and drove end-to-end delivery from Discovery to Implementation.",
  },
  {
    company: "Globant",
    role: "Senior Business Analyst – Enterprise Payments and Digital Banking",
    period: "October 2021 – April 2024",
    description:
      "Worked across 6+ concurrent delivery streams within Itaú's SuperApp program in a SAFe environment, eliciting and documenting functional and non-functional requirements across the full SDLC. Translated Pix regulatory requirements and open banking rules into functional API specifications and acceptance criteria. Facilitated PI Planning cycles as Scrum Master, aligning backlog priorities with program objectives and regulatory requirements. Coordinated UAT across 6 product squads, supporting release planning and delivery coordination across 3 phased releases.",
  },
  {
    company: "Concentrix",
    role: "Technical Business Analyst – Utility and Digital Banking",
    period: "July 2010 – September 2021",
    description:
      "Led a billing operations uplift program improving reliability around bill generation, exception handling, and operational controls, reducing manual exceptions by 54%. Led Salesforce CRM migration of 2.5M+ customer records from Siebel Oracle, authoring functional requirements, data mapping, and UAT test plans, delivering a 35% reduction in billing query resolution time post go-live. Supported CIS Plus to C1 billing platform upgrade through billing process analysis, defect triage, and exception tracking across legacy and target-state workflows.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-light tracking-tight text-foreground md:text-4xl">
          Career Journey
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
          Over 15 years of experience driving business transformation across
          energy, telecommunications, and financial services sectors.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col gap-4 md:flex-row md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 hidden h-4 w-4 rounded-full border-2 border-accent bg-background md:left-1/2 md:block md:-translate-x-1/2" />

                {/* Content */}
                <div className="flex-1 md:w-1/2">
                  <div
                    className={`rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/50 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="mb-3 flex items-center gap-2 text-accent">
                      <Building2 className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.company}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-medium text-foreground">
                      {exp.role}
                    </h3>
                    <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
