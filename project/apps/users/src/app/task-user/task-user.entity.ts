import { User, UserRole } from '@project/shared/app-types';
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './task-user.constant';

export class TaskUserEntity implements User {
  public _id: string;
  public avatar: string;
  public dateBirth: Date;
  public email: string;
  public firstname: string;
  public lastname: string;
  public passwordHash: string;
  public role: UserRole;

  constructor(taskUser: User) {
    this.fillEntity(taskUser);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(taskUser: User) {
    this._id = taskUser._id;
    this.avatar = taskUser.avatar;
    this.dateBirth = taskUser.dateBirth;
    this.email = taskUser.email;
    this.firstname = taskUser.firstname;
    this.lastname = taskUser.lastname;
    this.passwordHash = taskUser.passwordHash;
    this.role = taskUser.role;
  }

  public async setPassword(password: string): Promise<TaskUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
