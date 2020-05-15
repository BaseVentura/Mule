import React from 'react';
import style from './Organisation.module.css'
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux'
import Modal from '../../UI/Modal/Modal'

function Organisation({ name, clickDelete, id, url, labels }) {
    const [showModal, setShowModal] = React.useState(false);
    
    return (
        <Aux>
            {showModal ? <Modal show={showModal}>
                <p>Delete {name} ? </p>
                <button onClick={() => clickDelete(id)}>Yes</button>
                <button onClick={() => setShowModal(false)}>Cancel</button>
            </Modal> : null}
            <div className={style.Orga}>
                <div className={style.Title}>{name}<span className={style.close} onClick={() => setShowModal(true)}>×</span></div>
                <p>Website: <a href={url}>  {url}</a></p>
                <span>
                    {labels.map((label) => { return (<div className={style.Badge} key={label.id}>{label.name}</div>); })}
                </span>
            </div>
        </Aux>
    );
}
Organisation.propTypes = {
    name: PropTypes.string.isRequired,
    clickDelete: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.object)
}
export default Organisation;