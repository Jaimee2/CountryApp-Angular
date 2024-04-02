import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Country} from "../../interfaces/country";
import {CountriesService} from "../../services/countries.service";
import {CountryTableComponent} from "../../components/country-table/country-table.component";
import {SearchBoxComponent} from "../../../shared/components/search-box/search-box.component";
import {DecimalPipe} from "@angular/common";

@Component({
    selector: 'app-country-page',
    standalone: true,
    imports: [
        CountryTableComponent,
        SearchBoxComponent,
        DecimalPipe
    ],
    template: `
        <h1>By alpha code :)</h1>
        <hr>
        @if (country) {
            <div class="row">
                <div class="col-12">
                    <h2>
                        Country: {{ country.name.common }}
                    </h2>
                </div>
            </div>

            <div class="row">
                <h3>Flag</h3>
                <div class="col-4">
                    <img [src]="country.flags.svg" alt="flag">
                </div>
                <div class="col">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <strong>Population</strong>
                            {{ country.population | number }}
                        </li>
                        <li class="list-group-item">
                            <strong>Code</strong>
                            {{ country.ccn3 | number }}
                        </li>
                    </ul>
                </div>
            </div>
        }

    `,
    styles: [`img {
        width: 90px;
    }`]
})
export class CountryPageComponent implements OnInit {

    private activatedRoute = inject(ActivatedRoute)
    private router = inject(Router)
    private countryService = inject(CountriesService)

    protected country?: Country;

    ngOnInit(): void {

        this.activatedRoute.params
            .subscribe(param => {
                console.log('hi')
                this.countryService
                    .searchCountryByAlphaCode(param['id'])
                    .subscribe(country => {
                        console.log(country)
                        if (!country) return this.router.navigateByUrl('')
                        return this.country = country;
                    })
            })
    }

}
