import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClientComponent } from './components/client/client.component';
import { AddressComponent } from './components/address/address.component';
import { IdentityComponent } from './components/identity/identity.component';
import {MatSliderModule} from "@angular/material/slider";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";


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
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(clientFormRoutes),
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
  ]
})
export class ClientCreateFormModule { }
