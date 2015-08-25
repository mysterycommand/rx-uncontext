import React from 'react';
import App from './components/App';

let element = React.createElement(App);
let container = document.getElementById('app-container');

React.render(element, container);
