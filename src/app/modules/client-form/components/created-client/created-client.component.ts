import { Component, OnInit } from '@angular/core';
import {FormService} from "../../services/form.service";

@Component({
  selector: 'app-created-client',
  templateUrl: './created-client.component.html',
  styleUrls: ['./created-client.component.scss']
})
export class CreatedClientComponent implements OnInit {
  public clientData = {};
  public addressData = {};
  public identityData = {};
  public finalData = [] as any[];

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    // @ts-ignore
    localStorage.getItem('clientData') ?
      // @ts-ignore
      this.clientData = JSON.parse(localStorage.getItem('clientData')) :
      this.clientData = this.removeEmptyKeys(this.formService.clientFormData)

    localStorage.getItem('addressData') ?
      // @ts-ignore
      this.addressData = JSON.parse(localStorage.getItem('addressData')) :
      this.addressData = this.removeEmptyKeys(this.formService.addressFormData)

    localStorage.getItem('identityData') ?
      // @ts-ignore
      this.identityData = JSON.parse(localStorage.getItem('identityData')) :
      this.identityData = this.removeEmptyKeys(this.formService.identityFormData)

    this.collectToFinalData(Object.entries(this.clientData));
    this.collectToFinalData(Object.entries(this.addressData));
    this.collectToFinalData(Object.entries(this.identityData));
  }

  public removeEmptyKeys = (object: any) => {
    for (const key in object) {
      if (!object[key]) {
        delete object[key];
      }
    }
    return object;
  }

  public collectToFinalData = (array: [string, unknown][]) => {
    for (const item of array) {
      this.finalData.push(item);
    }
  }

}
