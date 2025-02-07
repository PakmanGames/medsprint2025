'use client';

import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { timelineEvents } from '@/data/timelineEvents';

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { top, height } = timelineRef.current.getBoundingClientRect();
        const scrollPosition = window.innerHeight - top;
        const stepHeight = height / timelineEvents.length;
        const newActiveIndex = Math.min(
          Math.max(Math.floor(scrollPosition / stepHeight) - 1, 0),
          timelineEvents.length - 1
        );
        setActiveIndex(newActiveIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">How It Works</h2>
        <div className="relative" ref={timelineRef}>
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-300">
            <div 
              className="absolute top-0 left-0 w-full bg-purple-600 transition-all duration-500 ease-out"
              style={{ height: `${(activeIndex + 1) * (100 / timelineEvents.length)}%` }}
            ></div>
          </div>
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative mb-8 ">
              <div 
                className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full ${
                  index <= activeIndex ? 'bg-purple-600' : 'bg-purple-300'
                } flex items-center justify-center transition-all duration-300 ease-out`}
              >
                {React.createElement(event.icon, { 
                  size: 24, 
                  className: `${index <= activeIndex ? 'text-white' : 'text-purple-600'} transition-all duration-300 ease-out`
                })}
              </div>
              <div 
                className={`ml-8 p-4 bg-white bg-opacity-80 rounded-lg shadow-md ${
                  index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                } max-w-md transform transition-all duration-300 ease-out ${
                  index <= activeIndex ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-50'
                }`}
              >
                <h3 className="text-xl font-semibold text-purple-800 mb-2">{event.title}</h3>
                <p className="text-purple-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
