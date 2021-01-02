export class Ranking {
  position: number;
  name: string;
  price: number;
  gain: number;
  date: string;

  constructor(position: number, date: string) {
    this.position = position;
    this.date = date;
  }
}
