import '../common/template/dependencies'

import React, { Component } from 'react';
import Sidebar from '../common/template/Sidebar';
import Header from '../common/template/Header';
import Footer from '../common/template/Footer';

import { Switch, Route } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import BillingCycle from '../billingCycle/BillingCycle';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />
          <div className="content-wrapper"> 
              <Switch>
                  <Route path="/" exact={true} component={Dashboard} />
                  <Route path="/billingCycle" component={BillingCycle} />
              </Switch>                         
          </div>
        <Footer />
    </div>
    );
  }
}

export default App;
