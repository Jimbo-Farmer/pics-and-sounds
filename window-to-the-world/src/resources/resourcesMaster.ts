import animals from "./animals/Animals";
import vehicles from "./vehicles/vehicles";

import animalsIcon from "./animals/images/animals-icon.svg";
import vehiclesIcon from "./vehicles/images/vehicles-icon.svg";

export interface CardItem {
  name: string;
  image: string;
  sound: string;
}

const allCategories = [
  {name: 'animals', icon: animalsIcon, array: animals},
  {name: 'vehicles', icon: vehiclesIcon, array: vehicles}];

export default allCategories;