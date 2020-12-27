export class Company{
    id: number;
    playerCompetitionId: number|null;
    companyName: string;
    companyWebsiteURL: string|null;
    companyShortPitch: string|null;
    companyCurrentStockPrice: number|null
    constructor(
      id: number,
      playerCompetitionId: number|null,
      companyName: string,
      companyWebsiteURL: string|null,
      companyShortPitch: string|null,
      companyCurrentStockPrice: number|null
      ) { 
        this.id = id;
        this.playerCompetitionId = playerCompetitionId;
        this.companyName = companyName;
        this.companyWebsiteURL = companyWebsiteURL;
        this.companyShortPitch = companyShortPitch;
        this.companyCurrentStockPrice = companyCurrentStockPrice
      }
};

