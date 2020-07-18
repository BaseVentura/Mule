import React, { Component } from 'react';

import VolunteerJobList from '../Components/VolunteerJobs/VolunteerJobList/VolunteerJobList';
import LabelControl from '../Components/Categories/LabelControl';
import Aux from '../hoc/Aux'

import style from './JobManager.module.css'


class JobManager extends Component {
    
    state = { 
      orgas:[
        {name: "Stadtacker GI", URL: "http://orga1.org", LabelIds: [1], Id:0},
        {name: "Freiwilligen Zentrum", URL: "http://orga2.org", LabelIds: [0],Id:1},
        {name: "Friedelhausen", URL: "http://orga3.org", LabelIds: [0,1], Id:2}
      ],
      labels:[
        {name: "Soziales", id: 0},
        {name: "Umwelt", id: 1},
        {name: "Mobilität", id: 2},
        {name: "Politik", id: 3},
        {name: "Kultur", id: 4},
        {name: "Interkulturelles", id: 5},
        {name: "Senioren Hilfe", id: 6}
      ],
      jobs: [
        {name: "Erntehelfer", description: "random description", startingDate: "",LabelIds: [1], id:0, OrgaId: 0 },
        {name: "Kursbetreuung", description: "random description", startingDate: "",LabelIds: [0], id:1, OrgaId: 1}],
      showOrgaAdder: false,
      activeFilterID: [],
      showDeleteOrgaModal: false
    }
  
    toggleOrgaAdder = () => { 
      this.setState({showOrgaAdder: !this.state.showOrgaAdder})
    }

    addJob = (name, description, LabelIds, startingDate, OrgaId, JobId) => {

      const jobs = [...this.state.jobs];
      const newJob = {name: name, description: description, LabelIds: LabelIds, Id: JobId, OrgaId: OrgaId}
      console.log(newJob)
      jobs.push(newJob);
  
      //this.setState({orgas: jobs});
    }

    deleteOrga = (id) =>{
      const orgas = [...this.state.orgas];
      const targetOrga = orgas.find(orga => orga.Id===id)
      
      console.log("Delete Orga:"+id)

      orgas.splice(orgas.indexOf(targetOrga), 1)
      this.setState({orgas: orgas});
    }
    deleteOrgaHandler  (id) {
      this.setState({showDeleteOrgaModal: true})
      //deleteOrga();
    }

    updateFilterArray = (filter) => {
      const Filter = [...this.state.activeFilterID];
      !Filter.includes(filter)? Filter.push(filter) : Filter.splice(Filter.indexOf(filter),1);
      this.setState({activeFilterID: Filter})
    }
    
    render() {
      
        return (
          <Aux>
            <div className={style.Orgamanager}>
               <div className={style.FilterBar}>
               {this.state.labels.map((label) =>  (<LabelControl labelIds={this.state.activeFilterID} LabelName={label.name} id={label.id} key={label.id} clicked={()=>this.updateFilterArray(label.id)}/>))}
                </div>
                <div className="OrgaManagerContent">
                  <VolunteerJobList labels= {this.state.labels} jobs={this.state.jobs} orgas={this.state.orgas} filter={this.state.activeFilterID} clickDelete={this.deleteOrga} addJob={this.addJob}/>
                </div>
            </div>
          </Aux>
        );
    }
  }

export default JobManager;