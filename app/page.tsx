"use client"

import { useState, useEffect, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  Environment,
  Float,
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Points,
  PointMaterial,
} from "@react-three/drei"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import type * as THREE from "three"
import {
  MessageCircle,
  Mail,
  ChevronRight,
  Users,
  Award,
  Shield,
  Cloud,
  Brain,
  Code,
  Settings,
  Globe,
  Rocket,
  Smartphone,
  Palette,
  Share2,
  ShoppingCart,
  Server,
  Database,
  Monitor,
  DollarSign,
  Lock,
  Target,
  Eye,
  Heart,
  CheckCircle,
  Briefcase,
  ArrowRight,
  Clock,
  FileText,
  CreditCard,
  Search,
  Lightbulb,
  Presentation,
  MessageSquare,
  RefreshCw,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

// Particle System Component
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const particleCount = 1000

  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#3b82f6" size={0.05} sizeAttenuation={true} depthWrite={false} />
    </Points>
  )
}

// Morphing 3D Shape
function MorphingShape() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={[3, 0, 0]}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

// Typing Animation Hook
function useTypingAnimation(text: string, speed = 100) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return displayText
}

// Cursor Follower Component
function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16)
      mouseY.set(e.clientY - 16)
    }

    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        backgroundImage: `url('/vft-logo-eye.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  )
}

// Interactive Service Card
function InteractiveServiceCard({ service, index }: { service: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  const getServiceSlug = (title: string) => {
    const slugMap: { [key: string]: string } = {
      "Website Development": "website-development",
      "App Development": "app-development",
      "Brand Building": "brand-building",
      "Social Media Marketing": "social-media-marketing",
      "E-Commerce Solutions": "e-commerce-solutions",
      "Cloud Hosting & Managed Services": "cloud-hosting-managed-services",
      "Cloud Migration": "cloud-migration",
      "End-User Computing (EUC)": "end-user-computing",
      "Cloud FinOps": "cloud-finops",
      "Cloud Security & Maturity Assessments": "cloud-security-maturity-assessments",
    }
    return slugMap[title] || title.toLowerCase().replace(/\s+/g, "-").replace(/[()&]/g, "")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <Card className="neumorphic-card h-full overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <CardContent className="p-8 relative z-10">
          <motion.div
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 360 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <service.icon className="h-12 w-12 text-blue-600 mb-4" />
          </motion.div>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>

          {service.features && (
            <div className="mb-4">
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                {service.features.slice(0, 3).map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.technologies && (
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Technologies:</p>
              <div className="flex flex-wrap gap-1">
                {service.technologies.slice(0, 4).map((tech: string, idx: number) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {service.technologies.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{service.technologies.length - 4} more
                  </Badge>
                )}
              </div>
            </div>
          )}

          <Link href={`/services/${getServiceSlug(service.title)}`}>
            <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700 mt-4">
              Learn More <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Animated Counter
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationFrame = requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
      observer.disconnect()
    }
  }, [end, duration])

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  )
}

export default function VisionFlowTech() {
  const [darkMode, setDarkMode] = useState(false)

  const { scrollYProgress } = useScroll()
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  const heroText = useTypingAnimation("Innovative Solutions for the Digital Era", 80)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const digitalServices = [
    {
      icon: Code,
      title: "Website Development",
      description: "Responsive, high-performance websites tailored to your business needs.",
      features: ["Custom Website Design", "E-commerce Development", "CMS Development", "SEO Optimization"],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Angular",
        "Vue.js",
        "WordPress",
        "Shopify",
        "PHP",
        "Node.js",
      ],
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Robust mobile and enterprise applications with cutting-edge technologies.",
      features: ["iOS & Android Development", "Enterprise Software", "UI/UX Design", "Backend Integration"],
      technologies: ["Swift", "Kotlin", "Flutter", "React Native", "Java", "Python", "Firebase", "AWS", "MongoDB"],
    },
    {
      icon: Palette,
      title: "Brand Building",
      description: "Establish a strong brand identity with professional design and strategy.",
      features: [
        "Logo & Visual Identity",
        "Brand Strategy & Messaging",
        "Content Marketing",
        "Print & Digital Collateral",
      ],
      technologies: ["Adobe Illustrator", "Photoshop", "Canva", "Figma", "InDesign"],
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Boost your brand's online presence with strategic social media marketing.",
      features: ["Content Creation", "Paid Advertising", "Community Management", "Performance Analytics"],
      technologies: ["Meta Ads", "Google Ads", "HubSpot", "Hootsuite", "Buffer", "Canva"],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "End-to-end e-commerce solutions to set up, manage, and scale online stores.",
      features: [
        "Custom E-commerce Development",
        "Payment Gateway Integration",
        "Inventory & Order Management",
        "Conversion Rate Optimization",
      ],
      technologies: ["WooCommerce", "Magento", "Shopify", "Laravel", "React.js", "Stripe", "Razorpay", "PayPal"],
    },
  ]

  const cloudServices = [
    {
      icon: Server,
      title: "Cloud Hosting & Managed Services",
      description: "Secure and scalable cloud hosting with 24/7 monitoring and high performance.",
      features: ["Dedicated & Shared Hosting", "Infrastructure Management", "Data Backups & Disaster Recovery"],
      technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamlessly transition your business to the cloud with end-to-end migration services.",
      features: ["Migration Strategy & Planning", "Workload Transfer", "Post-Migration Optimization"],
      technologies: ["AWS Migration Hub", "Azure Migrate", "CloudEndure", "Ansible", "Jenkins"],
    },
    {
      icon: Monitor,
      title: "End-User Computing (EUC)",
      description: "Virtual desktop infrastructure and application streaming for secure remote work.",
      features: ["Virtual Desktop Solutions", "Application Streaming", "Security & Compliance"],
      technologies: ["Citrix", "VMware Horizon", "Microsoft Azure Virtual Desktop", "AWS WorkSpaces"],
    },
    {
      icon: DollarSign,
      title: "Cloud FinOps",
      description: "Optimize your cloud costs with comprehensive financial operations solutions.",
      features: ["Cost Tracking & Management", "Optimization Strategies", "Financial Planning"],
      technologies: ["AWS Cost Explorer", "Azure Cost Management", "CloudHealth", "FinOps Foundation tools"],
    },
    {
      icon: Lock,
      title: "Cloud Security & Maturity Assessments",
      description: "Comprehensive security assessments to protect from cyber threats and data breaches.",
      features: ["Risk Analysis & Compliance", "Threat Monitoring", "Data Protection & Encryption"],
      technologies: ["AWS Security Hub", "Microsoft Defender", "Palo Alto Prisma", "Splunk", "SIEM solutions"],
    },
  ]

  const stats = [
    { icon: Users, value: 300, suffix: "+", label: "Happy Clients" },
    { icon: Rocket, value: 1200, suffix: "+", label: "Projects Completed" },
    { icon: Globe, value: 8, suffix: "", label: "Countries Served" },
    { icon: Award, value: 99, suffix: "%", label: "Success Rate" },
  ]

  const countries = [
    { name: "UAE", flag: "🇦🇪" },
    { name: "Qatar", flag: "🇶🇦" },
    { name: "Kuwait", flag: "🇰🇼" },
    { name: "India", flag: "🇮🇳" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Cambodia", flag: "🇰🇭" },
    { name: "UK", flag: "🇬🇧" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "USA", flag: "🇺🇸" },
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Trusted & Transparent",
      description: "We prioritize integrity and reliability in all our services",
    },
    {
      icon: Award,
      title: "Industry Experts",
      description: "Professional, high-quality service delivery by experienced professionals",
    },
    {
      icon: Heart,
      title: "Customer-Focused Approach",
      description: "Your success is our mission - we're committed to your growth",
    },
    {
      icon: Settings,
      title: "24/7 Support",
      description: "We're here when you need us with round-the-clock assistance",
    },
  ]

  const keySpecializations = [
    {
      icon: Cloud,
      title: "Scalable Cloud Infrastructure",
      description: "Seamless migration and security-first cloud solutions",
    },
    {
      icon: Brain,
      title: "AI-Powered Digital Transformation",
      description: "Smart chatbots and automated workflows",
    },
    {
      icon: Database,
      title: "Data-Driven Financial Management",
      description: "Optimize cloud spending and maximize ROI",
    },
    {
      icon: Shield,
      title: "Secure & Efficient IT Operations",
      description: "Proactive monitoring and maintenance",
    },
  ]

  const projectWorkflow = [
    {
      number: "01",
      title: "Project Brief",
      description: "We gather detailed requirements and goals to define scope and expectations.",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "50% Advance Payment",
      description: "Project begins upon receiving initial payment confirmation.",
      icon: CreditCard,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "03",
      title: "Research & Strategy",
      description: "Market, audience, and competitor analysis tailored to your industry.",
      icon: Search,
      color: "from-purple-500 to-violet-500",
    },
    {
      number: "04",
      title: "Conceptual Sketching",
      description: "We brainstorm and visualize multiple directions based on insights.",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
    },
    {
      number: "05",
      title: "Design & Development",
      description: "Creation of branding, website layouts, or technical systems based on service type.",
      icon: Code,
      color: "from-indigo-500 to-purple-500",
    },
    {
      number: "06",
      title: "Initial Presentation",
      description: "We present the first draft for review and initial feedback.",
      icon: Presentation,
      color: "from-pink-500 to-rose-500",
    },
    {
      number: "07",
      title: "Client Feedback",
      description: "You share your thoughts, and we identify any areas for refinement.",
      icon: MessageSquare,
      color: "from-teal-500 to-cyan-500",
    },
    {
      number: "08",
      title: "Two Rounds of Revisions",
      description: "We fine-tune the work based on your input (up to 2 rounds included).",
      icon: RefreshCw,
      color: "from-orange-500 to-red-500",
    },
    {
      number: "09",
      title: "Final Presentation",
      description: "The polished, complete version is shared for approval.",
      icon: Presentation,
      color: "from-emerald-500 to-green-500",
    },
    {
      number: "10",
      title: "50% Final Payment",
      description: "Balance is paid after final approval.",
      icon: CreditCard,
      color: "from-blue-500 to-indigo-500",
    },
    {
      number: "11",
      title: "Delivery Guidelines",
      description: "We provide best practices and instructions for using your new assets.",
      icon: FileText,
      color: "from-violet-500 to-purple-500",
    },
    {
      number: "12",
      title: "Final File Delivery",
      description: "All files, credentials, and documentation are delivered securely.",
      icon: Download,
      color: "from-cyan-500 to-blue-500",
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900" : "bg-white"}`}>
      <CursorFollower />

      {/* Navigation */}
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
            poster="/placeholder.svg?height=1080&width=1920"
          >
            <source src="/placeholder-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-indigo-900/50" />
        </div>

        {/* 3D Background */}
        <div className="absolute inset-0 z-10">
          <Canvas camera={{ position: [0, 0, 10] }}>
            <Suspense fallback={null}>
              <ParticleField />
              <MorphingShape />
              <Environment preset="night" />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Suspense>
          </Canvas>
        </div>

        {/* Hero Content */}
        <motion.div style={{ y: textY }} className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{heroText}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              className="text-blue-400"
            >
              |
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-4 mb-8"
          >
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              At Vision Flow Technologies, we provide cutting-edge cloud services, website & app development, brand
              building, digital marketing, and e-commerce solutions to help businesses thrive in the modern digital
              landscape.
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
              Our expertise extends to end-user computing, cloud migrations, financial management, and security
              assessments. With the power of AI & GenAI, we develop intelligent chatbots and automated workflows,
              ensuring seamless digital transformation for our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="neumorphic-button bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/20 hover:border-white backdrop-blur-sm bg-white/10"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer"
            onClick={() => document.getElementById("global-reach")?.scrollIntoView({ behavior: "smooth" })}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Global Reach Section */}
      <section
        id="global-reach"
        className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Expert Branding & Web Development Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Serving Clients Across:</p>

            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              {countries.map((country, index) => (
                <motion.div
                  key={country.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.2,
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className="text-center cursor-pointer"
                >
                  <motion.div
                    className="text-4xl mb-2"
                    animate={{
                      x: [0, 10, 0, -10, 0],
                      y: [0, -5, 0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    whileHover={{
                      scale: 1.3,
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                  >
                    {country.flag}
                  </motion.div>
                  <motion.p
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    whileHover={{ color: "#3b82f6" }}
                  >
                    {country.name}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-blue-100 dark:border-gray-700"
            >
              <div className="flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Global Impact</h3>
              </div>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                We've proudly served 300+ clients worldwide.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center"
              >
                <Card className="neumorphic-card p-8">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  </motion.div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital and cloud solutions tailored to drive your business forward in the digital age.
          </p>
        </motion.div>

        {/* Digital & Cloud Solutions */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center"
          >
            <Code className="h-8 w-8 text-blue-600 mr-3" />
            Digital & Cloud Solutions
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {digitalServices.map((service, index) => (
              <InteractiveServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Cloud Services */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center"
          >
            <Cloud className="h-8 w-8 text-blue-600 mr-3" />
            Cloud Services
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <InteractiveServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Workflow Section */}
      <section id="workflow" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Our Project Workflow</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
              From Concept to Completion
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-4xl mx-auto">
              Our structured workflow ensures clarity, quality, and efficiency at every stage — across all services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projectWorkflow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <Card className="h-full overflow-hidden relative bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} text-white flex items-center justify-center font-bold text-lg mr-4 shadow-lg`}
                      >
                        {step.number}
                      </div>
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                        <step.icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                      </motion.div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 border border-blue-200/20 dark:border-blue-700/20">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Start Your Project?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Experience our streamlined workflow firsthand. Let's discuss your project and create something amazing
                together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                  >
                    <Clock className="mr-2 h-5 w-5" />
                    Schedule Consultation
                  </Button>
                </Link>
                <Button size="lg" variant="outline" onClick={() => window.open("https://wa.me/919731070591", "_blank")}>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Quick Chat
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Empowering Businesses with Smart Technology
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            At Vision Flow Technologies, we drive business growth through innovative cloud and digital solutions. Our
            team specializes in delivering transformative technology experiences.
          </p>
        </motion.div>

        {/* Key Specializations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {keySpecializations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="text-center"
            >
              <Card className="neumorphic-card h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6 relative z-10">
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                    <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Why Choose Vision Flow Technologies?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <Card className="neumorphic-card h-full">
                  <CardContent className="p-6">
                    <item.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="neumorphic-card h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  To revolutionize businesses with modern and innovative technology solutions, driving efficiency and
                  success in the digital era.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="neumorphic-card h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  To transform ideas into impactful solutions with best-in-class digital services, empowering businesses
                  to achieve their full potential.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Join Our Team!</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              We're always looking for talented professionals to join us. Be part of a dynamic team that's shaping the
              future of technology.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg p-8 mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <Briefcase className="h-12 w-12 text-blue-600 mr-4" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Exciting Career Opportunities</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Reach out at{" "}
                    <a
                      href="mailto:contact@visionflowtech.com"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      contact@visionflowtech.com
                    </a>{" "}
                    to explore career opportunities.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="neumorphic-button bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                onClick={() => {
                  const subject = encodeURIComponent("Career Opportunities Inquiry")
                  const body = encodeURIComponent(
                    "Hello Vision Flow Technologies,\n\nI am interested in exploring career opportunities with your company. Please let me know about current openings and how I can contribute to your team.\n\nThank you!",
                  )
                  window.open(`mailto:contact@visionflowtech.com?subject=${subject}&body=${body}`, "_blank")
                }}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us for Opportunities
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and create innovative solutions that drive your business forward. Our team is
              ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/20 hover:border-white backdrop-blur-sm bg-white/10"
                onClick={() => window.open("https://wa.me/919731070591", "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
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
