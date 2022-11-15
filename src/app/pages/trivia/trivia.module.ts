import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TriviaPageRoutingModule } from './trivia-routing.module';
//import { StreamingMedia } from '@ionic-native/streaming-media';

import { TriviaPage } from './trivia.page';
import { QuestionsComponent } from './questions/questions.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TriviaPageRoutingModule,
    SharedModule,
    
  ],
  declarations: [TriviaPage,QuestionsComponent],
  providers:[
    //StreamingMedia
  ],
  exports: [TriviaPage,QuestionsComponent],
  entryComponents: [
    QuestionsComponent,QuestionsComponent
  ]
})
export class TriviaPageModule {}
