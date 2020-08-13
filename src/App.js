import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Options from './Components/Options';
import Keywords from './Components/Keywords';

function App() {

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

  const introStyle = {margin: 5}

  return (

    <div className="App">
      <header className="App-header">
        <div style={introStyle}>
        <h1>GMB-Autofy</h1>
        <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div style={introStyle}>
        <h2>Scope & Usage</h2>
          <p>We needed a way to upload GMB content faster - here it is. 
            <br></br>Input brand name & location 
            <br></br>Use static keyord list & dynamic title and description
            <br></br>Happy Hacking! :-)
          </p>
        </div>
        
        
      </header>
      <body className="App-body">

      <div style={introStyle}>
          <h2>Brand</h2>
          <input value={brand} onChange={handleBrandChange}/>
          <br></br>
          <br></br>
        </div>

        <div style={introStyle}>
          <h2>Location</h2>
          <input value={brandLocation} onChange={handleBrandLocationChange} />
          <br></br>
          <br></br>
        </div>

        <div style={introStyle}>
          <h2>Keywords</h2>
          <p>{keywords.join()}</p>
          <br></br>
          <br></br>
        </div>

        <div style={introStyle}>
          <Keywords loc={brandLocation} />
          <Options loc={brandLocation} brand={brand} />
        </div>
      </body>
    </div>
  );
}

export default App;
