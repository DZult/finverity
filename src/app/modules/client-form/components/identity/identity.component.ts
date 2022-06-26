import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormService} from "../../services/form.service";

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit {

  public identityForm: FormGroup = new FormGroup({
    'document_type': new FormControl('', Validators.required),
    'document_series': new FormControl(),
    'document_number': new FormControl('', Validators.required),
    'document_issuer': new FormControl(),
    'document_issue_date': new FormControl('', Validators.required),
    'document_file': new FormControl(),
  })

  public documentTypesList: string[] = [
    'Удостоверение личности',
    'Свидетельство о рождении',
    'Вод. удостоверение',
  ]

  constructor(private router: Router,
              private formService: FormService) { }

  ngOnInit(): void {
  }

  public onPreviousStep = () => {
    this.router.navigate(['/address']).catch(err => {
      alert(err);
    });
  }

  public onNextStep = () => {
    this.router.navigate(['/created-client']).catch(err => {
      alert(err);
    });
  }

  public submit = () => {
    const controls = this.identityForm.controls;

    /** Проверяем форму на валидность */
    if (this.identityForm.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      /** Прерываем выполнение метода*/
      return;
    }

    /** TODO: Обработка данных формы */
    this.formService.saveIdentityFormData(this.identityForm.value)
    this.onNextStep();
  }

}
