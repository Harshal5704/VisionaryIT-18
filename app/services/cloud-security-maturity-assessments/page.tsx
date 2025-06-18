"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CloudSecurityMaturityAssessmentsPage() {
  const features = [
    {
      icon: Shield,
      title: "Risk Analysis & Compliance",
      description: "Comprehensive security risk assessment and compliance evaluation",
    },
    {
      icon: Eye,
      title: "Threat Monitoring",
      description: "24/7 monitoring and detection of security threats and vulnerabilities",
    },
    {
      icon: Lock,
      title: "Data Protection & Encryption",
      description: "Advanced data protection strategies and encryption implementation",
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability Assessment",
      description: "Identify and prioritize security vulnerabilities across your infrastructure",
    },
  ]

  const assessmentAreas = [
    {
      title: "Identity & Access Management",
      description: "Evaluate user access controls and authentication mechanisms",
      features: [
        "Multi-factor Authentication",
        "Role-based Access Control",
        "Privileged Access Management",
        "Identity Governance",
      ],
    },
    {
      title: "Data Security",
      description: "Assess data protection, encryption, and privacy controls",
      features: ["Data Classification", "Encryption at Rest", "Encryption in Transit", "Data Loss Prevention"],
    },
    {
      title: "Network Security",
      description: "Review network architecture and security controls",
      features: ["Firewall Configuration", "Network Segmentation", "VPN Security", "Intrusion Detection"],
    },
    {
      title: "Compliance & Governance",
      description: "Evaluate compliance with industry standards and regulations",
      features: ["GDPR Compliance", "SOC 2 Type II", "ISO 27001", "HIPAA Compliance"],
    },
  ]

  const technologies = [
    "AWS Security Hub",
    "Microsoft Defender",
    "Palo Alto Prisma",
    "Splunk",
    "SIEM solutions",
    "CrowdStrike",
    "Qualys",
    "Rapid7",
    "Tenable",
    "Nessus",
    "OpenVAS",
    "Metasploit",
  ]

  const benefits = [
    { title: "Enhanced Security Posture", description: "Strengthen your overall security framework" },
    { title: "Compliance Assurance", description: "Meet industry standards and regulations" },
    { title: "Risk Reduction", description: "Identify and mitigate security risks proactively" },
    { title: "Cost Optimization", description: "Optimize security investments and reduce breach costs" },
  ]

  const assessmentProcess = [
    { step: "01", title: "Discovery", description: "Inventory and map your cloud infrastructure" },
    { step: "02", title: "Assessment", description: "Evaluate security controls and configurations" },
    { step: "03", title: "Analysis", description: "Analyze findings and identify vulnerabilities" },
    { step: "04", title: "Reporting", description: "Provide detailed findings and recommendations" },
    { step: "05", title: "Remediation", description: "Implement security improvements and fixes" },
    { step: "06", title: "Monitoring", description: "Continuous monitoring and improvement" },
  ]

  const securityFrameworks = [
    {
      title: "NIST Cybersecurity Framework",
      description: "Comprehensive cybersecurity risk management",
      maturity: "Advanced",
    },
    {
      title: "ISO 27001",
      description: "Information security management systems",
      maturity: "Enterprise",
    },
    {
      title: "CIS Controls",
      description: "Critical security controls for effective cyber defense",
      maturity: "Intermediate",
    },
    {
      title: "OWASP Top 10",
      description: "Web application security risks and controls",
      maturity: "Basic",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white rounded-full shadow-lg">
                <Shield className="h-12 w-12 text-red-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Cloud Security & Maturity Assessments</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive security assessments to protect from cyber threats and data breaches. Evaluate your security
              posture and implement robust protection strategies for your cloud infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white"
                onClick={() => window.open("https://wa.me/919731070591", "_blank")}
              >
                Get Security Assessment
              </Button>
              <Button variant="outline" size="lg">
                View Security Report
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Benefits of Security Assessment</h2>
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

      {/* Assessment Process Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Assessment Process</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assessmentProcess.map((step, index) => (
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
                    <div className="text-3xl font-bold text-red-600 mb-4">{step.step}</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Security Assessment Features</h2>
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
                    <feature.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Areas Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Assessment Areas</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentAreas.map((area, index) => (
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
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{area.title}</h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <ul className="space-y-2">
                      {area.features.map((feature, idx) => (
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

      {/* Security Frameworks Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Security Frameworks</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFrameworks.map((framework, index) => (
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
                    <Badge variant="secondary" className="mb-4">
                      {framework.maturity}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{framework.title}</h3>
                    <p className="text-gray-600">{framework.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Security Tools & Technologies</h2>
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
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Secure Your Cloud?</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Let's assess your security posture and implement comprehensive protection strategies for your cloud
              infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => window.open("https://wa.me/919731070591", "_blank")}>
                Get Security Assessment
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
