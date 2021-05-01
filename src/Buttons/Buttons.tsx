import React from 'react';
import classes  from    './Buttons.module.css'

type ButtonsPropsType ={
    inc:any
    reset:any
    counter : number
}

function Buttons(props:ButtonsPropsType) {
  return (
    <div >
      <div className={classes.buttonsField}>
          <div className={classes.buttons}>
              <button disabled={props.counter === 5} onClick={props.inc} className={props.counter === 5 ? classes.disabledInc :  classes.inc}>INC</button>
              <button disabled={props.counter ===0 } onClick={props.reset} className={props.counter === 0 ? classes.disabledReset :  classes.reset}>RESET</button>
          </div>

      </div>
    </div>
  );
}

export default Buttons;
