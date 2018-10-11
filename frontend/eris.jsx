import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.user) {
    const preloadedState = {
      entities: {
        session: { id: window.user.id },
        user: { [window.user.id]: window.user }
      }
    };
    store = configureStore(preloadedState);
    delete window.user;
  } else {
    store = configureStore();
  }
  const element = (<Root store={store}/>);
  const root = document.getElementById("root");
  ReactDOM.render(element, root);
});
