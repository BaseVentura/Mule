import React, { Component } from 'react';
import OrgaList from '../Components/OrgaList';
import styles from '../App.module.css'
import OrgaAdder from '../Components/OrgaAdder';
import LabelControl from '../Components/LabelControl';

class Orgamanager extends Component {
    
    state = { Orgas:[
        {name: "Stadtacker GI", URL: "http://orga1.org", LabelIds: [1], Id:0},
        {name: "Freiwilligen Zentrum", URL: "http://orga2.org", LabelIds: [0],Id:1},
        {name: "Friedelhausen", URL: "http://orga3.org", LabelIds: [0,1], Id:2}],
        Labels:[
          {name: "Soziales", id: 0},
          {name: "Umwelt", id: 1},
          {name: "Mobilität", id: 2},
          {name: "Politik", id: 3}
        ],
        addOrga: false,
        ContentID: 0,
        activeFilterID: [],
        FilterIsSet: false
    }
  
    toggleOrgaAdder = () => { 
      const doesShow =this.state.addOrga;
      this.setState({addOrga: !doesShow})
    }

    addOrga = (name, URL, LabelIds, OrgaId) => {

      const orgas = [...this.state.Orgas];
      const newOrga = {name: name, URL: URL, LabelIds: LabelIds, Id: OrgaId}
  
      orgas.push(newOrga);
  
      this.setState({Orgas: orgas});
    }
    deleteOrga = (index) =>{
      const orgas = [...this.state.Orgas];
      orgas.splice(index, 1)
      this.setState({Orgas: orgas});
    }

    activateFilter = (filter) => {
      const Filter = [...this.state.activeFilterID];
      !Filter.includes(filter)? Filter.push(filter) : Filter.splice(Filter.indexOf(filter),1);
      this.setState({activeFilterID: Filter , FilterIsSet: true})
    }
    
    render() {
      
        return (
            <div>
               {this.state.Labels.map((label) =>  (<LabelControl labelIds={this.state.activeFilterID} LabelName={label.name} id={label.id} key={label.id} clicked={()=>this.activateFilter(label.id)}/>))}
                <OrgaList Labels= {this.state.Labels} Orgas={this.state.Orgas} filter={this.state.activeFilterID} clickDelete={this.deleteOrga}/>
                <button className={styles.Button} onClick={this.toggleOrgaAdder}>Add Organisation</button>
                <OrgaAdder labels={this.state.Labels} show={this.state.addOrga} hide={this.toggleOrgaAdder} click={this.addOrga}/>
            </div>
        );
    }
  }

export default Orgamanager;