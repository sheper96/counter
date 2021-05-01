import React from 'react';
import classes from './Buttons.module.css'
import Button from "./Button/Button";

type ButtonsPropsType = {
    inc: any
    reset: any
    counter: number
    maxValue: number
}

function ButtonsTest(props: ButtonsPropsType) {


    return (
        <div>
            <div className={classes.buttonsField}>
                <div className={classes.buttons}>
                    <Button onClick={props.inc} btnTitle={'inc'} counter={props.counter} disabled={props.counter >  props.maxValue- 1}/>
                    <Button onClick={props.reset} btnTitle={'reset'} counter={props.counter}
                            disabled={props.counter === 0}/>
                </div>

            </div>
        </div>
    );
}

export default ButtonsTest;
