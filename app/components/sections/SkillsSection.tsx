"use client"

import type React from "react"

import { Suspense } from "react"
import { motion } from "framer-motion"
import { Code, Database, Wrench, MessageCircle, Target, Eye, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SkillsScene } from "../SkillsScene"
import ClientCanvas from "@/app/lib/ClientCanvas"

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: string[]
  color: string
  progress: number[]
}

interface SoftSkill {
  name: string
  icon: React.ReactNode
  level: number
}

export function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [".NET", "Python", "Java", "C/C++"],
      color: "from-cyan-500 to-blue-600",
      progress: [90, 95, 85, 80],
    },
    {
      title: "Data Systems",
      icon: <Database className="w-6 h-6" />,
      skills: ["SQL", "Postgres", "MongoDB"],
      color: "from-blue-500 to-indigo-600",
      progress: [90, 85, 80],
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Selenium", "JUnit", "PyTest", "Jenkins", "GIT"],
      color: "from-teal-500 to-cyan-600",
      progress: [95, 85, 90, 80, 95],
    },
  ]

  const softSkills: SoftSkill[] = [
    { name: "Excellent Communication", icon: <MessageCircle className="w-5 h-5" />, level: 95 },
    { name: "Problem-Solving", icon: <Target className="w-5 h-5" />, level: 90 },
    { name: "Attention to Detail", icon: <Eye className="w-5 h-5" />, level: 95 },
    { name: "Teamwork", icon: <Users className="w-5 h-5" />, level: 88 },
  ]

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="absolute inset-0">
        <ClientCanvas camera={{ position: [0, 0, 8] }}>
          <Suspense fallback={null}>
            <SkillsScene skills={skillCategories} />
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8" />
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <Card className="bg-black/40 backdrop-blur-md border-cyan-500/20 h-full hover:border-cyan-400/40 transition-all duration-300">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}
                  >
                    {category.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span className="text-white text-sm">{skill}</span>
                        <div className="flex-1 mx-3 bg-white/10 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${category.progress[skillIndex]}%` }}
                            transition={{ delay: skillIndex * 0.1 + 0.5, duration: 1 }}
                          />
                        </div>
                        <span className="text-xs text-gray-400">{category.progress[skillIndex]}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-lg p-6 text-center hover:border-cyan-400/40 transition-all duration-300 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <div className="relative z-10">
                  <motion.div
                    className="text-cyan-400 mb-3 flex justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <p className="text-white text-sm mb-3 font-medium">{skill.name}</p>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                    />
                  </div>
                  <span className="text-xs text-gray-400 mt-2 block">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
