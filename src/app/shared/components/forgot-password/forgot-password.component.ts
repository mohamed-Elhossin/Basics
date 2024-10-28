import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css', '../inputs_style.css']
})
export class ForgotPasswordComponent {
  constructor(private router: Router) { }
  clicked() {
    this.router.navigate(['/create-new-password']);
  }
}
