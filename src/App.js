import React from 'react';
import './styles/app.scss';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Users from './components/Users';
import Settings from './components/Settings';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/users" component={Users}/>
        <Route exact path="/settings" component={Settings}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
