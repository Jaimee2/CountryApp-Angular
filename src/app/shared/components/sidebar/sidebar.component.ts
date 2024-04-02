import {Component} from '@angular/core';
import {RouterLinkActive, RouterModule} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule

  ],
  template: `
    <h1>Countries</h1>
    <hr>
    <ul class="list-group">

      <li class="list-group-item"
          routerLink="countries/by-capital"
          routerLinkActive="active"
      >
        By capital
      </li>

      <li class="list-group-item"
          routerLink="countries/by-country"
          routerLinkActive="active"
      >
        By country
      </li>

      <li class="list-group-item"
          routerLink="countries/by-region"
          routerLinkActive="active"
      >
        By region
      </li>

    </ul>`,
  styles: [``]
})
export class SidebarComponent {

}
