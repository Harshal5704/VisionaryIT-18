"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"

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
      features: ["Multi-factor Authentication", "Role-based Access Control", "Privileged Access Management", "Identity Governance"],
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
                className="bg-gradient-to-r from-red-600 to-orange\
