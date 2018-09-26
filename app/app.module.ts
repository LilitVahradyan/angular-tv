import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import {CoreModule} from './core/core/core.module';
import {SharedModule} from './shared/shared/shared.module';
import { BoldDirective } from './bold.directive';



@NgModule({
  declarations: [
    AppComponent,
    BoldDirective,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
