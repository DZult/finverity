import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  public clientFormData = {};
  public addressFormData = {};
  public identityFormData = {};

  constructor() { }

  public saveClientFormData = (data: {}) => {
    this.clientFormData = data;
  }

  public saveAddressFormData = (data: {}) => {
    this.addressFormData = data;
  }

  public saveIdentityFormData = (data: {}) => {
    this.identityFormData = data;
  }

}
