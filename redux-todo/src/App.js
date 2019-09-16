import React from 'react';
import './App.css';
import From from './component/form/form';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Datatable from './component/table/table'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render={() => <From />} />
        <Route path="/table" render={() => <Datatable />} />

      </Router>
    )
  }
}

export default App;
