import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user/user.service';
import {QuizModel} from '../quiz/quiz.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  wrongData: boolean;
  @Input()
  quizzes: QuizModel[];
  constructor(private router: Router, private route: ActivatedRoute,
              private userService: UserService) {
    this.wrongData = false;
  }
  tryLogin(user: string,  pass: string) {
    if (this.userService.tryLogin(user, pass)) {
      this.wrongData = false;
      this.router.navigate(['/user/', user]);
    } else {
      this.wrongData = true;
    }
  }
  ngOnInit() {
  }

}
