import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  public toppings = new FormControl('');

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onNextStep = () => {
    this.router.navigate(['/address']);
  }
}
