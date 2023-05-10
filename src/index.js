import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import VejrHero from './Components/Vejr';
import About from './Components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Hero />
    <VejrHero />
    <About />
  </React.StrictMode>
);
