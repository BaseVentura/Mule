import React from 'react';
import Organisation from './Organisation'
// import styles from '../App.module.css'


function OrgaList(props) {
   
    return (
        <div >
            { props.Orgas.map((orga, index) => {
        return (<Organisation
          orga = {orga.Orga}
          url ={orga.URL}
          label = {orga.Label}
        />);  
      })}
        </div>
    );
}

export default OrgaList;