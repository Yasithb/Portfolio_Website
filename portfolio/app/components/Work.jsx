import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { useInView } from 'react-intersection-observer'

const Work = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Create ref for scroll animations
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="work" className={`w-full px-[12%] py-24 scroll-mt-20 relative ${
      isDark ? 'bg-[#111827]' : 'bg-gray-50'
    }`}>
      {/* Background decoration elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      
      {/* Animated particles */}
      <div className="absolute top-10 right-[10%] w-2 h-2 rounded-full bg-blue-400/30 animate-float"></div>
      <div className="absolute top-1/4 right-[30%] w-3 h-3 rounded-full bg-blue-500/20 animate-float-slow"></div>
      <div className="absolute bottom-1/3 left-[20%] w-2 h-2 rounded-full bg-blue-400/30 animate-float-delay"></div>
      <div className="absolute top-1/2 left-[15%] w-3 h-3 rounded-full bg-blue-500/20 animate-float-slow-delay"></div>
      
      <div ref={headerRef} className="relative">
        <h4 className={`text-center mb-2 text-lg font-ovo ${headerInView ? 'opacity-100' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out ${
          isDark ? 'text-blue-500' : 'text-blue-600'
        }`}>
          <span className="relative inline-block">
            My Portfolio
            <span className={`absolute -bottom-1 left-0 w-full h-px transform scale-x-0 origin-left ${
              isDark ? 'bg-blue-500' : 'bg-blue-600'
            } ${headerInView ? 'animate-expand-line' : ''}`}></span>
          </span>
        </h4>

        <h2 className={`text-center text-5xl font-bold relative inline-block w-full ${headerInView ? 'opacity-100' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out delay-100 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          <span className="relative">
            My Latest Work
            <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 rounded-full ${
              isDark ? 'bg-blue-500' : 'bg-blue-600'
            } ${headerInView ? 'animate-expand' : ''}`}></span>
          </span>
        </h2>

        <p className={`text-center max-w-2xl mx-auto mt-6 mb-10 font-ovo ${headerInView ? 'opacity-100' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out delay-200 ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`}>
          I take pride in my work and strive to deliver the best results for my clients. 
          Here are a few examples of my latest projects that showcase my skills and expertise.
        </p>
      </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-8'>
          {workData.map((project, index) => (
            <div 
              key={index} 
              className={`aspect-[4/3] bg-no-repeat bg-cover bg-center rounded-2xl
                relative cursor-pointer group overflow-hidden shadow-xl
                transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl ${
                  headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ 
                backgroundImage: `url(${project.bgImage})`,
                transitionDelay: `${0.3 + 0.1 * (index % 3)}s` 
              }}
            >
              {/* Glass overlay for hover effect */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
              
              {/* Top badge */}
              <div className={`absolute top-0 right-0 m-4 px-3 py-1 rounded-full text-xs font-medium
                transform transition-all duration-500 origin-top-right scale-0 group-hover:scale-100
                ${isDark ? 'bg-blue-500/90 text-white' : 'bg-blue-500/90 text-white'}`}>
                {project.description}
              </div>
              
              {/* Project info card with enhanced animations */}
              <div className={`${
                isDark ? 'bg-gray-800/90 backdrop-blur-sm text-white' : 'bg-white/90 backdrop-blur-sm text-gray-800'
              } w-11/12 rounded-xl absolute -bottom-full left-1/2 -translate-x-1/2
              py-4 px-5 flex items-center justify-between shadow-xl transition-all duration-500 
              group-hover:bottom-4 border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                
                <div>
                  <h3 className={`font-semibold text-lg ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                </div>

                <div className={`p-3 rounded-full ${
                  isDark ? 'bg-blue-500 hover:bg-blue-400' : 'bg-blue-500 hover:bg-blue-600'
                } transition-colors duration-300 text-white`}>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 group-hover:rotate-45"
                  >
                    <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.5 12H20.33" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Show More Button */}
        <div className={`flex justify-center mt-12 mb-8 ${headerInView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-out delay-500`}>
          <button 
            className={`group inline-flex items-center justify-center gap-3 py-4 px-12 
            rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl
            ${isDark 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20' 
              : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20'
            }`}
          >
            <span className="font-medium">Show more</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.5 12H20.33" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        {/* Bottom decorative line */}
        <div className={`w-24 h-1 mx-auto mt-10 rounded-full animate-pulse ${
          isDark ? 'bg-blue-600' : 'bg-blue-500'
        }`}></div>
    </div>
  )
}

export default Work