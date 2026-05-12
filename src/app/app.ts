import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header],
  //standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecomm-project');
}
