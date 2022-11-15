import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Renderer2, Input, ElementRef, HostListener, Directive } from '@angular/core';
import { Router } from '@angular/router';
import { localStorageProvider } from 'src/app/lib/localStorageProvider';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})

export class QuestionsComponent implements OnInit {

  public islogged: any;
  public trivia : any;
  public isFinished : any;
  public view : any;
  public contView : number = 0;
  public navigation : any;

  @Input() public isCorrect : Boolean = false;

  constructor(
    private router : Router,
    private el : ElementRef,
    private render : Renderer2
  ) { 

    this.navigation = this.router.getCurrentNavigation();
  }

  ngOnInit() {
    this.initializeVariables();
    this.setVariables();
   
  }

  initializeVariables(){
    this.trivia= {};
    this.view = {};
    this.contView = 0;
    this.isFinished = false;
    this.islogged = this.checkIsLogged();
    console.log("IS LOGGED",this.islogged)
  }

  checkIsLogged(){
    let res = false;
    if(localStorageProvider.getObject('userInfo')){
       res = true;
    } 
    return res;
  }

  doRefresh(event:any) {
    this.ngOnInit();
    event.target.complete();
  }

  answer(option:any){
    setTimeout(() => {
      this.view = this.trivia.triviaJson.views[this.contView+1];
      this.contView = this.contView + 1;
      console.log("VIEWNEXT",this.view)
    }, 1000);
  } 

  setVariables(){
    this.trivia = this.navigation.extras.state.trivia;
    this.view = this.trivia.triviaJson.views[this.contView];
    console.log("view",this.view)
  }

}























