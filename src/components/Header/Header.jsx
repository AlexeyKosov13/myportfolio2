import React from 'react';
import { DiCssdeck } from 'react-icons/di';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import './Header.scss';

function Header() {
  return (
      <div className='container header-container'>
          <div className="header__name">
                  <a href="#" className="header__logo">
                    <DiCssdeck className='header__logo-img' />
                    <span>Portfolio</span>
                </a>           
          </div>
          <nav className="header__nav">
              <ul className='header__nav-items'>
                  <li className='header__nav-item'>
                      <a href='#projects' className='header__nav-link'>
                          Проекты
                      </a>
                  </li>
                  <li className='header__nav-item'>
                      <a href='#technologies' className='header__nav-link'>
                          Технологии
                      </a>
                  </li>
                  <li className='header__nav-item'>
                      <a href='#about' className='header__nav-link'>
                          Обо мне
                      </a>
                  </li>
              </ul>
          </nav>
          <div className="header__social">
              <a href="https://t.me/fosterkos">
                  <img src='/images/social/telegram.png' alt='telegram' className='header__social-logo'/>
              </a>
              <a href="https://vk.com/id20826044">
                <img src='/images/social/vk.png' alt='vk' className='header__social-logo'/>
              </a>
              <a href="https://github.com/AlexeyKosov13">
              <img src='/images/social/github.png' alt='github' className='header__social-logo'/>
              </a>
          </div>
    </div>
  )
}

export default Header;