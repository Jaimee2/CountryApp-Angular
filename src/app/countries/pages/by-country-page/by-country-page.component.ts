import {Component, inject, OnInit} from '@angular/core';
import {CountryTableComponent} from "../../components/country-table/country-table.component";
import {SearchBoxComponent} from "../../../shared/components/search-box/search-box.component";
import {CountriesService} from "../../services/countries.service";
import {Country} from "../../interfaces/country";
import {LoadingSpinnerComponent} from "../../../shared/components/loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [CountryTableComponent, SearchBoxComponent, LoadingSpinnerComponent],
  template: `
    <h1 class="text-center">
      By country
    </h1>
    <hr>
    <div class="row">
      <div class="col">
        <app-search-box placeholder='Searh by country'
                        (onValue)="searchByCountry($event)"
                        [initialValue]="this.initialValue"
        >
        </app-search-box>
      </div>
    </div>
    <hr>

    @if (isLoading) {
      <app-loading-spinner></app-loading-spinner>
    }
    <div class="row">
      <app-country-table [countries]="this.countries">
      </app-country-table>
    </div>
  `,
  styles: ``
})
export class ByCountryPageComponent implements OnInit {

  countryService = inject(CountriesService);

  countries: Country[] = [];
  protected isLoading = false;
  protected initialValue: string = '';

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    this.initialValue = this.countryService.cacheStore.byCountries.term;
  }

  searchByCountry(countryName: string): void {
    this.isLoading = true;
    this.countryService
      .searchByCountry(countryName)
      .subscribe(result => {
        this.countries = result
        this.isLoading = false;
      })
  }


}
