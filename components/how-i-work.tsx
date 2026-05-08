import { Search, Zap, Users } from "lucide-react"

const approaches = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "I start every engagement by deeply understanding the problem space. Through stakeholder interviews, process mapping, and competitive analysis, I uncover the real needs behind stated requirements. This foundation ensures we&apos;re solving the right problem before designing solutions.",
  },
  {
    icon: Zap,
    title: "Delivery",
    description:
      "I focus on iterative delivery, breaking complex initiatives into measurable increments. Using Agile ceremonies, backlog refinement, and clear acceptance criteria, I ensure development teams have everything they need to build with confidence and velocity.",
  },
  {
    icon: Users,
    title: "Stakeholder Management",
    description:
      "I build bridges between business and technology. Through structured communication, regular demos, and transparent roadmaps, I keep executives aligned while empowering teams. Managing expectations is as important as managing requirements.",
  },
]

export function HowIWork() {
  return (
    <section id="approach" className="px-6 md:px-12 lg:px-24 py-20 bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-2">
          How I Work
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          My approach combines analytical rigour with collaborative pragmatism.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach) => (
            <div key={approach.title} className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <approach.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-foreground">
                {approach.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
