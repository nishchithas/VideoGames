import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ContactsComponent } from './pages/contact/contacts/contacts.component';
import { VideoGamesComponent } from './pages/home/video-games/video-games/video-games.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: VideoGamesComponent,
      },
      {
        path: 'contact',
        component: ContactsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
