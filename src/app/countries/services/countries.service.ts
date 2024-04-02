import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of, tap} from "rxjs";
import {Country} from "../interfaces/country";

const CACHE_STORAGE_ITEM = 'CACHE_STORAGE_ITEM';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  public cacheStore =
    {
      byCapital: {term: '', countries: []},
      byCountries: {term: '', countries: []},
      byRegion: {term: '', countries: []}
    }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage()
  }

  private saveToLocalStorage() {
    localStorage.setItem(CACHE_STORAGE_ITEM, JSON.stringify(this.cacheStore))
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem(CACHE_STORAGE_ITEM)) return;
    this.cacheStore = JSON.parse(localStorage.getItem(CACHE_STORAGE_ITEM)!)
  }

  public searchByCapital(capitalName: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capitalName}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => {
          // @ts-ignore
          this.cacheStore.byCapital = {term: capitalName, countries: countries}
        })
      )
  }

  public searchByCountry(countryName: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${countryName}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => {
          // @ts-ignore
          this.cacheStore.byCountries = {term: countryName, countries: countries}
        })
      )
  }

  public searchByRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => {
          // @ts-ignore
          this.cacheStore.byRegion = {term: region, countries: countries}
        })
      )
  }

  public getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(err => of([])),
        tap(() => this.saveToLocalStorage())
      )
  }

  public searchCountryByAlphaCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
      .pipe(
        map(countries => {
          if (countries.length > 0) return countries[0]
          else return null;
        }),
        catchError(err => of(null))
      )
  }

}
