import { EmailForInvite } from './create-manager-popup/create-manager-popup.component';

export interface User {
  id: number;
  tenantId: number;
  name: string;
  username: string;
  email: string;
  password: string;
  userTypeId: number;
  createdAt: string;
  updatedAt: string;
}
