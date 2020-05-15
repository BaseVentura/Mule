import React, { Component } from 'react';

import styles from './App.module.css'

import Orgamanager from './Containers/Orgamanager';
import Navigation from './Components/Navigation/Navigation'

class App extends Component {
  
  render() { 

    return (
      <div className={styles.App}>
        <Navigation/>
        <Orgamanager/>
      </div>
    );
  }
}

export default App;