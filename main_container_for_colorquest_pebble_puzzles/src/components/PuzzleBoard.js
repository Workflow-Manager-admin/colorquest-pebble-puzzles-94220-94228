import React, { useState, useEffect } from 'react';
import Icons from './Icons';

/**
 * PuzzleBoard component - Provides the interactive puzzle board for the ColorQuest game
 * Allows players to drag and drop colored pebbles onto a grid to solve puzzles
 */
const PuzzleBoard = ({ gameStarted, onLevelComplete }) => {
  // Board size configuration
  const ROWS = 3;
  const COLS = 3;
  
  // Pebble colors available in the game
  const PEBBLE_COLORS = [
    { name: 'Red', component: Icons.PebbleRed },
    { name: 'Blue', component: Icons.PebbleBlue },
    { name: 'Yellow', component: Icons.PebbleYellow },
    { name: 'Green', component: Icons.PebbleGreen },
    { name: 'Purple', component: Icons.PebblePurple }
  ];
  
  // State for the current puzzle level
  const [currentLevel, setCurrentLevel] = useState(1);
  
  // State for the puzzle grid (null means empty cell)
  const [grid, setGrid] = useState(Array(ROWS).fill().map(() => Array(COLS).fill(null)));
  
  // State for the selected pebble
  const [selectedPebble, setSelectedPebble] = useState(null);
  
  // State for the puzzle target pattern (what the player needs to create)
  const [targetPattern, setTargetPattern] = useState(null);
  
  // State for available pebbles for the player to use
  const [availablePebbles, setAvailablePebbles] = useState([]);
  
  // Success message when level is completed
  const [successMessage, setSuccessMessage] = useState(false);

  /**
   * Initialize a new level with a target pattern and available pebbles
   */
  useEffect(() => {
    if (gameStarted) {
      initializeLevel(currentLevel);
    }
  }, [gameStarted, currentLevel]);

  /**
   * Set up the level based on the current level number
   */
  const initializeLevel = (level) => {
    // Clear the grid
    setGrid(Array(ROWS).fill().map(() => Array(COLS).fill(null)));
    
    // Reset selected pebble
    setSelectedPebble(null);
    
    // Hide success message
    setSuccessMessage(false);
    
    // Create a target pattern based on level number
    const newPattern = generateTargetPattern(level);
    setTargetPattern(newPattern);
    
    // Determine which pebbles are available for this level
    const pebblesToUse = determineAvailablePebbles(level);
    setAvailablePebbles(pebblesToUse);
  };

  /**
   * Generate a target pattern based on the level number
   */
  const generateTargetPattern = (level) => {
    // Simple patterns for early levels
    if (level === 1) {
      // Level 1: Simple line of alternating red and blue pebbles in the middle row
      const pattern = Array(ROWS).fill().map(() => Array(COLS).fill(null));
      pattern[1][0] = 0; // Red
      pattern[1][1] = 1; // Blue
      pattern[1][2] = 0; // Red
      return pattern;
    } else if (level === 2) {
      // Level 2: Diagonal of yellow pebbles
      const pattern = Array(ROWS).fill().map(() => Array(COLS).fill(null));
      pattern[0][0] = 2; // Yellow
      pattern[1][1] = 2; // Yellow
      pattern[2][2] = 2; // Yellow
      return pattern;
    } else {
      // Random pattern for higher levels
      const pattern = Array(ROWS).fill().map(() => Array(COLS).fill(null));
      
      // Place random pebbles on about 5 spots
      for (let i = 0; i < 5; i++) {
        const row = Math.floor(Math.random() * ROWS);
        const col = Math.floor(Math.random() * COLS);
        const colorIndex = Math.floor(Math.random() * 5); // 5 colors
        pattern[row][col] = colorIndex;
      }
      
      return pattern;
    }
  };

  /**
   * Determine which pebbles should be available based on the level
   */
  const determineAvailablePebbles = (level) => {
    if (level === 1) {
      // Level 1: Just red and blue
      return [
        { color: 0, count: 2 }, // 2 red pebbles
        { color: 1, count: 1 }  // 1 blue pebble
      ];
    } else if (level === 2) {
      // Level 2: Just yellow
      return [
        { color: 2, count: 3 } // 3 yellow pebbles
      ];
    } else if (level >= 10) {
      // Level 10 and above: Provide more pebbles to ensure completion
      return [
        { color: 0, count: 5 }, // red
        { color: 1, count: 5 }, // blue
        { color: 2, count: 5 }, // yellow
        { color: 3, count: 5 }, // green 
        { color: 4, count: 5 }  // purple
      ];
    } else {
      // Higher levels (3-9): Mix of all colors
      return [
        { color: 0, count: 3 }, // red
        { color: 1, count: 3 }, // blue
        { color: 2, count: 3 }, // yellow
        { color: 3, count: 3 }, // green 
        { color: 4, count: 3 }  // purple
      ];
    }
  };

  /**
   * Handle pebble selection from the available pebbles
   */
  const handlePebbleSelect = (colorIndex) => {
    // Find the pebble in available pebbles
    const pebbleType = availablePebbles.find(p => p.color === colorIndex);
    
    // If we still have this pebble available, select it
    if (pebbleType && pebbleType.count > 0) {
      setSelectedPebble(colorIndex);
    }
  };

  /**
   * Handle placing a pebble on the grid
   */
  const handleCellClick = (row, col) => {
    // If no pebble is selected or cell is already filled, do nothing
    if (selectedPebble === null || grid[row][col] !== null) return;
    
    // Create a new grid with the placed pebble
    const newGrid = [...grid];
    newGrid[row][col] = selectedPebble;
    setGrid(newGrid);
    
    // Update available pebbles
    const newAvailablePebbles = [...availablePebbles];
    const pebbleIndex = newAvailablePebbles.findIndex(p => p.color === selectedPebble);
    if (pebbleIndex !== -1) {
      newAvailablePebbles[pebbleIndex].count -= 1;
      
      // If we have no more of this pebble, deselect it
      if (newAvailablePebbles[pebbleIndex].count <= 0) {
        setSelectedPebble(null);
      }
    }
    setAvailablePebbles(newAvailablePebbles);
    
    // Check if the puzzle is solved
    setTimeout(() => {
      checkPuzzleSolution(newGrid);
    }, 500);
  };

  /**
   * Handle removing a pebble from the grid
   */
  const handlePebbleRemove = (row, col) => {
    // If cell is empty, do nothing
    if (grid[row][col] === null) return;
    
    // Get the pebble color at this position
    const pebbleColor = grid[row][col];
    
    // Create a new grid without the pebble
    const newGrid = [...grid];
    newGrid[row][col] = null;
    setGrid(newGrid);
    
    // Return the pebble to available pebbles
    const newAvailablePebbles = [...availablePebbles];
    const pebbleIndex = newAvailablePebbles.findIndex(p => p.color === pebbleColor);
    if (pebbleIndex !== -1) {
      newAvailablePebbles[pebbleIndex].count += 1;
    } else {
      // If this pebble type isn't in our available pebbles, add it
      newAvailablePebbles.push({ color: pebbleColor, count: 1 });
    }
    setAvailablePebbles(newAvailablePebbles);
  };

  /**
   * Check if the current grid matches the target pattern
   */
  const checkPuzzleSolution = (currentGrid) => {
    if (!targetPattern) return;
    
    // Check each cell that should have a pebble in the target pattern
    let solved = true;
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        // If there should be a pebble here in the target
        if (targetPattern[row][col] !== null) {
          // And the grid doesn't match the target
          if (currentGrid[row][col] !== targetPattern[row][col]) {
            solved = false;
            break;
          }
        }
      }
      if (!solved) break;
    }
    
    // If the puzzle is solved
    if (solved) {
      setSuccessMessage(true);
      
      // Trigger the onLevelComplete callback
      if (onLevelComplete) {
        setTimeout(() => {
          onLevelComplete(currentLevel);
          setCurrentLevel(prev => prev + 1);
        }, 1000);
      }
    }
  };

  // If game hasn't started, show placeholder
  if (!gameStarted) {
    return (
      <div className="puzzle-placeholder">
        <Icons.PuzzlePiece width={60} height={60} />
        <p>Click Start Game to begin!</p>
      </div>
    );
  }

  // Render the success message if the level is completed
  if (successMessage) {
    return (
      <div className="puzzle-success">
        <Icons.Star width={80} height={80} />
        <h2>Great Job!</h2>
        <p>You completed level {currentLevel}!</p>
      </div>
    );
  }

  return (
    <div className="puzzle-board">
      <div className="puzzle-target">
        <h3>Target Pattern</h3>
        <div className="target-grid">
          {targetPattern && Array(ROWS).fill().map((_, rowIndex) => (
            <div key={`target-row-${rowIndex}`} className="grid-row">
              {Array(COLS).fill().map((_, colIndex) => (
                <div 
                  key={`target-cell-${rowIndex}-${colIndex}`} 
                  className="grid-cell target-cell"
                >
                  {targetPattern[rowIndex][colIndex] !== null && (
                    PEBBLE_COLORS[targetPattern[rowIndex][colIndex]]?.component({
                      width: 40, 
                      height: 40
                    })
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="puzzle-workspace">
        <h3>Your Workspace</h3>
        <div className="play-grid">
          {Array(ROWS).fill().map((_, rowIndex) => (
            <div key={`row-${rowIndex}`} className="grid-row">
              {Array(COLS).fill().map((_, colIndex) => (
                <div 
                  key={`cell-${rowIndex}-${colIndex}`} 
                  className={`grid-cell ${grid[rowIndex][colIndex] !== null ? 'filled' : ''}`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    handlePebbleRemove(rowIndex, colIndex);
                  }}
                >
                  {grid[rowIndex][colIndex] !== null && (
                    PEBBLE_COLORS[grid[rowIndex][colIndex]]?.component({
                      width: 40, 
                      height: 40
                    })
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="puzzle-controls">
        <h3>Available Pebbles</h3>
        <div className="available-pebbles">
          {availablePebbles.map((pebble) => (
            <div 
              key={`pebble-${pebble.color}`}
              className={`pebble-option ${selectedPebble === pebble.color ? 'selected' : ''}`}
              onClick={() => handlePebbleSelect(pebble.color)}
            >
              {PEBBLE_COLORS[pebble.color]?.component({ width: 40, height: 40 })}
              <span className="pebble-count">{pebble.count}</span>
            </div>
          ))}
        </div>
        <div className="instructions">
          <p>Click a pebble to select it, then click on the grid to place it.</p>
          <p>Right-click a placed pebble to remove it.</p>
        </div>
      </div>
    </div>
  );
};

export default PuzzleBoard;
