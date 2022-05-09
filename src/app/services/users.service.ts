import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { IUser } from './../shared Classes and types/IUser';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {  }
  _url: string = 'https://jsonplaceholder.typicode.com/users';
  getUsers(){
    return this.httpClient.get<IUser[]>(this._url).pipe(catchError( (err) =>{
      return throwError(() => err.message || "Server Error")
    }))
  }
}
