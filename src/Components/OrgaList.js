import React from 'react';
import Organisation from './Organisation'
// import styles from '../App.module.css'


function OrgaList({Labels,Orgas,filter,clickDelete}) {
  //  let label=null;
    return (
        <div >
            {Orgas.map((orga) => {
              
              var labels = Labels.filter((label)=> orga.LabelIds.includes(label.id));
              
              const inFilter = labels.some(label=> filter.includes(label.id))  
              
              return (
              inFilter || filter.length===0 ? <Organisation
                name = {orga.name}
                url ={orga.URL}
                labels = {labels}
                key={orga.Id}
                id={orga.id}
                clickDelete={clickDelete}
                /> : null
              );  
            })}
        </div>
      );
}

export default OrgaList;