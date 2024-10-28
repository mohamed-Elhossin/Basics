import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-verified',
  standalone: true,
  imports: [],
  templateUrl: './account-verified.component.html',
  styleUrls: ['./account-verified.component.css', '../inputs_style.css']
})
export class AccountVerifiedComponent {

  constructor(private router: Router) {

  }
  clicked(){
    this.router.navigateByUrl("/account-status");
  }
}
