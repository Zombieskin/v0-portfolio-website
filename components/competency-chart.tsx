"use client"

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts"

const competencies = [
  { skill: "Requirements Engineering", value: 82 },
  { skill: "Stakeholder Management", value: 85 },
  { skill: "Agile Delivery", value: 78 },
  { skill: "Payments Domain", value: 75 },
  { skill: "Regulatory Compliance", value: 70 },
  { skill: "Process Modelling", value: 72 },
  { skill: "Australian Market", value: 60 },
]

export function CompetencyChart() {
  return (
    <section id="competencies" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-2">
          Core Competencies
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          A decade of experience across enterprise environments, building expertise in critical BA disciplines.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={competencies} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid stroke="#D8D4CE" strokeWidth={1} />
                <PolarAngleAxis
                  dataKey="skill"
                  tick={{ fill: "#5a5a5a", fontSize: 11 }}
                  tickLine={false}
                />
                <Radar
                  dataKey="value"
                  stroke="#8B7355"
                  fill="#8B7355"
                  fillOpacity={0.25}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-6">
            {competencies.map((item) => (
              <div key={item.skill}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-foreground">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.value}%</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-500"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
