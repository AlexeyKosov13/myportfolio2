import React from "react";
import { useRef } from "react";
import Button from "../Buttons/Button";
import emailjs from "emailjs-com";
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import "./Contacts.scss";

function Contacts() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_s55zuvs', 'template_cu51ppo', form.current, 'tJp-Z8xUsFWhX1NEd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="container contacts__container">
      <div className="divider"></div>
      <h2 className="title title__section-title">Контакты</h2>
      <div className="contacts__wrapper">
        <div className="contacts__photo">
          <img
            src="/images/main_photo.jpg"
            alt="contactPhoto"
            className="photo"
          />
        </div>
        <div className="contacts__descr">
          <div className="contacts__text">Свяжитесь со мной</div>

          <div className="contacts__text">Любым удобным для вас способом:</div>
          <div className="contacts__social">
            <a href="https://t.me/fosterkos" target='_blank' > 
              <img
                src="/images/social/telegram.png"
                alt="telegram"
                className="header__social-logo"
                style={{filter: darkMode && 'invert(1)'}}
              />
            </a>
            <a href="https://vk.com/id20826044" target='_blank'>
              <img
                src="/images/social/vk.png"
                alt="vk"
                className="header__social-logo"
                style={{filter: darkMode && 'invert(1)'}}
              />
            </a>
            <a href="https://github.com/AlexeyKosov13" target='_blank'>
              <img
                src="/images/social/github.png"
                alt="github"
                className="header__social-logo"
                style={{filter: darkMode && 'invert(1)'}}
              />
            </a>
          </div>
          <div className="contacts__text">
            Или оставьте ваши данные и я сам вам напишу:
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contacts__form"
          >
            <div className="contacts__input">
              <input name="name" type="text" id="name" />
              <label htmlFor="name">Ваше имя</label>
            </div>
            <div className="contacts__input">
              <input name="email" type="email" id="email" />
              <label htmlFor="email">Ваша почта</label>
            </div>
            <div className="contacts__textarea">
              <textarea name="message" id="text"></textarea>
              <label htmlFor="text">Ваше сообщение</label>
            </div>
            <div className="contacts__btn">
              <Button type="submit">Отправить сообщение</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
