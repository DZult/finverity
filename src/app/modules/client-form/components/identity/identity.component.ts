import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit {

  public documentTypesList: string[] = [
    'Удостоверение личности',
    'Свидетельство о рождении',
    'Вод. удостоверение',
  ]

  constructor(private router: Router) { }

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

}
