import React from "react";
import "./Button.scss";
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

function Button({ children, type, onClick, buttonStyle, buttonSize }) {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        style={{ color:darkMode && '#fff' , border: darkMode && '1px solid rgba(255, 255, 255, 0.33)'}}
      >
        {children}
      </button>
  
  );
}

export default Button;
