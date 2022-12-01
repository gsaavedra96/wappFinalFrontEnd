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

  private length:any;

  constructor(
    private router : Router,
    private el : ElementRef,
    private render : Renderer2
  ) { 

    this.navigation = this.router.getCurrentNavigation();
  }

  ngOnInit() {
    console.log("NGONINIT")
    this.initializeVariables();
    this.setVariables();
   
  }

  initializeVariables(){
    this.trivia= {};
    this.view = {};
    this.contView = 0;
    this.length = 0
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
    if(this.contView == this.length-1)
      this.router.navigate(['trivia']);
  } 

  setVariables(){
    this.trivia = this.navigation.extras.state.trivia;
    this.view = this.trivia.triviaJson.views[this.contView];
    console.log("view",this.trivia)
    this.length = this.trivia.triviaJson.views.length;    
    console.log("view22",this.length)
  }

}























