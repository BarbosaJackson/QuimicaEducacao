export class UserModel {
  public constructor(public name: string, public username: string, public password: string,
                     public solvedTasks: boolean[] = [], public points: number = 0) {}
}
