import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AppRouter from './routers/AppRouter.js';

import 'normalize.css/normalize.css';
import './styles/main.scss';
import './animation/pageTransition.js';
// import './animation/scrollBehaviour.js';
import Scripts from './scripts/script';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsHelping, faCoffee, faPenFancy, faChartLine, faCode } from '@fortawesome/free-solid-svg-icons'


library.add(faCoffee)
library.add(faHandsHelping)
library.add(faPenFancy)
library.add(faChartLine)
library.add(faCode)


const jsx = (
  <div>
    <AppRouter />
  </div>
)

const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);
