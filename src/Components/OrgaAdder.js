import React, {useState} from 'react';
import styles from './OrgaAdder.module.css'
import LabelControl from './LabelControl';

function OrgaAdder({labels,hide,click,show}) {

    const showHideClassName = show ? styles.showDiv : styles.hideDiv;
    
    const [name,setName] = useState();
    const [URL,setURL] = useState();
    const [Label,setLabel] = useState([]);  
    
    const buildLabel = (newlabel) => {
        Label.includes(newlabel) ? deselectLabel(newlabel) : selectLabel(newlabel);
        
    }
    const selectLabel = (label) => {
        const newlabelArr = [...Label]
        newlabelArr.push(label);
        setLabel(newlabelArr);
    }
    const deselectLabel = (label) => {
        const newlabelArr = [...Label]
        newlabelArr.splice(newlabelArr.indexOf(label),1);
        setLabel(newlabelArr);
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
                        <input onChange={(event) => setName(event.target.value)} type="text" placeholder="Enter Name"></input>
                    </div>
                    <div>   
                        <input onChange={(event)=> setURL(event.target.value)} type="text" placeholder="Enter URL"></input>
                    </div>
                    <div> 
                    {labels.map(
                        (label, ix )=>  (<LabelControl 
                            labelIds={Label} 
                            LabelName={label.name} 
                            key={label.id} 
                            id={label.id}  
                            clicked={(event)=> buildLabel(label.id)}/>
                            )
                        
                        )
                    }
                    </div>
                    <button onClick={()=>click(name, URL, Label, Date.now())}>Add</button> 
                </div>
            </div>
        </div>
    );
}

export default OrgaAdder;