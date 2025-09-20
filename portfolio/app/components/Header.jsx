import Image from 'next/image'
import { assets } from '@/assets/assets'
import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className='w-11/12 max-w-7xl mx-auto h-screen pt-24 flex flex-row
    items-center justify-between'>
      <div className='max-w-2xl flex flex-col gap-6'>
        <div className='flex flex-col'>
          <h1 className='text-4xl sm:text-6xl lg:text-7xl font-bold animate-slide-up mb-2'>
            Hi, I'm Yasith
          </h1>
          <h1 className='text-4xl sm:text-6xl lg:text-7xl font-bold animate-slide-up' 
              style={{ animationDelay: '0.2s' }}>
            Banula
          </h1>
          
          <div className='mt-3 text-xl md:text-2xl lg:text-3xl font-ovo overflow-hidden whitespace-nowrap'
              style={{ animationDelay: '0.3s' }}>
            <span className="relative inline-block animate-typewriter">
              <span className="animate-typewriter-color">Full-Stack Developer & QA Enthusiast</span>
            </span>
          </div>
        </div>
        
        <p className={`text-base md:text-lg mt-4 animate-slide-up ${isDark ? 'text-gray-300' : ''}`}
           style={{ animationDelay: '0.4s' }}>
          Energetic and enthusiastic undergraduate student pursuing a BSc (Hons) in Industrial Information Technology at 
          University. Driven by a strong interest in Quality Assurance, Business Analysis and Project Management 
          with a focus on bridging the gap between technology and business needs.
        </p>
        
        <div className='flex flex-row items-center gap-4 mt-4 animate-slide-up'
             style={{ animationDelay: '0.6s' }}>
            <a href="#contact"
                className={`px-10 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  isDark 
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
            >
              Hire Me
            </a>

            <a href="#contact"
                className={`px-10 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                  isDark 
                    ? 'border border-blue-600 text-white hover:bg-blue-600/20'
                    : 'border border-blue-500 text-blue-500 hover:bg-blue-50'
                }`}
            >
              Let's Talk
            </a>
        </div>
        
        <div className='flex flex-row items-center gap-3 mt-4 animate-slide-up'
             style={{ animationDelay: '0.8s' }}>
            <a href="#" className='w-10 h-10 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition-all duration-300'>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className='w-10 h-10 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition-all duration-300'>
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className='w-10 h-10 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition-all duration-300'>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className='w-10 h-10 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition-all duration-300'>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className='w-10 h-10 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition-all duration-300'>
              <i className="fab fa-blogger-b"></i>
            </a>
        </div>
      </div>
      
      <div className="hidden lg:block animate-fade-in relative">
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-600 opacity-75 blur-lg animate-pulse-slow"></div>
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-50 animate-spin-slow"></div>
        <div className="relative rounded-full overflow-hidden border-2 border-blue-500 w-[400px] h-[400px]">
          <Image 
            src={assets.user_image1 || assets.profile_img}
            alt="Profile picture"
            width={400}
            height={400} 
            className="object-cover w-full h-full relative z-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent z-20"></div>
        </div>
      </div>
    </div>
  )
}

export default Header
