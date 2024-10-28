import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [],
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css', '../inputs_style.css'],
})
export class VerificationComponent {

  constructor(private router: Router) {

  }
  clicked() {
    // secret-pin
    this.router.navigateByUrl("secret-pin");
  }
}


