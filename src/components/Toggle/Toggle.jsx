import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import './Toggle.scss';

function Toggle() {
    const theme = useContext(ThemeContext);
    const handleClick = () => {
        theme.dispatch({ type: 'TOGGLE' });
    }
  return (
      <div className="toggle">
          <img src="/images/sun.svg" alt="sun" className="toggle__icon" />
          <img src="/images/moon.svg" alt="sun" className="toggle__icon" />
          <div className="toggle__button" onClick={handleClick} style={{left: theme.state.darkMode ?0:30}}></div>
   </div>
  )
}

export default Toggle