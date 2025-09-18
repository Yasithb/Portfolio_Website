import Image from 'next/image';
import { assets, infoList, toolsData } from '@/assets/assets';
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className={`text-center mb-2 text-lg font-ovo animate-slide-up ${
        isDark ? 'text-blue-400' : 'text-blue-600'
      }`}>
        Introduction
      </h4>

      <h2 className='text-center text-5xl font-ovo animate-slide-up'>
        About me
      </h2>

      <div className='flex flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none animate-slide-right'>
          <Image 
            src={assets.user_image} 
            alt='user' 
            className='w-full rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105' 
          />
        </div>
        <div className='flex-1 animate-slide-left'>
          <p className={`mb-10 max-w-2xl font-ovo ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I am a passionate frontend developer with a knack for creating beautiful and functional web applications. 
            I love to learn new technologies and improve my skills. I am always looking for new challenges and 
            opportunities to grow as a developer. I am an experienced Frontend Developer with over a decade of 
            professional expertise in the field. Throughout my career, I have had the privilege of collaborating with 
            prestigious organizations, contributing to their success and growth.
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li 
                className={`border-[0.5px] rounded-xl p-6 cursor-pointer transition-all duration-500 hover:-translate-y-2 ${
                  isDark 
                    ? 'border-gray-700 bg-gray-800 hover:bg-gray-700 hover:shadow-lg'
                    : 'border-gray-400 hover:bg-lightHover hover:shadow-black'
                }`}
                key={index}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <Image 
                  src={isDark ? iconDark : icon} 
                  alt={title} 
                  className='w-7 mt-3 transition-transform duration-300 hover:scale-110' 
                />
                <h3 className={`my-4 font-semibold ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  {title}
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {description}
                </p>
              </li>
            ))}
          </ul>
          
          <h4 className={`my-6 font-Ovo animate-slide-up ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Tools I use
          </h4>

          <ul className='flex items-center gap-3 sm:gap-5 animate-slide-up'>
            {toolsData.map((tool, index) => (
              <li 
                className={`flex items-center justify-center w-12 sm:w-14 aspect-square border rounded-lg cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-lg ${
                  isDark 
                    ? 'border-gray-700 bg-gray-800 hover:bg-gray-700'
                    : 'border-gray-400 hover:bg-gray-100'
                }`}
                key={index}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <Image 
                  src={tool} 
                  alt='Tool' 
                  className='w-5 sm:w-7 transition-transform duration-300 hover:scale-110' 
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;