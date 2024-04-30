import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';       
import Card from './components/Card/Card';       
import Song from './components/Song/Song';       

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
      <Song />
    </div>
  );
}

export default App;
