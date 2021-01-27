import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [NgModelComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [NgModelComponent]
})
export class NgModelModule { }
