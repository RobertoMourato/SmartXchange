export class Competition{
    id: number;
    managerId: number|null;
    competitionInitialBudget: number|null;
    competitionInitialStockValue: number|null;
    competitionNumStocks: number|null;
    competitionHasStarted: boolean;
    constructor(
        id: number,
        managerId: number|null,
        competitionInitialBudget: number|null,
        competitionInitialStockValue: number|null,
        competitionNumStocks: number|null,
        competitionHasStarted: boolean,
        ) { 
          this.id = id;
          this.managerId = managerId;
          this.competitionInitialBudget = competitionInitialBudget;
          this.competitionInitialStockValue = competitionInitialStockValue;
          this.competitionNumStocks = competitionNumStocks;
          this.competitionHasStarted = competitionHasStarted
        }
}
