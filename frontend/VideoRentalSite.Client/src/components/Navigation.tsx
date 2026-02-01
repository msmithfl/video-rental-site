//import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa6";

export default function Navigation() {
  //const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-black shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/wilhelms-logo.png" 
              alt="Wilhelm's Video Rental" 
              className="h-14 w-auto"
            />
            <div>
              <h1 className="hidden md:block text-2xl font-bold text-white">Wilhelm's Video Rental</h1>
            </div>
          </Link>
          
          {/* Navigation Menu */}
          <nav className="flex items-center gap-6">
            <Link 
              to="/library" 
              className="text-gray-300 hover:text-yellow-400 font-medium transition-colors"
            >
              Rental Library
            </Link>
            
            {/* Services Dropdown */}
            {/* <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className="text-gray-300 hover:text-yellow-400 font-medium transition-colors flex items-center gap-1 py-2 cursor-pointer"
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 z-50 ">
                  <div className="w-56 bg-black rounded-lg shadow-lg border border-gray-800">
                    <Link 
                      to="/services/digitization" 
                      className="block px-4 py-2 text-gray-300 hover:bg-[#202020] hover:text-yellow-400 transition-colors"
                    >
                      Digitization
                    </Link>
                    <Link 
                      to="/services/home-streaming" 
                      className="block px-4 py-2 text-gray-300 hover:bg-[#202020] hover:text-yellow-400 transition-colors"
                    >
                      Home Streaming Setup
                    </Link>
                  </div>
                </div>
              )}
            </div> */}
            
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-yellow-400 font-medium transition-colors"
            >
              About
            </Link>
            
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
