import React, { Component } from 'react';
import styles from './App.module.css'
import Organisation from './Components/Organisation';
import OrgaAdder from './Components/OrgaAdder';

class App extends Component {
  state = { Orgas:[
      {Orga: "Orga1", URL: "http://orga1.org", Label: "Soziales"},
      {Orga: "Orga2", URL: "http://orga2.org", Label: "Soziales"},
      {Orga: "Orga3", URL: "http://orga3.org", Label: "Umwelt"}],
      addOrga: false
  }

  ToggleOrgaAdder = () => {
    const doesShow =this.state.addOrga;
    this.setState({addOrga: !doesShow})
  }

  render() {
    let AddOrga=null;

    if(this.state.addOrga){
      AddOrga = (<OrgaAdder/>);
    }



    return (
      <div className={styles.App}>
        <div className={styles.Title}>App Title</div>
        <button className={styles.Button}>Show Organisations</button>
        <button className={styles.Button} onClick={this.ToggleOrgaAdder}>Add Organisation</button>
        <div className={styles.OrgaList}>
          {this.state.Orgas.map((orga, index) => {
            return (<Organisation
              orga = {orga.Orga}
              url ={orga.URL}
              label = {orga.Label}
            />);  
          })}
        </div>
        {AddOrga}
      </div>
    );
  }
}

export default App;