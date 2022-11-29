import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/httpService.service';
import {NewsService} from 'src/app/services/newsService.service'
import { Router } from '@angular/router';
import news from '../../files/newsList.json';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  public newsList :any = []
  public spinner : boolean = true;

  constructor(
    private httpService : HttpService,
    private newsService : NewsService,
    private router : Router
  ) { }

  public news : any = news;

  ngOnInit() {
    this.listNews();
  }


  
  listNews(){
    this.newsService.newsList({}).subscribe((response: any) => { 
      this.newsList = response.data;
      this.spinner = false;
    });
  }

  goToComments(event:any,newPost : any){
    this.router.navigate(['/news/comment/1']);
    event.stopPropagation();
  }

  goToNew(post : any){
    this.router.navigate(['/news/post'], {state: { post : post} });
  }

}
