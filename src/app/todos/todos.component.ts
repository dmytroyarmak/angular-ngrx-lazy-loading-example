import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ADD, TOGGLE_COMPLETION, REMOVE, TodosState } from './todos.reducer';
import { TodosAppState } from './todos.module';

@Component({
  selector: 'dy-todos',
  template: `
    <md-card>
      <form (submit)="addTodo()" fxLayout="row">
        <md-input-container fxFlex="1 0 auto">
          <input mdInput placeholder="What are you going to do?" name="newTodoTitle" [(ngModel)]="newTodoTitle" />
        </md-input-container>
        <button md-mini-fab><md-icon>add</md-icon></button>
      </form>
      <md-list>
        <md-list-item *ngFor="let todo of todos$ | async">
          <span md-line [style.text-decoration]="todo.completed ? 'line-through' : 'none'">
            {{ todo.title }}
          </span>
          <button md-icon-button type="button" (click)="toggleCompletion(todo)">
            <md-icon>{{ todo.completed ? 'turned_in' : 'turned_in_not' }}</md-icon>
          </button>
          <button md-icon-button type="button" (click)="remove(todo)"><md-icon>delete</md-icon></button>
        </md-list-item>
      </md-list>
    </md-card>
  `
})
export class TodosComponent implements OnInit {
  todos$: Observable<TodosState>;
  newTodoTitle = '';

  constructor(
    private store: Store<TodosAppState>
  ) { }

  ngOnInit() {
    this.todos$ = this.store.select(state => state.todos);
  }

  addTodo() {
    this.store.dispatch({
      type: ADD,
      payload: {
        title: this.newTodoTitle,
        completed: false
      }
    });
    this.newTodoTitle = '';
  }

  toggleCompletion(todo) {
    this.store.dispatch({
      type: TOGGLE_COMPLETION,
      payload: todo
    })
  }

  remove(todo) {
    this.store.dispatch({
      type: REMOVE,
      payload: todo
    })
  }
}
