import React from 'react';
import style from './Organisation.module.css'

function Organisation(props) {
    return (
        <div className ={style.Orga}>
      
        <div className={style.Title}>{props.orga}</div>
        <p>Website: <a href={props.url}>  {props.url}</a></p>
        <span>
            {props.labels.map((e, ix)=>{return (<div className={style.Badge} key={e.id}>{e.name}</div>);})}
        </span>
      </div>
    );
}

export default Organisation;