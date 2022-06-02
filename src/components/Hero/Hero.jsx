import React from 'react';
import Button from '../Buttons/Button';
import './Hero.scss';

function Hero({handleClick}) {
  return (
      <section className='hero__container'>
          <div className="hero__text">
              <h1 className="hero__title">
                  Добро пожаловать <br />
                  В мое портфолио
              </h1>
              <p className="hero__description">
                  Меня зовут Алексей. На данный момент я являюсь junior Front-end разработчиком. 
              </p>
              <Button className='btns btn__secondary' onClick={handleClick}>Узнать больше</Button>
          </div>   
    </section>
  )
}

export default Hero;