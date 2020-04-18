import React, { useState } from 'react';
import styles from './OrgaAdder.module.css'

function OrgaAdder(props) {


    const [name,setName] = useState('');
    const [url, setUrl] =useState('');
    const [label, setLabel] =useState('');
    const showHideClassName = props.show ? styles.showDiv : styles.hideDiv;
    // function nameChangeHandler(event){
    //     name=event.target.value
    // }
    console.log(props);
    return (
        <div className={showHideClassName}>
            <div className={styles.modal}>
                <div className={styles.modalContent}>    
                    <div className={styles.modalHeader}>
                        <span className={styles.close} onClick={props.hide}>×</span>
                        Organisation hinzufügen     
                    </div>
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
            </div>
        </div>
    );
}

export default OrgaAdder;