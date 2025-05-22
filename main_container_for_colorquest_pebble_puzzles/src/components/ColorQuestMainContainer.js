import React from 'react';

/**
 * ColorQuestMainContainer - Main container component for the ColorQuest Pebble Puzzles game.
 * Provides a playful, accessible layout designed for children.
 */
const ColorQuestMainContainer = () => {
  return (
    <div className="color-quest-container">
      <div className="color-quest-header">
        <h1 className="color-quest-title">ColorQuest Pebble Puzzles</h1>
        <div className="color-quest-mascot">
          {/* Placeholder for future mascot character */}
          <div className="mascot-placeholder">😊</div>
        </div>
      </div>

      <div className="color-quest-content">
        <div className="game-area">
          <div className="puzzle-area">
            {/* Placeholder for future puzzle components */}
            <div className="puzzle-placeholder">
              <p>Puzzle area will go here!</p>
              <div className="pebble-container">
                <div className="pebble pebble-red"></div>
                <div className="pebble pebble-blue"></div>
                <div className="pebble pebble-yellow"></div>
                <div className="pebble pebble-green"></div>
              </div>
            </div>
          </div>

          <div className="game-controls">
            <button className="control-btn btn-start">Start Game</button>
            <button className="control-btn btn-help">Help</button>
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
            <h3>Achievements</h3>
            <ul className="achievement-list">
              <li className="achievement-item">First Puzzle</li>
              <li className="achievement-item locked">Color Master</li>
              <li className="achievement-item locked">Pebble Pro</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="color-quest-footer">
        <button className="footer-btn btn-settings">Settings</button>
        <div className="sound-toggle">
          <span>Sound:</span>
          <button className="sound-btn">🔊</button>
        </div>
      </div>
    </div>
  );
};

export default ColorQuestMainContainer;
