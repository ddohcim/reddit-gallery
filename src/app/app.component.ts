import { Component, OnInit } from '@angular/core';
import { ImageDataService } from './image-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  linksData: Array<object>;
  // subredditData$: Observable<SubredditData> | Observable<Object>;

  constructor(private imagesService: ImageDataService) {
  }

  ngOnInit() {
    this.linksData = this.imagesService.subredditsData;
  }
}
