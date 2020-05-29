import React from 'react';

import style from './VolunteerJobList.module.css'

const VolunteerJobList = ({jobs,labels}) => {
     
    
    return (
    jobs.map((job)=> <div className={style.Job}>
            <div key={job.id} className={style.Title}>{job.name}<span className={style.close}>X</span></div>
            <div>{job.description}</div>
    {jobs.map(job => labels.filter(label => job.LabelIds.includes(label.id))).map((activeLabel)=> {
        console.log(activeLabel)
        return <div>{activeLabel[0].name}</div>})}
        </div>)
    );
};

export default VolunteerJobList;