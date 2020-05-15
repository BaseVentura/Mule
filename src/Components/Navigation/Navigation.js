import React from 'react';

import Logo from '../Logo/Logo'

import style from './Navigation.module.css'
import NavigationItems from './NavigationItems/NavigationItems';

const Navigation = (props) => {
    return (
        <div className={style.Navigation}>
            <Logo/>
            <div>Volunteer Manager</div>
            <NavigationItems/>
        </div>
    );
}

export default Navigation;