import React from 'react';
import styles from './LabelControl.module.css';
import PropTypes from 'prop-types';

let style= styles.BadgeInactive;

const LabelControl = ({LabelName, clicked, id, labelIds}) => {

    labelIds.includes(id) ? style = styles.BadgeActive : style = styles.BadgeInactive  
    
    return (
        <div className={style} onClick={clicked}>
            {LabelName}
        </div>
    );
}

LabelControl.propTypes = {
    LabelName: PropTypes.string.isRequired,
    clicked: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    labelIds: PropTypes.arrayOf(PropTypes.number).isRequired
}
export default LabelControl; 