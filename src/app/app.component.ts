import { Component } from '@angular/core';
import {QuizModel} from "./vitruvianLib/quiz/quiz.model";
import {QuestionModel} from "./vitruvianLib/question/question.model";
import {QuizService} from "./vitruvianLib/quiz/quiz.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuimicaEducacao';
  quizzes: QuizModel[] = [
    new QuizModel(1, [
      new QuestionModel('Assinale a opção que contém um hidrocarboneto', 'C2H6',
        ['C3H5O2', 'C2H6', 'C4H5Cl2']),
    ], 'Hidrocarbonetos', 'Hidrocarbonetos são compostos formados apenas por carbono e hidrogênio.'),
    new QuizModel(2, [
      new QuestionModel('Assinale a opção que contém uma função oxigenada', 'C3H5O2',
        ['C3H5O2', 'C2H6', 'C4H5Cl2'])
    ], 'Funções oxigenadas', 'Funções oxigenadas possuem átomos de oxigênio na cadeia carbônica'),
  ];
  constructor(private quizService: QuizService) {
    this.quizService.quizzes = this.quizzes;
  }
}
