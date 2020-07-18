import React from 'react';
import style from './VolunteerJob.module.css'
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux'
import Modal from '../../UI/Modal/Modal'
import Backdrop from '../../UI/Backdrop/Backdrop'

function VolunteerJob({ name, clickDelete, id, orga, labels, description }) {
    const [showModal, setShowModal] = React.useState(false);
    
    return (
        <Aux>
             <Aux><Backdrop show={showModal} clicked={() => setShowModal(false)}/> <Modal show={showModal}>
                <p>Delete {name} ? </p>
                <button onClick={() => clickDelete(id)}>Yes</button>
                <button onClick={() => setShowModal(false)}>Cancel</button>
            </Modal></Aux> 
            <div className={style.Job}>
                <div className={style.Title}>{name}<span className={style.close} onClick={() => setShowModal(true)}>×</span></div>
                <p>{description}</p>
                <p>Organisation: {orga.name}</p>
                <span className={style.label}>
                    {labels.map((label) => { return (<div className={style.Badge} key={label.id}>{label.name}</div>); })}
                </span>
            </div>
        </Aux>
    );
}
VolunteerJob.propTypes = {
    name: PropTypes.string.isRequired,
    clickDelete: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default VolunteerJob;