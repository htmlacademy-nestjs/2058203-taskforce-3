import { UserRole } from 'libs/shared/app-types/src/lib/user-role.enum';

export interface TokenPayload {
  sub: string;
  email: string;
  role: UserRole;
  lastname: string;
  firstname: string;
}
