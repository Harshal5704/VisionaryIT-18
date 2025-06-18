"use client"

import { motion } from "framer-motion"
import { Server, Shield, Clock, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"

export default function CloudHostingPage() {
  const features = [
    {
      icon: Server,
      title: "Dedicated & Shared Hosting",
      description: "Flexible hosting solutions tailored to your business needs",
    },
    {
      icon: Shield,
      title: "24/7 Security Monitoring",
      description: "Round-the-clock security monitoring and threat protection",
    },
    {
      icon: Clock,
      title: "99.9% Uptime Guarantee",
      description: "Reliable infrastructure with industry-leading uptime",
    },
    {
      icon: Database,
      title: "Automated Backups",
      description: "Daily automated backups with disaster recovery solutions",
    },
  ]

  const hostingTypes = [
    {
      title: "Shared Hosting",
      description: "Cost-effective hosting for small to medium websites",
      icon: Server,
      features: ["Up to 10GB Storage", "Unlimited Bandwidth", "Free SSL Certificate", "24/7 Support"],
      price: "Starting at $9.99/month",
    },
    {
      title: "VPS Hosting",
      description: "Virtual private servers with dedicated resources",
      icon: Database,
      features: ["Dedicated CPU & RAM", "Root Access", "Scalable Resources", "SSD Storage"],
      price: "Starting at $29.99/month",
    },
    {
      title: "Dedicated Servers",
      description: "Full server resources for high-traffic applications",
      icon: Shield,
      features: ["Full Server Control", "Custom Configuration", "High Performance", "Enterprise Support"],
      price: "Starting at $199.99/month",
    },
  ]

  const managedServices = [
    "Server Setup & Configuration",
    "Performance Optimization",
    "Security Updates & Patches",
    "Database Management",
    "Load Balancing",
    "CDN Integration",
    "SSL Certificate Management",
    "Backup & Recovery",
    "Monitoring & Alerts",
    "Technical Support",
  ]

  const technologies = [
    "AWS",
    "Azure",
    "Google Cloud",
    "DigitalOcean",
    "Linode",
    "Vultr",
    "cPanel",
    "Plesk",
    "Docker",
    "Kubernetes",
    "Nginx",
    "Apache",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white rounded-full shadow-lg">
                <Server className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Cloud Hosting & Managed Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Secure, scalable, and reliable cloud hosting solutions with comprehensive managed services. Focus on your
              business while we handle your infrastructure with 24/7 monitoring and expert support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                onClick={() => window.open("https://wa.me/919731070591", "_blank")}
              >
                Get Started Today
              </Button>
              <Button variant="outline" size="lg">
                View Pricing\
