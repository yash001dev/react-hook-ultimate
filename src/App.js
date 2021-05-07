import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import Step3 from './Step3';
import Result from './Result';



function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Step1} />
        <Route exact path="/step2" component={Step2} />
        <Route exact path="/step3" component={Step3} />
        <Route exact path="/result" component={Result} />
        
        
      </Switch>
    </Router>
    </>
  );
}

export default App;
