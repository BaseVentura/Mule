import React from 'react';
import style from './Backdrop.module.css'

function Backdrop({show,clicked}) {
    return (
      show ? <div onClick={clicked} className={style.Backdrop}></div> : null
    );
}      

export default Backdrop;