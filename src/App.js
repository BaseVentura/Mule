import React, { Component } from 'react';

import styles from './App.module.css'

import JobManager from './Containers/JobManager';
import Navigation from './Components/Navigation/Navigation'

class App extends Component {
  
  render() { 

    return (
      <div className={styles.App}>
        <Navigation/>
        <JobManager/>
      </div>
    );
  }
}

export default App;