import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClientComponent } from './components/client/client.component';
import { AddressComponent } from './components/address/address.component';
import { IdentityComponent } from './components/identity/identity.component';


const clientFormRoutes: Routes =[
  { path: '', component: ClientComponent},
  { path: 'address', component: AddressComponent},
  { path: 'identity', component: IdentityComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    NotFoundComponent,
    ClientComponent,
    AddressComponent,
    IdentityComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(clientFormRoutes)
  ]
})
export class ClientCreateFormModule { }
