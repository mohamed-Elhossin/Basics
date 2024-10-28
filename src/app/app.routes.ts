import { Routes } from '@angular/router';
import { VerificationComponent } from './shared/components/verification/verification.component';
import { LoginformComponent } from './shared/components/loginform/loginform.component';
import { SecretPinComponent } from './shared/components/secret-pin/secret-pin.component';
import { ForgotPasswordComponent } from './shared/components/forgot-password/forgot-password.component';
import { CreateNewPasswordComponent } from './shared/components/create-new-password/create-new-password.component';
import { CreateNewAccountComponent } from './shared/components/create-new-account/create-new-account.component';
import { AccountVerifiedComponent } from './shared/components/account-verified/account-verified.component';
import { AccountStatusComponent } from './shared/components/account-status/account-status.component';

export const routes: Routes = [
  { path: 'login/true', component: VerificationComponent },
  { path: 'login', component: LoginformComponent },
  { path: 'secret-pin', component: SecretPinComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'create-new-password', component: CreateNewPasswordComponent },
  { path: 'create-new-account', component: CreateNewAccountComponent },
  { path: 'account-verified', component: AccountVerifiedComponent },
  { path: 'account-status', component: AccountStatusComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];
