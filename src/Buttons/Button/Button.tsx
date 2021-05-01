import React from 'react';
import classes  from    '.././Buttons.module.css'

type ButtonsPropsType ={
    inc?:any
    reset?:any
    counter? : number
    onClick:any
    btnTitle: string
    disabled? : any


}

function Button(props:ButtonsPropsType) {

    const styles = props.btnTitle === 'inc' ? classes.inc : classes.reset


  return (
      <button  disabled={props.disabled} onClick={props.onClick} className={styles}>{props.btnTitle}</button>
  );
}
export default Button;
