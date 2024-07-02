import React from 'react'

import classes from "./Button.module.css";
export const Button = (props) => {

  const {isOutLine,text,icon,...rest} = props;
  return (
    <button {...rest} className={isOutLine ?  classes.outline_btn:classes.primary_btn}>
      
     
      {icon}
      {text}
    
    </button>
  )
}
