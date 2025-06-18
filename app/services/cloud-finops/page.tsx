"use client"

import { motion } from "framer-motion"
import { DollarSign, TrendingDown, BarChart3, Target, CheckCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CloudFinOpsPage() {
  const features = [
    {
      icon: DollarSign,
      title: "Cost Tracking & Management",
      description: "Real-time visibility into cloud spending across all services and departments",
    },
    {
      icon: TrendingDown,
      title: "Optimization Strategies",
      description: "Identify and implement cost-saving opportunities without compromising performance",
    },
    {
      icon: BarChart3,
      title: "Financial Planning",
      description: "Accurate forecasting and budgeting for cloud infrastructure costs",
    },
    {
      icon: Target,
      title: "ROI Optimization",
      description: "Maximize return on investment through strategic resource allocation",
    },
  ]

  const services = [
    {
      title: "Cost Visibility & Reporting",
      description: "Comprehensive dashboards and reports for cloud spending",
      features: ["Real-time Cost Tracking", "Department Allocation", "Custom Reports", "Trend Analysis"],
    },
    {
      title: "Cost Optimization",
      description: "Identify and implement cost-saving opportunities",
      features: ["Resource Right-sizing", "Reserved Instance Planning", "Waste Elimination", "Automation"],
    },
    {
      title: "Budget Management",
      description: "Set and monitor budgets with automated alerts",
      features: ["Budget Planning", "Threshold Alerts", "Variance Analysis", "Forecasting"],
    },
  ]

  const technologies = [
    "AWS Cost Explorer",
    "Azure Cost Management",
    "CloudHealth",
    "FinOps Foundation tools",
    "AWS Trusted Advisor",
    "Azure Advisor",
    "Google Cloud Billing",
    "Cloudability",
    "CloudCheckr",
    "Spot.io",
    "ParkMyCloud",
    "Densify",
  ]

  const benefits = [
    { title: "Cost Reduction", description: "Reduce cloud costs by 20-40% on average" },
    { title: "Better Visibility", description: "Complete transparency into cloud spending" },
    { title: "Improved Planning", description: "Accurate forecasting and budgeting" },
    { title: "Faster Decision Making", description: "Data-driven insights for quick decisions" },
  ]

  const finOpsProcess = [
    { step: "01", title: "Assess", description: "Analyze current cloud spending and usage patterns" },
    { step: "02", title: "Optimize", description: "Implement cost optimization strategies" },
    { step: "03", title: "Monitor", description: "Continuous monitoring and alerting" },
    { step: "04", title: "Report", description: "Regular reporting and stakeholder communication" },
    { step: "05", title: "Govern", description: "Establish policies and governance frameworks" },
    { step: "06", title: "Improve", description: "Continuous improvement and optimization" },
  ]

  const costSavingAreas = [
    {
      title: "Right-sizing Resources",
      description: "Optimize instance sizes based on actual usage",
      savings: "15-25%",
    },
    {
      title: "Reserved Instances",
      description: "Commit to long-term usage for significant discounts",
      savings: "30-60%",
    },
    {
      title: "Spot Instances",
      description: "Use spare capacity for non-critical workloads",
      savings: "50-90%",
    },
    {
      title: "Storage Optimization",
      description: "Implement lifecycle policies and compression",
      savings: "20-40%",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white rounded-full shadow-lg">
                <DollarSign className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Cloud FinOps</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Optimize your cloud costs with comprehensive financial operations solutions. Gain visibility, control
              spending, and maximize ROI through strategic cloud financial management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                onClick={() => window.open("https://wa.me/919731070591", "_blank")}
              >
                Start Optimizing
              </Button>
              <Button variant="outline" size="lg">
                Cost Assessment
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Benefits of Cloud FinOps</h2>
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

      {/* Cost Saving Areas Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Cost Saving Opportunities</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {costSavingAreas.map((area, index) => (
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
                    <div className="text-2xl font-bold text-green-600 mb-3">{area.savings}</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{area.title}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FinOps Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our FinOps Process</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finOpsProcess.map((step, index) => (
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
                    <div className="text-3xl font-bold text-green-600 mb-4">{step.step}</div>
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our FinOps Features</h2>
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
                    <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our FinOps Services</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">FinOps Tools & Technologies</h2>
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
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Optimize Your Cloud Costs?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Let's implement a comprehensive FinOps strategy to reduce costs and maximize your cloud ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => window.open("https://wa.me/919731070591", "_blank")}>
                Start Optimizing
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
