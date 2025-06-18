"use client"

import { motion } from "framer-motion"
import { Cloud, Server, Shield, Zap, Database, Globe, CheckCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CloudSolutionsPage() {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration of your infrastructure to the cloud",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with industry compliance standards",
    },
    {
      icon: Zap,
      title: "Auto-Scaling",
      description: "Automatically scale resources based on demand",
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Comprehensive data storage and management solutions",
    },
  ]

  const cloudServices = [
    {
      title: "Infrastructure as a Service (IaaS)",
      description: "Scalable computing resources on-demand",
      icon: Server,
      features: ["Virtual Machines", "Storage Solutions", "Network Infrastructure", "Load Balancing"],
    },
    {
      title: "Platform as a Service (PaaS)",
      description: "Complete development and deployment platform",
      icon: Globe,
      features: ["Application Hosting", "Database Services", "Development Tools", "CI/CD Pipelines"],
    },
    {
      title: "Software as a Service (SaaS)",
      description: "Ready-to-use software applications",
      icon: Cloud,
      features: ["Business Applications", "Collaboration Tools", "Analytics Platforms", "Custom Solutions"],
    },
  ]

  const cloudProviders = [
    "Amazon AWS",
    "Microsoft Azure",
    "Google Cloud",
    "DigitalOcean",
    "Linode",
    "Vultr",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Ansible",
    "Jenkins",
    "GitLab CI/CD",
  ]

  const benefits = [
    { title: "Cost Reduction", description: "Reduce infrastructure costs by up to 40%" },
    { title: "Improved Scalability", description: "Scale resources instantly based on demand" },
    { title: "Enhanced Security", description: "Enterprise-grade security and compliance" },
    { title: "24/7 Availability", description: "99.9% uptime with global redundancy" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white rounded-full shadow-lg">
                <Cloud className="h-12 w-12 text-cyan-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Cloud Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Accelerate your business with powerful cloud infrastructure. We provide comprehensive cloud solutions that
              enhance performance, reduce costs, and ensure scalability for your growing business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
                onClick={() => window.open("https://wa.me/919731070591", "_blank")}
              >
                Migrate to Cloud
              </Button>
              <Button variant="outline" size="lg">
                View Architecture
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Our Cloud Solutions?</h2>
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

      {/* Cloud Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Cloud Services</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <service.icon className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="text-left space-y-2">
                      {service.features.map((feature, idx) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Cloud Features</h2>
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
                    <feature.icon className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Cloud Platforms & Technologies</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {cloudProviders.map((provider, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  {provider}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Move to the Cloud?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's build a cloud infrastructure that scales with your business and reduces operational costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => window.open("https://wa.me/919731070591", "_blank")}>
                Start Cloud Migration
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
