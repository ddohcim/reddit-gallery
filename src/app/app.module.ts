import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GridComponent } from './grid/grid.component';
import { SubredditGalleryComponent } from './subreddit-gallery/subreddit-gallery.component';
import { UserGalleryComponent } from './user-gallery/user-gallery.component';
import { GridStartComponent } from './grid/grid-start/grid-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GridComponent,
    SubredditGalleryComponent,
    UserGalleryComponent,
    GridStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
