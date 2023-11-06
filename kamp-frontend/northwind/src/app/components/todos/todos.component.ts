import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {
  todos;
  constructor(private todoService: TodoService, private activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.addTodo () 

this.activatedRoute.params.subscribe (params =>{
    if(params["id"]) {
      this.getTodoById(params["id"]);
    }
    else {
      this.getTodos();
    }
  })
  }

  getTodos() {
    this.todoService.getTodos().subscribe (response=> {
    this.todos = response;
     })
  }

  getTodoById (id: number) {
    this.todoService.getTodoById(id).subscribe (response=> {
    this.todos = [response];
    })
  }

  addTodo () {
    this.todoService.addTodo(todo1).subscribe (res=>{
      //this.todos ['id'] = res['id'];
      this.todos.splice(1, 1, todo1);
    })
  }
}