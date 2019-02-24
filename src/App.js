import React, { Component } from 'react';
import Empty from './images/star-empty.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={Empty} className="" alt="empty" />
          <img src={Empty} className="" alt="empty" />
          <img src={Empty} className="" alt="empty" />
          <img src={Empty} className="" alt="empty" />
          <img src={Empty} className="" alt="empty" />
      </div>
    );
  }
}

export default App;
