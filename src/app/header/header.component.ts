import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() linksData;
  @Output() loadSubredditRequested = new EventEmitter<string>();
  private headerImage = "./header.PNG";

  constructor() { }

  ngOnInit(): void {
  }

  onLoadSubreddit(url: string) {
    this.loadSubredditRequested.emit(url);
  }

}
