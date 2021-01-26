import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {
  data : Partial<{id : number, name : string}> = {}

  constructor() { }

  ngOnInit(): void {
  }
  showInputData(ngForm: NgForm, id : NgModel, name: NgModel):void {
    console.log(id, name, ngForm);
  }
}