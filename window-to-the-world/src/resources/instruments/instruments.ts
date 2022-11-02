import PianoImage from './images/piano.jpg';
import GuitarImage from './images/guitar.jpg';

import PianoSound from './sounds/piano.mp3';
import GuitarSound from './sounds/guitar.mp3';


import {CardItem} from '../resourcesMaster';

const vehicles: CardItem[] = [
  {name: 'piano', image: PianoImage, sound: PianoSound},
  {name: 'guitar', image: GuitarImage, sound: GuitarSound},
  
];

export default vehicles;