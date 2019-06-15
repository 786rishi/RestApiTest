import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { GetPetComponent } from './get-pet/get-pet.component';
import {Routes,RouterModule} from '@angular/router';
import { AddPetComponent } from './add-pet/add-pet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const appRoute: Routes = [{
path : 'editPet',
component : EditPetComponent
} ,
{
  path : 'getPet',
  component : GetPetComponent
  },
  {
  path : 'addPet',
  component : AddPetComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EditPetComponent,
    GetPetComponent,
    AddPetComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoute) ,ReactiveFormsModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
