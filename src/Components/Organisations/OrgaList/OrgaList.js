import React from 'react';
import Organisation from '../Organisation/Organisation'
import PropTypes from 'prop-types';
import styles from './Orgalist.module.css'
import OrgaAdder from '../../OrgaAdder/OrgaAdder'


function OrgaList({labels,orgas,filter,clickDelete,addOrga}) {
  //  let label=null;
    return (
        <div className={styles.content}>
            {orgas.map((orga) => {
              
              const activeLabels = labels.filter((label)=> orga.LabelIds.includes(label.id));
              const inFilter = activeLabels.some(label=> filter.includes(label.id))  
              
              return (
              inFilter || filter.length===0 ? <Organisation
                name = {orga.name}
                url ={orga.URL}
                labels = {activeLabels}
                key={orga.Id}
                id={orga.Id}
                clickDelete={clickDelete}
                /> : null
              );  
            })}
            <OrgaAdder labels={labels} click={addOrga}/>
        </div>
      );
}
OrgaList.propTypes={
  orgas: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.arrayOf(PropTypes.number).isRequired,
  clickDelete: PropTypes.func,
  Labels: PropTypes.arrayOf(PropTypes.object)
}

export default OrgaList;