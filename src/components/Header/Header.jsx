import React from 'react';
import { DiCssdeck } from 'react-icons/di';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import './Header.scss';

function Header() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

  return (
      <div className='container header-container'>
          <div className="header__name">
                  <a href="#" className="header__logo" style={{ color:darkMode && '#fff'}}>
                    <DiCssdeck className='header__logo-img' />
                    <span style={{ color:darkMode && '#fff'}}>Portfolio</span>
                </a>           
          </div>
          <nav className="header__nav">
              <ul className='header__nav-items' >
                  <li className='header__nav-item'>
                      <a href='#projects' className='header__nav-link' style={{color: darkMode && 'white' }}>
                          Проекты
                      </a>
                  </li>
                  <li className='header__nav-item'>
                      <a href='#skills' className='header__nav-link' style={{color: darkMode && 'white' }}>
                          Технологии
                      </a>
                  </li>
                  <li className='header__nav-item'>
                      <a href='#about' className='header__nav-link' style={{color: darkMode && 'white' }}>
                          Обо мне
                      </a>
                  </li>
              </ul>
          </nav>
          <div className="header__social" >
              <a href="https://t.me/fosterkos" target='_blank'>
                  <img src='/images/social/telegram.png' alt='telegram' className='header__social-logo' style={{filter: darkMode && 'invert(1)'}}/>
              </a>
              <a href="https://vk.com/id20826044" target='_blank'>
                <img src='/images/social/vk.png' alt='vk' className='header__social-logo' style={{filter: darkMode && 'invert(1)' }} />
              </a>
              <a href="https://github.com/AlexeyKosov13" target='_blank'>
              <img src='/images/social/github.png' alt='github' className='header__social-logo' style={{filter: darkMode && 'invert(1)' }}/>
              </a>
          </div>
    </div>
  )
}

export default Header;