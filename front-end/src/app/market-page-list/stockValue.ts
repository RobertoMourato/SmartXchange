export class StockValue{
    stockValue: number|null;
    stockValueDate: Date|null;
    constructor(
      stockValue: number|null,
      stockValueDate: Date|null
      ) {
        this.stockValue = stockValue;
        this.stockValueDate = stockValueDate;
      }
}

