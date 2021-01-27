import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) {
  }
  async getAllFilteredUsers(id: number, name : string) : Promise<{id:number, name : string}[]> {
     const response = this.http.get<{id:number, name : string}[]>('https://jsonplaceholder.typicode.com/users').toPromise();
     const res = this.filter(await response, id, name)
     return res
  }
  filter(users : {id:number, name : string}[], id, name) :  {id : number, name : string}[] {
    return users.filter(value => value.id === id && value.name.toLowerCase() ===  name.toLowerCase())
  }
}
