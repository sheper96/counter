import React, {useEffect, useState} from 'react';
import './App.css';
import Encounter from "./Encounter/Encounter";
import ButtonsTest from "./Buttons/ButtonsTest";
import StartValue from "./StartValue/StartValue";

function App() {

    let [counter, setCounter] = useState(0)

    let [startValue, setStartValue] = useState(0)
    let [maxValue, setMaxValue] = useState(7)

    useEffect(()=>{
        let valueAsString = localStorage.getItem('counterValue')
        let maxValueAsString = localStorage.getItem('maxValue')
            let startValueAsString = localStorage.getItem('startValue')
        if (valueAsString && maxValueAsString && startValueAsString){
            let newValue = JSON.parse(valueAsString)
            setCounter(newValue)
            setMaxValue(JSON.parse(maxValueAsString))
            setStartValue(JSON.parse(startValueAsString))
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('counterValue', JSON.stringify(counter))
    },[counter])

    useEffect(()=>{
        localStorage.setItem('startValue', JSON.stringify(startValue))
    },[startValue])

    useEffect(()=>{
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    },[maxValue])



    function inc() {
        setCounter(counter + 1)
        console.log(counter)
        console.log(typeof counter)
    }

    function reset() {
        setCounter(0)

    }

    function onChangeStartValue(startValue:number) {
        setStartValue(startValue)

    }
    function onChangeMaxValue(maxValue:number) {
        setMaxValue(maxValue)
    }

    const setDafaultValue = () =>{
        setStartValue(0)
        setMaxValue(5)
    }

    function setValue(){
        setCounter(startValue)
    }

    return (
        <div className='App'>
        <div className="app-box">
            <StartValue startValue={startValue}
                        maxValue={maxValue}
                        onChangeStartValue={onChangeStartValue}
                        onChangeMaxValue={onChangeMaxValue}
                        setValue={setValue}
                        setDafaultValue={setDafaultValue}/>

        </div>
            <div className="app-box">
                <Encounter counter={counter} maxValue={maxValue}/>
                <ButtonsTest inc={inc} reset={reset} counter={counter} maxValue={maxValue}/>
                <button onClick={()=> console.log(counter)}>123</button>
            </div>
        </div>

    );
}

export default App;
