import React from 'react';
import BgAnimation from '../BackgroundAnimation/BgAnimation';
import Hero from '../Hero/Hero';
import './Section.scss';

function Section() {
  return (
      <div className='container section'>
          <Hero />
          <BgAnimation />
    </div>
  )
}

export default Section