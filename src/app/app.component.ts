import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSideComponent } from "./shared/components/left-side/left-side.component";
import { LoginformComponent } from "./shared/components/loginform/loginform.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeftSideComponent, LoginformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basics';
}
