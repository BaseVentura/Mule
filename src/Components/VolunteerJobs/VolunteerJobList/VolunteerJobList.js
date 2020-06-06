import React from 'react';
import VolunteerJob from '../VolunteerJob/VolunteerJob'
import PropTypes from 'prop-types';
import styles from './VolunteerJobList.module.css'
import OrgaAdder from '../../OrgaAdder/OrgaAdder'


function VolunteerJobList({labels,orgas,filter,clickDelete,addOrga,jobs}) {
  //  let label=null;
    return (
        <div className={styles.content}>
            {jobs.map((job) => {
              
              const activeLabels = labels.filter((label)=> job.LabelIds.includes(label.id));
              const inFilter = activeLabels.some(label=> filter.includes(label.id));
              
              const activeOrga = orgas.find(orga => orga.Id===job.OrgaId);
              

              
              return (
              inFilter || filter.length===0 ? <VolunteerJob
                name = {job.name}
                description ={job.description}
                labels = {activeLabels}
                key={job.id}
                orga={activeOrga}
                id={job.id}
                clickDelete={clickDelete}
                /> : null
              );  
            })}
            <OrgaAdder labels={labels} click={addOrga}/>
        </div>
      );
}
VolunteerJobList.propTypes={
  orgas: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.arrayOf(PropTypes.number).isRequired,
  clickDelete: PropTypes.func,
  Labels: PropTypes.arrayOf(PropTypes.object)
}

export default VolunteerJobList;