import {Component, Input, OnInit} from '@angular/core';
import {QuizService} from './quiz.service';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizModel} from './quiz.model';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  idx: number;
  user: string;
  quiz: QuizModel;
  questionPos: number;
  selected: string;
  points: number;
  endQuiz: boolean;
  constructor(private quizService: QuizService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
    route.params.subscribe(
      (value => {
        this.quiz = this.quizService.getQuiz(value.idx);
        this.user = value.username;
      }
    ));
    this.points = 0;
    this.questionPos = 0;
    this.endQuiz = false;
  }

  ngOnInit() {
  }
  onSelected(selec: string) {
    this.selected = selec;
  }
  check(): void {
    if (this.quiz.questions[this.questionPos].correctAnswer === this.selected) {
      this.points += 1;
    }
    this.questionPos += 1;
  }
  sendData() {
    this.userService.incrementPoints(this.points, this.user);
    this.router.navigate(['user', this.user]);
  }
}
