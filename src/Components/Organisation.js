import React from 'react';
import style from './Organisation.module.css'
import PropTypes from 'prop-types';

function Organisation({orga,clickDelete,id,url,labels}) {
    return (
        <div className ={style.Orga}>
      
        <div className={style.Title}>{orga}<span className={style.close} onClick={()=> clickDelete(id)}>×</span></div>
        <p>Website: <a href={url}>  {url}</a></p>
        <span>
            {labels.map((e, ix)=>{return (<div className={style.Badge} key={e.id}>{e.name}</div>);})}
        </span>
      </div>
    );
}
Organisation.propTypes={
    orga: PropTypes.string.isRequired,
    clickDelete: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.object)
}
export default Organisation;