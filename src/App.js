import React, { Component } from 'react';
import styles from './App.module.css'
import OrgaAdder from './Components/OrgaAdder';
import OrgaList from './Components/OrgaList'

class App extends Component {
  state = { Orgas:[
      {Orga: "Orga1", URL: "http://orga1.org", Label: "Soziales"},
      {Orga: "Orga2", URL: "http://orga2.org", Label: "Soziales"},
      {Orga: "Orga3", URL: "http://orga3.org", Label: "Umwelt"}],
      addOrga: false,
      ContentID: 0
  }

  ToggleOrgaAdder = () => {
    //const ContentID =this.state.ContentID;
    this.setState({ContentID:1})
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
    let Content= null;

    if(this.state.ContentID===1){
      Content = (<OrgaAdder/>);
    }

    switch(this.state.ContentID) {
      case 0:
        Content = (<OrgaList Orgas={this.state.Orgas}/>);
        break;
      case 1:
        Content = (<OrgaAdder click={this.AddOrga}/>);
        break;
      default:
        //null
    } 

    return (
      <div className={styles.App}>
        <div className={styles.Title}>App Title</div>
        <button className={styles.Button} onClick={this.ShowOrgaHandler}>Show Organisations</button>
        <button className={styles.Button} onClick={this.ToggleOrgaAdder}>Add Organisation</button>
        {Content}
      </div>
    );
  }
}

export default App;