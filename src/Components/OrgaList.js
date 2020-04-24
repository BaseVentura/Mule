import React from 'react';
import Organisation from './Organisation'
// import styles from '../App.module.css'


function OrgaList({Labels,Orgas,filter}) {
  //  let label=null;
    return (
        <div >
            {Orgas.map((orga) => {
              //var label = Labels.find((element)=> element.id===orga.LabelIds);
              
              var labels = Labels.filter((e)=> orga.LabelIds.includes(e.id));  
              return (
              <Organisation
                orga = {orga.Orga}
                url ={orga.URL}
                labels = {labels}
                key={orga.Id}
        /> 
        );  
      })}
        </div>
    );
}

export default OrgaList;