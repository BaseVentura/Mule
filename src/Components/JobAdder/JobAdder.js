import React, {useState} from 'react';
import styles from './JobAdder.module.css'
import LabelControl from '../Categories/LabelControl';
import PropTypes from 'prop-types';
import DropDownSelector from '../UI/DropDownSelector/DropDownSelector'

function JobAdder({labels,click, orgas}) {
    
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
            <div className={styles.JobAdder}>   
                    <div className={styles.Title}>
                        Job hinzufügen     
                    </div>
                    <div>
                        <input onChange={(event) => setName(event.target.value)} type="text" placeholder="Enter Name"></input>
                    </div>
                    <div>   
                        <textarea onChange={(event)=> setURL(event.target.value)} type="text" placeholder="Enter a description"></textarea>
                    </div>
                    <DropDownSelector items={orgas}/>                
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
                    <button onClick={()=>click(name, URL, Label, Date.now())}>Add</button> 
                
            </div>
    );
}

JobAdder.propTypes = {
    labels: PropTypes.array.isRequired,
    click: PropTypes.func.isRequired,
}

export default JobAdder;