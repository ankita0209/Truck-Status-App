//Import Outside modules
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
//Import Inner modules
import './App.css';
import Home from './container/home'
import configureStore from './store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Provider>

  );
}

export default App;
