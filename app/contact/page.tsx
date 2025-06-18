"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Navigation } from "@/components/navigation"
import { sendContactEmail } from "../actions/send-email"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    discoveredVia: "",
    serviceNeeded: "",
    email: "",
    projectDescription: "",
    privacyAgreed: false,
  })

  const [subscribeData, setSubscribeData] = useState({
    name: "",
    email: "",
  })

  const discoveryOptions = [
    "Word of Mouth",
    "Social Media",
    "Dribbble",
    "Google Search",
    "LinkedIn",
    "Instagram",
    "Webflow",
    "Other",
  ]

  const serviceOptions = [
    "Brand Identity Design",
    "Website Design",
    "App Development",
    "Social Media Management",
    "Product Design",
    "Brand Guidelines",
    "E-Commerce Solutions",
    "Digital Marketing",
  ]

  const totalSteps = 6
  const progress = (currentStep / totalSteps) * 100

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubscribeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSubscribeData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataObj = new FormData()
      formDataObj.append("firstName", formData.firstName)
      formDataObj.append("lastName", formData.lastName)
      formDataObj.append("email", formData.email)
      formDataObj.append("company", formData.company)
      formDataObj.append(
        "message",
        `Discovery Method: ${formData.discoveredVia}\nService Needed: ${formData.serviceNeeded}\n\nProject Description:\n${formData.projectDescription}`,
      )

      const result = await sendContactEmail(formDataObj)

      if (result.success) {
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          discoveredVia: "",
          serviceNeeded: "",
          email: "",
          projectDescription: "",
          privacyAgreed: false,
        })
        setCurrentStep(1)
        alert("Thank you! Your message has been sent successfully. Check your email for confirmation.")
      } else {
        alert("Sorry, there was an error sending your message. Please try again or contact us directly.")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Sorry, there was an error sending your message. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscription:", subscribeData)
    alert("Thank you for subscribing!")
    setSubscribeData({ name: "", email: "" })
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8 leading-tight">
              Unleash Your Words Our Inbox Awaits
            </h1>
            <Progress value={progress} className="w-full h-1 mb-8" />
          </motion.div>

          {/* Multi-Step Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-12"
          >
            {/* Step 1: Name */}
            {currentStep >= 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl md:text-3xl text-black"
              >
                <span>Hello! I'm </span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onKeyPress={(e) => e.key === "Enter" && formData.firstName && nextStep()}
                  placeholder="your first name"
                  className="border-none border-b-2 border-gray-300 focus:border-black bg-transparent outline-none placeholder-gray-400 min-w-[200px] transition-colors"
                  required
                  autoFocus={currentStep === 1}
                />
                <span> </span>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onKeyPress={(e) => e.key === "Enter" && formData.lastName && nextStep()}
                  placeholder="last name"
                  className="border-none border-b-2 border-gray-300 focus:border-black bg-transparent outline-none placeholder-gray-400 min-w-[150px] transition-colors"
                  required
                />
                {formData.firstName && formData.lastName && (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-4 text-sm text-gray-500 hover:text-black transition-colors"
                  >
                    Press Enter ↵
                  </button>
                )}
              </motion.div>
            )}

            {/* Step 2: Company */}
            {currentStep >= 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl md:text-3xl text-black"
              >
                <span>and working in </span>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  onKeyPress={(e) => e.key === "Enter" && formData.company && nextStep()}
                  placeholder="company name"
                  className="border-none border-b-2 border-gray-300 focus:border-black bg-transparent outline-none placeholder-gray-400 min-w-[250px] transition-colors"
                  required
                  autoFocus={currentStep === 2}
                />
                {formData.company && (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-4 text-sm text-gray-500 hover:text-black transition-colors"
                  >
                    Press Enter ↵
                  </button>
                )}
              </motion.div>
            )}

            {/* Step 3: Discovery Method */}
            {currentStep >= 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <p className="text-2xl md:text-3xl text-black">I discovered through:</p>
                <div className="flex flex-wrap gap-3">
                  {discoveryOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, discoveredVia: option }))
                        setTimeout(nextStep, 300)
                      }}
                      className={`px-4 py-2 rounded-full border-2 transition-all text-sm ${
                        formData.discoveredVia === option
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Service Needed */}
            {currentStep >= 4 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <p className="text-2xl md:text-3xl text-black">I need assistance with:</p>
                <div className="flex flex-wrap gap-3">
                  {serviceOptions.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, serviceNeeded: service }))
                        setTimeout(nextStep, 300)
                      }}
                      className={`px-4 py-2 rounded-full border-2 transition-all text-sm ${
                        formData.serviceNeeded === service
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 5: Email */}
            {currentStep >= 5 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl md:text-3xl text-black"
              >
                <span>Feel free to reach me at </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onKeyPress={(e) => e.key === "Enter" && formData.email && nextStep()}
                  placeholder="your@email.com"
                  className="border-none border-b-2 border-gray-300 focus:border-black bg-transparent outline-none placeholder-gray-400 min-w-[250px] transition-colors"
                  required
                  autoFocus={currentStep === 5}
                />
                <span> to commence the conversation.</span>
                {formData.email && (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-4 text-sm text-gray-500 hover:text-black transition-colors"
                  >
                    Press Enter ↵
                  </button>
                )}
              </motion.div>
            )}

            {/* Step 6: Project Description */}
            {currentStep >= 6 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <p className="text-2xl md:text-3xl text-black">I would like to share more about my project:</p>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project goals, timeline, budget, and any specific requirements..."
                  rows={6}
                  className="w-full border-2 border-gray-200 rounded-lg p-4 text-lg outline-none focus:border-black transition-colors resize-none"
                  required
                  autoFocus={currentStep === 6}
                />

                {/* Privacy Policy */}
                <div className="flex items-start space-x-3 mt-6">
                  <input
                    type="checkbox"
                    name="privacyAgreed"
                    checked={formData.privacyAgreed}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 accent-black"
                    required
                  />
                  <label className="text-sm text-gray-600">
                    I agree to Vision Flow Technologies' privacy policy and terms of service.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex items-center space-x-4 mt-8">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.privacyAgreed}
                    className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Let's Talk"}
                  </Button>
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="text-sm text-gray-500 hover:text-black transition-colors"
                    >
                      ← Back
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                Unlock creativity with our exclusive free assets!
              </h3>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter and receive exclusive design resources, case studies, and insights from our
                team of experts.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={subscribeData.name}
                    onChange={handleSubscribeChange}
                    placeholder="Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-black transition-colors"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={subscribeData.email}
                    onChange={handleSubscribeChange}
                    placeholder="Email"
                    className="px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-black transition-colors"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Subscribe Now!
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-right"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl inline-block">
                <img
                  src="/vft-logo-new.png"
                  alt="Vision Flow Technologies Card"
                  className="w-32 h-32 mx-auto mb-4 object-contain"
                />
                <h4 className="text-xl font-bold text-black mb-2">Vision Flow Technologies</h4>
                <p className="text-gray-600">Innovative Solutions for the Digital Era</p>
                <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                  <p>contact@visionflowtech.com</p>
                  <p>+91 9731070591</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

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
    </div>
  )
}
