import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {RegisterComponent} from "./vitruvianLib/register/register.component";
import {MenuComponent} from "./vitruvianLib/menu/menu.component";
import {RankingComponent} from "./vitruvianLib/ranking/ranking.component";
import {LoginComponent} from "./vitruvianLib/login/login.component";
import {UserComponent} from "./vitruvianLib/user/user.component";
import {QuizComponent} from "./vitruvianLib/quiz/quiz.component";
import {QuestionComponent} from "./vitruvianLib/question/question.component";
const routes = [
  {path: 'user/:username', component: UserComponent},
  {path: 'user/:username/tasks/:idx', component: QuizComponent},
  {path: 'user/:username/ranking', component: RankingComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuizComponent,
    UserComponent,
    LoginComponent,
    RankingComponent,
    MenuComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
