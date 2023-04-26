import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Blog from './Components/Blog';

function App() {
  return (
    <Fragment>
      <Nav />
      <BrowserRouter>
        <Fragment>
          <Route exact path="/" component={Blog} />
        </Fragment>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
