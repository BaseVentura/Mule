import React from 'react';
import Organisation from './Organisation'
// import styles from '../App.module.css'


function OrgaList({Labels,Orgas,filter,clickDelete}) {
  //  let label=null;
    return (
        <div >
            {Orgas.map((orga) => {
              
              var labels = Labels.filter((e)=> orga.LabelIds.includes(e.id));
              
              const filtered = labels.some(l=> filter.includes(l.id))  
              
              return (
              filtered || filter.length===0 ? <Organisation
                orga = {orga.Orga}
                url ={orga.URL}
                labels = {labels}
                key={orga.Id}
                id={orga.Id}
                clickDelete={clickDelete}
                /> : null
              );  
            })}
        </div>
      );
}

export default OrgaList;