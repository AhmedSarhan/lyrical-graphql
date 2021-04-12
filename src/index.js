import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { GraphQlClient } from './apollo/ApolloClient';
import './index.css';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={GraphQlClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
