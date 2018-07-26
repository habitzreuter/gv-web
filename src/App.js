import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import TaskList from './TaskList.js';
import TaskEditor from './TaskEditor.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={TaskList} />
          <Route exact path="/:id" component={TaskEditor} />
        </div>
      </Router>
    );
  }
}

export default App;
