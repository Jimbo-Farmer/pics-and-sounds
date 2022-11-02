import animals from "./animals/Animals";
import vehicles from "./vehicles/vehicles";
import instruments from "./instruments/instruments";

import animalsIcon from "./animals/images/animals-icon.svg";
import vehiclesIcon from "./vehicles/images/vehicles-icon.svg";
import instrumentsIcon from "./instruments/images/instruments-icon.svg";

export interface CardItem {
  name: string;
  image: string;
  sound: string;
}

const allCategories = [
  {name: 'animals', icon: animalsIcon, array: animals},
  {name: 'vehicles', icon: vehiclesIcon, array: vehicles},
  {name: 'instruments', icon: instrumentsIcon, array: instruments},

];

export default allCategories;