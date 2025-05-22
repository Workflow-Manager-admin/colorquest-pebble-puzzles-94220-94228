import React from 'react';
import Icons from './Icons';

/**
 * HelpModal - A kid-friendly modal component that displays game instructions
 * with simple language and visual aids
 * 
 * @param {boolean} isOpen - Whether the modal is open or closed
 * @param {function} onClose - Function to call when closing the modal
 */
// PUBLIC_INTERFACE
const HelpModal = ({ isOpen, onClose }) => {
  // If the modal isn't open, don't render anything
  if (!isOpen) return null;
  
  // Handle clicks on the backdrop (area outside the modal) to close it
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  return (
    <div className="help-modal-backdrop" onClick={handleBackdropClick}>
      <div className="help-modal-container">
        <div className="help-modal-header">
          <h2>How to Play ColorQuest Pebble Puzzles</h2>
          <button className="help-close-button" onClick={onClose}>
            X
          </button>
        </div>
        
        <div className="help-modal-content">
          <div className="help-section">
            <div className="help-section-icon">
              <Icons.PuzzlePiece width={40} height={40} />
            </div>
            <div className="help-section-text">
              <h3>Goal of the Game</h3>
              <p>Make the pattern on your workspace match the target pattern with colorful pebbles!</p>
            </div>
          </div>
          
          <div className="help-section">
            <div className="help-section-icon">
              <Icons.PebbleRed width={40} height={40} />
            </div>
            <div className="help-section-text">
              <h3>Step 1: Pick a Pebble</h3>
              <p>Look at the Available Pebbles and click on one to pick it up.</p>
            </div>
          </div>
          
          <div className="help-section">
            <div className="help-section-steps">
              <div className="help-step">
                <Icons.PebbleRed width={30} height={30} />
                <span className="help-step-arrow">→</span>
                <div className="help-grid-example"></div>
              </div>
            </div>
            <div className="help-section-text">
              <h3>Step 2: Place Your Pebble</h3>
              <p>Click on a square in Your Workspace to place your pebble there.</p>
            </div>
          </div>
          
          <div className="help-section">
            <div className="help-section-icon special-icon">
              <Icons.Star width={40} height={40} />
            </div>
            <div className="help-section-text">
              <h3>Step 3: Match the Pattern</h3>
              <p>Keep placing pebbles until your pattern looks the same as the Target Pattern.</p>
              <p>When you match it perfectly, you win!</p>
            </div>
          </div>
          
          <div className="help-section">
            <div className="help-section-icon">
              <span className="help-clickright">Right Click</span>
            </div>
            <div className="help-section-text">
              <h3>Oops! Made a Mistake?</h3>
              <p>If you want to remove a pebble, right-click on it to take it back.</p>
            </div>
          </div>
          
          <div className="help-section special-tip">
            <div className="help-section-icon">
              <Icons.Trophy width={40} height={40} />
            </div>
            <div className="help-section-text">
              <h3>Special Tip!</h3>
              <p>Look carefully at how many pebbles you have and what colors you need.</p>
              <p>Sometimes you need to plan ahead to make the pattern just right!</p>
            </div>
          </div>
          
          <div className="help-modal-footer">
            <button className="help-modal-button" onClick={onClose}>
              I'm Ready to Play!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
