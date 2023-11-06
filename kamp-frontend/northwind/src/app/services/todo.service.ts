import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService  {
  apiUrl = "https://jsonplaceholder.typicode.com/posts"
  constructor(private httpClient:HttpClient) { }

  getTodos ():Observable <Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiUrl)
      }

  getTodoById (id: number):Observable <Todo[]> {
    let newUrl = this.apiUrl + "/" +id
        return this.httpClient.get<Todo[]>(newUrl)
      }
      
  addTodo (todo):Observable <any> {
    return this.httpClient.post(this.apiUrl, JSON.stringify(todo))
  }
}
