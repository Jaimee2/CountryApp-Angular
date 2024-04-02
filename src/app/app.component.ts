import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AboutPageComponent} from "./shared/pages/about-page/about-page.component";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutPageComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
