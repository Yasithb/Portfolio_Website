import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Work = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div id="work" className="w-full px-[12%] py-16 scroll-mt-20">
        <h4 className={`text-center mb-2 text-lg font-ovo animate-slide-up ${
          isDark ? 'text-blue-400' : 'text-blue-600'
        }`}>
          My Portfolio
        </h4>

        <h2 className='text-center text-5xl font-ovo animate-slide-up' style={{ animationDelay: '0.1s' }}>
          My latest work
        </h2>

        <p className={`text-center max-w-2xl mx-auto mt-6 mb-10 font-ovo animate-slide-up ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`} style={{ animationDelay: '0.2s' }}>
          I take pride in my work and strive to deliver the best results for my clients. Here are a few examples of my latest projects:
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-6'>
          {workData.map((project, index) => (
            <div 
              key={index} 
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-xl
              relative cursor-pointer group overflow-hidden animate-fade-in shadow-lg'
              style={{ 
                backgroundImage: `url(${project.bgImage})`,
                animationDelay: `${0.1 * (index + 1)}s` 
              }}
            >
              {/* Overlay for hover effect */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              
              {/* Project info card */}
              <div className={`${
                isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
              } w-10/12 rounded-lg absolute bottom-5 left-1/2 -translate-x-1/2
              py-4 px-5 flex items-center justify-between shadow-lg transition-all duration-500 
              group-hover:bottom-8 group-hover:scale-105`}>
                
                <div>
                  <h3 className={`font-semibold ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                </div>

                <div className={`p-2 rounded-full ${
                  isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                } transition-colors duration-300`}>
                  <Image 
                    src={assets.send_icon} 
                    alt='View project' 
                    className='w-5 h-5 transition-transform duration-300 group-hover:rotate-45'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative line */}
        <div className={`w-24 h-1 mx-auto mt-8 rounded-full animate-pulse ${
          isDark ? 'bg-blue-600' : 'bg-blue-500'
        }`}></div>

        <div className="flex justify-center mt-12 mb-6">
          <a 
            href="#" 
            className={`inline-flex items-center justify-center gap-3 py-3.5 px-12 
            rounded-full transition-all duration-300 hover:shadow-lg animate-fade-in
            ${isDark 
              ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700' 
              : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 shadow-sm'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            <span className="font-medium">Show more</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
        
    </div>
  )
}

export default Work