import { Component, /*for implementation*/ OnInit } from '@angular/core';
//IMPORT FOR HTTP SERVICE
import { HttpService } from './http.service';
//IMPORT FOR HTTP SERVICE

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
implements OnInit
{
  allCake:any;
  cake:any;
  newCake:any;
  newReview:any;
/*REQUIRED TO INTIALIZE SERVICE*/
constructor(private _httpService: HttpService){};
/*REQUIRED TO INTIALIZE SERVICE*/
  ngOnInit() {
    this.newCake = { baker: "", image: ""}
    this.newReview = { rating: 0, content: ""}
  }
  allCakesFromService(){
    console.log("*************get hit*************");
    let tempObservable = this._httpService.getCakes();
    console.log(`*********${JSON.stringify(tempObservable)}************`);
    tempObservable.subscribe(data => this.allCake = data);      
  }

  postCakeToService(){
    console.log("*************post hit*************");
    let tempObservable = this._httpService.makeCake(this.newCake);
    console.log(`*********${JSON.stringify(tempObservable)}************`);
    tempObservable.subscribe(data => this.newCake = data)
  }
  
  getOneCakeFromService(idx){
    console.log("*************get one hit*************");
    console.log(`*********${JSON.stringify(this.allCake[idx]._id)}************`);
    this._httpService.getOneCake(this.allCake[idx]._id)
    .subscribe(data => this.cake = data)
  }
  
  postReviewToService(id){
    console.log("*************review hit*************");
    console.log(`*********${JSON.stringify(id)}************`);
    console.log(`*********${JSON.stringify(this.newReview)}************`);
    this._httpService.reviewCake(id, this.newReview)
      .subscribe(data => this.newReview = data)
  }

}
