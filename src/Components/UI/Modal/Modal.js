import React from 'react';

import style from './Modal.module.css'



function Modal({children,show}) {
    return (
            <div 
                className={style.Modal}
                style={{
                    transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: show ? '1' : '0' 
                }}
                >
                {children}
            </div>
    );
}

export default Modal;