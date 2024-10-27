import { Routes } from '@angular/router';
import { VerificationComponent } from './shared/components/verification/verification.component';
import { LoginformComponent } from './shared/components/loginform/loginform.component';

export const routes: Routes = [
  { path: 'login/true', component: VerificationComponent },
  { path: 'login', component: LoginformComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];
