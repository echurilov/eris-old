import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const element = (<Root store={store}/>);
  const root = document.getElementById("root");
  ReactDOM.render(element, root);
});
