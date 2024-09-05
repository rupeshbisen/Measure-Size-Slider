import React, { useState } from 'react';
import './App.css';
import SizerSlider from './components/SizibleSlider';

function App() {
  const [showSlide, setShowSlide] = useState<boolean>(false)
  return (
    <div className="container">
      <header className="App-header m-3">
        <h1 className='text-center' >Sizible Slider</h1>
      </header>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <button className="text-center" onClick={() => setShowSlide(!showSlide)}>{showSlide ? "close Sizible Slider" : "Open Sizible Slider"}</button>
        </div>
      </div>
      {showSlide && <SizerSlider />}
    </div>
  );
}

export default App;
