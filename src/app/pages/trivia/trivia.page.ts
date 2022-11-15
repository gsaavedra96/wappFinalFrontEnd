import { Component, OnInit } from '@angular/core';
import { TriviaService } from 'src/app/services/triviaService.service';
import { Router } from '@angular/router';
//import { StreamingMedia, StreamingVideoOptions,StreamingAudioOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.page.html',
  styleUrls: ['./trivia.page.scss'],
})
export class TriviaPage implements OnInit {

  public triviaList : any;

  constructor(
    //private streamingMedia: StreamingMedia
    private triviaService : TriviaService,
    private router : Router
    ) { }

  ngOnInit() {
    this.initializeVariables();
    this.listMatch();
  }

  initializeVariables(){
    this.triviaList = [];
  }

  gotoTrivia(trivia:any){
    this.router.navigate(['/trivia/questions'], {state: { trivia : trivia} });
  }

  listMatch(){
    this.triviaService.listTrivia({}).subscribe((response: any) => { 
      this.triviaList = response.data;
    });
  }

}
