import React, { useState } from 'react';
import Icons from './Icons';

/**
 * ColorQuestMainContainer - Main container component for the ColorQuest Pebble Puzzles game.
 * Provides a playful, accessible layout designed for children with visually appealing icons.
 */
const ColorQuestMainContainer = () => {
  // State to track sound toggle
  const [soundOn, setSoundOn] = useState(true);

  // Toggle sound state
  const toggleSound = () => {
    setSoundOn(!soundOn);
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
            {/* Puzzle area with kid-themed elements */}
            <div className="puzzle-placeholder">
              <Icons.PuzzlePiece width={60} height={60} />
              <p>Puzzle area will go here!</p>
              <div className="pebble-container">
                <Icons.PebbleRed width={50} height={50} />
                <Icons.PebbleBlue width={50} height={50} />
                <Icons.PebbleYellow width={50} height={50} />
                <Icons.PebbleGreen width={50} height={50} />
                <Icons.PebblePurple width={50} height={50} />
              </div>
            </div>
          </div>

          <div className="game-controls">
            <button className="control-btn btn-start">
              <Icons.PlayButton width={30} height={30} /> Start Game
            </button>
            <button className="control-btn btn-help">
              <Icons.HelpButton width={30} height={30} /> Help
            </button>
          </div>
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
