import {Component, Input, OnInit} from '@angular/core';
import {QuestionModel} from './question.model';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input()
  question: QuestionModel;
  select: string;
  constructor() { }
  ngOnInit() { }
  check() {
    if (this.question.correctAnswer === this.select) {
      return true;
    }
    return false;
  }


}
