export class Offer {
  id: number;
  type: string;
  company: string;
  status: string;
  qt: number;
  offer: number;

  constructor(
    id:number,
    type: string,
    company: string,
    status: string,
    qt: number,
    offer: number
  ) {
    this.id=id;
    this.type= type;
    this.company=company;
    this.status=status;
    this.qt= qt,
    this.offer=offer;
  }
}
