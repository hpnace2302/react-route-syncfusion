import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from './routes2/index';
import Provider from './context/users'

const App = () => {
  return (
    <Provider>
      <Router>
        <RoutesApp />
      </Router>
    </Provider>
  );
};

export default App;