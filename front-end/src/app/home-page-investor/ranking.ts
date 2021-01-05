export class Ranking {
  position: number;
  name: string;
  price: number;
  gain: number;
  date: string;

  constructor(position: number, name: string, price: number, gain: number, date: string) {
    this.position = position;
    this.date = date;
    this.gain = gain;
    this.name = name;
    this.price = price;
  }
}
