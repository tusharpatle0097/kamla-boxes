// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/arihant logo.png'

const Navbar = () => {
    // State for managing mobile menu visibility
    const [isOpen, setIsOpen] = useState(false);

    // Toggle function for mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Define links as an array of objects
    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Clients", path: "/clients" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="bg-slate-900 from-blue-500 to-purple-600 p-7 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo or Brand Name */}
                <div className="text-white font-bold text-xl w">
                    <img src={logo} alt=""  className='w-[200px] h-auto'/>
                </div>

                {/* Hamburger Icon for Mobile Menu */}
                <button
                    className="text-white lg:hidden block"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* Navbar Links - Hidden on Mobile */}
                <ul className="hidden lg:flex space-x-6">
                    {links.map(link => (
                        <li key={link.name} className="cursor-pointer">
                            <Link to={link.path} className="text-white hover:text-gray-300 font-semibold transition duration-200">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu - Visible when isOpen is true */}
            {isOpen && (
                <div className="lg:hidden">
                    <ul className="space-y-4 py-4">
                        {links.map(link => (
                            <li key={`${link.name}-mobile`} className="cursor-pointer">
                                <Link to={link.path} className="text-white hover:text-gray-300 font-semibold transition duration-200">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;