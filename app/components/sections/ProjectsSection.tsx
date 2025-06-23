"use client"

import { Suspense } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProjectsScene } from "../ProjectsScene"
import ClientCanvas from "@/app/lib/ClientCanvas"
import Image from "next/image"

interface Project {
  title: string
  period: string
  description: string
  tags: string[]
  status: string
  color: string
  image: string
  github: string
  demo: string
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "DDoS Attack Detection with Blockchain Technology",
      period: "08/2024 - 12/2024",
      description:
        "Enhanced IoT network security by integrating blockchain and machine learning to detect complex DDoS attack patterns and ensure data integrity using the IoT23 Dataset.",
      tags: ["Blockchain", "Machine Learning", "IoT", "Security"],
      status: "Completed",
      color: "#00d4ff",
      image: "/projects/ddos-detection.jpg",
      github: "https://github.com/manjitpatra/ddos-blockchain-detection",
      demo: "https://ddos-detection-demo.vercel.app",
    },
    {
      title: "Efficient EV Journeys: Route Optimization",
      period: "01/2024 - 07/2024",
      description:
        "Explored route optimization and power management in electric vehicles, leveraging algorithms like Dijkstra's and NSGA-III to enhance charging station accessibility.",
      tags: ["Algorithm", "Optimization", "Electric Vehicles", "Python"],
      status: "Completed",
      color: "#0099ff",
      image: "/projects/ev-optimization.jpg",
      github: "https://github.com/manjitpatra/ev-route-optimization",
      demo: "https://ev-optimizer.vercel.app",
    },
    {
      title: "Automated Toll Collection System",
      period: "08/2024 - 12/2024",
      description:
        "Blockchain-based Internet of Vehicles system to prevent odometer tampering and streamline toll collections using real-time GPS data.",
      tags: ["Blockchain", "IoT", "GPS", "Automation"],
      status: "Completed",
      color: "#0066cc",
      image: "/projects/toll-system.jpg",
      github: "https://github.com/manjitpatra/automated-toll-system",
      demo: "https://toll-system-demo.vercel.app",
    },
    {
      title: "Test Coverage Analyzer",
      period: "08/2022 - 04/2023",
      description:
        "Python application that analyzes Java code, offering coverage options like condition, path, and function coverage, generating Control Flow Graph (CFG) as PDF.",
      tags: ["Python", "Java", "Testing", "Analysis"],
      status: "Completed",
      color: "#004499",
      image: "/projects/test-coverage.jpg",
      github: "https://github.com/manjitpatra/test-coverage-analyzer",
      demo: "https://coverage-analyzer.vercel.app",
    },
    {
      title: "Recruitment Management System",
      period: "06/2021 - 10/2021",
      description:
        "Digital platform for companies to manage recruitment processes, enabling storage, processing, and tracking of job hiring data online.",
      tags: ["Web Development", "Database", "Management"],
      status: "Completed",
      color: "#00ccaa",
      image: "/projects/recruitment-system.jpg",
      github: "https://github.com/manjitpatra/recruitment-management",
      demo: "https://recruitment-system.vercel.app",
    },
    {
      title: "Exam Cell Automation System",
      period: "01/2022 - 04/2022",
      description:
        "Online system for student registration and examination management, handling student details and academic evaluation enrollment.",
      tags: ["Automation", "Database", "Web Development"],
      status: "Completed",
      color: "#0088cc",
      image: "/projects/exam-system.jpg",
      github: "https://github.com/manjitpatra/exam-cell-automation",
      demo: "https://exam-system.vercel.app",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="absolute inset-0">
        <ClientCanvas camera={{ position: [0, 0, 10] }}>
          <Suspense fallback={null}>
            <ProjectsScene projects={projects} />
          </Suspense>
        </ClientCanvas>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="group cursor-pointer"
              onClick={() => window.open(project.demo, "_blank")}
            >
              <Card className="bg-black/40 backdrop-blur-md border-cyan-500/20 h-full hover:border-cyan-400/40 transition-all duration-300 overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge
                    className={`absolute top-4 right-4 ${
                      project.status === "Completed"
                        ? "bg-green-600/20 text-green-300 border-green-400/30"
                        : "bg-blue-600/20 text-blue-300 border-blue-400/30"
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-white text-lg group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </CardTitle>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <CardDescription className="text-gray-400 text-sm">{project.period}</CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-cyan-600/20 text-cyan-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.github, "_blank")
                      }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.demo, "_blank")
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
