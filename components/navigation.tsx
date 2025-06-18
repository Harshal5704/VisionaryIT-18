"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface NavigationProps {
  darkMode?: boolean
  setDarkMode?: (value: boolean) => void
}

export function Navigation({ darkMode = false, setDarkMode }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
              <img src="/vft-logo-horizontal.png" alt="Vision Flow Technologies" className="h-8 object-contain" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "About", "Careers", "Contact"].map((item) => {
              let href = ""
              if (item === "Home") {
                href = "/"
              } else if (item === "Contact") {
                href = "/contact"
              } else {
                href = `/#${item.toLowerCase()}`
              }

              if (item === "Contact") {
                return (
                  <Link href="/contact" key={item}>
                    <motion.span
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative cursor-pointer"
                      whileHover={{ y: -2 }}
                    >
                      Contact
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.span>
                  </Link>
                )
              }

              return (
                <motion.a
                  key={item}
                  href={href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              )
            })}
          </div>

          <div className="flex items-center space-x-4">
            {setDarkMode && (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setDarkMode(!darkMode)}
                  className="neumorphic-button"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </motion.div>
            )}

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-2 space-y-2">
              {["Home", "Services", "About", "Careers", "Contact"].map((item) => {
                let href = ""
                if (item === "Home") {
                  href = "/"
                } else if (item === "Contact") {
                  href = "/contact"
                } else {
                  href = `/#${item.toLowerCase()}`
                }

                if (item === "Contact") {
                  return (
                    <Link href="/contact" key={item}>
                      <motion.span
                        className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                        onClick={() => setMobileMenuOpen(false)}
                        whileHover={{ x: 10 }}
                      >
                        Contact
                      </motion.span>
                    </Link>
                  )
                }

                return (
                  <motion.a
                    key={item}
                    href={href}
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
