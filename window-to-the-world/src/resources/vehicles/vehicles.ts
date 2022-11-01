import CarImage from './images/car.jpg';
import TrainImage from './images/train.jpg';
import BikeImage from './images/bike.jpg';
import HelicopterImage from './images/helicopter.jpg';
import BoatImage from './images/boat.jpg';
import AmbulanceImage from './images/ambulance.jpg';

import CarSound from './sounds/car.mp3';
import TrainSound from './sounds/train.mp3';
import BikeSound from './sounds/bike.mp3';
import HelicopterSound from './sounds/helicopter.mp3';
import BoatSound from './sounds/boat.mp3';
import AmbulanceSound from './sounds/ambulance.mp3';

import {CardItem} from '../resourcesMaster';

const vehicles: CardItem[] = [
  {name: 'car', image: CarImage, sound: CarSound},
  {name: 'train', image: TrainImage, sound: TrainSound},
  {name: 'bike', image: BikeImage, sound: BikeSound},
  {name: 'helicopter', image: HelicopterImage, sound: HelicopterSound},
  {name: 'boat', image: BoatImage, sound: BoatSound},
  {name: 'ambulance', image: AmbulanceImage, sound: AmbulanceSound},
  
];

export default vehicles;