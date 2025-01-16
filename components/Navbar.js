'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';

const navItems = ['About', 'Community', 'Sponsors', 'Judges', 'Schedule', 'FAQ'];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-2xl font-bold text-purple-800">MedSprint 2025</a>
          <div className="flex items-center space-x-4">
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-purple-800 hover:text-purple-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

