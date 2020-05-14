import React, { Component } from 'react';
import styles from './App.module.css'
import Orgamanager from './Containers/Orgamanager';

class App extends Component {
  
  render() { 

    return (
      <div className={styles.App}>
        <div className={styles.Header}>
          <div className={styles.Title}>Volunteer Manager</div>
        </div>
        <Orgamanager/>
      </div>
    );
  }
}

export default App;