import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { RoomsComponent } from './components/rooms/rooms';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
