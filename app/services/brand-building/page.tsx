"use client"

import { motion } from "framer-motion"
import { Palette, Target, Megaphone, TrendingUp, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function BrandBuildingPage() {
  const services = [
    {
      icon: Palette,
      title: "Visual Identity Design",
      description: "Logo design, color schemes, typography, and brand guidelines",
    },
    {
      icon: Target,
      title: "Brand Strategy",
      description: "Brand positioning, messaging, and competitive analysis",
    },
    {
      icon: Megaphone,
      title: "Content Marketing",
      description: "Brand storytelling, content creation, and marketing materials",
    },
    {
      icon: TrendingUp,
      title: "Brand Growth",
      description: "Brand awareness campaigns and market expansion strategies",
    },
  ]

  const brandingElements = [
    "Logo Design",
    "Business Cards",
    "Letterheads",
    "Brochures",
    "Flyers",
    "Social Media Graphics",
    "Website Banners",
    "Packaging Design",
    "Brand Guidelines",
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Understanding your business, target audience, and market positioning",
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Creating brand strategy, messaging, and visual direction",
    },
    {
      step: "03",
      title: "Design & Creation",
      description: "Developing visual identity, logo, and brand materials",
    },
    {
      step: "04",
      title: "Implementation",
      description: "Applying brand across all touchpoints and platforms",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white rounded-full shadow-lg">
                <Palette className="h-12 w-12 text-pink-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Brand Building</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Create a powerful brand identity that resonates with your audience. From logo design to complete brand
              strategy, we help you build a memorable and impactful brand presence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white"
                onClick={() => window.open("https://wa.me/919731070591", "_blank")}
              >
                Build Your Brand
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Brand Building Services</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
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
                    <service.icon className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Brand Building Process</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-pink-600 mb-4">{step.step}</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding Elements */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What We Create</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {brandingElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="secondary" className="text-sm py-2 px-4">
                  {element}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Build Your Brand?</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Let's create a brand identity that sets you apart from the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => window.open("https://wa.me/919731070591", "_blank")}>
                Start Your Brand
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
