import React, { ReactElement } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Side from './units/Side';
import QuickStart from './pages/QuickStart';
import Button from './pages/Button';
import Menu from './pages/Menu';
import { ZBlock } from './packages';

function App(): ReactElement {
  return (
    <div className="App">
      <ZBlock.Flex className="layout">
        <Router>
          <Side width={200} />
          <div className="router">
            <Route path="/" component={QuickStart} exact />
            <Route path="/button" component={Button} />
            <Route path="/menu" component={Menu} />
          </div>
        </Router>
      </ZBlock.Flex>
    </div>
  )
}

export default App;
