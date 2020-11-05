import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubredditData } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {
  subreddits = [
    '18_19',
    'LegalTeens',
    'CollegeSluts',
    'NSFW',
    'RealGirls',
    'BustyPetite',
    'HoldTheMoan',
    'PetiteGoneWild',
    'AsiansGoneWild',
    'BiggerThanYouThought',
    'OnOff',
    'GodPussy'
  ];
  subredditsData = [];

  constructor(private http: HttpClient) {
    this.subredditsData = this.prepareSubredditLinks(this.subreddits);
  }

  private prepareSubredditLinks(subredditsArr: string[]) {
    return subredditsArr.map((subreddit) => {
      return {
        name: subreddit,
        url: 'https://www.reddit.com/r/' + subreddit + '/top/.json?t=week&limit=100'
      }
    })
  }

  loadSubredditData(type: string, name: string): Observable<SubredditData> | Observable<object> {
    if (type === 'subreddit') {
      return this.http.get(`https://www.reddit.com/r/${name}/top/.json?t=week&limit=100`);
    }
    else if (type === 'user') {
      return this.http.get(`https://gateway.reddit.com/desktopapi/v1/user/${name}/posts?rtj=only&allow_quarantined=true&allow_over18=1&include=identity&t=all&layout=classic&sort=top&limit=100`)
    }

  }
}
