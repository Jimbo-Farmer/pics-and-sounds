import CatImage from './images/cat.jpg';
import CatSound from './sounds/coin-sound.mp3';

interface CardInput {
  name: string;
  image: string;
  sound: string;
}

const animals: CardInput[] = [{name: 'cat', image: CatImage, sound: CatSound}];

export default animals;