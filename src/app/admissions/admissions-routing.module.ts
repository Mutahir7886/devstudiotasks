import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListadmissisionComponent} from "./listadmissision/listadmissision.component";
import {CreateadmissionComponent} from "./createadmission/createadmission.component";
import {Home2Component} from "./home2/home2.component";

const routes: Routes = [
  {path: '',   redirectTo: '/home2', pathMatch: 'full'},
  {path: 'listadmissions', component: ListadmissisionComponent },
  {path: 'createadmissions', component:CreateadmissionComponent },
  {path: 'home2', component: Home2Component }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionsRoutingModule { }
