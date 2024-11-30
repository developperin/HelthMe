import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import logo from '../assets/logo.png';
import name from '../assets/name.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const Navbaritems = [
        { label: "Home", href: "#" },
        { label: "About Us", href: "#" },
        { label: "How to Use", href: "#" },
    ];

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="flex justify-between items-center p-4 bg-white shadow-md">
            {/* Logo section */}
            <div className="flex items-center justify-center">
                <img src={logo} alt="logo" className="w-12 h-12" />
                <img src={name} alt="name" className="h-14 ml-2 mb-3" />
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
                <ul className="flex space-x-6">
                    {Navbaritems.map((item, index) => (
                        <li key={index} className="hover:text-blue-500">
                            <Link to={item.href} className="transition-all ease-in-out hover:border-b-2 hover:border-blue-500">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className="text-white bg-blue-500 py-2 px-5 font-bold rounded-md hover:bg-blue-600">
                    Login
                </button>
            </div>

            {/* Mobile menu icon */}
            <div className="flex md:hidden">
                <button onClick={toggleMenu} className="text-blue-500 focus:outline-none">
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile menu dropdown */}
            {isMobileMenuOpen && (
                <div className="absolute z-50 top-20 left-0 w-full bg-white shadow-md md:hidden">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        {Navbaritems.map((item, index) => (
                            <li key={index}>
                                <Link to={item.href} className="text-gray-800 hover:text-blue-500 transition-all">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <button className="text-white bg-blue-500 py-2 px-5 font-bold rounded-md hover:bg-blue-600">
                                Login
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
