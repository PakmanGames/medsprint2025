'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { Menu, X } from "lucide-react";
import Link from 'next/link';

const navItems = ['About', 'Community', 'Sponsors', 'Judges', 'Schedule', 'FAQ'];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const handleOutsideClick = useCallback((event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleOutsideClick);
    }
  }, [isMenuOpen, handleOutsideClick]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Dimming overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="#" className="text-2xl font-bold text-purple-800">
              MedSprint 2025
            </a>
            <div className="hidden md:flex items-center space-x-4">
              <ul className="flex space-x-4">
                {navItems.map((item) => (
                  <li key={item}>
                    <ScrollLink
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      className="cursor-pointer text-purple-800 hover:text-purple-600 transition-colors"
                    >
                      {item}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeOBvqz2-K5rjymuYmJOIV3vBU3bArpq25kQ8_QKqJqGzlwAw/viewform" target='_blank'>Register Now</Link>
              </Button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`md:hidden bg-white absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 py-2">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="block py-2 text-purple-800 hover:text-purple-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeOBvqz2-K5rjymuYmJOIV3vBU3bArpq25kQ8_QKqJqGzlwAw/viewform" target='_blank'>Register Now</Link>
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}
