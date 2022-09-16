import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesListComponent } from './pages/home/video-games/games-list/games-list.component';
import { ContactsComponent } from './pages/contact/contacts/contacts.component';
import { VideoGamesComponent } from './pages/home/video-games/video-games/video-games.component';
import { LayoutComponent } from './layout/layout.component';
import { SideNavigationComponent } from './layout/side-navigation/side-navigation.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    ContactsComponent,
    VideoGamesComponent,
    SideNavigationComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
