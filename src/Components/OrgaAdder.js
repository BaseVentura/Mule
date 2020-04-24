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
    
    const buildLabel = (newlabel) => {
        Label.includes(newlabel) ? deselectLabel(newlabel) : selectLabel(newlabel);
        console.log(Label);
    }
    const selectLabel = (label) => {
        const newlabelArr = [...Label]
        newlabelArr.push(label);
        setLabel(newlabelArr);
    }
    const deselectLabel = (label) => {
        const newlabelArr = [...Label]
        newlabelArr.splice(newlabelArr.indexOf(label));
        setLabel(newlabelArr);
        console.log("deselect");
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
                            return (<div><input type="checkbox" key={label.id} id={label.id}  onClick={(event)=> buildLabel(label.id)}/><label htmlFor={label.id}>{label.name}</label></div>)//das mit dem Label funktioniert so nicht
                        }
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