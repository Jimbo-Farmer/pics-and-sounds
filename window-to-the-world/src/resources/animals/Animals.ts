import CatImage from './images/cat.jpg';
import DogImage from './images/dog.jpg';
import DonkeyImage from './images/donkey.jpg';
import CockerelImage from './images/cockerel.jpg';
import CowImage from './images/cow.jpg';
import ChickImage from './images/chick.jpg';

import CatSound from './sounds/cat.mp3';
import DogSound from './sounds/dog.mp3';
import DonkeySound from './sounds/donkey.mp3';
import CockerelSound from './sounds/cockerel.mp3';
import CowSound from './sounds/cow.mp3';
import ChickSound from './sounds/chick.mp3';

import {CardItem} from '../resourcesMaster'

const animals: CardItem[] = [
  {name: 'cat', image: CatImage, sound: CatSound},
  {name: 'dog', image: DogImage, sound: DogSound},
  {name: 'donkey', image: DonkeyImage, sound: DonkeySound},
  {name: 'cockerel', image: CockerelImage, sound: CockerelSound},
  {name: 'cow', image: CowImage, sound: CowSound},
  {name: 'chick', image: ChickImage, sound: ChickSound},
];

export default animals;