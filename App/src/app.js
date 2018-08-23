import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/main.scss';
import AppRouter from './routers/AppRouter.js';

const jsx = (
  <div>
    <AppRouter />
  </div>
)

const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);
