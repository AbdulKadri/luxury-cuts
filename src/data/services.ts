export interface Service {
  id: number;
  name: string;
  price: number;
}

// All services in service page
const services: Service[] = [
  { id: 1, name: "Classic Haircut", price: 20 },
  { id: 2, name: "Beard & Mustache Trim", price: 10 },
  { id: 3, name: "Deluxe Grooming Package", price: 30 },
  { id: 4, name: "Hair Coloring", price: 30 },
  { id: 5, name: "Hair Styling", price: 20 },
  { id: 6, name: "Shampoo & Conditioning", price: 10 },
  { id: 7, name: "Scalp Treatments", price: 10 },
  { id: 8, name: "Hair Extensions", price: 30 },
  { id: 9, name: "Keratin Treatments", price: 30 },
  { id: 10, name: "Nose Waxing", price: 10 },
];

export default services;
