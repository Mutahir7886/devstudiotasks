import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApidataComponent} from "./component/apidata/apidata.component";
import {PostsComponent} from "./component/posts/posts.component";
import {CombinedComponent} from "./component/combined/combined.component";

const routes: Routes = [
  {path: 'covid', component: ApidataComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'combined', component: CombinedComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
