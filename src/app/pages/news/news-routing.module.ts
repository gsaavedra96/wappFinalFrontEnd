import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsPage } from './news.page';
import { NewComponent} from './new/new.component';

const routes: Routes = [
  {
    path: '',
    component: NewsPage
  },
  {
    path: 'post',
    component: NewComponent,
    //canActivate: [LoggedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPageRoutingModule {}
