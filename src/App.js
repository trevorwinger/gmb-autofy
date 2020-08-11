import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Options from './Components/Options';

function App() {
  var options = ['Cherry Roofing is Vancouver, WA\'s top Roofing Contractor. Contact us today to get an estimate on your next roof replacement or roof repair!',
  'Exteriors Plus is the leading residential roofing contractor in the Norton, OH area. Contact us today about your next roofing project!',
  'Experienced, reliable roofers near you. Wyoming Roofing provides Sheridan & Gillette, WY with roof repair & replacement, backed by outstanding customer service.',
  'Titan is your trusted Cincinnati Roofing Contractor. Whether you need roofing, siding, gutters or windows we can assist. Call for your free inspection',
  'Allstate Exteriors is one of Ohio\'s leading Roofing Contractors. We specialize in everything from Residential to Commercial. Contact us today!'];

  var keywords = ['residential roofing', 'roofing contractor', 'residential roofing contractor', 'local roofing company', 
  'roofing', 'naples roofer', 'roof repair', 'roof replacement', 'flat roofing', 'shingle roofing', 'tile roofing'];

  const [brand, setBrand] = useState('');
  const [brandLocation, setBrandLocation] = useState('');

  const handleBrandChange = (event) => 
  {
    setBrand(event.target.value);
  }

  const handleBrandLocationChange = (event) => 
  {
    setBrandLocation(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <h1>GMB-Autofy</h1>
        <div>
          <h2>Brand</h2>
          <input value={brand} onChange={handleBrandChange}/>
        </div>
        <div>
          <h2>Location</h2>
          <input value={brandLocation} onChange={handleBrandLocationChange} />
        </div>
        <h2>Keywords</h2>
        <p>{keywords.join()}</p>
        <Options loc={brandLocation} brand={brand} />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
