import React from 'react';
import classes  from './Encounter.module.css'

type EncounterPropsType ={
    counter : number
    maxValue : number
}

function Encounter(props:EncounterPropsType) {
  return (
    <div className={classes.encounterField}>
      <div className={props.counter === props.maxValue ? classes.encounterRed : classes.encounter} >{props.counter}</div>
    </div>
  );
}

export default Encounter;
