import React from 'react';
import classes from './StartValue.module.css'
import Button from "../Buttons/Button/Button";


type StartValuePropsType = {
    startValue: number
    maxValue: number
    onChangeStartValue: any
    onChangeMaxValue: any
    setValue:any
    setDafaultValue:any

}


function StartValue(props: StartValuePropsType) {
    let onChangeStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        let startValue = e.currentTarget.value
        let intStartValue = parseInt(startValue, 10)
        console.log(typeof startValue)
        console.log(startValue)
        console.log(typeof intStartValue)
        console.log(intStartValue)
        props.onChangeStartValue(intStartValue)
    }
    let onChangeMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        let maxValue = e.currentTarget.value
        let intMaxValue = parseInt(maxValue, 10)
        props.onChangeMaxValue(intMaxValue)
    }
    return (
        <div className={classes.encounterField}>
            <div>
                <input type="number" value={props.startValue} onChange={onChangeStartValue}/>
                <input type="number" value={props.maxValue} onChange={onChangeMaxValue}/>
                <Button onClick={props.setValue} btnTitle={'setValue'}/>
                <Button onClick={props.setDafaultValue} btnTitle={'setDefaultValue'}/>
            </div>
        </div>
    );
}

export default StartValue;
