import React, { Component } from 'react';
import OrgaList from '../Components/OrgaList';
import styles from '../App.module.css'
import OrgaAdder from '../Components/OrgaAdder';

class Orgamanager extends Component {
    
    state = { Orgas:[
        {Orga: "Orga1", URL: "http://orga1.org", Label: "Soziales"},
        {Orga: "Orga2", URL: "http://orga2.org", Label: "Soziales"},
        {Orga: "Orga3", URL: "http://orga3.org", Label: "Umwelt"}],
        addOrga: false,
        ContentID: 0
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
    
    render() {
        return (
            <div>
                <OrgaList Orgas={this.state.Orgas} filter="Soziales"/>
                <button className={styles.Button} onClick={this.ToggleOrgaAdder}>Add Organisation</button>
                <OrgaAdder show={this.state.addOrga} hide={this.ToggleOrgaAdder} click={this.AddOrga}/>
            </div>
        );
    }
}

export default Orgamanager;