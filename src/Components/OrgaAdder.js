import React, {useState} from 'react';
import styles from './OrgaAdder.module.css'

function OrgaAdder({labels,hide,click,show}) {

    const showHideClassName = show ? styles.showDiv : styles.hideDiv;
    // function nameChangeHandler(event){
    //     name=event.target.value
    // }
    const [name,setName] = useState();
    const [URL,setURL] = useState();
    const [Label,setLabel] = useState([]);  
    //setLabel([]);
   

    const buildLabel = (newlabel) => {
        const newlabelArr = [...Label]
        newlabelArr.push(newlabel);

        setLabel(newlabelArr);
    }
    const deselectLabel = (labelid) => {
        const newlabelArr = [...Label]
        newlabelArr.splice(newlabelArr.indexOf(labelid));
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
                        (label, ix )=> {
                            return (<div key={label.id} className="Bagde" onClick={(event)=> buildLabel(label.id)}>{label.name}</div>)//das mit dem Label funktioniert so nicht
                        }
                        )
                    }
                    </div>
                    <button onClick={()=>click(name, URL, Label)}>Add</button> 
                </div>
            </div>
        </div>
    );
}

export default OrgaAdder;