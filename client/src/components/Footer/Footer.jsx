

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Importing icons from react-icons
import { useNavigate } from "react-router-dom";

const Footer = () => {
    let navigate = useNavigate();
    return (
        <footer className="bg-gradient-to-r from-gray-700 to-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4">
                <div className="flex justify-evenly">
                    <div style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
                        <h3 className="text-xl font-bold mb-4">Luxe Boutique</h3>
                        <p className="text-sm">Discover the epitome of luxury fashion and accessories.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:text-gray-100 transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-gray-100 transition-colors">Contact</Link></li>
                            <li><Link to="/faq" className="hover:text-gray-100 transition-colors">FAQ</Link></li>
                            <li><Link to="/shipping" className="hover:text-gray-100 transition-colors">Shipping</Link></li>
                        </ul>
                    </div>
                    {/* <div>
                        <h4 className="text-lg font-semibold mb-4">Categories</h4>
                        <ul className="space-y-2">
                            <li><Link to="/handbags" className="hover:text-gray-100 transition-colors">Handbags</Link></li>
                            <li><Link to="/watches" className="hover:text-gray-100 transition-colors">Watches</Link></li>
                            <li><Link to="/jewelry" className="hover:text-gray-100 transition-colors">Jewelry</Link></li>
                            <li><Link to="/shoes" className="hover:text-gray-100 transition-colors">Shoes</Link></li>
                        </ul>
                    </div> */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition-colors">
                                <FaFacebookF /> {/* Facebook Icon */}
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition-colors">
                                <FaInstagram /> {/* Instagram Icon */}
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition-colors">
                                <FaTwitter /> {/* Twitter Icon */}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <p className="text-sm">&copy; 2024 Luxe Boutique. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;