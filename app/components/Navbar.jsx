// components/Navbar.jsx

'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // NEW: Hook to get the current URL

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  // NEW: Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to reset the style when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: 'work' },
    { href: '/about', label: 'about' },
    { href: '/resume', label: 'resume' },
  ];

  return (
    // The main nav container remains largely the same
    <nav className="relative z-50">
      <div className="max-w-auto mx-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Left: Logo */}
          <Link href="/" className="flex-shrink-0" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/logo.png" // Make sure you have a logo in your public folder
              alt="Obidur's Logo"
              width={40} // CHANGED: Slightly smaller for a more refined look
              height={40}
              className="transition-transform duration-300 ease-in-out hover:scale-150"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                // CHANGED: Simplified classes and added active state logic
                className={`text-base text-neutral-800 hover:text-black transition-colors duration-200 relative group`}
              >
                {link.label}
                {/* Underline for active and hover states */}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-black transition-all duration-300 
                    ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-neutral-800 hover:text-black transition-colors" // CHANGED: Cleaner button style
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* NEW: Full-screen Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
                className={`block text-3xl font-medium transition-colors duration-300
                  ${pathname === link.href ? 'text-black' : 'text-neutral-600 hover:text-black'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
