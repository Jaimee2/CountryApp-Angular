import {Component, Input} from '@angular/core';
import {Country} from "../../interfaces/country";
import {DecimalPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-country-table',
  standalone: true,
  imports: [
    DecimalPipe,
    RouterLink
  ],
  template: `
    @if (countries.length === 0) {
      <div class="alert alert-warning text-center">
        There aren't any countries
      </div>
    } @else {

      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Flag</th>
          <th scope="col">Icon</th>
          <th scope="col">Name</th>
          <th scope="col">Capital</th>
          <th scope="col">Country population</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
          @for (country of countries; track countries; let i = $index) {
            <tr>
              <td>{{ i + 1 }}</td>
              <td>{{ country.flag }}</td>
              <td>
                <img [src]="country.flags.svg" alt="Icon">
              </td>
              <td>{{ country.name.common }}</td>
              <td>{{ country.capital }}</td>
              <td>{{ country.population | number }}</td>
              <td>
                <a [routerLink]="['/countries/by',country.ccn3]"> see more </a>
              </td>
            </tr>
          }

        </tbody>
      </table>
    }
  `,
  styles: ` img {
    width: 35px;
  }`
})
export class CountryTableComponent {

  @Input() public countries: Country[] = [];



}
