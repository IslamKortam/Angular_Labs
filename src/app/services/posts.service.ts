import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './../shared Classes and types/IPost';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }
  
  _url: string = 'https://jsonplaceholder.typicode.com/posts';

  getPosts(){
    return this.httpClient.get<IPost[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=> err.message || "Server Error");
    }))
  }
}
