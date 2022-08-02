import React, { useState } from "react";
import { useRef } from "react";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context";
import { TimeLineData } from "../Projects";
import CountUp from 'react-countup';

import "./About.scss";

function About() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );
      setActiveItem(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <section className="container about__container" id="about">
      <div className="divider"></div>
      <div className="about__title title">Обо мне</div>
      <div
        className="about__carousel"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        <>
          {TimeLineData.map((item, index) => (
            <div className="carousel__mobile" key={index} final={index}>
              <div
                className="carousel__item" data-aos="zoom-in"
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <div
                  className="item__title"
                  style={{ color: darkMode && "white" }}
                >
                  <div>
                    <CountUp enableScrollSpy duration={2} end={item.year} />
                  </div>
                 
                  
                  <svg
                    className="carousel__item-img"
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="150"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop
                          offset="0.79478"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="item__text">{item.text}</div>
              </div>
            </div>
          ))}
        </>
      </div>
      <div className="carousel__buttons">
        {TimeLineData.map((item, index) => (
          <div
            className="carousel__button"
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <div className="carousel__button-dot"
              active={activeItem}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
