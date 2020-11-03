import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageDataService } from './image-data.service';

// {
//   author: "KDSibbs"
//   thumbnail: "https://b.thumbs.redditmedia.com/gE_n9Use-DHg0v61ZdQ-R65A1Xf1yKCFus276XZgHtw.jpg"
//   thumbnail_height: 140
//   thumbnail_width: 140
//   title: "How people see me at the gym vs how you guys see me"
//   url: "https://i.redd.it/rm56qktx83w51.jpg"
// }

export interface SubredditPost {
  data: {
    author: String
    thumbnail: String
    thumbnail_height: Number
    thumbnail_width: Number
    title: String
    url: String
  }
}

export interface SubredditData {
  data: {
    after: String
    before: Object
    children: SubredditPost[]
    dist: Number
    modhash: String
  },
  kind: String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  linksData: Array<object>
  subredditData$: Observable<SubredditData> | Observable<Object>;

  constructor(private imagesService: ImageDataService, private http: HttpClient) { }

  ngOnInit() {
    this.linksData = this.imagesService.subredditsData;
  }

  onLoadSubreddit(url: string) {
    this.subredditData$ = this.imagesService.loadSubredditData(url);
  }
}
