import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { ADD, TOGGLE_COMPLETION, REMOVE, TodosState } from './todos.reducer';

@Component({
  selector: 'dy-todos',
  template: `
    <form (submit)="addTodo()">
      <input name="newTodoTitle" [(ngModel)]="newTodoTitle" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li *ngFor="let todo of todos$ | async">
        <span [class.completed]="todo.completed">
          {{ todo.title }}
        </span>
        <button class="icon-button" type="button" (click)="toggleCompletion(todo)">✅</button>
        <button class="icon-button" type="button" (click)="remove(todo)">🚮</button>
      </li>
    </ul>
  `,
  styles: [`
    .completed {
      text-decoration: line-through;
    }

    .icon-button {
      -webkit-appearance: none;
      border: 0;
      background: none;
      padding: 0;
    }
  `]
})
export class TodosComponent implements OnInit {
  todos$: Observable<TodosState>;
  newTodoTitle = '';

  constructor(
    private store: Store<{todos: TodosState}>
  ) { }

  ngOnInit() {
    this.todos$ = this.store.select('todos');
  }

  addTodo() {
    if (this.newTodoTitle) {
      this.store.dispatch({
        type: ADD,
        payload: {
          title: this.newTodoTitle,
          completed: false
        }
      });
      this.newTodoTitle = '';
    }
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
