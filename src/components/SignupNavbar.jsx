import React, { useState } from 'react'
import logo from '../assets/logo.png'
import name from '../assets/name.png'
import { ChevronDown, Menu, Plus, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const SignupNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleLanguage = () => setIsLanguageOpen(!isLanguageOpen)

  return (
    <nav className="bg-[#F8F9FF] px-4 py-4 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
            <img src={logo} alt="logo" className="w-12 h-12" />
            <img src={name} alt="name" className="h-14 ml-2 mb-3" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            <div className="space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
              <Link href="/Linkbout" className="text-gray-700 hover:text-blue-500">
                About Us
              </Link>
              <Link href="/how-to-use" className="text-gray-700 hover:text-blue-500">
                How to use
              </Link>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-gray-700"
              >
                <span>English</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    English
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Spanish
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    French
                  </Link>
                </div>
              )}
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                href="/signin"
                className="text-gray-700 hover:text-blue-500"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-500 md:hidden"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-4 md:hidden justify-center">
            <div className="flex flex-col space-y-4 text-center all-center justify-center items-center">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-500"
              >
                Home
              </Link>
              <Link
                to="/Linkbout"
                className="text-gray-700 hover:text-blue-500"
              >
                About Us
              </Link>
              <Link
                to="/how-to-use"
                className="text-gray-700 hover:text-blue-500"
              >
                How to use
              </Link>
              <button
                onClick={toggleLanguage}
                className="hidden md:flex items-center space-x-1 text-gray-700"
              >
                <span>English</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isLanguageOpen && (
                <div className="ml-4 sm:flex flex-col space-y-2">
                  <Link
                    to="#"
                    className="text-gray-700 hover:text-blue-500"
                  >
                    English
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-700 hover:text-blue-500"
                  >
                    Spanish
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-700 hover:text-blue-500"
                  >
                    French
                  </Link>
                </div>
              )}
              <div className="flex flex-col space-y-4">
                <Link
                  href="/signin"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="w-fit rounded-full bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default SignupNavbar

