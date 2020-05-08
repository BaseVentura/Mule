import React, { Component } from 'react';
import OrgaList from '../Components/OrgaList';
import LabelControl from '../Components/LabelControl';
// import styles from '../App.module.css'

class Orgamanager extends Component {
    
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
        {name: "Politik", id: 3}
      ],
      showOrgaAdder: false,
      activeFilterID: [],
    }
  
    toggleOrgaAdder = () => { 
      this.setState({showOrgaAdder: !this.state.showOrgaAdder})
    }

    addOrga = (name, URL, LabelIds, OrgaId) => {

      const orgas = [...this.state.orgas];
      const newOrga = {name: name, URL: URL, LabelIds: LabelIds, Id: OrgaId}
  
      orgas.push(newOrga);
  
      this.setState({orgas: orgas});
    }

    deleteOrga = (index) =>{
      //hier muss ich die posidtion der Orga mit der entsprechenden ID finden
      const orgas = [...this.state.orgas];

      // Das war der erste Versuch:
      // const targetOrga = orgas.filter(orga => {
      //   console.log("id: "+orga.Id);
      //   console.log("index: "+index);
      //   return orga.Id===index})
      // console.log("targetOrga:"+targetOrga.Id);
      
      orgas.splice(index, 1)
      this.setState({orgas: orgas});
      //console.log("deleteOrga mit:"+targetOrga.Id);
    }

    updateFilterArray = (filter) => {
      const Filter = [...this.state.activeFilterID];
      !Filter.includes(filter)? Filter.push(filter) : Filter.splice(Filter.indexOf(filter),1);
      this.setState({activeFilterID: Filter})
    }
    
    render() {
      
        return (
            <div className="Filters">
               <div className="Filters">
               {this.state.labels.map((label) =>  (<LabelControl labelIds={this.state.activeFilterID} LabelName={label.name} id={label.id} key={label.id} clicked={()=>this.updateFilterArray(label.id)}/>))}
                </div>
                <div>
                  <OrgaList labels= {this.state.labels} orgas={this.state.orgas} filter={this.state.activeFilterID} clickDelete={this.deleteOrga} addOrga={this.addOrga}/>
                </div>
            </div>
        );
    }
  }

export default Orgamanager;