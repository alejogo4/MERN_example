import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from './screens/Navigation';
import CreateNote from './screens/notes/CreateNote';
import NotesList from './screens/notes/NotesList';
import CreateUser from './screens/users/CreateUser';

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
        <Route  path="/" exact component={NotesList} />
        <Route  path="/edit/:id" component={CreateNote} />
        <Route  path="/create" component={CreateNote} />
        <Route  path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
