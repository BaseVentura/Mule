import React from 'react';
//similar to css we need to tell webpack that we will use the image since a static import with the absolut path wont work due to the way webpack works
import burgerLogo from '../../Assets/freiwilligen-logo.png'
import style from './Logo.module.css'

function Logo(props) {
    return (
        <div className={style.Logo}>
            <img src={burgerLogo} alt="FWZ-Gießen"/>
        </div>
    );
}

export default Logo;