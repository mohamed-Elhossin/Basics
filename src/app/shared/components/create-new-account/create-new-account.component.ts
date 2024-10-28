import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-account',
  standalone: true,
  imports: [],
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.css', '../inputs_style.css']
})
export class CreateNewAccountComponent {

  constructor(private router: Router) {

  }
  clicked() {
    this.router.navigateByUrl("/account-verified");
  }
}
