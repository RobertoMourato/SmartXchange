
export interface Game {
  id: number;
  managerId: number;
  competitionStartDate: Date;
  competitionEndDate: Date;
  competitionMarketOpening: string;
  competitionMarketEnding: string;
  competitionInitialBudget: number;
  competitionInitialStockValue: number;
  competitionInitialRefreshRate: number;
  competitionNumStocks: number;
  competitionHasStarted: number;
  createdAt: string;
  updatedAt: string;
  status: string;
}
