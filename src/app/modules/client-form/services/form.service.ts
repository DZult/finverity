import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  public clientFormData = {};

  constructor() { }

  public saveClientFormData = (data: {}) => {
    this.clientFormData = data;
  }

  public saveAddressFormData = (data: {}) => {
    this.clientFormData = data;
  }

  public saveIdentityFormData = (data: {}) => {
    this.clientFormData = data;
  }

}
