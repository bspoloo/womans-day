import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GifPageComponent } from './pages/gif-page/gif-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: ':name',
    component: HomePageComponent
  },
  {
    path: 'form/gif',
    component: GifPageComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
];
