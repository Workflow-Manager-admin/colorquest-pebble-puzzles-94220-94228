import React from 'react';
import './App.css';
import ColorQuestMainContainer from './components/ColorQuestMainContainer';

/**
 * Main App component for ColorQuest Pebble Puzzles
 * Incorporates the ColorQuestMainContainer for the kid-friendly game layout
 */
function App() {
  return (
    <div className="app">
      <ColorQuestMainContainer />
    </div>
  );
}

export default App;