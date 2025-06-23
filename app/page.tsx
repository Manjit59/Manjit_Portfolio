"use client"

import { useState, useEffect } from "react"
import { Navigation } from "./components/Navigation"
import { ScrollToTop } from "./components/ScrollToTop"
import { HeroSection } from "./components/sections/HeroSection"
import { AboutSection } from "./components/sections/AboutSection"
import { EducationSection } from "./components/sections/EducationSection"
import { SkillsSection } from "./components/sections/SkillsSection"
import { ProjectsSection } from "./components/sections/ProjectsSection"
import { ContactSection } from "./components/sections/ContactSection"
import { Footer } from "./components/Footer"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  /* ------------------------------------------------------------------ */
  /* Helpers                                                            */
  /* ------------------------------------------------------------------ */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  /* ------------------------------------------------------------------ */
  /* Track which section is in the viewport                             */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const sections = ["home", "about", "education", "skills", "projects", "contact"]

    const handleScroll = () => {
      const current = sections.find((section) => {
        const node = document.getElementById(section)
        if (!node) return false
        const { top, bottom } = node.getBoundingClientRect()
        return top <= 100 && bottom >= 100
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* ------------------------------------------------------------------ */
  /* Render                                                             */
  /* ------------------------------------------------------------------ */
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <Navigation activeSection={activeSection} onSectionChange={scrollToSection} />
      <ScrollToTop />

      {/* Page Sections -------------------------------------------------- */}
      <HeroSection onNavigate={scrollToSection} />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      <Footer />
    </div>
  )
}
