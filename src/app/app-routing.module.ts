import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from "./app.component";
import {ListadmissisionComponent} from "./admissions/listadmissision/listadmissision.component";
import {CreateadmissionComponent} from "./admissions/createadmission/createadmission.component";
import {AdmissionsModule} from "./admissions/admissions.module";

const routes: Routes = [

  {path: '',redirectTo: '/', pathMatch: 'full'},
  {path: 'education', loadChildren: './education/education.module#EducationModule'},
  {path: 'admissions', loadChildren: './admissions/admissions.module#AdmissionsModule'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
