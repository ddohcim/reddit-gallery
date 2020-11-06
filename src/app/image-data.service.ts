import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface SubredditPost {
  data: {
    author: String
    thumbnail: String
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
  kind: String,
  posts?: UserPost[]
}

export interface UserPost {
  author: String
  thumbnail: {
    url: String
  }
  media: {
    content: String
  }
}

export interface UserData {
  account: Object
  authorFlair: Object
  dist: Number
  features: null
  pinned: []
  postFlair: Object
  postIds: Array<string>,
  posts: UserPost[],
  data?: Object
}

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

  loadSubredditData(type: string, name: string): Observable<SubredditData> | Observable<UserData> | any {
    if (type === 'subreddit') {
      return this.http.get(`https://www.reddit.com/r/${name}/top/.json?t=week&limit=100`);
    }
    else if (type === 'user') {
      return this.http.get(`https://gateway.reddit.com/desktopapi/v1/user/${name}/posts?rtj=only&allow_quarantined=true&allow_over18=1&include=identity&t=all&layout=classic&sort=top&limit=100`)
    }

  }
}
