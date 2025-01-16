import React from 'react';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

import { styles } from '../styles';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <img src={technology.icon} className={styles.hoverEnlarge} alt={technology.name} />
        </div>
      ))}
    </div>
  )
}

export default Tech;