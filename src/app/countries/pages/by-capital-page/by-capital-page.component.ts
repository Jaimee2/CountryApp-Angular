import {Component, inject, OnInit} from '@angular/core';
import {SearchBoxComponent} from "../../../shared/components/search-box/search-box.component";
import {CountriesService} from "../../services/countries.service";
import {Country} from "../../interfaces/country";
import {CountryTableComponent} from "../../components/country-table/country-table.component";
import {LoadingSpinnerComponent} from "../../../shared/components/loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    SearchBoxComponent,
    CountryTableComponent,
    LoadingSpinnerComponent
  ],
  template: `
    <h1 class="text-center">
      By capital
    </h1>
    <hr>
    <div class="row">
      <div class="col">
        <app-search-box placeholder='Searh by capital'
                        (onValue)="searchByCapital($event)"
                        (onDebounce)="searchByCapital($event)"
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
      <app-country-table [countries]="this.countries"></app-country-table>
    </div>
  `,
  styles: [``]
})
export class ByCapitalPageComponent implements OnInit {

  countryService = inject(CountriesService);

  countries: Country[] = [];
  protected isLoading = false;
  protected initialValue: string = '';

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.initialValue = this.countryService.cacheStore.byCapital.term;
  }

  searchByCapital(term: string): void {
    this.isLoading = true;
    this.countryService
      .searchByCapital(term)
      .subscribe(result => {
        this.countries = result
        this.isLoading = false;
      })

  }

}
