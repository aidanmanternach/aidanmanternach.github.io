import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className={`${styles.heroHeadText}`}>
          <h1>Hi, I'm <span className="text-[#915eff]">Aidan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a computer engineering student
          </p>
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
        className="w-8 h-8 border-b-4 border-l-4 border-secondary rounded-bl-lg transform -rotate-45"
      ></div>
    </motion.div>
  </a>
</div>
    </section>
  );
};

export default Hero;