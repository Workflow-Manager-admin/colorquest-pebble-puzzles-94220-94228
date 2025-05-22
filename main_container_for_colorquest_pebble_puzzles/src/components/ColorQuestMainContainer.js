import React, { useState, useEffect } from 'react';
import Icons from './Icons';
import PuzzleBoard from './PuzzleBoard';

/**
 * ColorQuestMainContainer - Main container component for the ColorQuest Pebble Puzzles game.
 * Provides a playful, accessible layout designed for children with visually appealing icons.
 */
const ColorQuestMainContainer = () => {
  // State to track sound toggle
  const [soundOn, setSoundOn] = useState(true);
  
  // State to track if game has started
  const [gameStarted, setGameStarted] = useState(false);
  
  // State to track current level
  const [currentLevel, setCurrentLevel] = useState(1);
  
  // State to track achievements
  const [achievements, setAchievements] = useState({
    firstPuzzle: false,
    colorMaster: false,
    pebblePro: false
  });
  
  // State to track progress percentage (0-100)
  const [progress, setProgress] = useState(0);

  // Toggle sound state
  const toggleSound = () => {
    setSoundOn(!soundOn);
  };
  
  // Start a new game
  const handleStartGame = () => {
    setGameStarted(true);
  };
  
  // Handle level completion
  const handleLevelComplete = (level) => {
    // Update the progress bar
    setProgress(Math.min((level / 5) * 100, 100));
    
    // Update achievements
    const updatedAchievements = { ...achievements };
    
    if (level === 1) {
      updatedAchievements.firstPuzzle = true;
    }
    
    if (level === 3) {
      updatedAchievements.colorMaster = true;
    }
    
    if (level === 5) {
      updatedAchievements.pebblePro = true;
    }
    
    setAchievements(updatedAchievements);
    setCurrentLevel(level + 1);
  };
  
  // Reset the game
  const handleReset = () => {
    setGameStarted(false);
    setCurrentLevel(1);
    setProgress(0);
    setAchievements({
      firstPuzzle: false,
      colorMaster: false,
      pebblePro: false
    });
  };

  return (
    <div className="color-quest-container">
      <div className="color-quest-header">
        <h1 className="color-quest-title">ColorQuest Pebble Puzzles</h1>
        <div className="color-quest-mascot">
          {/* Kid-friendly mascot character */}
          <Icons.Mascot width={80} height={80} />
        </div>
      </div>

      <div className="color-quest-content">
        <div className="game-area">
          <div className="puzzle-area">
            <PuzzleBoard
              gameStarted={gameStarted}
              onLevelComplete={handleLevelComplete}
            />
          </div>
=======

          <div className="game-controls">
            <button 
              className="control-btn btn-start" 
              onClick={gameStarted ? handleReset : handleStartGame}
            >
              {gameStarted ? 
                <><Icons.Settings width={30} height={30} /> Reset Game</> : 
                <><Icons.PlayButton width={30} height={30} /> Start Game</>
              }
            </button>
            <button className="control-btn btn-help">
              <Icons.HelpButton width={30} height={30} /> Help
            </button>
          </div>
=======
        </div>

        <div className="sidebar">
          <div className="level-indicator">
            <h3>Level 1</h3>
            <div className="progress-bar">
              <div className="progress" style={{width: '20%'}}></div>
            </div>
          </div>

          <div className="achievements">
            <h3>
              <Icons.Trophy width={24} height={24} /> Achievements
            </h3>
            <ul className="achievement-list">
              <li className="achievement-item">
                <Icons.Star width={20} height={20} /> First Puzzle
              </li>
              <li className="achievement-item locked">
                <Icons.Star width={20} height={20} /> Color Master
              </li>
              <li className="achievement-item locked">
                <Icons.Star width={20} height={20} /> Pebble Pro
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="color-quest-footer">
        <button className="footer-btn btn-settings">
          <Icons.Settings width={20} height={20} /> Settings
        </button>
        <div className="sound-toggle">
          <span>Sound:</span>
          <button className="sound-btn" onClick={toggleSound}>
            {soundOn ? <Icons.SoundOn width={24} height={24} /> : <Icons.SoundOff width={24} height={24} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorQuestMainContainer;
