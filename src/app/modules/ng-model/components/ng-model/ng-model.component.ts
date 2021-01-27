import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {
  data : Partial<{id : number, name : string}> = {}

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }
  async showInputData(ngForm: NgForm, id : NgModel, name: NgModel): Promise<void> {
    console.log(ngForm.value);
    const result = await this.userService.getAllFilteredUsers(id.value, name.value).then();
    console.log(result);
  }
}