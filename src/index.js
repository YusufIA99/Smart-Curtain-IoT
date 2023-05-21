import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hero from './Components/Hero';
import Vejr from './Components/Vejr';
import About from './Components/About';
import Navbar2 from './Components/Navbar2';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar2 />
    <Hero />
    <Vejr/>
    <About />
  </React.StrictMode>
);
