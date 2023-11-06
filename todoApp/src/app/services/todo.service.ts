import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
apiUrl= 'https://api.limantech.com/todo/todo';
  constructor(private http:HttpClient) { }

  addTodo (obj:any) {
    return this.http.post ( this.apiUrl, obj)
  }
  getAllTodos () {
    return this.http.get ( this.apiUrl);
  }

  updateTodo (obj:any) {
    return this.http.put ( this.apiUrl, obj)
  }

removeTodo (id:any) {
    return this.http.put ( this.apiUrl, id)
  }
  }

