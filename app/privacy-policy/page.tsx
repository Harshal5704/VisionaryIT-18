"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last Updated: February 16, 2025</p>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p>
                At Vision Flow Technologies, we are committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, and protect your personal information when you use our website and services.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">1. Information We Collect</h2>
                <p>
                  We may collect personal details such as your name, email, and phone number when you voluntarily
                  provide them. Additionally, we gather technical data, including your IP address, browser type, and
                  device details, to enhance our website's performance. We also monitor website usage to analyze trends
                  and improve user experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">2. How We Use Your Information</h2>
                <p>
                  The information we collect helps us enhance your browsing experience, improve our website's
                  functionality, and respond to inquiries. We may also use this data to analyze website traffic, monitor
                  user interactions, and ensure security measures are in place.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">3. Cookies & Tracking Technologies</h2>
                <p>
                  We use cookies and tracking technologies to personalize your experience and improve website
                  performance. If you prefer, you can disable cookies in your browser settings; however, this may impact
                  certain functionalities of the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">4. Data Protection & Security</h2>
                <p>
                  We implement security measures to safeguard your personal information from unauthorized access and
                  misuse. While we strive to protect your data, no online platform can guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">5. Third-Party Links & Services</h2>
                <p>
                  Our website may contain links to third-party sites for your convenience. However, we are not
                  responsible for the privacy practices of these external websites. We encourage you to review their
                  policies before providing any personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">6. Your Rights & Choices</h2>
                <p>
                  You have the right to access, update, or request deletion of your personal information. If you wish to
                  opt out of certain data collection practices, please contact us. We respect your privacy choices and
                  will process your requests accordingly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">7. Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                  this policy. This includes complying with legal obligations, resolving disputes, and enforcing our
                  agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">8. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal
                  requirements. We encourage you to review this page regularly to stay informed about how we protect
                  your data.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
