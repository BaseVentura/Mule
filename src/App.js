import React, { Component } from 'react';
import styles from './App.module.css'

class App extends Component {
  state = {
    Orga: "Orga1",
    URL: "http://orga1.org",
    Label: "soziales"

  }
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Title}>Hello</div>
        <button className={styles.Button}>Button</button>
      </div>
    );
  }
}

export default App;