import { Injectable } from '@angular/core';
import {UserModel} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: UserModel[] = [
    new UserModel('jackson', 'kcaj', '1234', []),
    new UserModel('eirene', 'freefireman', '4321', []),
    new UserModel('arturo', 'arturo', '3214', []),
  ];
  constructor() { }
  getUserData(username: string) {
    let user: UserModel;
    this.users.forEach((value) => {
      if (value.username === username) {
        user = value;
      }
    });
    return user;
  }
  incrementPoints(newPoints: number, username: string) {
    const user: UserModel = this.getUserData(username);
    user.points += newPoints;
  }
  public tryLogin(user: string, pass: string): boolean {
    let find: boolean = false;
    this.users.forEach( (value => {
      if (value.username === user && pass === value.password) {
        find = true;
      }
    }));
    return find;
  }
  public getUsers(): UserModel[] { return this.users; }
  public register(user: UserModel) {
    this.users.push(user);
  }
}
