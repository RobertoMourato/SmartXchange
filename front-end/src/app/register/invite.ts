export class Invite{
    id: number;
    token: string;
    invitedBy: number;
    isManager: boolean;
    competitionId: number|null;
    email: string;
    isValid: boolean;
}
