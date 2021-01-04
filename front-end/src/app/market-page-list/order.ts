export class Order{
    id: number;
    companyId: number;
    playerId: number;
    orderNumStock: number;
    orderValue: number;
    orderDate: Date;
    orderType: string;
    orderStatus: string;
    constructor(
      id: number,
      companyId: number,
      playerId: number,
      orderNumStock: number,
      orderValue: number,
      orderDate: Date,
      orderType: string,
      orderStatus: string,
      ) { 
        this.id = id;
        this.companyId= companyId;
        this.playerId= playerId;
        this.orderNumStock= orderNumStock;
        this.orderValue= orderValue;
        this.orderDate= orderDate;
        this.orderType= orderType;
        this.orderStatus= orderStatus;
      }
};

