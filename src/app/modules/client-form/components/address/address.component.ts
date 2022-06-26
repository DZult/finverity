import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormService} from "../../services/form.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

  public addressForm: FormGroup = new FormGroup({
    'index': new FormControl(),
    'country': new FormControl('', Validators.required),
    'region': new FormControl(),
    'city': new FormControl('', Validators.required),
    'street': new FormControl(),
    'house': new FormControl(),
  })

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

  constructor(private router: Router,
              private formService: FormService) { }

  ngOnInit(): void {
    this.setDataFromLocalStorage();
  }

  public setDataFromLocalStorage = () => {
    if (localStorage.getItem('addressData')) {
      // @ts-ignore
      const data = JSON.parse(localStorage.getItem('addressData'));
      this.addressForm.setValue({
        'index': data['index'],
        'country': data['country'],
        'region': data['region'],
        'city': data['city'],
        'street': data['street'],
        'house': data['house'],
      })
    }
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

  public submit = () => {
    const controls = this.addressForm.controls;

    /** Проверяем форму на валидность */
    if (this.addressForm.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      /** Прерываем выполнение метода*/
      return;
    }

    /** TODO: Обработка данных формы */
    this.formService.saveAddressFormData(this.addressForm.value);
    localStorage.setItem('addressData', JSON.stringify(this.addressForm.value))
    this.onNextStep();
  }

}
