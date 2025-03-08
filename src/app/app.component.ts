import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeartComponent } from "./components/heart/heart.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
