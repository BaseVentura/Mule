import React from 'react';
import Organisation from './Organisation'
// import styles from '../App.module.css'


function OrgaList({Orgas,filter}) {
   
    return (
        <div >
            {Orgas.map((orga, index) => {
              return (orga.Label===filter ? <Organisation
                orga = {orga.Orga}
                url ={orga.URL}
                label = {orga.Label}
        /> : null);  
      })}
        </div>
    );
}

export default OrgaList;