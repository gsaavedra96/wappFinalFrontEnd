import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from 'src/app/services/commentService.service';
import { localStorageProvider } from 'src/app/lib/localStorageProvider';

@Component({
  selector: 'app-comments',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {

  public comments :any =[] ; 
  public newComment : any = {};
  public commentsList :any =[] ; 
  public comment : any;
  public message :any;
  public islogged: any;
  public userInfo: any;
  public navigation : any;
  public post :any;
  public document:any;

  rating = {
    bad : 0,
    good : 0,
  }

  constructor(
    private router : Router,
    private commentService : CommentService
  ) { 
    this.navigation  = this.router.getCurrentNavigation();
    this.document = document.getElementById('image-background');
  }

  ngOnInit() {
    this.initializeVariables();
    this.setVariables();
    this.getComments();
   
  }

  initializeVariables(){
    this.post= {};
    this.commentsList = [];
    this.comment = "";
    this.islogged = this.checkIsLogged();
    console.log("IS LOGGED",this.islogged)
  }

  checkIsLogged(){
    let res = false;
    if(localStorageProvider.getObject('userInfo')){
       res = true;
       this.userInfo = localStorageProvider.getObject('userInfo');
    } 
    return res;
  }

  doRefresh(event:any) {
    this.ngOnInit();
    event.target.complete();
  }

  setVariables(){
    this.document = document.getElementById('image-background');
    this.post = this.navigation.extras.state.post;
    console.log("POSTT",this.post)
    this.document.style.background = 'url('+this.post.image.url+') ';
  }
  
  getComments (){
    let data : any = {
      newsId : this.post.id
    }
    this.commentService.commentListByNewId(data).subscribe((response: any) => { 
      this.commentsList = response.data;
    });
    console.log("GET RESPONSE",this.commentsList)
  }

  addComment(){
    let data : any = {
      newsId : this.post.id,
      content : this.comment,
      userId : this.userInfo.id
    }
    this.commentService.addCommentByNewId(data).subscribe((response: any) => { 
      this.commentsList = response.data;
    });

    this.getComments()
  }

/*   getNewsById(){
    this.newsService.newsList({}).subscribe((response: any) => { 
      this.post = response.data;
    });
    console.log("RESPONSE",this.post)
  } */

}
