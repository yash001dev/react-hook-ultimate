import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router';
import { Step1 } from './Step3';
import { Step2 } from './Step2';



function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Step1} />
        <Route exact path="/step2" component={Step2} />
        <Route exact path="/step3" component={Step2} />
        <Route exact path="/result" component={Step2} />
        
        
      </Switch>
    </Router>
    </>
  );
}

export default App;
