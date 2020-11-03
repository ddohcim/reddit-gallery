import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditGalleryComponent } from './subreddit-gallery.component';

describe('SubredditGalleryComponent', () => {
  let component: SubredditGalleryComponent;
  let fixture: ComponentFixture<SubredditGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubredditGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubredditGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
