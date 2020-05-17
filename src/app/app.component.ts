import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'India-Covid19';
  constructor(private http: HttpClient) { }
   posts:any;
  ngOnInit(): void {
this.http.get('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true').subscribe(posts => {

    this.posts = posts;
    console.log(this.posts);
    });
   
  }

}
