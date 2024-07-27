// src/pages/HomePage.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();

  const startGame = () => {
    history.push('/game');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-6">Welcome to Planning Poker</h1>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={startGame}
      >
        Start Game
      </button>
    </div>
  );
};

export default HomePage;
