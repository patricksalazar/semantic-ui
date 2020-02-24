import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {BrowserRouter as Router} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Home from './routes/Home';



const client = new ApolloClient({
  uri: 'http://localhost:4000/',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div id="contextWrap" className="App">
          <Home />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
