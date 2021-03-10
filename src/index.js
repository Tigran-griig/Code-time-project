import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route} from "react-router";
import NewPAge from "./components/NewPage/NewPAge";
ReactDOM.render(
    <Router>
        <Route exact path={'/'}>
           <App />
        </Route>
        <Route exact path={'/NewPAge'}>
            <NewPAge />
        </Route>
    </Router>
  ,
  document.getElementById('root')
);
