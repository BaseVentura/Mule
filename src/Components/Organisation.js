import React from 'react';
import style from './Organisation.module.css'

function Organisation({orga,clickDelete,id,url,labels}) {
    return (
        <div className ={style.Orga}>
      
        <div className={style.Title}>{orga}<span className={style.close} onClick={()=> clickDelete(id)}>×</span></div>
        <p>Website: <a href={url}>  {url}</a></p>
        <span>
            {labels.map((e, ix)=>{return (<div className={style.Badge} key={e.id}>{e.name}</div>);})}
        </span>
      </div>
    );
}

export default Organisation;