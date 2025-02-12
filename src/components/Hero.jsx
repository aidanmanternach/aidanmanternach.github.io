import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github, mail } from '../assets';

import { useTheme } from './ThemeContext';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 max-w-7xl mx-auto flex flex-col sm:flex-row mt-20 sm:mt-0 items-center gap-5`}>
        <div className={`${styles.paddingX} ${styles.heroHeadText} mt-20 sm:mt-0 text-center sm:text-left`}>
          <h1><span className={`${theme === "light" ? 'text-black' : 'text-[#f2f0ef]'}`}>Aidan <br></br> Manternach</span></h1>
          <p className={`${styles.heroSubText} mt-2 ${theme === "light" ? 'text-gray' : 'text-offWhiteComp'} text-center sm:text-left`}>
            Computer Engineer
          </p>
        </div>
        
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 sm:static sm:left-auto sm:translate-x-0 sm:ml-auto sm:mr-[10%] flex flex-row sm:flex-col gap-8 mt-20 sm:mt-12 justify-center sm:justify-start items-center">
          <a href="https://github.com/aidanmanternach" target="_blank" rel="noopener noreferrer">
            <button className="bg-transparent p-0 transform hover:scale-105 transition duration-300">
              <img src={github} alt="GitHub" className={`w-16 h-16 ${theme === 'light' ? 'filter invert' : ''}`} />
            </button>
          </a>
          
          <a href="mailto:example@gmail.com">
            <button className={`bg-transparent p-0 transform hover:scale-105 transition duration-300 ${theme === 'dark' ? 'filter invert' : ''}`}>
              <img src={mail} alt="Email" className="w-16 h-16" />
            </button>
          </a>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-7 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex items-center justify-center"
          >
            <div
              className={`w-6 h-6 border-b-4 border-l-4 ${theme === 'light' ? 'border-black' : 'border-offWhite'} rounded-bl-lg transform -rotate-45`}
            ></div>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;