import React from 'react';
import './Technologies.scss';
// import HTML5 from '../../images/skills/js.svg';

function Technologies() {
  return (
    <section id='technologies' className="container technologies__container">
        <div className="divider"></div>
        <h2 className="technologies__title title">Технологии</h2>
        <div className="techonologies__subtitle">Технологии применяемые мной при разработке приложений и сайтов</div>
        <div className="technologies__items">
            <div className="skills__wrapper">
                    <div className="skills__item">
                        <div className="skills__item-img">
                            <img src="/images/skills/html5.svg" alt="html5" />
                        </div>
                        
                        <h4 className="skills__item-title title_fz14">HTML5</h4>
                        <div className="skills__item-text">Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта</div>
                    </div>
                    <div className="skills__item">
                        <div className="skills__item-img">
                            <img src="/images/skills/css3.svg" alt="css3" />
                        </div>
                        
                        <h4 className='skills__item-title' >css3</h4>
                        <div className="skills__item-text"> Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией
                        </div>
                    </div>
                    <div className="skills__item">
                        <div className="skills__item-img">
                            <img src="/images/skills/js.svg" alt="js" />
                        </div>
                        
                        <h4 clasName="skills__item-title">Java Script</h4>
                        <div className="skills__item-text">Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое</div>
                    </div>
                    <div className="skills__item">
                        <div className="skills__item-img">
                            <img src="/images/skills/jquery.svg" alt="jquery" />
                        </div>
                        
                        <h4 className="skills__item-title title_fz14">Jquery</h4>
                        <div className="skills__item-text">Библиотека Jquery позволит ускорить разработку. Без необходимости интегрировать в проект мы её не будем, но навык работы с ней присутствует</div>
                    </div>
                    <div className="skills__item">
                        <div className="skills__item-img">
                            <img src="/images/skills/react.svg" alt="react" />
                        </div>
                        
                        <h4 className="skills__item-title title_fz14">React</h4>
                        <div className="skills__item-text">Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели</div>
                    </div>
                    <div className="skills__item">
                        <div className="skills__item-img">
                            <img src="/images/skills/node.js.svg" alt="node" />
                        </div>
                        
                        <h4 className="skills__item-title title_fz14">Node.js</h4>
                        <div className="skills__item-text">Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит</div>
                    </div>                   
                </div>
            </div>
    </section>
  )
}

export default Technologies