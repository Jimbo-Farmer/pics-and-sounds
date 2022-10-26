import animals from "./animals/Animals";
import vehicles from "./vehicles/vehicles";


export interface CardItem {
  name: string;
  image: string;
  sound: string;
}

const allCategories = [
  {name: 'animals', array: animals},
  {name: 'vehicles', array: vehicles}];

export default allCategories;