import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadmissisionComponent } from './listadmissision/listadmissision.component';
import { CreateadmissionComponent } from './createadmission/createadmission.component';
import {AdmissionsRoutingModule} from "./admissions-routing.module";
import { Home2Component } from './home2/home2.component';



@NgModule({
  declarations: [ListadmissisionComponent, CreateadmissionComponent, Home2Component],
  imports: [
    CommonModule,
    AdmissionsRoutingModule
  ]
})
export class AdmissionsModule { }
