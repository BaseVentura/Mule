import React from 'react';
import styles from './LabelControl.module.css'

let style= styles.BadgeInactive;

const LabelControl = ({LabelName, clicked, id, labelIds}) => {

    labelIds.includes(id) ? style = styles.BadgeActive : style = styles.BadgeInactive  
    
    return (
        <div className={style} onClick={clicked}>
            {LabelName}
        </div>
    );
}

export default LabelControl; 