import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from './user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from './user.service';
import {QuizService} from '../quiz/quiz.service';
import {QuizModel} from '../quiz/quiz.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: UserModel;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private quizService: QuizService) {
    // this.quizService.quizzes;
    route.params.subscribe(value => {
      this.user = this.userService.getUserData(value.username);
    });
  }

  ngOnInit() {

  }

}
