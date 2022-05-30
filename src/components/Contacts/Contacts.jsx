import React from "react";
import Button from "../Buttons/Button";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import "./Contacts.scss";

function Contacts() {
  return (
    <section className="container contacts__container">
      <div className="divider"></div>
      <h2 className="title title__section-title">Контакты</h2>
      <div class="contacts__wrapper">
        <div className="contacts__photo">
          <img src="/images/main_photo.jpg" alt="contactPhoto" className="photo" />
        </div>
        <div className="contacts__descr">
          <div className="contacts__text">Свяжитесь со мной</div>

          <div className="contacts__text">Любым удобным для вас способом:</div>
          <div className="contacts__social">
            <a href="https://t.me/fosterkos" >
            <img src='/images/social/telegram.png' alt='telegram' className='header__social-logo'/>
            </a>
            <a href="https://vk.com/id20826044">
            <img src='/images/social/vk.png' alt='vk' className='header__social-logo'/>
            </a>
            <a
              href="https://github.com/AlexeyKosov13"  
            >
              <img src='/images/social/github.png' alt='github' className='header__social-logo'/>
            </a>
          </div>
          <div className="contacts__text">
            Или оставьте ваши данные и я сам вам напишу:
          </div>
          <form action="#" class="contacts__form">
            <div className="contacts__input">
              <input name="name" type="text" id="name" />
              <label for="name">Ваше имя</label>
            </div>
            <div className="contacts__input">
              <input name="email" type="email" id="email" />
              <label for="email">Выша почта</label>
            </div>
            <div className="contacts__textarea">
              <textarea name="text" id="text"></textarea>
              <label for="text">Ваше сообщение</label>
            </div>
            <div className="contacts__btn">
              <Button >Отправить сообщение</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
