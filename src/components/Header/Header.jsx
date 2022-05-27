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
              <a href="#">
                  <AiFillGithub className='header__social-logo'/>
              </a>
              <a href="#">
                  <AiFillLinkedin className='header__social-logo'/>
              </a>
              <a href="#">
                  <AiFillInstagram className='header__social-logo'/>
              </a>
          </div>
    </div>
  )
}

export default Header;