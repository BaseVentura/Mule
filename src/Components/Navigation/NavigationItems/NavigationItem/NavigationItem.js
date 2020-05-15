import React from 'react';

import style from './NavigationItem.module.css';

const NavigationItem = ({link, children, active}) => (
            <li className={style.NavigationItem}><a href={link} className={active ? style.active : null}> {children} </a></li>
    );

export default NavigationItem;