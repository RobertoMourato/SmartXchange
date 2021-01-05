export interface Invite {
  id: number;
  token: string;
  invitedBy: number;
  IsManager: number;
  competitionId: number;
  isValid: number;
  email: string;
  createdAt: string;
  updatedAt: string;
}
