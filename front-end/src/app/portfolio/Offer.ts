export class Offer {
  type: string;
  company: string;
  status: string;
  qt: number;
  offer: number;

  constructor(
    type: string,
    company: string,
    status: string,
    qt: number,
    offer: number
  ) {

    this.type= type;
    this.company=company;
    this.status=status;
    this.qt= qt,
    this.offer=offer;
  }
}
