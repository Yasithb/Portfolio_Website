import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useTheme } from '../context/ThemeContext'

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div id='contact' className='w-full px-[12%] py-16 scroll-mt-20 relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className="absolute -z-10 w-full h-full top-0 left-0 opacity-10">
        <div className={`absolute w-96 h-96 rounded-full ${isDark ? 'bg-blue-700' : 'bg-blue-200'} blur-[150px] -top-20 -left-20`}></div>
        <div className={`absolute w-96 h-96 rounded-full ${isDark ? 'bg-purple-700' : 'bg-purple-200'} blur-[150px] bottom-0 right-0`}></div>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <h4 className={`text-center mb-2 text-lg font-ovo animate-slide-up ${
          isDark ? 'text-blue-400' : 'text-blue-600'
        }`}>
          Connect with me
        </h4>

        <h2 className='text-center text-5xl font-ovo animate-slide-up' style={{ animationDelay: '0.1s' }}>
          Get in touch
        </h2>

        <p className={`text-center max-w-2xl mx-auto mt-6 mb-10 font-ovo animate-slide-up ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`} style={{ animationDelay: '0.2s' }}>
          I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name Input */}
            <div className="relative">
              <input 
                type="text" 
                name="name" 
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name" 
                className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500' 
                    : 'bg-white border-gray-200 text-gray-800 focus:ring-blue-300'
                }`}
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <input 
                type="email" 
                name="email" 
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email" 
                className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500' 
                    : 'bg-white border-gray-200 text-gray-800 focus:ring-blue-300'
                }`}
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="mb-8">
            <textarea 
              name="message" 
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message" 
              rows="5"
              className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500' 
                  : 'bg-white border-gray-200 text-gray-800 focus:ring-blue-300'
              }`}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`group relative overflow-hidden rounded-full px-10 py-3 font-medium ${
                isDark 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-black hover:bg-gray-800 text-white'
              } transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              <span className="relative flex items-center gap-2">
                {isSubmitting ? 'Submitting...' : 'Submit now'}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </button>
          </div>

          {/* Success Message */}
          {submitSuccess && (
            <div className={`mt-6 p-4 rounded-lg text-center animate-fade-in ${
              isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'
            }`}>
              Thank you for your message! I'll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact