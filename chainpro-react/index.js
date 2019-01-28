import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { BrowserRouter} from 'react-router-dom';
import Home from './app/screens/Home/';


import './assets/tree.css';
import './assets/data-graphs.css';
import './assets/tools.css';
import './assets/home.css';
import './assets/loading.css';
import './assets/transaction-history.css';

const App=()=>(
<BrowserRouter >
  <Home/>
</BrowserRouter>

);


ReactDOM.render(<App/>,document.getElementById('home-container'));
