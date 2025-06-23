"use client"

import { Suspense } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FloatingElements } from "../FloatingElements"
import ClientCanvas from "@/app/lib/ClientCanvas"

interface Education {
  degree: string
  institution: string
  location: string
  period: string
  cgpa: string
  type: "current" | "completed"
}

export function EducationSection() {
  const education: Education[] = [
    {
      degree: "Master of Technology",
      institution: "Odisha University of Technology and Research (OUTR)",
      location: "Bhubaneswar",
      period: "08/2023 - 06/2025",
      cgpa: "6.46 CGPA",
      type: "completed",
    },
    {
      degree: "Bachelor of Technology",
      institution: "National Institute of Science and Technology (NIST)",
      location: "Berhampur",
      period: "08/2019 - 05/2023",
      cgpa: "7.66 CGPA",
      type: "completed",
    },
    {
      degree: "Intermediate",
      institution: "Stewart School",
      location: "Bhubaneswar",
      period: "04/2017 - 04/2018",
      cgpa: "51.4%",
      type: "completed",
    },
    {
      degree: "Matriculation",
      institution: "Stewart School",
      location: "Bhubaneswar",
      period: "04/2015 - 04/2016",
      cgpa: "60%",
      type: "completed",
    },
  ]

  return (
    <section id="education" className="py-20 px-6 relative bg-black/20">
      <div className="absolute inset-0">
        <ClientCanvas>
          <Suspense fallback={null}>
            <FloatingElements count={12} />
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
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8" />
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-black/40 backdrop-blur-md border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <CardContent className="p-8 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-2xl font-bold text-white mb-2"
                      >
                        {edu.degree}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-cyan-300 text-lg"
                      >
                        {edu.institution}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400"
                      >
                        {edu.location}
                      </motion.p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-white font-semibold"
                      >
                        {edu.period}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-green-400 font-bold text-xl"
                      >
                        {edu.cgpa}
                      </motion.p>
                      {edu.type === "current" && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <Badge className="bg-green-600/20 text-green-300 mt-2">Current</Badge>
                        </motion.div>
                      )}
                    </div>
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
