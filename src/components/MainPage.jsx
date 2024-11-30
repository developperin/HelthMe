import React from 'react';
import { Search, Mic, Mail, Info, Plus, Leaf , Circle  } from 'lucide-react'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'
import c6 from '../assets/c6.png'
import c7 from '../assets/c7.png'

const MainPage = () => {
    const alternatives = [
        { id: 1, name: "Product Name", description: "amet dolor, elit tu", image: c1 },
        { id: 2, name: "Product Name", description: "amet dolor, elit tu", image: c2 },
        { id: 3, name: "Product Name", description: "amet dolor, elit tu", image: c3 },
        { id: 4, name: "Product Name", description: "amet dolor, elit tu", image: c4 },
        { id: 5, name: "Product Name", description: "amet dolor, elit tu", image: c5 },
        // { id: 6, name: "Product Name", description: "amet dolor, elit tu", image:c6 },
        // { id: 7, name: "Product Name", description: "amet dolor, elit tu", image:c7 },
    ]

    return (
        <div className=" bg-gray-50  sm:flex sm:justify-center p-4">


            <div className="leftside sm:w-1/2 sm:flex sm:flex-col sm:justify-center sm:items-center  ">

                {/* Search Bar */}
                <div className="relative mb-8 max-w-md sm:mt-6 mx-4 mt-4">
                    <input
                        type="text"
                        placeholder="Search your product"
                        className="w-full rounded-full border border-gray-200 py-2 pl-4 pr-32 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:w-[450px]"
                    />
                    <div className="absolute right-2 top-1/2 flex -translate-y-1/2 space-x-2">
                        <button className="rounded-full p-1 text-blue-500 hover:bg-blue-50">
                            <Mail className="h-5 w-5" />
                        </button>
                        <button className="rounded-full p-1 text-blue-500 hover:bg-blue-50">
                            <Mic className="h-5 w-5" />
                        </button>
                        <button className="rounded-full p-1 text-blue-500 hover:bg-blue-50">
                            <Search className="h-5 w-5" />
                        </button>
                    </div>
                </div>
                {/* serch bar end */}

                {/* Product Image */}
                <div className="overflow-hidden rounded-3xl border-2 border-dashed border-gray-200 md:w-[500px] mb-4 m-2">
                    <img
                        src={c1}
                        alt="French Toast with Fruits"
                        className="w-full md:w-[550px] rounded-2xl object-cover"
                    />
                </div>

                {/* product image end */}
            </div>
            {/* Product Details */}


{/* ############################### */}


            {/* Main Content */}
            {/* <div className="grid gap-8 md:grid-cols-2"> */}


            <div className="secound sm:min-w-screen">
                <div className="rounded-3xl bg-white overflow-auto p-4 shadow-lg sm:h-full">


                    {/* Product Name */}
                    <div className="mb-4 flex items-center justify-between sm:mt-6">
                        <h1 className="text-2xl font-bold">Product Name</h1>
                        <button className="rounded-full p-1 text-gray-500 hover:bg-gray-100">
                            <Info className="h-5 w-5" />
                        </button>
                    </div>
                    {/* product name end */}


                    {/* Description */}
                    <p className="mb-6 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit dolor
                    </p>
                    {/* description end */}


                    {/* Nutrition Cards */}
                    <div className="mb-8 grid grid-cols-3 gap-4">


                        {/* Proteins */}
                        <div className="rounded-xl bg-amber-400 p-4 text-white md:h-60 h-40">
                            <div className="flex justify-center mb-3 m-auto">
                                <Plus className="h-12 md:h-20 w-36" />
                            </div>
                            <h3 className="font-semibold md:mt-8 md:text-xl">Proteins</h3>
                            <p className="text-sm opacity-90">24g</p>
                        </div>
                        {/* end */}

                        {/* Fats */}
                        <div className="rounded-xl bg-pink-500 p-4 text-white h-40 md:h-60 ">
                            <div className="flex justify-center mb-3 m-auto">
                                <Circle  className="h-12 md:h-20 w-36 rounded-full bg-white/30" />
                            </div>
                            <h3 className="font-semibold md:mt-8 md:text-xl">Fats</h3>
                            <p className="text-sm opacity-90">54.3g</p>
                        </div>
                        {/* end */}


                        {/* Carbohydrates */}
                        <div className="rounded-xl bg-green-500 p-4 text-white h-40 md:h-60 ">
                            <div className="flex justify-center mb-3 m-auto">
                                <Leaf className="h-12 md:h-20 w-36" />
                            </div>
                            <h3 className="font-semibold text-wrap md:mt-8 md:text-xl">Carbohy 
                            drates</h3>
                            <p className="text-sm opacity-90">13.25g</p>
                        </div>
                        {/* end */}


                    </div>
                    {/*Nutrition end  */}

                    {/* Alternatives */}
                    <div>
                        <h2 className="mb-6 text-2xl  font-semibold">Alternative you can try</h2>
                        <div className="no-scrollbar flex space-x-4 overflow-x-auto pb-4 no-scrollbar">
                            {alternatives.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex-shrink-0 cursor-pointer rounded-xl border border-gray-100 p-2 hover:border-blue-500
                                    "
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-24 w-24 rounded-lg object-cover"
                                    />
                                    <div className="mt-2 w-20">
                                        <h3 className="text-sm font-medium">{item.name}</h3>
                                        <p className="text-xs text-gray-500">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* end */}

                </div>
            </div>

            {/* </div> */}

        </div>
    )
}

export default MainPage
