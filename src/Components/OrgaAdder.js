import React, { useState } from 'react';
import styles from './OrgaAdder.module.css'

function OrgaAdder(props) {


    const [name, setName] =useState('');
    const [url, setUrl] =useState('');
    const [label, setLabel] =useState('');

    
    return (
        <div className={styles.OrgaAdder}>
        <div className="title">Organisation hinzufügen</div>
         <div>
            <input onChange={(event) => setName(event.target.value)} type="text" defaultValue="Enter Name"></input>
         </div>
         <div>   
            <input onChange={(event)=> setUrl(event.target.value)} type="text" defaultValue="Enter URL"></input>
        </div>
        <div> 
         <input onChange={(event)=> setLabel(event.target.value)} type="text" defaultValue="Enter Label"></input>
        </div>
         <button onClick={()=>props.click(name, url, label)}>Add</button> 
        </div>
    );
}

export default OrgaAdder;