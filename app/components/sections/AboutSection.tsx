"use client"

import { Suspense } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FloatingElements } from "../FloatingElements"
import ClientCanvas from "@/app/lib/ClientCanvas"

export function AboutSection() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-cyan-400" />,
      label: "Email",
      value: "manjit.patra.pm@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-cyan-400" />,
      label: "Location",
      value: "Bhubaneswar, India",
    },
    {
      icon: <Linkedin className="w-6 h-6 text-cyan-400" />,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/manjit-patra-9ab06b304",
    },
  ]

  const languages = ["English", "Hindi", "Odia"]
  const interests = ["Photography", "Video Editing", "Travelling", "Volunteering"]

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="absolute inset-0">
        <ClientCanvas>
          <Suspense fallback={null}>
            <FloatingElements count={20} />
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-black/40 backdrop-blur-md border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a passionate Software Engineer specializing in test automation with a strong foundation in Python
                  and .NET programming. Currently pursuing my Master's in Technology, I bring both academic knowledge
                  and practical experience to every project.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  My expertise spans across creating robust data systems, implementing machine learning solutions for
                  cybersecurity, and developing innovative applications that solve real-world problems.
                </p>
              </CardContent>
            </Card>

            {/* Languages */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-cyan-600/20 text-cyan-300 hover:bg-cyan-600/30 transition-colors"
                    >
                      {lang}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 transition-colors"
                    >
                      {interest}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center space-x-4 text-white p-4 rounded-lg bg-black/20 hover:bg-black/40 transition-all duration-300 border border-cyan-500/10 hover:border-cyan-400/30"
              >
                {item.icon}
                <div>
                  <p className="text-white font-semibold">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="text-cyan-300 hover:text-cyan-400 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-300">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
