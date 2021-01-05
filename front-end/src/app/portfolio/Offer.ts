export class Offer {
  id: number;
  type: string;
  company: string;
  status: string;
  qt: number;
  offer: number;
  date: string;

  constructor(
    id: number,
    type: string,
    company: string,
    status: string,
    qt: number,
    offer: number,
    date: string
  ) {
    this.id = id;
    this.type = type;
    this.company = company;
    this.status = status;
    this.qt = qt,
    this.offer = offer;
    this.date = date;
  }
}
