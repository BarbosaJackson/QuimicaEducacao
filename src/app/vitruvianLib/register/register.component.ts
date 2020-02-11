import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import {UserModel} from '../user/user.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  register(name: string, username: string, password: string): void {
    this.userService.register(new UserModel(name, username, password));
    this.router.navigate(['']);
  }

}
