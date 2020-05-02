import React from 'react';
import style from './Organisation.module.css'

function Organisation({name,clickDelete,id,url,labels}) {
    return (
        <div className ={style.Orga}>
      
        <div className={style.Title}>{name}<span className={style.close} onClick={()=> clickDelete(id)}>×</span></div>
        <p>Website: <a href={url}>  {url}</a></p>
        <span>
            {labels.map((label)=>{return (<div className={style.Badge} key={label.id}>{label.name}</div>);})}
        </span>
      </div>
    );
}

export default Organisation;