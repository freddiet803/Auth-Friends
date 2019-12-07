import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import CreateFriend from './components/CreateFriend';

function App(props) {
  const handleClick = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };
  return (
    <Router>
      <div className='App'>
        {localStorage.getItem('token') ? (
          <div>
            <button onClick={handleClick}>Logout</button>
          </div>
        ) : (
          <></>
        )}
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Login} />
          <PrivateRoute exact path='/friends' component={FriendsList} />
          <PrivateRoute exact path='/createfriend' component={CreateFriend} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
