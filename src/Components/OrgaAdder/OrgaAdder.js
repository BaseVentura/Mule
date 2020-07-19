import React, {useState} from 'react';
import styles from './OrgaAdder.module.css'
import LabelControl from '../Categories/LabelControl';
import PropTypes from 'prop-types';

function OrgaAdder({labels,click}) {
    
    const [name,setName] = useState("");
    const [URL,setURL] = useState("");
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
    const reset = () => {
        setName("");
        setURL("");
        setLabel([]);
        console.log("Reset");
    }

    return (
            <div className={styles.OrgaAdder}>   
                    <div className={styles.Title}>
                        Organisation hinzufügen     
                    </div>
                    <div>
                        <input value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="Enter Name"></input>
                    </div>
                    <div>   
                        <input value={URL} onChange={(event)=> setURL(event.target.value)} type="text" placeholder="Enter URL"></input>
                    </div>
                    <div className={styles.Labels}> 
                    {labels.map(
                        ({name, id}, ix )=>  (<LabelControl 
                            labelIds={Label} 
                            LabelName={name} 
                            key={id} 
                            id={id}  
                            clicked={(event)=> buildLabel(id)}/>
                            )
                        )
                    }
                    </div>
                    <button onClick={()=> reset()}>Add</button> 
                
            </div>
    );
}

OrgaAdder.propTypes = {
    labels: PropTypes.array.isRequired,
    click: PropTypes.func.isRequired,
}

export default OrgaAdder;