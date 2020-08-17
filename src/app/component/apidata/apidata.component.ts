import { Component, OnInit } from '@angular/core';
import {Covid} from "../../shared/covid";
import {COVID} from "../../shared/covid-data";
import {CovidService} from '../../shared/covid.service'

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.css']
})
export class ApidataComponent implements OnInit {
  covid: Covid[];


  constructor(private covidService: CovidService) {
    this.getCovid();
  }

  ngOnInit(): void {
    this.getCovid();
  }

  getCovid(): void {

    this.covidService.getCovid().subscribe(covid => this.covid = covid);
  }
  CHK() {

     console.log(COVID);

  }

}
