import React, { useState } from 'react'
import { Eye, EyeOff,  Facebook, Apple, CircleFadingPlus } from 'lucide-react'
import menbody from '../assets/menbody.png'
import {Link} from 'react-router-dom'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        age: '',
        gender: '',
        height: '',
        weight: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    return (
        <div className="min-h-screen bg-[#F8F9FF] p-4 md:p-0">
            <div className="mx-auto flex min-h-screen max-w-6xl flex-col lg:flex-row">
                {/* Left Section */}
                <div className="relative flex flex-1 flex-col justify-center p-4 lg:p-12">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                        Sign Up to
                        <br />
                        get your nutrients
                    </h1>
                    <p className="text-gray-600">
                        if you already have an account you can{' '}
                        <span><a href="/login" className="text-blue-500 hover:underline">
                            Login here!
                        </a>
                        </span>
                        
                    </p>

                    {/* Hero Image - Only visible on mobile */}
                    <div className="mt-8 lg:hidden">
                        <img
                            src={menbody}
                            alt="Fitness Model"
                            className="mx-auto max-h-[400px] object-contain"
                        />
                    </div>
                </div>
                <div className='absolute top-2/4 left-1/4 -translate-x-14  h-20 shadowbox' style={{ boxShadow: "32px 10px 300px 44px rgba(0,0,0,200)" }}></div>

                {/* Center Image - Hidden on mobile */}
                <div className="hidden flex-1 items-center justify-center lg:flex">
                    <img
                        src={menbody}
                        alt="Fitness Model"
                        className="max-h-[80vh] h-full object-contain"
                    />
                </div>

                {/* Right Section */}
                <div className="flex flex-1 items-center justify-center p-4 lg:p-12">
                    <div className="w-full max-w-md space-y-6">
                        <h2 className="text-2xl font-bold">Welcome User</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Email Input */}
                            <div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full rounded-lg bg-white/60 px-4 py-3 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="w-full rounded-lg bg-white/60 px-4 py-3 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                            </div>


                            {/* Having Problem Link */}
                            <div className="text-right">
                                <Link to="#" className="text-sm text-gray-500 hover:text-blue-500">
                                    Recover Password ?
                                </Link>
                            </div>

                            {/* Register Button */}
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-blue-500 py-3 font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Sign In
                            </button>

                            {/* Social Login */}
                            <div className="space-y-4">
                                <div className="text-center text-sm text-gray-500">
                                    Or continue with
                                </div>
                                <div className="flex justify-center space-x-4">
                                    <button
                                        type="button"
                                        className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"
                                    >
                                        <CircleFadingPlus
                                            className="h-6 w-6"
                                        />
                                    </button>
                                    <button
                                        type="button"
                                        className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"
                                    >
                                        <Apple
                                            className="h-6 w-6"
                                        />
                                    </button>
                                    <button
                                        type="button"
                                        className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"
                                    >
                                        <Facebook
                                            className="h-6 w-6"
                                        />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

