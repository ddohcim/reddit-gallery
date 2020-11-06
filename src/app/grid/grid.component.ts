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

  constructor(private route: ActivatedRoute, private imageService: ImageDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('route.params z grid.component', params);
      this.imagesData = [];

      this.imageService.loadSubredditData(params.type, params.name).subscribe(data => {
        if (data.data) {
          this.imagesData = data.data.children.map(post => {
            return {
              author: post.data.author,
              imgUrl: post.data.url,
              thumbUrl: post.data.thumbnail
            }
          });
        }
        else if (data.posts) {
          let posts: any = Object.values(data.posts)

          this.imagesData = posts.map(post => {
            if (!!post.media.content) {
              return {
                author: post.author,
                imgUrl: post.media.content,
                thumbUrl: post.thumbnail.url
              }
            }
          });
        }



        console.log('this.imagesData', this.imagesData)
      })
    })
  }

}
