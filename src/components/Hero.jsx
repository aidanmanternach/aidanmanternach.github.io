import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github, mail } from '../assets';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 max-w-7xl mx-auto flex flex-row items-center gap-5`}>
        <div className={`${styles.paddingX} ${styles.heroHeadText}`}>
          <h1><span className="text-black">Aidan <br></br> Manternach</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-gray`}>
            Computer Engineer
          </p>
        </div>
        
        <div className="flex flex-col gap-8 ml-auto mt-12">
          <a href="https://github.com/aidanmanternach" target="_blank" rel="noopener noreferrer">
            <button className="bg-transparent p-0 transform hover:scale-105 transition duration-300">
              <img src={github} alt="GitHub" className="w-16 h-16 filter invert" />
            </button>
          </a>
          
          <a href="mailto:aidanconnor141@gmail.com">
            <button className="bg-transparent p-0 transform hover:scale-105 transition duration-300">
              <img src={mail} alt="Email" className="w-16 h-16" />
            </button>
          </a>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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
        className="w-6 h-6 border-b-4 border-l-4 border-black rounded-bl-lg transform -rotate-45"
      ></div>
    </motion.div>
  </a>
</div>
    </section>
  );
};

export default Hero;