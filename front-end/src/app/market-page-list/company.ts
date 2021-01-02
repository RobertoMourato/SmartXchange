export class Company{
    id: Number;
    playerCompetitionId: Number|null;
    companyName: string;
    companyWebsiteURL: string|null;
    companyShortPitch: string|null;
    companyCurrentStockPrice: Number|null
    constructor(
      id: Number,
      playerCompetitionId: Number|null,
      companyName: string,
      companyWebsiteURL: string|null,
      companyShortPitch: string|null,
      companyCurrentStockPrice: Number|null
      ) { 
        this.id = id;
        this.playerCompetitionId = playerCompetitionId;
        this.companyName = companyName;
        this.companyWebsiteURL = companyWebsiteURL;
        this.companyShortPitch = companyShortPitch;
        this.companyCurrentStockPrice = companyCurrentStockPrice
      }
};

