import React from 'react';
import mascotSvg from '../assets/images/mascot.svg';
import puzzlePieceSvg from '../assets/images/puzzle-piece.svg';
import starSvg from '../assets/images/star.svg';
import trophySvg from '../assets/images/trophy.svg';
import soundOnSvg from '../assets/images/sound-on.svg';
import soundOffSvg from '../assets/images/sound-off.svg';
import playButtonSvg from '../assets/images/play-button.svg';
import helpButtonSvg from '../assets/images/help-button.svg';
import settingsSvg from '../assets/images/settings.svg';
import pebbleRedSvg from '../assets/images/pebble-red.svg';
import pebbleBlueSvg from '../assets/images/pebble-blue.svg';
import pebbleYellowSvg from '../assets/images/pebble-yellow.svg';
import pebbleGreenSvg from '../assets/images/pebble-green.svg';
import pebblePurpleSvg from '../assets/images/pebble-purple.svg';

/**
 * Icon component - A wrapper for displaying SVG icons with customizable size
 * @param {string} src - The source of the SVG icon
 * @param {string} alt - Alt text for accessibility
 * @param {number} width - Width of the icon in pixels
 * @param {number} height - Height of the icon in pixels
 * @param {string} className - Optional CSS class name
 * @returns {JSX.Element} - The rendered icon
 */
// PUBLIC_INTERFACE
const Icon = ({ src, alt, width = 30, height = 30, className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`icon ${className}`}
    />
  );
};

/**
 * Collection of all kid-themed icons for the ColorQuest Pebble Puzzles game
 */
export const Icons = {
  // Characters and Elements
  Mascot: (props) => <Icon src={mascotSvg} alt="Colorful mascot character" {...props} />,
  PuzzlePiece: (props) => <Icon src={puzzlePieceSvg} alt="Puzzle piece" {...props} />,
  Star: (props) => <Icon src={starSvg} alt="Star" {...props} />,
  Trophy: (props) => <Icon src={trophySvg} alt="Trophy" {...props} />,
  
  // Controls
  SoundOn: (props) => <Icon src={soundOnSvg} alt="Sound on" {...props} />,
  SoundOff: (props) => <Icon src={soundOffSvg} alt="Sound off" {...props} />,
  PlayButton: (props) => <Icon src={playButtonSvg} alt="Play button" {...props} />,
  HelpButton: (props) => <Icon src={helpButtonSvg} alt="Help button" {...props} />,
  Settings: (props) => <Icon src={settingsSvg} alt="Settings" {...props} />,
  
  // Pebbles
  PebbleRed: (props) => <Icon src={pebbleRedSvg} alt="Red pebble" {...props} />,
  PebbleBlue: (props) => <Icon src={pebbleBlueSvg} alt="Blue pebble" {...props} />,
  PebbleYellow: (props) => <Icon src={pebbleYellowSvg} alt="Yellow pebble" {...props} />,
  PebbleGreen: (props) => <Icon src={pebbleGreenSvg} alt="Green pebble" {...props} />,
  PebblePurple: (props) => <Icon src={pebblePurpleSvg} alt="Purple pebble" {...props} />
};

export default Icons;
