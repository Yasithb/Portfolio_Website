import Image from 'next/image';
import { assets } from '@/assets/assets';
import React from 'react';
import { useTheme } from '../context/ThemeContext';

// Experience data
const experienceData = [
  {
    company: "DESIGNWAY",
    period: "2018-Present",
    position: "Senior UI/UX Designer",
    description: "Led UI/UX design for multiple high-profile web applications and mobile products, resulting in a 40% increase in user engagement and satisfaction."
  },
  {
    company: "WEBCRAFT",
    period: "2015-2018",
    position: "Frontend Developer",
    description: "Developed responsive, cross-browser compatible websites and web applications using React, Next.js, and modern CSS frameworks."
  },
  {
    company: "CREATIVEMINDS",
    period: "2012-2015",
    position: "Web Designer",
    description: "Created visually appealing and user-friendly interfaces for clients across various industries, focusing on accessibility and performance."
  }
];

const Experience = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div id='experience' className={`w-full px-[12%] py-24 scroll-mt-20 relative ${
      isDark ? 'bg-[#111827]' : 'bg-gray-50'
    }`}>
      {/* Background decoration elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      
      {/* Animated particles */}
      <div className="absolute top-10 left-[10%] w-2 h-2 rounded-full bg-purple-400/30 animate-float"></div>
      <div className="absolute top-1/4 left-[30%] w-3 h-3 rounded-full bg-purple-500/20 animate-float-slow"></div>
      <div className="absolute bottom-1/3 right-[20%] w-2 h-2 rounded-full bg-purple-400/30 animate-float-delay"></div>
      <div className="absolute top-1/2 right-[15%] w-3 h-3 rounded-full bg-purple-500/20 animate-float-slow-delay"></div>
      
      <div className="relative">
        <h4 className={`text-center mb-2 text-lg font-ovo animate-slide-up ${
          isDark ? 'text-purple-500' : 'text-purple-600'
        }`}>
          <span className="relative inline-block">
            Career Path
            <span className={`absolute -bottom-1 left-0 w-full h-px transform scale-x-0 origin-left ${
              isDark ? 'bg-purple-500' : 'bg-purple-600'
            } animate-expand-line`}></span>
          </span>
        </h4>

        <h2 className={`text-center text-5xl font-bold animate-slide-up relative inline-block w-full ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          <span className="relative">
            My Experience
            <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 rounded-full ${
              isDark ? 'bg-purple-500' : 'bg-purple-600'
            } animate-expand`}></span>
          </span>
        </h2>
      </div>

      {/* Timeline container with reversed direction */}
      <div className="max-w-3xl mx-auto mt-20 relative">
        {/* Timeline line */}
        <div className={`absolute right-[15px] top-0 bottom-0 w-0.5 ${
          isDark ? 'bg-purple-500/30' : 'bg-purple-600/30'
        } animate-grow-down`}></div>
        
        {/* Experience items - Note alignment to the right */}
        {experienceData.map((item, index) => (
          <div 
            key={index}
            className="relative pr-14 pb-16 text-right animate-fade-in-up group hover:transform hover:-translate-x-2 transition-all duration-500"
            style={{ animationDelay: `${0.3 * (index + 1)}s` }}
          >
            {/* Timeline dot with pulse animation - positioned on the right */}
            <div className={`absolute right-0 top-1.5 w-7 h-7 rounded-full ${
              isDark 
                ? 'bg-[#111827] border-4 border-purple-500' 
                : 'bg-gray-50 border-4 border-purple-600'
            } z-10 group-hover:scale-110 transition-transform duration-300`}>
              <div className={`absolute inset-1 rounded-full ${
                isDark ? 'bg-purple-500/30' : 'bg-purple-600/30'
              } animate-ping-slow opacity-75`}></div>
            </div>
            
            {/* Animated connecting line from dot to content */}
            <div className={`absolute right-[13px] top-7 h-[calc(100%-30px)] w-0.5 ${
              isDark ? 'bg-purple-500/10' : 'bg-purple-600/10'
            }`}></div>
            
            {/* Company */}
            <div className={`font-medium mb-1 group-hover:-translate-x-1 transition-transform duration-300 ${
              isDark ? 'text-purple-500' : 'text-purple-600'
            }`}>{item.company}</div>
            
            {/* Period */}
            <div className={`text-sm mb-2 group-hover:-translate-x-1 transition-transform duration-300 delay-75 ${
              isDark ? 'text-purple-400' : 'text-purple-500'
            }`}>{item.period}</div>
            
            {/* Position */}
            <div className={`text-2xl font-bold mb-3 group-hover:-translate-x-1 transition-transform duration-300 delay-100 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{item.position}</div>
            
            {/* Description */}
            <div className="overflow-hidden">
              <p className={`leading-relaxed max-w-2xl ml-auto group-hover:-translate-x-1 transition-transform duration-300 delay-150 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {item.description}
              </p>
            </div>
            
            {/* Decorative accent - on the right */}
            <div className={`absolute right-2 top-7 h-0 w-2 group-hover:h-12 transition-all duration-500 ${
              isDark ? 'bg-purple-500/30' : 'bg-purple-600/30' 
            } rounded-full`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;