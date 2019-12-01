import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SideNavigation from './components/layout/SideNavigation';
import TopHeader from './components/layout/TopHeader';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Tickets from './components/Tickets';
import Projects from './components/Projects';
import Login from './components/Login';
import ContactForm from './components/ContactForm';
import ViewTicket from './components/ViewTicket';
import CreateTicket from './components/CreateTicket';


class App extends Component{

  state = {
    userInfo:{
      loggedIn: false,
      userId: '',
      username: ''
    }
  }

  render(){
    return (
      <Router >
        <div className="App">
          <div id="wrapper">
          <SideNavigation />
            <div id="content-wrapper">
              <div id="content">
                <TopHeader />

                {/* PAGE CONTENT */}
                <div class="container-fluid">
                  <Route exact path="/" component={Home} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route exact path="/tickets" component={Tickets} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/login" component={Login} />
                  <Route path="/contact" component={ContactForm} />
                  <Route path="/tickets/:tickethandle" component={ViewTicket} />
                  <Route path="/create_ticket" component={CreateTicket} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;