import CarImage from './images/car.jpg';
import TrainImage from './images/train.jpg';

import CarSound from './sounds/car.mp3';
import TrainSound from './sounds/train.mp3';

import {CardItem} from '../resourcesMaster';

const vehicles: CardItem[] = [
  {name: 'car', image: CarImage, sound: CarSound},
  {name: 'train', image: TrainImage, sound: TrainSound},
  
];

export default vehicles;