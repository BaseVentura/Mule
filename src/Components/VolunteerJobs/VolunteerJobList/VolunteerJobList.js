import React from 'react';

import style from './VolunteerJobList.module.css'

const VolunteerJobList = ({jobs,labels}) => {
    return (
    jobs.map((job)=> <div className={style.Job}>
            <div className={style.Title}>{job.name}<span className={style.close}>X</span></div>
            <div>{job.description}</div>
            {/* {labels.find()}  */}
        </div>)
    );
};

export default VolunteerJobList;