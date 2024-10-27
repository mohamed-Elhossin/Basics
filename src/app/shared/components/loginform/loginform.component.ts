import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [],
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css', '../inputs_style.css'],
})
export class LoginformComponent {
  constructor(private router: Router) {}
  clicked() {
    console.log('hello');
    this.router.navigate(['/login/true']);
  }
}
