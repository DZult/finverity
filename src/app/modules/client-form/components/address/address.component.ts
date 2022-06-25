import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

interface Country {
  codename: string,
  name: string
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  public countryList: Country[] = [
    {
      codename: 'UK',
      name: 'Великобритания',
    },
    {
      codename: 'UA',
      name: 'Украина',
    },
    {
      codename: 'KZ',
      name: 'Казахстан',
    },
  ]

  public UKCitiesList: string[] = ['London', 'Birmingham', 'Glasgow'];
  public UACitiesList: string[] = ['Киев', 'Харьков', 'Одесса'];
  public KZCitiesList: string[] = ['Алматы', 'Нур-Султан', 'Шымкент'];

  public currentCitiesList: string[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getCurrentCitiesList = (selectedCountry: any) => {
    switch (selectedCountry.value) {
      case 'UK':
        this.currentCitiesList = this.UKCitiesList;
        break;
      case 'UA':
        this.currentCitiesList = this.UACitiesList;
        break;
      case 'KZ':
        this.currentCitiesList = this.KZCitiesList;
        break;
      default:
        this.currentCitiesList = [];
    }
  }

  public onPreviousStep = () => {
    this.router.navigate(['/']).catch(err => {
      alert(err);
    });
  }

  public onNextStep = () => {
    this.router.navigate(['/identity']).catch(err => {
      alert(err);
    });
  }

}
