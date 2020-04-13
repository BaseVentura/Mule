import React from 'react';
import styles from './OrgaAdder.module.css'

function OrgaAdder(props) {
    return (
        <div className={styles.OrgaAdder}>
        <div className="title">Organisation hinzufügen</div>
         <div>
            <input id="Name" type="text" defaultValue="Enter Name"></input>
         </div>
         <div>   
            <input type="text" defaultValue="Enter URL"></input>
        </div>
        <div> 
         <input type="text" defaultValue="Enter Label"></input>
        </div>
         <button onClick={()=>props.click(("newOrga", "New URL", "NewLabel"))}>Add</button> 
        </div>
    );
}

export default OrgaAdder;