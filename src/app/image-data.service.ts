import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface SubredditPost {
  data: {
    author: string
    thumbnail: string
    url: string
  }
}

export interface SubredditData {
  data: {
    after: string
    before: object
    children: SubredditPost[]
    dist: number
    modhash: string
  },
  kind: string,
  posts?: UserPost[]
}

export interface UserPost {
  author: string
  thumbnail: {
    url: string
  }
  media: {
    content: string
  }
}

export interface UserData {
  account: object
  authorFlair: object
  dist: number
  features: null
  pinned: []
  postFlair: object
  postIds: Array<string>,
  posts: UserPost[],
  data?: object
}

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {
  // subreddits = [
  //   '18_19',
  //   'LegalTeens',
  //   'CollegeSluts',
  //   'NSFW',
  //   'RealGirls',
  //   'BustyPetite',
  //   'HoldTheMoan',
  //   'PetiteGoneWild',
  //   'AsiansGoneWild',
  //   'BiggerThanYouThought',
  //   'OnOff',
  //   'GodPussy'
  // ];
  subreddits = [
    'OldschoolCool',
    'TheWayWeWere',
    'AbandonedPorn',
    'EarthPorn',
    'PrettyGirls'
  ];
  subredditsData = [];

  constructor(private http: HttpClient) {
    this.subredditsData = this.prepareSubredditLinks(this.subreddits);
  }

  private prepareSubredditLinks(subredditsArr: string[]) {
    return subredditsArr.map((subreddit) => {
      return {
        name: subreddit
      }
    })
  }

  private addPosts(type, post, destinationArr): void {
    if (type === 'subreddit' && (/\.(jpg|jpeg|png|external-preview)$/i).test(post.data.url)) {
      destinationArr.push({
        author: post.data.author,
        imgUrl: post.data.url,
        thumbUrl: post.data.thumbnail
      });
    }
    else if (type === 'user' && !!post.media && !!post.media.content && (/\.(jpg|jpeg|png)/i).test(post.media.content)) {
      destinationArr.push({
        author: post.author,
        imgUrl: post.media.content,
        thumbUrl: post.thumbnail.url
      });
    }

  }

  loadSubredditData(type: string, name: string): UserData[] | any {
    let images = [];

    if (type === 'subreddit') {
      return this.http.get<SubredditData>(`https://www.reddit.com/r/${name}/top/.json?t=week&limit=100`).pipe(map(data => {
        data.data.children.forEach(post => {
          this.addPosts(type, post, images);
        });

        return images;
      }));
    }
    else if (type === 'user') {
      return this.http.get<UserData>(`https://gateway.reddit.com/desktopapi/v1/user/${name}/posts?rtj=only&allow_quarantined=true&allow_over18=1&include=identity&t=all&layout=classic&sort=top&limit=100`).pipe(map(data => {
        Object.values(data.posts).forEach(post => {
          this.addPosts(type, post, images);
        });

        return images;
      }))
    }

    return images;
  }
}
