import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feedService.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public feedList : any;
  public spinner : boolean = true;
  public filter: any;

  constructor(
    private feedService : FeedService,
    private router : Router
  ) { }

  ngOnInit() {
    console.log("WHIT")
    this.initializeVariable();
    this.getFeed();
  }

  ngAfterViewChecked(){
    this.filter = 'feed';
  }

  segmentChanged(filter:any) {
    this.filter = filter;
    switch (this.filter) {
      case 'feed':
        this.router.navigate(['feed']);
        break;
      case 'home':
        this.router.navigate(['home']);
        break;
      case 'account':
        this.router.navigate(['account']);
        break;
    }
  }

  initializeVariable(){
    this.feedList = [];
    this.filter = 'feed';
  }
  
  getFeed(){
    this.feedService.get().subscribe((response: any) => { 
      //this.feedList = response.data;
      this.setInfo(response.data);
      this.spinner = false;
    });
  }

  setMatches(info:any){
    info.matches.forEach((element:any) => {
      element.type = "match";
      this.feedList.push(element)
    });
  }
  setNews(info:any){
    info.news.forEach((element:any) => {
      element.type = "news";
      this.feedList.push(element)
    });
  }
  setTrivias(info:any){
    info.trivias.forEach((element:any) => {
      element.type = "trivia";
      this.feedList.push(element)
    });
  }

  setInfo(data:any){
    let info = JSON.parse(JSON.stringify(data));
    this.setMatches(info);
    this.setNews(info);
    this.setTrivias(info);
    this.sortInfo();
  }

  sortInfo(){
    this.feedList.sort((a : any, b : any) => (a.creationTimestamp < b.creationTimestamp) ? 1 : -1)
    console.log("SORT",this.feedList)
  }

  goToNew(post : any){
    this.router.navigate(['/news/post'], {state: { post : post} });
  }

  gotoTrivia(trivia:any){
    this.router.navigate(['/trivia/questions'], {state: { trivia : trivia} });
  }

}
