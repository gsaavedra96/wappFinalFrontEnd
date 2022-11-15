import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedPage } from './feed.page';
import { NewsPage } from '../news/news.page';
import { NewComponent } from '../news/new/new.component';
import { TriviaPage } from '../trivia/trivia.page';
import { QuestionsComponent } from '../trivia/questions/questions.component';

const routes: Routes = [
  {
    path: '',
    component: FeedPage
  },
  {
    path: 'post',
    component: NewComponent,
    //canActivate: [LoggedGuard]
  },
  {
    path: 'questions',
    component: QuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class FeedPageRoutingModule {}
