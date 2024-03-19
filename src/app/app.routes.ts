import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
  { path: '/', component: AppComponent },
  { path: '/login', component: LoginComponent },
  { path: '/logout', component: LogoutComponent },
];
