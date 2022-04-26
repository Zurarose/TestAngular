import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConverterComponent} from './Converter/converter/converter.component';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {LoaderComponent} from "../Utils/Loader/loader/loader.component";
import {DecimalFilterDirective} from "../Directive/decimal-filter.directive";

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    LoaderComponent,
    DecimalFilterDirective

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
