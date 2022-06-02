import React from "react";
import { projects } from "../Projects";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import Button from "../Buttons/Button";
import "./Projects.scss";

function Projects() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section id="projects" className="container projects__container">
      <div className="divider"></div>
      <h2 className="projects__title title">Проекты</h2>
      <div className="projects__items">
        {projects.map((item) => (
          <div className="projects__item" key={item.id}>
            <div className="item__browser">
              <div className="item__browser-circle"></div>
              <div className="item__browser-circle"></div>
              <div className="item__browser-circle"></div>
            </div>
            <div className="item__img">
              <img src={item.image} alt="project" className="item__img-image" />
            </div>
            <div className="item__info">
              <div className="item__text">
                <h2
                  className="item__title"
                  style={{ color: darkMode && "#9cc9e3" }}
                >
                  {item.title}
                </h2>
                <div
                  className="item__description"
                  style={{ color: darkMode && "#e4e6e7" }}
                >
                  {item.description}
                </div>
              </div>

              <div className="item__tags">
                <h3 className="item__tags-title">Stack</h3>
                <div className="item__tags-list">
                  {item.tags.map((tag, i) => (
                    <div className="item__tag" key={i}>
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="item__links">
                  <div className="item__link-btn">
                    <Button buttonStyle="btn--primary" buttonSize="btn--medium">
                      <a
                        href={item.source}
                        target="_blank"
                        className="item__link"
                        style ={{color:darkMode && '#fff'}}
                      >
                        Код
                      </a>
                    </Button>
                  </div>
                  <div className="item__link">
                    <Button buttonStyle="btn--primary" buttonSize="btn--medium">
                      <a
                        href={item.visit}
                        target="_blank"
                        className="item__link"
                        style ={{color:darkMode && '#fff'}}
                        style ={{color:darkMode && '#fff'}}
                      >
                        Сайт
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
