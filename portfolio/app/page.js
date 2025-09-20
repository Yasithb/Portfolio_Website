'use client'
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`${isDark ? 'bg-gray-900' : 'bg-white'} min-h-screen`}>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}
