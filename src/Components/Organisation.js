import React from 'react';
import style from './Organisation.module.css'

function Organisation(props) {
    return (
        <div className ={style.Orga}>
      
        <p> Organisation: {props.orga}</p>
        <p>Website: <a href={props.url}>  {props.url}</a></p>
        <p> Bereich: {props.label}</p>
      </div>
    );
}

export default Organisation;