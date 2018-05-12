import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  apiBaseUrl: string;

  questionData:any = {};

  counter:number;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.apiBaseUrl = 'https://opentdb.com/api.php?amount=10&category=18&type=multiple';
    this.http.get(this.apiBaseUrl).subscribe(data=>{
      console.log(data.results);
      this.questionData = data.results;
    });
    this.counter = 0;
  }

  getQuestions()
  {
    this.http.get(this.apiBaseUrl).subscribe(data=>{
      console.log(data);
      this.questionData = data;
    });
  }

}
