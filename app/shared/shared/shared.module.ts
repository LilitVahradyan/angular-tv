import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelevisionComponent } from './television/television.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[TelevisionComponent],
  declarations: [TelevisionComponent]
})
export class SharedModule { }
