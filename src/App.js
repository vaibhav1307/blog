import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Blog from './Components/Blog';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Route exact path="/" component={Blog} />
    </BrowserRouter>
  );
}

export default App;