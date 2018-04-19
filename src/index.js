import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import Routes from './components/Routes';
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

