import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import style from './NavigationItems.module.css'

function NavigationItems(props) {
    return (
        <ul className={style.NavigationItems}>
            <NavigationItem link="/" active>Organistions</NavigationItem>
            <NavigationItem link="/">People</NavigationItem>
        </ul>
    );
}

export default NavigationItems;