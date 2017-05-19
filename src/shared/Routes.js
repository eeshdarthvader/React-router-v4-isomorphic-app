import React, { Component } from 'react';

import App from './App';
import Gist from './Gist';


export default [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/g/:gistId',
        component: Gist
      }
    ]
  }
]