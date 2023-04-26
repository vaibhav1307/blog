import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Blog from './Components/Blog';

ReactDOM.render(
  <ChakraProvider>
    <Blog />
  </ChakraProvider>,
  document.getElementById('root')
);
