import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import Firebase, {FirebaseContext} from './components/Firebase';

ReactDOM.render (
  //FirebaseContext.Provider wrapped around App connects firebase and app
  <FirebaseContext.Provider value={new Firebase ()}>
    <Router>
      <App />
    </Router>
  </FirebaseContext.Provider>,
  document.getElementById ('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister ();
