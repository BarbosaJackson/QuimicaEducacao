import {QuestionModel} from '../question/question.model';

export class QuizModel {
  public constructor(public id,
                     public questions: QuestionModel[],
                     public title: string,
                     public text?: string) { }
}
