import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Options from './Components/Options';
import Keywords from './Components/Keywords';
import InputValueController from './Components/InputValueController'

function App() {

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
        <div>
          <h1>gmb-autofy</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <body>

          <div className="flex-container">

            <div className="flex-child">
              <h2>Brand</h2>
              <input value={brand} onChange={handleBrandChange}/>
            </div>

            <div className="flex-child">
            <h2>Location</h2>
            <input value={brandLocation} onChange={handleBrandLocationChange} />

            <InputValueController value={brand} onChange={handleBrandChange} />
          </div>
          </div>

          <div>
            <br></br><br></br>
            <Keywords loc={brandLocation} />
            <br></br>
            <Options loc={brandLocation} brand={brand} />
          </div>
        </body>
      </header>
      
    </div>
  );
}

export default App;
