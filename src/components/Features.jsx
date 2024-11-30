import React from 'react'
import { Heart, Bot, BarChart, Utensils } from 'lucide-react';


const Features = () => {
  return (
    <div className="bg-[#F8F9FF] py-16 px-4 md:py-24 ">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Header */}
        <div className="mb-16 w-2/3 ">
          <h2 className="text-blue-500 font-bold text-3xl mb-4">FEATURES WE PROVIDE</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <h3 className="text-3xl md:text-4xl font-bold">
              Calculating BMI
              <span className="text-gray-800"> is easier</span>
            </h3>
            <Heart className="text-blue-500 w-6 h-6 md:w-8 md:h-8" size={38}/>
          </div>
          <p className="text-gray-600 mt-4 max-w-md">
            We calculate your BMI index from data like age, height, weight.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ml-4 w-100 pr-3">
          {/* Food Recommendation */}
          <div className=" rounded-xl p-6   transition-shadow">
            <div className="mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Utensils className="w-6 h-6 text-orange-500" />
              </div>
            </div>
            <h4 className="text-xl font-semibold mb-2">Food Recommendation</h4>
            <p className="text-gray-600">
              We provide food recommendation according to your calorie requirements.
            </p>
          </div>

          {/* Interactive Chatbot */}
          <div className="h-3/4 rounded-xl p-6 md:translate-y-1/2  transition-shadow">
            <div className="mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-blue-500" />
              </div>
            </div>
            <h4 className="text-xl font-semibold mb-2">Interactive Chatbot</h4>
            <p className="text-gray-600">
              Solve your queries by interacting with our bot.
            </p>
          </div>

          {/* Nutritional Value */}
          <div className=" rounded-xl p-6  transition-shadow">
            <div className="mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <BarChart className="w-6 h-6 text-green-500" />
              </div>
            </div>
            <h4 className="text-xl font-semibold mb-2">Nutritional Value</h4>
            <p className="text-gray-600">
              Get all the nutritional values of your preferred dish.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features

