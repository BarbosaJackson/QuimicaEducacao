import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user/user.service';
import {UserModel} from '../user/user.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  users: UserModel[];
  username: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
    this.users = this.userService.getUsers();
    route.params.subscribe(value => {
      this.username = value.username;
    });
  }
  ngOnInit() {
    this.users.sort((a: UserModel, b: UserModel) => {
      return (a.points < b.points ? 1 : (b.points < a.points ? 0 : a.username < b.username ? 1 : 0));
    });
  }
}
