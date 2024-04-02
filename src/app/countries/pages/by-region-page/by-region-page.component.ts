import {Component, inject, OnInit} from '@angular/core';
import {CountryTableComponent} from "../../components/country-table/country-table.component";
import {SearchBoxComponent} from "../../../shared/components/search-box/search-box.component";
import {CountriesService} from "../../services/countries.service";
import {Country} from "../../interfaces/country";
import {NgClass} from "@angular/common";

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [
    CountryTableComponent,
    SearchBoxComponent,
    NgClass
  ],
  template: `
    <h1 class="text-center">
      By region
    </h1>
    <hr>
    <div class="row">
      <div class="col text-center">
        @for (region of regions; track regions) {
          <button class="btn mx-2 btn-outline-primary"
                  (click)="searchByRegion(region)"
                  [ngClass]="{'btn-outline-primary': selectedRegion === region }"
          >
            {{ region }}
          </button>
        }
      </div>
    </div>
    <hr>
    <div class="row">

      <app-country-table [countries]="this.countries">
      </app-country-table>
    </div>
  `,
  styles: ``
})
export class ByRegionPAgeComponent implements OnInit {

  countryService = inject(CountriesService);

  countries: Country[] = [];
  protected regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  selectedRegion?: string;


  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countryService.cacheStore.byRegion.term;
  }

  searchByRegion(region: Region): void {
    this.selectedRegion = region;
    this.countryService
      .searchByRegion(region)
      .subscribe(result => this.countries = result)
  }
}
