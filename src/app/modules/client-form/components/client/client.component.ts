import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FormService} from "../../services/form.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  public clientForm: FormGroup = new FormGroup({
    'first_name': new FormControl('', Validators.required),
    'last_name': new FormControl('', Validators.required),
    'middle_name': new FormControl(),
    'birth_date': new FormControl('', Validators.required),
    'sex': new FormControl(),
    'phone': new FormControl('', Validators.required),
    'group_of_clients': new FormControl('', Validators.required),
    'coordinator': new FormControl(),
    'is_send_sms': new FormControl(),
  })

  public clientGroupsList: string[] = [
    'VIP клиенты',
    'Постоянные клиенты',
    'Новые клиенты',
  ];

  public coordinatorsList: string[] = [
    'Иванов',
    'Захаров',
    'Чернышева',
  ]

  constructor(private router: Router,
              private formService: FormService) { }

  ngOnInit(): void {
    this.setDataFromLocalStorage()
  }

  public setDataFromLocalStorage = () => {
    if (localStorage.getItem('clientData')) {
      // @ts-ignore
      const data = JSON.parse(localStorage.getItem('clientData'));
      this.clientForm.setValue({
        'first_name': data['first_name'],
        'last_name': data['last_name'],
        'middle_name': data['middle_name'],
        'birth_date': data['birth_date'],
        'sex': data['sex'],
        'phone': data['phone'],
        'group_of_clients': data['group_of_clients'],
        'coordinator': data['coordinator'],
        'is_send_sms': data['is_send_sms'],
      })
    }
  }

  public onNextStep = () => {
    this.router.navigate(['/address']).catch(err => {
      alert(err);
    });
  }

  public submit = () => {
    const controls = this.clientForm.controls;

    /** Проверяем форму на валидность */
    if (this.clientForm.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      /** Прерываем выполнение метода*/
      return;
    }

    /** TODO: Обработка данных формы */
    this.formService.saveClientFormData(this.clientForm.value)
    localStorage.setItem('clientData', JSON.stringify(this.clientForm.value))
    this.onNextStep();
  }

}
