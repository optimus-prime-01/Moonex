import { NavBar } from "./components/nav-bar"
import { HeroSection } from "./components/hero-section"
import { Features } from "./components/features"
import { FAQ } from "./components/faq"
import { Comparison } from "./components/comparison"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <NavBar />
      <HeroSection />
      <Features />
      <Comparison />
      <FAQ />
    </div>
  )
}

