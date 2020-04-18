import React from 'react';
import styles from './OrgaAdder.module.css'

function OrgaAdder({hide,click,show}) {


    
    let name ='';
    let url='';
    let label='';
    const showHideClassName = show ? styles.showDiv : styles.hideDiv;
    // function nameChangeHandler(event){
    //     name=event.target.value
    // }
    function buildName (input){
        name=input;
    }
    function buildURL (input){
        url=input;
    }
    function buildLabel (input){
        label=input;
    }
    return (
        <div className={showHideClassName}>
            <div className={styles.modal}>
                <div className={styles.modalContent}>    
                    <div className={styles.modalHeader}>
                        <span className={styles.close} onClick={hide}>×</span>
                        Organisation hinzufügen     
                    </div>
                    <div>
                        <input onChange={(event) => buildName(event.target.value)} type="text" defaultValue="Enter Name"></input>
                    </div>
                    <div>   
                        <input onChange={(event)=> buildURL(event.target.value)} type="text" defaultValue="Enter URL"></input>
                    </div>
                    <div> 
                    <input onChange={(event)=> buildLabel(event.target.value)} type="text" defaultValue="Enter Label"></input>
                    </div>
                    <button onClick={()=>click(name, url, label)}>Add</button> 
                </div>
            </div>
        </div>
    );
}

export default OrgaAdder;