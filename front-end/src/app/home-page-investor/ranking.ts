export class Ranking {
  position: number;
  name: string;
  points: number;
  date: string;

  constructor(position: number, name: string, points: number, date: string) {
    this.position = position;
    this.date = date;
    this.points = points;
    this.name = name;
  }
}
