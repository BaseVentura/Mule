import React from 'react';
import Organisation from './Organisation'
// import styles from '../App.module.css'


function OrgaList({labels,orgas,filter,clickDelete}) {
  //  let label=null;
    return (
        <div >
            {orgas.map((orga) => {
              
              const activeLabels = labels.filter((label)=> orga.LabelIds.includes(label.id));
              const inFilter = activeLabels.some(label=> filter.includes(label.id))  
              
              return (
              inFilter || filter.length===0 ? <Organisation
                name = {orga.name}
                url ={orga.URL}
                labels = {activeLabels}
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