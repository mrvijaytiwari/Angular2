import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {CustomHttpService} from "./rest.service";
import {InputComponent} from "./listSources/input.component";
import {ListComponent} from "./listSources/list.component";
import {LoadingComponent} from "./loading.component";


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent
    /*ListComponent,InputComponent*/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxDatatableModule
  ],
  providers: [CustomHttpService],
  bootstrap: [AppComponent /*InputComponent*/]
})
export class AppModule { }
