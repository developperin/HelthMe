import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from '../assets/logo.png';
import name from '../assets/name.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row'>
                {/* leftside  */}
                <div className='md:w-1/4 mt-10 px-6 py-4'>
                    <div className='flex flex-col mb-4'>
                        <span className='fle'>
                            <img src={logo} alt="logo" className='w-12' />
                            <img src={name} alt="name" className='w-1/2' />
                        </span>
                    </div>
                    <p className='font-semibold text-xs text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quibusdam autem voluptate, dolorum porro</p>
                    <br />
                    <div className="flex gap-2">
                        <Link to="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-400 rounded-lg w-8 h-8 flex justify-center items-center p-2"
                        >
                            <Facebook size={16} />
                        </Link>
                        <Link to="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-400 rounded-lg w-8 h-8 flex justify-center items-center p-2"
                        >
                            <Twitter size={16} />
                        </Link>
                        <Link                        href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-400 rounded-lg w-8 h-8 flex justify-center items-center p-2"
                        >
                            <Instagram size={16} />
                        </Link>
                        <Link                        href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-400 rounded-lg w-8 h-8 flex justify-center items-center p-2"
                        >
                            <Linkedin size={16} />
                        </Link>
                        <Link                        href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-400 rounded-lg w-8 h-8 flex justify-center items-center p-2"
                        >
                            <Youtube size={16} />
                        </Link>
                    </div>
                </div>

                {/* rightside */}
                <div className='md:w-3/4'>


                    <footer className="bg-white dark:bg-gray-900">
                        <div className="mx-auto w-full max-w-screen-xl">
                            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-blue-600 uppercase dark:text-white text ">Company</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <Link to="#" className=" hover:underline">About</Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="#" className="hover:underline">Careers</Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="#" className="hover:underline">Brand Center</Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="#" className="hover:underline">Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-blue-600 uppercase dark:text-white">Help center</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <Link to="#" className="hover:underline">Discord Server</Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="#" className="hover:underline">Twitter</Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="#" className="hover:underline">Facebook</Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="#" className="hover:underline">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-blue-600 uppercase dark:text-white">Legal</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <Link to="#" className="hover:underline">Privacy Policy</Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="#" className="hover:underline">Licensing</Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-blue-600 uppercase dark:text-white">Download</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <Link to="#" className="hover:underline">iOS</Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="#" className="hover:underline">Android</Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="#" className="hover:underline">Windows</Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="#" className="hover:underline">MacOS</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </footer>

                </div>

            </div>
            <hr />
            <br />

            <div className="md:flex flex flex-col justify-between items-center px-10">
                {/* Copyright */}
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Copyright© 2023
                </div>

                {/* Policy */}
                <div className="text-sm text-gray-500 flex space-x-4 dark:text-gray-400">
                    <span>All Rights Reserved</span>
                    <span> | </span>
                    <Link to="#" className="hover:underline text-blue-400">Terms and Conditions</Link>
                    <span>|</span>
                    <Link to="#" className="hover:underline text-blue-400">Privacy Policy</Link>
                </div>
            </div>
            <br />
        </div>
    )
}

export default Footer
