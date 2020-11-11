import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ImageDataService } from '../image-data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  imagesData = [];
  noDataText = 'Loading data...';

  constructor(private route: ActivatedRoute, private imageService: ImageDataService) {
    this.route.params.subscribe(params => {
      if (Object.keys(params).length === 0 && params.constructor === Object) {
        this.noDataText = 'Please select subreddit to load';

        return;
      }

      this.imagesData = [];
      this.noDataText = 'Loading data...';

      this.imageService.loadSubredditData(params.type, params.name).subscribe(data => {
        this.imagesData = data;

        console.log('this.imagesData', this.imagesData);
      })
    })
  }

  ngOnInit(): void {

  }

  private onImageClick(url: string): void {
    window.open(url);
  }

}
