import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})

export class CategoryComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  todos;
  currentCategory: any;

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe (response=> {
    this.todos = response;
    })
  }

  setCurrentCategory(todo) {
    this.currentCategory = todo;
  }

  getCurrentCategoryClass (todo) {
    if (todo==this.currentCategory) {
      return "list-group-item active"
    } 
    else {
      return "list-group-item"
    }
  }

  getAllCategoryClass() {
    if (!this.currentCategory) {
      return "list-group-item active"
    } 
    else {
      return "list-group-item"
    }
  }
}
