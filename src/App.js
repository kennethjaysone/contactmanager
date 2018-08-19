import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";
import Header from "./components/layouts/Header";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./context";
import Test from "./components/test/Test";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about/:id" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
