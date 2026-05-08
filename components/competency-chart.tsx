"use client"

import { useState } from "react"
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

const tooltips: Record<string, string> = {
  "Requirements Engineering": "Led BRD and FRD delivery across banking, energy, and telco",
  "Stakeholder Management": "Managed C-suite and cross-functional teams across 40+ business units globally",
  "Agile Delivery": "SAFe POPM certified, delivered across PI Planning and multiple product squads",
  "Payments Domain": "Defined API and functional specs for Pix instant payments at Itaú",
  "Regulatory Compliance": "AML and KYC delivery using NICE Actimize at HSBC",
  "Process Modelling": "BPMN 2.0 process mapping across billing, CRM, and payments platforms",
  "Australian Market": "Based in Melbourne, actively building local network in fintech and banking",
}

export function CompetencyChart() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  const CustomTick = ({ x, y, payload }: { x: number; y: number; payload: { value: string } }) => {
    const skill = payload.value
    const isActive = activeTooltip === skill

    return (
      <g
        onMouseEnter={() => setActiveTooltip(skill)}
        onMouseLeave={() => setActiveTooltip(null)}
        style={{ cursor: "pointer" }}
      >
        <text
          x={x}
          y={y}
          textAnchor="middle"
          fill={isActive ? "#8B7355" : "#5a5a5a"}
          fontSize={11}
          className="transition-colors duration-200"
        >
          {skill}
        </text>
        {isActive && tooltips[skill] && (
          <foreignObject
            x={x - 120}
            y={y + 8}
            width={240}
            height={60}
          >
            <div className="bg-foreground text-background text-[10px] px-3 py-2 rounded shadow-lg text-center leading-tight">
              {tooltips[skill]}
            </div>
          </foreignObject>
        )}
      </g>
    )
  }

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
                  tick={<CustomTick x={0} y={0} payload={{ value: "" }} />}
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
              <div
                key={item.skill}
                className="group relative"
                onMouseEnter={() => setActiveTooltip(item.skill)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-sm transition-colors duration-200 ${activeTooltip === item.skill ? "text-accent" : "text-foreground"}`}>
                    {item.skill}
                  </span>
                  <span className="text-sm text-muted-foreground">{item.value}%</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-500"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
                {activeTooltip === item.skill && tooltips[item.skill] && (
                  <div className="absolute left-0 top-full mt-2 z-10 bg-foreground text-background text-[10px] px-3 py-2 rounded shadow-lg max-w-xs leading-tight">
                    {tooltips[item.skill]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
