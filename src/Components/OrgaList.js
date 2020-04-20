import React from 'react';
import Organisation from './Organisation'
// import styles from '../App.module.css'


function OrgaList({Labels,Orgas,filter}) {
  //  let label=null;
    return (
        <div >
            {Orgas.map((orga, index) => {
              var label = Labels.find((element)=> element.id===orga.LabelId);
              return (
              <Organisation
                orga = {orga.Orga}
                url ={orga.URL}
                label = {label.name}
        /> 
        );  
      })}
        </div>
    );
}

export default OrgaList;