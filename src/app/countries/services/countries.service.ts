

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,tap,map, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
private apiURL:string ='https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }



searchCountryByAlphaCode(code:string):Observable<Country | null>
{
  const url =`${this.apiURL}/alpha/${code}`;
  return  this.http.get<Country[]>(url)
  .pipe(
    map(countries =>countries.length>0 ? countries[0]:null),
    catchError(() => of(null) )
    
  );
}



    searchCapital(term:string):Observable<Country[]> 
    {
     const url =`${this.apiURL}/capital/${term}`;
      return  this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]) )
        // tap(coutries => console.log('Tap1',coutries)),
        // map(coutries =>[]),
        // tap(coutries => console.log('Tap2',coutries)),

      );
    }

    searchCountry(term:string):Observable<Country[]> 
    {
     const url =`${this.apiURL}/name/${term}`;
      return  this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]) )
        // tap(coutries => console.log('Tap1',coutries)),
        // map(coutries =>[]),
        // tap(coutries => console.log('Tap2',coutries)),

      );
    }
    searchRegion(region:string):Observable<Country[]> 
    {
     const url =`${this.apiURL}/region/${region}`;
      return  this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]) )
        // tap(coutries => console.log('Tap1',coutries)),
        // map(coutries =>[]),
        // tap(coutries => console.log('Tap2',coutries)),

      );
    }
    
    

    
}