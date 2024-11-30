import React from 'react'
import { Mic, Search, Mail } from 'lucide-react';

import doctor from '../assets/doctor.png'

const HeroSection = () => {
  return (
    <div className="bg-[#F8F9FF] min-h-[600px] w-full px-4 py-12 md:py-20 lg:px-28 -z-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Health Matters Badge */}
            <div className="inline-flex items-center bg-transparent border-2 bordar-black rounded-full px-4 py-2 shadow-sm">
              <span className="text-gray-700">Health Matters</span>
              <span className="ml-2 text-red-500">❤️</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 relative">
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-blue-500">One Step Solution</span>
                <br />
                <span className="text-gray-900">
                  for all your dietary needs.
                </span>
              </h1>
              
              <p className="text-gray-600 max-w-md">
                Using your BMI index we calculate whether the dish is suitable for you.
              </p>
            </div>
            <div className='absolute top-1/3 left-1/4 -translate-x-14w-20 h-20 shadowbox' style={{ boxShadow: "32px 10px 300px 44px rgba(0,0,0,0.79)"}}></div>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search your product"
                className="w-full px-6 py-4 rounded-full bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-3">
                <button className="p-2 text-blue-500 hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
                <button className="p-2 text-blue-500 hover:text-blue-600 transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
                <button className="p-2 text-blue-500 hover:text-blue-600 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Doctor Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full max-w-md mx-auto">
                <div className="relative">
                  {/* Purple Circle Background */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-purple-600 rounded-full opacity-20"></div>
                  
                  {/* Doctor Image */}
                  <img
                    src={doctor}
                    alt="Doctor with laptop"
                    className="relative z-10 w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-300 rounded-full opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-300 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

