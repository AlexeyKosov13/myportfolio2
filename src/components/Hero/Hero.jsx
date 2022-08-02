import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Typewriter from "typewriter-effect";
import Button from "../Buttons/Button";
import "./Hero.scss";

function Hero({ handleClick }) {
  return (
    <section className="hero__container">
      <div className="hero__text">
        <h1 className="hero__title" >
          <span data-aos="fade-up"> Добро пожаловать, </span> 
          <Typewriter
            options={{
              strings: ["меня зовут Алексей", "я являюсь junior frontend разработчиком"],
              autoStart: true,
              loop: true,
            } }
          />
        </h1>
        <p className="hero__description">
        
        </p>
        <Link to="about" smooth={true} offset={-20} duration={500}>
          <Button
            className="btns"
            onClick={handleClick}
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Узнать больше
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
