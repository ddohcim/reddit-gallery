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

  loadSubredditData(url: string): Observable<SubredditData> | Observable<object> {
    return this.http.get(url);
  }
}
