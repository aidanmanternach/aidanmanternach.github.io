import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';
import { useTheme } from './ThemeContext';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full black-white-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-offWhiteComp rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-20 h-20 object-contain" />
          <h3 className="text-black text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  const { theme } = useTheme();

  return (
    <section id="about">
      <motion.div variants={textVariant()}>
        <p className={`${theme === 'light' ? styles.sectionSubText : styles.sectionSubTextDark}`}>Introduction</p>
        <h2 className={`${theme === 'light' ? styles.sectionHeadText : styles.sectionHeadTextDark}`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 ${theme === 'light' ? 'text-gray' : 'text-offWhiteComp'} text-[17px] max-w-3xl leading-[30px]`}
      >
        I hold a BS in Computer Engineering and am currently pursuing an MS in Machine Learning and Data Science at UC San Diego. 
        With a strong passion for computer science and machine learning, I am always eager to explore new challenges and opportunities. 
        Feel free to reach out if you'd like to connect.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={services.title} index={index} {...service} />
        ))}
      </div>
    </section>
  )
}

export default SectionWrapper(About, "about");