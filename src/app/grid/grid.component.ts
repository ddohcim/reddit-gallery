import { Component, Input, OnInit } from '@angular/core';
import { SubredditData } from '../app.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() imagesData: SubredditData;

  constructor() { }

  ngOnInit(): void {

  }

}
