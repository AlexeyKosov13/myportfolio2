import React from 'react';
import { useRef } from 'react';
import { TimeLineData } from '../Projects';

import './About.scss';

function About() {

  const carouselRef = useRef();
  return (
    <section className="container about__container">
        <div className="divider"></div>
        <div className="about__title title">Обо мне</div>
        <div className="about__carousel" ref={carouselRef}>
            <>
              {TimeLineData.map((item, index) => (

              )

              )}
            </>
        </div>
    </section>
  )
}

export default About