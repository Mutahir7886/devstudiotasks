import { Injectable } from '@angular/core';
import {COVID} from "./covid-data";
import {Covid} from "./covid";
import {Observable, of} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CovidService {
  getCovid(): Observable<Covid[]> {
    return of(COVID);
  }


  constructor() { }
}
