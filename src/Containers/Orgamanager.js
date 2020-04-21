import React, { Component } from 'react';
import OrgaList from '../Components/OrgaList';
import styles from '../App.module.css'
import OrgaAdder from '../Components/OrgaAdder';

class Orgamanager extends Component {
    
    state = { Orgas:[
        {Orga: "Stadtacker GI", URL: "http://orga1.org", LabelIds: [1], Id:0},
        {Orga: "Freiwilligen Zentrum", URL: "http://orga2.org", LabelIds: [0],Id:1},
        {Orga: "Friedelhausen", URL: "http://orga3.org", LabelIds: [0,1], Id:2}],
        Labels:[
          {name: "Soziales", id: 0},
          {name: "Umwelt", id: 1},
          {name: "Mobilität", id: 2},
          {name: "Politik", id: 3}
        ],
        addOrga: false,
        ContentID: 0,
        activeFilterID: 0
    }
  
    ToggleOrgaAdder = () => {
      //const ContentID =this.state.ContentID;
      
      const doesShow =this.state.addOrga;
      this.setState({addOrga: !doesShow})
    }
    ShowOrgaHandler = () => {
      this.setState({ContentID:0})
    }
    AddOrga = (name, URL, Label) => {
      const orgas = [...this.state.Orgas];
      const newOrga = {Orga: name, URL: URL, Label: Label}
  
      orgas.push(newOrga);
  
      this.setState({Orgas: orgas});
    }
    activateFilter = (filter) => {
      console.log(filter);
      this.setState({activeFilter: filter})
    }
    
    
    render() {
        return (
            <div>
                <button name="soziales" className={styles.Button} onClick={(event)=>this.activateFilter(event.target.name)}>Soziales</button>
                <div className="filter"></div>
                <OrgaList Labels= {this.state.Labels} Orgas={this.state.Orgas} filter={this.state.activeFilter}/>
                <button className={styles.Button} onClick={this.ToggleOrgaAdder}>Add Organisation</button>
                <OrgaAdder show={this.state.addOrga} hide={this.ToggleOrgaAdder} click={this.AddOrga}/>
            </div>
        );
    }
}

export default Orgamanager;