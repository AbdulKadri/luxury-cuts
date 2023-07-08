import barber1 from "../assets/barber-images/barber1.jpg";
import barber2 from "../assets/barber-images/barber2.jpg";
import barber3 from "../assets/barber-images/barber3.jpg";
import barber4 from "../assets/barber-images/barber4.jpg";
import barber5 from "../assets/barber-images/barber5.jpg";

export interface Barber {
  id: number;
  name: string;
  image: string;
}

const barbers: Barber[] = [
  { id: 1, name: "John, Tordney", image: barber1 },
  { id: 2, name: "Mike, Malone", image: barber2 },
  { id: 3, name: "Melissa, Smith", image: barber3 },
  { id: 4, name: "Sara, Connor", image: barber4 },
  { id: 5, name: "Zack, Young", image: barber5 },
];

export default barbers;
