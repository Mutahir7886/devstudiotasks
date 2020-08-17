import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeducationComponent} from "./listeducation/listeducation.component";
import {CreateEducationcompComponent} from "./create-educationcomp/create-educationcomp.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '',   redirectTo: '/home', pathMatch: 'full'},
  {path: 'listeducation', component:ListeducationComponent  },
  {path: 'createducation', component:CreateEducationcompComponent  },
  {path: 'home', component:HomeComponent  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
