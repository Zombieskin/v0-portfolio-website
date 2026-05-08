import { Building2, Calendar } from "lucide-react"

const experiences = [
  {
    company: "Siemens Energy",
    role: "Platform Product Owner",
    period: "2024 - 2026",
    description:
      "Leading platform product ownership for enterprise energy solutions, driving digital transformation initiatives and aligning technical roadmaps with business objectives.",
  },
  {
    company: "Globant",
    role: "Senior Business Analyst - Digital Banking and Payments",
    period: "2021 - 2024",
    description:
      "Delivered complex digital banking and payments solutions for tier-1 financial institutions, specializing in requirements engineering, stakeholder management, and agile delivery.",
  },
  {
    company: "Concentrix",
    role: "Technical Business Analyst and Subject Matter Expert",
    period: "2010 - 2021",
    description:
      "Served as technical SME across billing systems, meter data management, and CRM platforms, driving process improvements and supporting large-scale system migrations.",
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
