import React from 'react';
import Carousel from './components/Carousel';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-center my-4">My Carousel</h1>
      <div className="max-w-xl mx-auto">
        <Carousel />
      </div>
    </div>
  );
};

export default App;
