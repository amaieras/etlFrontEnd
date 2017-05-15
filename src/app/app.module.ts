import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";

import { AppComponent } from './app.component';
import {NodeTypeComponent} from './node-type/node-type.component';
import {HomepageComponent} from './homepage/homepage.component';

import {NodetypeService} from './node-type/nodetype.service';

import {appRoutes} from './app.routes';

import {AccordionModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';

import 'hammerjs'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@NgModule({
  declarations: [
    AppComponent,
    NodeTypeComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AccordionModule,
    FileUploadModule,
    FlexLayoutModule,
    GrowlModule,

    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NodetypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
