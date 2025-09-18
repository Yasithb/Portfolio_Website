import Image from 'next/image'
import { assets } from '@/assets/assets'
import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col 
    items-center justify-center gap-4'>
      <div className="animate-fade-in hover-scale"> 
        <Image 
          src={assets.profile_img} 
          alt='Profile picture' 
          className='rounded-full w-64 shadow-xl transition-all duration-500' 
        />
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo animate-slide-up'>
        Hi! I'm Yasith Banula <Image src={assets.hand_icon} alt='Hand waving icon' 
        className='w-6 animate-pulse' /> </h3>

        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo animate-slide-up' 
             style={{ animationDelay: '0.2s' }}>
            A Frontend Developer
        </h1>
        
        <p className={`max-w-2xl mx-auto font-ovo animate-slide-up ${isDark ? 'text-gray-300' : ''}`}
           style={{ animationDelay: '0.4s' }}>
          I am a passionate frontend developer with a knack for creating beautiful and functional web applications.
          I love to learn new technologies and improve my skills. I am always looking for new challenges and opportunities to grow as a developer.
        </p>
        
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 animate-slide-up'
             style={{ animationDelay: '0.6s' }}>
            <a href="#contact"
                className={`px-10 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  isDark 
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
            >
              Contact me 
              <Image 
                src={assets.right_arrow_white}
                alt='Right arrow icon' 
                className='w-4 transition-transform duration-300 group-hover:translate-x-1' 
              /> 
            </a>

            <a href="/sample-resume.pdf" download
                className={`px-10 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                  isDark 
                    ? 'border border-gray-600 text-white hover:bg-gray-800'
                    : 'border border-gray-500 hover:bg-gray-100'
                }`}
            >
              My resume 
              <Image 
                src={assets.download_icon}
                alt='Download icon' 
                className='w-4 transition-transform duration-300 group-hover:translate-y-1'
              /> 
            </a>
        </div>
    </div>
  )
}

export default Header
