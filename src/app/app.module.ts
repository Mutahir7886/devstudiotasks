import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatTableModule} from '@angular/material/table';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ApidataComponent} from './component/apidata/apidata.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {freeApiService} from './services/apiservice'
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from "ngx-toastr";
import {HttpService} from "./services/http.service";
import { PostsComponent } from './component/posts/posts.component';
import { CombinedComponent } from './component/combined/combined.component';

@NgModule({
  declarations: [
    AppComponent,
    ApidataComponent,
    PostsComponent,
    CombinedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule, ToastrModule.forRoot({
      timeOut: 5000, positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [freeApiService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
