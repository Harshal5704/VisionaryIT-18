"use client"

import { motion } from "framer-motion"
import { Monitor, Shield, Users, Zap, CheckCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function EndUserComputingPage() {
  const features = [
    {
      icon: Monitor,
      title: "Virtual Desktop Solutions",
      description: "Secure and scalable virtual desktop infrastructure for remote work",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with industry compliance standards",
    },
    {
      icon: Users,
      title: "Application Streaming",
      description: "Deliver applications securely to any device, anywhere",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized performance for demanding applications and workflows",
    },
  ]

  const solutions = [
    {
      title: "Virtual Desktop Infrastructure (VDI)",
      description: "Complete desktop virtualization solution",
      features: ["Centralized Management", "Secure Access", "Cost Reduction", "Scalability"],
    },
    {
      title: "Desktop as a Service (DaaS)",
      description: "Cloud-based virtual desktop solution",
      features: ["No Infrastructure", "Pay-per-Use", "Global Access", "Automatic Updates"],
    },
    {
      title: "Application Virtualization",
      description: "Stream applications without installation",
      features: ["Instant Access", "Version Control", "Reduced Conflicts", "Easy Deployment"],
    },
  ]

  const technologies = [
    "Citrix",
    "VMware Horizon",
    "Microsoft Azure Virtual Desktop",
    "AWS WorkSpaces",
    "Windows 365",
    "Parallels RAS",
    "Nutanix Frame",
    "Google Cloud",
    "Microsoft Intune",
    "VMware Workspace ONE",
    "Citrix Endpoint Management",
    "Microsoft SCCM",
  ]

  const benefits = [
    { title: "Remote Work Enablement", description: "Secure access from anywhere, any device" },
    { title: "Cost Savings", description: "Reduce hardware and maintenance costs" },
    { title: "Enhanced Security", description: "Centralized data and application security" },
    { title: "Improved Productivity", description: "Consistent user experience across devices" },
  ]

  const useCases = [
    {
      title: "Remote Workforce",
      description: "Enable secure remote work with virtual desktops",
      icon: Users,
    },
    {
      title: "BYOD Programs",
      description: "Support bring-your-own-device initiatives safely",
      icon: Shield,
    },
    {
      title: "Seasonal Workers",
      description: "Quickly provision desktops for temporary staff",
      icon: Zap,
    },
    {
      title: "Branch Offices",
      description: "Centralize IT management across multiple locations",
      icon: Monitor,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white rounded-full shadow-lg">
                <Monitor className="h-12 w-12 text-purple-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">End-User Computing (EUC)</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Virtual desktop infrastructure and application streaming for secure remote work. Empower your workforce
              with flexible, secure, and high-performance computing solutions from anywhere.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                onClick={() => window.open("https://wa.me/919731070591", "_blank")}
              >
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Benefits of End-User Computing</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Use Cases</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <useCase.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our EUC Features</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our EUC Solutions</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{solution.title}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Technologies We Use</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Your Workplace?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's implement a secure and flexible end-user computing solution for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => window.open("https://wa.me/919731070591", "_blank")}>
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Chat Button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => window.open("https://wa.me/919731070591", "_blank")}
          className="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          Let's chat
        </Button>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
