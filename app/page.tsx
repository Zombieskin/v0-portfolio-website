import { Hero } from "@/components/hero"
import { CompetencyChart } from "@/components/competency-chart"
import { CaseStudies } from "@/components/case-studies"
import { HowIWork } from "@/components/how-i-work"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CompetencyChart />
      <CaseStudies />
      <HowIWork />
      <Contact />
    </main>
  )
}
