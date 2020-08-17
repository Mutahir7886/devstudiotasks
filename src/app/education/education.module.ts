import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeducationComponent } from './listeducation/listeducation.component';
import { CreateEducationcompComponent } from './create-educationcomp/create-educationcomp.component';
import {EducationRoutingModule} from "./education-routing.module";
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [ListeducationComponent, CreateEducationcompComponent, HomeComponent],
  imports: [
    CommonModule,
    EducationRoutingModule
  ]
})
export class EducationModule { }
